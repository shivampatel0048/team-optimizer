'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";
import { Phone, MessageSquare, Star, MapPin, Info } from 'lucide-react';
import { useState } from "react";

export default function MyBuyersPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const buyers = [
        {
            id: 1,
            name: 'Green Foods Ltd.',
            type: 'Food Processor',
            image: '/images/hero.jpg',
            avatar: 'GF',
            location: 'Delhi, NCR',
            rating: 4.8,
            totalDeals: 5,
            favoriteProducts: ['Wheat', 'Rice', 'Pulses'],
            contactPerson: 'Amit Sharma',
            phone: '+91 9876543210',
            email: 'info@greenfoods.com',
            lastDealDate: '12 Apr, 2025',
            verified: true
        },
        {
            id: 2,
            name: 'Organic Stores',
            type: 'Retailer',
            image: '/images/hero.jpg',
            avatar: 'OS',
            location: 'Mumbai, MH',
            rating: 4.5,
            totalDeals: 3,
            favoriteProducts: ['Organic Vegetables', 'Fruits'],
            contactPerson: 'Priya Patel',
            phone: '+91 8765432109',
            email: 'contact@organicstores.com',
            lastDealDate: '28 Mar, 2025',
            verified: true
        },
        {
            id: 3,
            name: 'Farm Fresh',
            type: 'Wholesaler',
            image: '/images/hero.jpg',
            avatar: 'FF',
            location: 'Chandigarh, PB',
            rating: 5.0,
            totalDeals: 8,
            favoriteProducts: ['Premium Rice', 'Wheat', 'Seasonal Fruits'],
            contactPerson: 'Gurpreet Singh',
            phone: '+91 7654321098',
            email: 'orders@farmfresh.in',
            lastDealDate: '02 May, 2025',
            verified: true
        },
        {
            id: 4,
            name: 'Royal Foods',
            type: 'Food Processor',
            image: '/images/hero.jpg',
            avatar: 'RF',
            location: 'Chennai, TN',
            rating: 4.9,
            totalDeals: 7,
            favoriteProducts: ['Premium Rice', 'Spices'],
            contactPerson: 'Karthik Raman',
            phone: '+91 6543210987',
            email: 'procurement@royalfoods.com',
            lastDealDate: '15 May, 2025',
            verified: true
        },
        {
            id: 5,
            name: 'Spice Junction',
            type: 'Food Processor',
            image: '/images/hero.jpg',
            avatar: 'SJ',
            location: 'Bangalore, KA',
            rating: 4.2,
            totalDeals: 1,
            favoriteProducts: ['Spices', 'Rice'],
            contactPerson: 'Aishwarya R',
            phone: '+91 9876543210',
            email: 'purchase@spicejunction.com',
            lastDealDate: '10 Apr, 2025',
            verified: false
        },
    ];

    const filteredBuyers = buyers.filter(buyer =>
        buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const frequentBuyers = buyers.filter(b => b.totalDeals >= 5);

    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <div className="flex justify-between items-center flex-wrap mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My Buyers</h1>
                <div className="mt-2 md:mt-0">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent"
                            placeholder="Search buyers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Buyers</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{buyers.length}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Frequent Buyers</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{frequentBuyers.length}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Verified Buyers</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{buyers.filter(b => b.verified).length}</span>
                    </div>
                </div>
            </div>

            {/* Favorite/Frequent Buyers */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequent Buyers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {frequentBuyers.map(buyer => (
                    <div key={buyer.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="relative h-32 w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#386641]/90 to-[#386641]/70"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-white text-[#386641] flex items-center justify-center font-semibold mr-3">
                                        {buyer.avatar}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{buyer.name}</h3>
                                        <p className="text-sm opacity-80">{buyer.type}</p>
                                    </div>
                                </div>
                            </div>
                            {buyer.verified && (
                                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1">
                                    <svg className="w-5 h-5 text-[#386641]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                <div className="flex items-center">
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(buyer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="ml-1 text-sm font-medium text-gray-700">{buyer.rating}</span>
                                <span className="mx-2 text-gray-300">|</span>
                                <span className="text-sm text-gray-600">{buyer.totalDeals} deals</span>
                            </div>

                            <div className="flex items-start mb-3">
                                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-1" />
                                <span className="text-sm text-gray-600">{buyer.location}</span>
                            </div>

                            <p className="text-xs text-gray-500 mb-1">Buys:</p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {buyer.favoriteProducts.map((product, i) => (
                                    <span key={i} className="text-xs bg-[#F7F9F3] text-[#386641] px-2 py-1 rounded">
                                        {product}
                                    </span>
                                ))}
                            </div>

                            <div className="text-xs text-gray-500">
                                Last deal on {buyer.lastDealDate}
                            </div>
                        </div>
                        <div className="border-t border-gray-100 p-4 flex justify-between">
                            <a href={`tel:${buyer.phone}`} className="flex-1 inline-flex justify-center items-center py-2 bg-[#F7F9F3] hover:bg-[#A7C957]/20 text-[#386641] rounded mr-2 text-sm font-medium">
                                <Phone className="h-4 w-4 mr-1" /> Call
                            </a>
                            <a href={`mailto:${buyer.email}`} className="flex-1 inline-flex justify-center items-center py-2 bg-[#386641] hover:bg-[#294D25] text-white rounded text-sm font-medium">
                                <MessageSquare className="h-4 w-4 mr-1" /> Message
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Buyers */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">All Buyers</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deals</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Deal</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredBuyers.map(buyer => (
                                <tr key={buyer.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-[#A7C957] text-white flex items-center justify-center rounded-full flex-shrink-0">
                                                {buyer.avatar}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900 flex items-center">
                                                    {buyer.name}
                                                    {buyer.verified && (
                                                        <svg className="w-4 h-4 ml-1 text-[#386641]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="text-xs text-gray-500">{buyer.contactPerson}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{buyer.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{buyer.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400" />
                                            <span className="ml-1 text-sm text-gray-700">{buyer.rating}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{buyer.totalDeals}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{buyer.lastDealDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex space-x-2">
                                            <button className="text-[#386641] hover:text-[#294D25]">
                                                <Phone className="h-4 w-4" />
                                            </button>
                                            <button className="text-[#386641] hover:text-[#294D25]">
                                                <MessageSquare className="h-4 w-4" />
                                            </button>
                                            <button className="text-[#386641] hover:text-[#294D25]">
                                                <Info className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}