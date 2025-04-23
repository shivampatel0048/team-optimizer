'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BuyerSidebar from "@/components/dashboard/BuyerSidebar";
import { useState } from "react";
import { Filter, Search } from "lucide-react";

export default function BidHistoryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const bidHistory = [
        {
            id: 1,
            crop: 'Organic Wheat',
            quantity: '50 kg',
            askingPrice: '₹2,500',
            bidPrice: '₹2,400',
            farmer: 'Rajesh Patel',
            farmerLocation: 'Indore, MP',
            date: '15 May, 2025',
            status: 'Pending',
            actions: ['View Details']
        },
        {
            id: 2,
            crop: 'Basmati Rice',
            quantity: '200 kg',
            askingPrice: '₹15,000',
            bidPrice: '₹14,500',
            farmer: 'Suresh Kumar',
            farmerLocation: 'Karnal, HR',
            date: '12 May, 2025',
            status: 'Pending',
            actions: ['View Details']
        },
        {
            id: 3,
            crop: 'Red Onions',
            quantity: '500 kg',
            askingPrice: '₹12,500',
            bidPrice: '₹12,000',
            farmer: 'Mohan Tiwari',
            farmerLocation: 'Nashik, MH',
            date: '10 May, 2025',
            status: 'Accepted',
            actions: ['View Details', 'Download Invoice']
        },
        {
            id: 4,
            crop: 'Alphonso Mangoes',
            quantity: '100 kg',
            askingPrice: '₹9,000',
            bidPrice: '₹8,800',
            farmer: 'Praveen Rao',
            farmerLocation: 'Ratnagiri, MH',
            date: '5 May, 2025',
            status: 'Accepted',
            actions: ['View Details', 'Download Invoice']
        },
        {
            id: 5,
            crop: 'Premium Potatoes',
            quantity: '300 kg',
            askingPrice: '₹6,000',
            bidPrice: '₹5,200',
            farmer: 'Harish Singh',
            farmerLocation: 'Agra, UP',
            date: '2 May, 2025',
            status: 'Rejected',
            actions: ['View Details']
        },
        {
            id: 6,
            crop: 'Fresh Green Peas',
            quantity: '150 kg',
            askingPrice: '₹7,500',
            bidPrice: '₹7,200',
            farmer: 'Vikas Thakur',
            farmerLocation: 'Shimla, HP',
            date: '25 Apr, 2025',
            status: 'Completed',
            actions: ['View Details', 'Download Invoice', 'Rate Farmer']
        },
        {
            id: 7,
            crop: 'Organic Tomatoes',
            quantity: '100 kg',
            askingPrice: '₹3,500',
            bidPrice: '₹3,200',
            farmer: 'Sanjay Joshi',
            farmerLocation: 'Nashik, MH',
            date: '20 Apr, 2025',
            status: 'Completed',
            actions: ['View Details', 'Download Invoice']
        },
    ];

    // Filter bids based on status and search term
    const filteredBids = bidHistory.filter(bid => {
        let statusMatch = true;
        if (filterStatus !== 'all') {
            statusMatch = bid.status.toLowerCase() === filterStatus.toLowerCase();
        }

        let searchMatch = true;
        if (searchTerm) {
            searchMatch = bid.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bid.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bid.farmerLocation.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return statusMatch && searchMatch;
    });

    // Sort by date (newest first)
    const sortedBids = [...filteredBids].sort((a, b) => {
        const dateA = new Date(a.date.split(', ')[0] + ', 2025');
        const dateB = new Date(b.date.split(', ')[0] + ', 2025');
        return dateB.getTime() - dateA.getTime();
    });

    // Get statistics
    const totalBids = bidHistory.length;
    const acceptedBids = bidHistory.filter(bid => bid.status === 'Accepted' || bid.status === 'Completed').length;
    const pendingBids = bidHistory.filter(bid => bid.status === 'Pending').length;
    const rejectedBids = bidHistory.filter(bid => bid.status === 'Rejected').length;

    return (
        <DashboardLayout sidebar={<BuyerSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Bid History</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{totalBids}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Accepted/Completed</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{acceptedBids}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Pending</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{pendingBids}</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Rejected</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">{rejectedBids}</span>
                    </div>
                </div>
            </div>

            {/* Filter & Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                placeholder="Search by crop, farmer name, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Filter className="w-4 h-4 text-gray-400" />
                            </div>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="accepted">Accepted</option>
                                <option value="rejected">Rejected</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bid History Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asking Price</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Bid</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedBids.length > 0 ? (
                                sortedBids.map((bid) => (
                                    <tr key={bid.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bid.crop}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bid.quantity}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {bid.farmer}
                                            <span className="block text-xs">{bid.farmerLocation}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bid.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bid.askingPrice}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bid.bidPrice}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-medium rounded-full ${bid.status === 'Accepted'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : bid.status === 'Rejected'
                                                        ? 'bg-red-100 text-red-800'
                                                        : bid.status === 'Pending'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-green-100 text-green-800'
                                                }`}>
                                                {bid.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#386641]">
                                            <div className="flex space-x-2">
                                                {bid.actions.map((action, index) => (
                                                    <button key={index} className="hover:text-[#294D25]">
                                                        {action}
                                                    </button>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="px-6 py-10 text-center text-gray-500">
                                        No bids matching your filter criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
