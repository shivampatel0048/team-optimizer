'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";

export default function FarmerDashboard() {
    const cropListings = [
        { id: 1, name: 'Organic Wheat', quantity: '50 kg', price: '₹2,500', status: 'Active', bids: 4 },
        { id: 2, name: 'Basmati Rice', quantity: '200 kg', price: '₹15,000', status: 'Active', bids: 7 },
        { id: 3, name: 'Organic Tomatoes', quantity: '100 kg', price: '₹3,000', status: 'Sold', bids: 5 },
    ];

    const latestBids = [
        { id: 1, crop: 'Organic Wheat', buyer: 'Green Foods Ltd.', price: '₹2,400', status: 'Pending', timestamp: '2 hours ago' },
        { id: 2, crop: 'Organic Wheat', buyer: 'Organic Stores', price: '₹2,350', status: 'Pending', timestamp: '3 hours ago' },
        { id: 3, crop: 'Basmati Rice', buyer: 'Royal Foods', price: '₹14,500', status: 'Accepted', timestamp: '1 day ago' },
    ];

    const topBuyers = [
        { id: 1, name: 'Green Foods Ltd.', avatar: 'GF', bids: 12, successRate: '95%', phone: '+91 9876543210' },
        { id: 2, name: 'Organic Stores', avatar: 'OS', bids: 8, successRate: '88%', phone: '+91 8765432109' },
        { id: 3, name: 'Farm Fresh', avatar: 'FF', bids: 5, successRate: '100%', phone: '+91 7654321098' },
    ];

    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome, Rajesh!</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Active Listings</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">2</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Bids Received</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">11</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Sales</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">₹3,000</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Pending Payments</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">₹0</span>
                    </div>
                </div>
            </div>

            {/* Crop Listings Summary */}
            <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-gray-100">
                <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="font-semibold text-lg text-gray-900">My Crop Listings</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bids</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cropListings.map((crop) => (
                                <tr key={crop.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{crop.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{crop.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{crop.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${crop.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {crop.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{crop.bids}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#386641] font-medium">
                                        <a href="#" className="hover:text-[#294D25]">View</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Latest Bids */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="font-semibold text-lg text-gray-900">Latest Bids</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {latestBids.map((bid) => (
                                    <tr key={bid.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bid.crop}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bid.buyer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bid.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bid.status === 'Accepted'
                                                    ? 'bg-green-100 text-green-800'
                                                    : bid.status === 'Rejected'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {bid.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#386641] font-medium">
                                            <a href="#" className="hover:text-[#294D25]">Respond</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Buyers */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="font-semibold text-lg text-gray-900">Top Buyers</h2>
                    </div>
                    <div className="p-6">
                        <ul className="divide-y divide-gray-200">
                            {topBuyers.map((buyer) => (
                                <li key={buyer.id} className="py-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-[#A7C957] text-white flex items-center justify-center">
                                            <span className="text-sm font-medium">{buyer.avatar}</span>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{buyer.name}</p>
                                            <p className="text-xs text-gray-500">{buyer.bids} bids | {buyer.successRate} success rate</p>
                                        </div>
                                    </div>
                                    <a href={`tel:${buyer.phone}`} className="bg-[#F7F9F3] hover:bg-[#A7C957]/20 text-[#386641] px-3 py-1 rounded-lg text-sm font-medium">
                                        Call
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <button className="w-full bg-[#386641] text-white py-2 rounded-lg hover:bg-[#294D25] transition-colors">
                                Call Top 3 Buyers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
