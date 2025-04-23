"use client";

import { Container } from '@/components/ui/container';
import BackgroundPattern from '@/components/ui/BackgroundPattern';
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Loader2, MapPin, Droplets, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const API_KEY = "5b8127c1afd14aec9cae659e379caa46";

const CropRecommendationPage = () => {
    const [location, setLocation] = useState<{
        latitude: string;
        longitude: string;
    } | null>(null);
    const [place, setPlace] = useState<{
        city?: string;
        state?: string;
        country?: string;
    } | null>(null);
    const [land, setLand] = useState("");
    const [rainfed, setRainfed] = useState("Yes");
    const [showResult, setShowResult] = useState(false);
    const [cropData, setCropData] = useState<{
        crop: string;
        season: string;
        image_url: string;
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let watchId: number;

        if ("geolocation" in navigator) {
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const coords = {
                        latitude: position.coords.latitude.toFixed(6),
                        longitude: position.coords.longitude.toFixed(6),
                    };
                    setLocation(coords);

                    fetch(
                        `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${API_KEY}`
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            const components = data.results[0]?.components;
                            setPlace({
                                city: components.city || components.town || components.village,
                                state: components.state,
                                country: components.country,
                            });
                        });
                },
                () => {
                    alert("Please allow location access to continue");
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                }
            );
        }

        return () => {
            if (watchId) navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    const handleSubmit = async () => {
        if (!land.trim() || !location) {
            toast.error('Please enter land area and allow location access');
            return;
        }

        setIsLoading(true);
        const url = `https://developerpixel.pythonanywhere.com/predict?field_size=${land}&lat=${location.latitude}&lon=${location.longitude}&rainfed=${rainfed}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to get prediction');

            setCropData({
                crop: data.crop_name,
                season: data.season,
                image_url: data.image_url,
            });
            setShowResult(true);
            toast.success('Prediction generated successfully!');
        } catch (error) {
            console.error("Error fetching crop data:", error);
            toast.error('Failed to get crop prediction. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white overflow-hidden">
                <BackgroundPattern id="crop-prediction-pattern" />

                <Container className="relative py-20 md:py-28">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex space-x-3 text-sm opacity-90">
                            <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#A7C957]">Crop Prediction</span>
                        </nav>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                            <span className="text-sm font-medium">AI-Powered Recommendations</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Smart Crop <br className="hidden sm:block" />
                            <span className="text-[#A7C957]">Recommendations</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#DDE7C7] mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Get personalized crop suggestions based on your location, land details, and environmental conditions using our advanced AI prediction model.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 animate-fade-in-up delay-200">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold text-[#A7C957]">95%</div>
                                <div className="text-sm text-[#DDE7C7]">Accuracy Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold text-[#A7C957]">50K+</div>
                                <div className="text-sm text-[#DDE7C7]">Predictions Made</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold text-[#A7C957]">200+</div>
                                <div className="text-sm text-[#DDE7C7]">Crop Varieties</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold text-[#A7C957]">15+</div>
                                <div className="text-sm text-[#DDE7C7]">States Covered</div>
                            </div>
                        </div>

                        {/* Most Common Predictions */}
                        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-300">
                            <div className="text-sm text-[#DDE7C7] mr-2">Most predicted crops:</div>
                            {['Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Maize'].map((crop) => (
                                <span
                                    key={crop}
                                    className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default"
                                >
                                    {crop}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>

                {/* Wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#F7F9F3]">
                        <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                    </svg>
                </div>
            </div>

            <div className="bg-[#F7F9F3] py-16 min-h-[60vh]">
                <Container>
                    {!showResult ? (
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-[#294D25] mb-6">Enter Your Land Details</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Land Area (in acres)*</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 5"
                                            value={land}
                                            onChange={(e) => setLand(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Irrigation Type*</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {["Yes", "No"].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setRainfed(option)}
                                                    className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all ${rainfed === option
                                                        ? 'border-[#386641] bg-[#F7F9F3] text-[#386641]'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <Droplets className={`w-4 h-4 mr-2 ${rainfed === option ? 'text-[#386641]' : 'text-gray-400'}`} />
                                                    <span>Rainfed: {option}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {location && (
                                        <div className="flex items-center text-sm text-gray-600 bg-[#F7F9F3] p-3 rounded-lg">
                                            <MapPin className="h-4 w-4 text-[#386641] mr-2" />
                                            <span>
                                                <strong>Location:</strong> {location.latitude}, {location.longitude}
                                            </span>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="w-full py-4 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Getting Prediction...
                                            </>
                                        ) : (
                                            <>
                                                Get Recommendation
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-[#386641]">
                                        Recommended Crop
                                    </h2>

                                    <div className="bg-[#F7F9F3] rounded-xl p-6 border border-[#A7C957]/20">
                                        <h3 className="text-2xl font-bold text-[#294D25] mb-2">
                                            {cropData?.crop || "Loading..."}
                                        </h3>
                                        <p className="text-[#386641]">Best suited for your land</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500">Location</p>
                                            <p className="font-medium">{place?.city || "Loading..."}, {place?.state}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500">Land Area</p>
                                            <p className="font-medium">{land} acres</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500">Season</p>
                                            <p className="font-medium">{cropData?.season || "Loading..."}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500">Irrigation</p>
                                            <p className="font-medium">Rainfed: {rainfed}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    {cropData?.image_url ? (
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square w-full max-w-sm">
                                            <Image
                                                src={cropData.image_url}
                                                alt={`${cropData.crop} Crop`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    ) : (
                                        <div className="animate-pulse bg-gray-200 rounded-2xl w-full max-w-sm aspect-square" />
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <button
                                    onClick={() => setShowResult(false)}
                                    className="text-[#386641] hover:text-[#294D25] font-medium"
                                >
                                    ← Try another prediction
                                </button>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default CropRecommendationPage;