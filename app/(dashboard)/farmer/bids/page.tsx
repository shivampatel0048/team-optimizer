'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";
import { useState } from "react";
import { Check, X, Clock, MessageCircle, Phone } from 'lucide-react';

export default function BidsReceivedPage() {
    const [activeTab, setActiveTab] = useState('pending');

    const pendingBids = [
        {
            id: 1,
            crop: 'Organic Wheat',
            cropImage: '/images/hero.jpg',
            quantity: '50 kg',
            yourPrice: '₹2,500',
            buyer: 'Green Foods Ltd.',
            buyerLocation: 'Delhi, NCR',
            bidPrice: '₹2,400',
            bidDate: '2 hours ago',
            buyerRating: 4.8,
            previousDeals: 5,
            message: 'We are interested in your organic wheat. Is delivery possible to Delhi?'
        },
        {
            id: 2,
            crop: 'Organic Wheat',
            cropImage: '/images/hero.jpg',
            quantity: '50 kg',
            yourPrice: '₹2,500',
            buyer: 'Organic Stores',
            buyerLocation: 'Mumbai, MH',
            bidPrice: '₹2,350',
            bidDate: '3 hours ago',
            buyerRating: 4.5,
            previousDeals: 3,
            message: 'Can you provide certification for the organic status?'
        },
        {
            id: 3,
            crop: 'Basmati Rice',
            cropImage: '/images/hero.jpg',
            quantity: '200 kg',
            yourPrice: '₹15,000',
            buyer: 'Spice Junction',
            buyerLocation: 'Bangalore, KA',
            bidPrice: '₹14,000',
            bidDate: '1 day ago',
            buyerRating: 4.2,
            previousDeals: 1,
            message: 'Looking for long-term supply. Can offer better price for regular purchases.'
        },
    ];

    const acceptedBids = [
        {
            id: 4,
            crop: 'Basmati Rice',
            cropImage: '/images/hero.jpg',
            quantity: '200 kg',
            yourPrice: '₹15,000',
            buyer: 'Royal Foods',
            buyerLocation: 'Chennai, TN',
            bidPrice: '₹14,500',
            acceptedDate: '1 day ago',
            buyerRating: 4.9,
            previousDeals: 7,
            deliveryDate: '28 May, 2025',
            paymentStatus: 'Pending',
            contactNumber: '+91 9876543210'
        },
    ];

    const rejectedBids = [
        {
            id: 5,
            crop: 'Alphonso Mangoes',
            cropImage: '/images/hero.jpg',
            quantity: '80 kg',
            yourPrice: '₹8,000',
            buyer: 'Fresh Delights',
            buyerLocation: 'Pune, MH',
            bidPrice: '₹6,500',
            rejectedDate: '2 days ago',
            reason: 'Price too low'
        },
        {
            id: 6,
            crop: 'Organic Tomatoes',
            cropImage: '/images/hero.jpg',
            quantity: '100 kg',
            yourPrice: '₹3,000',
            buyer: 'Local Mart',
            buyerLocation: 'Indore, MP',
            bidPrice: '₹2,700',
            rejectedDate: '3 days ago',
            reason: 'Better offer received'
        },
    ];

    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Bids Received</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Pending Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{pendingBids.length}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Accepted Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{acceptedBids.length}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Rejected Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{rejectedBids.length}</span>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8" aria-label="Tabs">
                    {['pending', 'accepted', 'rejected'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                                    ? 'border-[#386641] text-[#386641]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} ({
                                tab === 'pending' ? pendingBids.length :
                                    tab === 'accepted' ? acceptedBids.length :
                                        rejectedBids.length
                            })
                        </button>
                    ))}
                </nav>
            </div>

            {/* Pending Bids */}
            {activeTab === 'pending' && (
                <div className="space-y-6">
                    {pendingBids.map((bid) => (
                        <div key={bid.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative h-40 md:h-auto md:w-48 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${bid.cropImage})` }}></div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#386641]">Bid for {bid.crop}</h3>
                                            <p className="text-sm text-gray-500">Quantity: {bid.quantity}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded flex items-center w-fit">
                                                <Clock className="h-3 w-3 mr-1" /> Pending
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-xs text-gray-500">Buyer</p>
                                            <p className="text-sm font-medium">{bid.buyer}</p>
                                            <p className="text-xs text-gray-500">{bid.buyerLocation}</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex items-center">
                                                    {Array(5).fill(0).map((_, i) => (
                                                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(bid.buyerRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                    <span className="text-xs font-medium text-gray-700 ml-1">{bid.buyerRating}</span>
                                                </div>
                                                <span className="mx-2 text-gray-300">|</span>
                                                <span className="text-xs text-gray-500">{bid.previousDeals} previous deals</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Price Comparison</p>
                                            <div className="flex items-center space-x-2">
                                                <div>
                                                    <p className="text-xs text-gray-500">Your price</p>
                                                    <p className="text-sm font-medium">{bid.yourPrice}</p>
                                                </div>
                                                <div className="text-gray-400">→</div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Bid price</p>
                                                    <p className="text-sm font-medium text-[#386641]">{bid.bidPrice}</p>
                                                </div>
                                                <div className="text-sm text-red-600">
                                                    (-{Math.round((1 - parseInt(bid.bidPrice.replace(/[^\d]/g, '')) / parseInt(bid.yourPrice.replace(/[^\d]/g, ''))) * 100)}%)
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Received {bid.bidDate}</p>
                                        </div>
                                    </div>

                                    {bid.message && (
                                        <div className="bg-gray-50 p-3 rounded-lg mt-2 flex">
                                            <MessageCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs font-medium text-gray-500">Message from buyer:</p>
                                                <p className="text-sm text-gray-700">{bid.message}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 flex justify-between">
                                <div className="flex space-x-2">
                                    <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        Counter Offer
                                    </button>
                                    <button className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-md text-sm font-medium hover:bg-red-100">
                                        <X className="h-4 w-4 mr-1" /> Reject
                                    </button>
                                </div>
                                <button className="inline-flex items-center px-4 py-2 bg-[#386641] text-white rounded-md text-sm font-medium hover:bg-[#294D25]">
                                    <Check className="h-4 w-4 mr-1" /> Accept Bid
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Accepted Bids */}
            {activeTab === 'accepted' && (
                <div className="space-y-6">
                    {acceptedBids.map((bid) => (
                        <div key={bid.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative h-40 md:h-auto md:w-48 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${bid.cropImage})` }}></div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#386641]">Bid for {bid.crop}</h3>
                                            <p className="text-sm text-gray-500">Quantity: {bid.quantity}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded flex items-center w-fit">
                                                <Check className="h-3 w-3 mr-1" /> Accepted
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-500">Buyer</p>
                                            <p className="text-sm font-medium">{bid.buyer}</p>
                                            <p className="text-xs text-gray-500">{bid.buyerLocation}</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex items-center">
                                                    {Array(5).fill(0).map((_, i) => (
                                                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(bid.buyerRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                    <span className="text-xs font-medium text-gray-700 ml-1">{bid.buyerRating}</span>
                                                </div>
                                                <span className="mx-2 text-gray-300">|</span>
                                                <span className="text-xs text-gray-500">{bid.previousDeals} previous deals</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-xs text-gray-500">Deal Amount</p>
                                                    <p className="text-sm font-medium text-[#386641]">{bid.bidPrice}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Delivery Date</p>
                                                    <p className="text-sm font-medium">{bid.deliveryDate}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Payment</p>
                                                    <p className="text-sm font-medium text-orange-600">{bid.paymentStatus}</p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Accepted {bid.acceptedDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 flex justify-between">
                                <div className="text-sm text-gray-600">
                                    Status: <span className="font-medium">Waiting for delivery arrangement</span>
                                </div>
                                <a href={`tel:${bid.contactNumber}`} className="inline-flex items-center px-4 py-2 bg-[#386641] text-white rounded-md text-sm font-medium hover:bg-[#294D25]">
                                    <Phone className="h-4 w-4 mr-1" /> Call Buyer
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Rejected Bids */}
            {activeTab === 'rejected' && (
                <div className="space-y-6">
                    {rejectedBids.map((bid) => (
                        <div key={bid.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative h-40 md:h-auto md:w-48 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#F7F9F3]"></div>
                                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${bid.cropImage})` }}></div>
                                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-700">Bid for {bid.crop}</h3>
                                            <p className="text-sm text-gray-500">Quantity: {bid.quantity}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded flex items-center w-fit">
                                                <X className="h-3 w-3 mr-1" /> Rejected
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-500">Buyer</p>
                                            <p className="text-sm font-medium">{bid.buyer}</p>
                                            <p className="text-xs text-gray-500">{bid.buyerLocation}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Price Comparison</p>
                                            <div className="flex items-center space-x-2">
                                                <div>
                                                    <p className="text-xs text-gray-500">Your price</p>
                                                    <p className="text-sm font-medium">{bid.yourPrice}</p>
                                                </div>
                                                <div className="text-gray-400">→</div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Bid price</p>
                                                    <p className="text-sm font-medium text-gray-700">{bid.bidPrice}</p>
                                                </div>
                                                <div className="text-sm text-red-600">
                                                    (-{Math.round((1 - parseInt(bid.bidPrice.replace(/[^\d]/g, '')) / parseInt(bid.yourPrice.replace(/[^\d]/g, ''))) * 100)}%)
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Rejected {bid.rejectedDate}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-xs text-gray-500">Rejection reason:</p>
                                        <p className="text-sm text-gray-700">{bid.reason}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DashboardLayout>
    );
}
