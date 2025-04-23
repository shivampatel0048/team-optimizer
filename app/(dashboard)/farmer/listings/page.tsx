'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";
import { useState } from "react";
import { Pencil, Trash2, Check, X, ExternalLink } from 'lucide-react';
import Link from "next/link";

export default function CropListingsPage() {
    const [activeTab, setActiveTab] = useState('active');

    const activeListings = [
        {
            id: 1,
            name: 'Organic Wheat',
            image: '/images/hero.jpg',
            quantity: '50 kg',
            price: '₹2,500',
            datePosted: '2 weeks ago',
            bids: 4,
            quality: 'Grade A',
            location: 'Indore, MP',
        },
        {
            id: 2,
            name: 'Basmati Rice',
            image: '/images/hero.jpg',
            quantity: '200 kg',
            price: '₹15,000',
            datePosted: '1 week ago',
            bids: 7,
            quality: 'Premium',
            location: 'Karnal, HR',
        },
    ];

    const soldListings = [
        {
            id: 3,
            name: 'Organic Tomatoes',
            image: '/images/hero.jpg',
            quantity: '100 kg',
            price: '₹3,000',
            soldTo: 'Fresh Farms Ltd.',
            soldDate: '3 days ago',
            quality: 'Grade A',
            location: 'Shimla, HP',
        },
        {
            id: 4,
            name: 'Alphonso Mangoes',
            image: '/images/hero.jpg',
            quantity: '80 kg',
            price: '₹8,000',
            soldTo: 'Fruit Express',
            soldDate: '1 week ago',
            quality: 'Premium',
            location: 'Ratnagiri, MH',
        },
    ];

    const draftListings = [
        {
            id: 5,
            name: 'Green Peas',
            image: '/images/hero.jpg',
            quantity: '30 kg',
            price: '₹1,200',
            lastUpdated: 'Yesterday',
            quality: 'Grade A',
            location: 'Shimla, HP',
        },
    ];

    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My Crop Listings</h1>
                <Link href="/farmer/add-crop" className="inline-flex items-center px-4 py-2 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors">
                    Add New Crop
                </Link>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Active Listings</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">2</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Sold Crops</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">2</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Drafts</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">1</span>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8" aria-label="Tabs">
                    {['active', 'sold', 'drafts'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                                    ? 'border-[#386641] text-[#386641]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} ({
                                tab === 'active' ? 2 : tab === 'sold' ? 2 : 1
                            })
                        </button>
                    ))}
                </nav>
            </div>

            {/* Active Listings Grid */}
            {activeTab === 'active' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeListings.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex">
                                <div className="relative h-32 w-32 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${listing.image})` }}></div>
                                </div>
                                <div className="p-4 flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-semibold text-[#386641]">{listing.name}</h3>
                                        <span className="text-[#A7C957] font-semibold">{listing.price}</span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        <p>Quantity: {listing.quantity}</p>
                                        <p>Quality: {listing.quality}</p>
                                        <p>Location: {listing.location}</p>
                                        <p>Posted: {listing.datePosted}</p>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <span className="flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                                            <span className="font-bold">{listing.bids}</span>&nbsp;bids received
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 p-4 flex justify-between">
                                <div className="flex space-x-2">
                                    <button className="inline-flex items-center px-3 py-1 bg-[#F7F9F3] text-[#386641] rounded hover:bg-[#A7C957]/20">
                                        <Pencil className="h-4 w-4 mr-1" /> Edit
                                    </button>
                                    <button className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100">
                                        <X className="h-4 w-4 mr-1" /> Remove
                                    </button>
                                </div>
                                <Link href={`/farmer/listings/${listing.id}`} className="inline-flex items-center px-3 py-1 bg-[#386641] text-white rounded hover:bg-[#294D25]">
                                    View Details <ExternalLink className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Sold Listings Grid */}
            {activeTab === 'sold' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {soldListings.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex">
                                <div className="relative h-32 w-32 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${listing.image})` }}></div>
                                </div>
                                <div className="p-4 flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-semibold text-[#386641]">{listing.name}</h3>
                                        <span className="text-[#A7C957] font-semibold">{listing.price}</span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        <p>Quantity: {listing.quantity}</p>
                                        <p>Quality: {listing.quality}</p>
                                        <p>Location: {listing.location}</p>
                                        <p>Sold to: {listing.soldTo}</p>
                                        <p>Sold date: {listing.soldDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 p-4 flex justify-end">
                                <Link href={`/farmer/listings/${listing.id}`} className="inline-flex items-center px-3 py-1 bg-[#386641] text-white rounded hover:bg-[#294D25]">
                                    View Details <ExternalLink className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Draft Listings Grid */}
            {activeTab === 'drafts' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {draftListings.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex">
                                <div className="relative h-32 w-32 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${listing.image})` }}></div>
                                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                        <span className="text-white text-xs font-medium px-2 py-1 bg-black bg-opacity-50 rounded">DRAFT</span>
                                    </div>
                                </div>
                                <div className="p-4 flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-semibold text-[#386641]">{listing.name}</h3>
                                        <span className="text-[#A7C957] font-semibold">{listing.price}</span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        <p>Quantity: {listing.quantity}</p>
                                        <p>Quality: {listing.quality}</p>
                                        <p>Location: {listing.location}</p>
                                        <p>Last updated: {listing.lastUpdated}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 p-4 flex justify-between">
                                <div className="flex space-x-2">
                                    <button className="inline-flex items-center px-3 py-1 bg-[#F7F9F3] text-[#386641] rounded hover:bg-[#A7C957]/20">
                                        <Pencil className="h-4 w-4 mr-1" /> Edit
                                    </button>
                                    <button className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100">
                                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                                    </button>
                                </div>
                                <button className="inline-flex items-center px-3 py-1 bg-[#386641] text-white rounded hover:bg-[#294D25]">
                                    <Check className="h-4 w-4 mr-1" /> Publish
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DashboardLayout>
    );
}