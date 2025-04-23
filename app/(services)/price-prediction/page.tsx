"use client";

import { Container } from '@/components/ui/container';
import BackgroundPattern from '@/components/ui/BackgroundPattern';
import Link from 'next/link';
import React, { useState } from "react";
import { Loader2, Search, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';
import { toast } from 'sonner';
import { getCropsByCommodity } from '@/apis/checkPrice';
import type { CropPrice } from '@/apis/checkPrice';

const PricePredictionPage = () => {
    const [commodity, setCommodity] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [priceData, setPriceData] = useState<CropPrice[]>([]);

    // Market statistics data
    const marketStats = [
        { label: 'Markets Covered', value: '2,500+', description: 'Active Markets' },
        { label: 'Price Updates', value: '24x7', description: 'Real-time Updates' },
        { label: 'Commodities', value: '100+', description: 'Agricultural Products' },
        { label: 'States', value: '28', description: 'Pan India Coverage' },
    ];

    const trendingPrices = [
        { commodity: 'Rice', trend: '+2.5%', price: '₹3,200/q' },
        { commodity: 'Wheat', trend: '+1.8%', price: '₹2,800/q' },
        { commodity: 'Cotton', trend: '-0.5%', price: '₹6,500/q' },
    ];

    const handleSubmit = async () => {
        if (!commodity.trim()) {
            toast.error('Please enter a commodity name');
            return;
        }

        setIsLoading(true);
        try {
            const data = await getCropsByCommodity(commodity);
            setPriceData(data);
            setShowResult(true);
            toast.success('Price data fetched successfully!');
        } catch (error: any) {
            console.error("Error fetching price data:", error);
            toast.error(error.message || 'Failed to fetch price data');
        } finally {
            setIsLoading(false);
        }
    };

    // Calculate average, min, max prices
    const calculatePriceStats = () => {
        if (!priceData.length) return null;

        const modalPrices = priceData.map(item => item["Modal Price"]);
        const avg = modalPrices.reduce((a, b) => a + b, 0) / modalPrices.length;
        const min = Math.min(...modalPrices);
        const max = Math.max(...modalPrices);

        return { avg, min, max };
    };

    const priceStats = calculatePriceStats();

    return (
        <>
            <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white overflow-hidden">
                <BackgroundPattern id="price-prediction-pattern" />

                <Container className="relative py-20 md:py-28">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex space-x-3 text-sm opacity-90">
                            <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#A7C957]">Price Prediction</span>
                        </nav>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                            <span className="text-sm font-medium">Live Market Prices</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Real-time <br className="hidden sm:block" />
                            <span className="text-[#A7C957]">Market Intelligence</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#DDE7C7] mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Make informed decisions with live agricultural commodity prices, market trends, and regional price variations.
                        </p>

                        {/* Market Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up delay-200">
                            {marketStats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-bold text-[#A7C957]">{stat.value}</div>
                                    <div className="text-sm text-[#DDE7C7] font-medium">{stat.label}</div>
                                    <div className="text-xs text-[#DDE7C7]/80 mt-1">{stat.description}</div>
                                </div>
                            ))}
                        </div>

                        {/* Trending Prices */}
                        <div className="animate-fade-in-up delay-300">
                            <h3 className="text-sm font-medium text-[#DDE7C7] mb-4">Today&apos;s Trending Prices</h3>
                            <div className="inline-flex flex-wrap justify-center gap-4">
                                {trendingPrices.map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3">
                                        <span className="text-sm font-medium">{item.commodity}</span>
                                        <span className={`text-xs ${item.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                                            }`}>
                                            {item.trend}
                                        </span>
                                        <span className="text-sm text-[#A7C957]">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Common Commodities */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
                            {['Rice', 'Wheat', 'Cotton', 'Potato', 'Tomato'].map((crop) => (
                                <button
                                    key={crop}
                                    onClick={() => {
                                        setCommodity(crop);
                                        handleSubmit();
                                    }}
                                    className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm hover:bg-white/20 transition-colors"
                                >
                                    {crop}
                                </button>
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
                                <h2 className="text-2xl font-bold text-[#294D25] mb-6">Check Crop Prices</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Enter Commodity Name*
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={commodity}
                                                onChange={(e) => setCommodity(e.target.value)}
                                                placeholder="e.g. Rice, Wheat, Cotton"
                                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent transition-all"
                                            />
                                            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="w-full py-4 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Fetching Prices...
                                            </>
                                        ) : (
                                            <>
                                                Check Prices
                                                <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
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
                                    <h2 className="text-3xl font-bold text-[#386641] capitalize">
                                        {commodity} Prices
                                    </h2>

                                    {priceStats && (
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-[#F7F9F3] p-4 rounded-xl border border-[#A7C957]/20">
                                                <p className="text-sm text-gray-500">Average Price</p>
                                                <p className="text-xl font-bold text-[#386641]">₹{priceStats.avg.toFixed(2)}</p>
                                            </div>
                                            <div className="bg-[#F7F9F3] p-4 rounded-xl border border-[#A7C957]/20">
                                                <p className="text-sm text-gray-500">Lowest</p>
                                                <p className="text-xl font-bold text-red-500 flex items-center">
                                                    <ArrowDown className="w-4 h-4 mr-1" />
                                                    ₹{priceStats.min}
                                                </p>
                                            </div>
                                            <div className="bg-[#F7F9F3] p-4 rounded-xl border border-[#A7C957]/20">
                                                <p className="text-sm text-gray-500">Highest</p>
                                                <p className="text-xl font-bold text-green-500 flex items-center">
                                                    <ArrowUp className="w-4 h-4 mr-1" />
                                                    ₹{priceStats.max}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="overflow-hidden overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Market</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {priceData.slice(0, 5).map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="px-4 py-3 text-sm text-gray-900">{item.Market}</td>
                                                        <td className="px-4 py-3 text-sm text-gray-900">₹{item["Modal Price"]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-[#F7F9F3] rounded-xl p-6 border border-[#A7C957]/20">
                                        <h3 className="text-lg font-semibold text-[#294D25] mb-4">Price Distribution</h3>
                                        <div className="space-y-4">
                                            {priceData.slice(0, 3).map((item, index) => (
                                                <div key={index} className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">
                                                        {item.State}
                                                        <span className="text-gray-400 ml-1">
                                                            ({item.District})
                                                        </span>
                                                    </span>
                                                    <span className="font-medium">₹{item["Modal Price"]}/kg</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <button
                                    onClick={() => setShowResult(false)}
                                    className="text-[#386641] hover:text-[#294D25] font-medium"
                                >
                                    ← Check another commodity
                                </button>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default PricePredictionPage;