'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BuyerSidebar from "@/components/dashboard/BuyerSidebar";

export default function BuyerDashboard() {
    const activeListings = [
        { id: 1, crop: 'Organic Wheat', farmer: 'Rajesh P.', quantity: '50 kg', price: '₹2,500', location: 'Indore, MP' },
        { id: 2, crop: 'Basmati Rice', farmer: 'Suresh K.', quantity: '200 kg', price: '₹15,000', location: 'Karnal, HR' },
        { id: 3, crop: 'Red Onions', farmer: 'Mohan T.', quantity: '500 kg', price: '₹12,500', location: 'Nashik, MH' },
        { id: 4, crop: 'Organic Tomatoes', farmer: 'Vikas S.', quantity: '100 kg', price: '₹3,000', location: 'Shimla, HP' },
    ];

    const myBids = [
        { id: 1, crop: 'Organic Wheat', farmer: 'Rajesh P.', yourPrice: '₹2,400', status: 'Pending', date: '2 hours ago' },
        { id: 2, crop: 'Basmati Rice', farmer: 'Suresh K.', yourPrice: '₹14,500', status: 'Selected', date: '1 day ago' },
        { id: 3, crop: 'Alphonso Mangoes', farmer: 'Praveen R.', yourPrice: '₹8,000', status: 'Rejected', date: '3 days ago' },
    ];

    return (
        <DashboardLayout sidebar={<BuyerSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome, Amit!</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Active Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">2</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Selected Bids</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">1</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Purchases</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">₹25,500</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Available Listings</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">42</span>
                    </div>
                </div>
            </div>

            {/* Active Listings */}
            <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-gray-100">
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
                    <h2 className="font-semibold text-lg text-gray-900">Active Crop Listings</h2>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Search crops..."
                            className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#386641] focus:border-[#386641]"
                        />
                        <select className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#386641] focus:border-[#386641]">
                            <option value="">All Crops</option>
                            <option value="grains">Grains</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {activeListings.map((listing) => (
                                <tr key={listing.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.crop}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{listing.farmer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{listing.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{listing.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{listing.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="bg-[#386641] text-white px-3 py-1 rounded hover:bg-[#294D25] transition-colors">
                                            Place Bid
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                    <button className="text-[#386641] hover:text-[#294D25] text-sm font-medium">
                        View All Listings →
                    </button>
                </div>
            </div>

            {/* My Bids */}
            <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-gray-100">
                <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="font-semibold text-lg text-gray-900">My Bids</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {myBids.map((bid) => (
                                <tr key={bid.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bid.crop}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bid.farmer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bid.yourPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bid.status === 'Selected'
                                                ? 'bg-green-100 text-green-800'
                                                : bid.status === 'Rejected'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {bid.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{bid.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#386641] font-medium">
                                        <a href="#" className="hover:text-[#294D25]">View</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex justify-center">
                <button className="bg-[#386641] hover:bg-[#294D25] text-white font-medium py-3 px-6 rounded-lg shadow-sm transition-colors">
                    Place New Bid
                </button>
            </div>
        </DashboardLayout>
    );
}
