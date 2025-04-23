'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminSidebar from "@/components/dashboard/AdminSidebar";

export default function AdminDashboard() {
    const pendingVerifications = [
        { id: 1, type: 'KYC', user: 'Rajesh Patel', role: 'Farmer', submittedAt: '2 days ago', action: 'Verify' },
        { id: 2, type: 'Lab Report', crop: 'Organic Wheat', farmer: 'Suresh Kumar', submittedAt: '1 day ago', action: 'Review' },
        { id: 3, type: 'KYC', user: 'Amit Singh', role: 'Buyer', submittedAt: '5 hours ago', action: 'Verify' }
    ];

    const recentCropListings = [
        { id: 1, crop: 'Organic Wheat', farmer: 'Rajesh P.', quantity: '50 kg', price: '₹2,500', location: 'Indore, MP', status: 'Active' },
        { id: 2, crop: 'Basmati Rice', farmer: 'Suresh K.', quantity: '200 kg', price: '₹15,000', location: 'Karnal, HR', status: 'Active' },
        { id: 3, crop: 'Red Onions', farmer: 'Mohan T.', quantity: '500 kg', price: '₹12,500', location: 'Nashik, MH', status: 'Under Review' },
    ];

    return (
        <DashboardLayout sidebar={<AdminSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Users</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">245</span>
                        <span className="ml-2 text-sm font-medium text-green-600">+12%</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Since last month</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Verified Farmers</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">128</span>
                        <span className="ml-2 text-sm font-medium text-green-600">+8%</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Since last month</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Bids Today</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">32</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">+5 from yesterday</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="text-sm font-medium text-gray-500">Total Sales</div>
                    <div className="mt-2 flex items-center">
                        <span className="text-3xl font-bold text-[#386641]">₹1.2L</span>
                        <span className="ml-2 text-sm font-medium text-green-600">+15%</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Since last month</div>
                </div>
            </div>

            {/* Analytics Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
                <h2 className="font-semibold text-lg text-gray-900 mb-4">Platform Activity</h2>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Analytics Chart Placeholder</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pending Verifications */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="font-semibold text-lg text-gray-900">Pending Verifications</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pendingVerifications.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.type === 'KYC' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                                                }`}>
                                                {item.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {item.user || item.farmer}
                                            {item.role && <span className="ml-1 text-xs text-gray-500">({item.role})</span>}
                                            {item.crop && <span className="block text-xs text-gray-500">{item.crop}</span>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.submittedAt}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="bg-[#386641] text-white px-3 py-1 rounded hover:bg-[#294D25] transition-colors">
                                                {item.action}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Crop Listing Audit */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="font-semibold text-lg text-gray-900">Recent Crop Listings</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentCropListings.map((listing) => (
                                    <tr key={listing.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {listing.crop}
                                            <span className="block text-xs text-gray-500">{listing.quantity}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {listing.farmer}
                                            <span className="block text-xs text-gray-500">{listing.location}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{listing.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${listing.status === 'Active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {listing.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#386641] font-medium">
                                            <a href="#" className="hover:text-[#294D25]">View Details</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
