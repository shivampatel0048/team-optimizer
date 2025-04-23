'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";
import { useState } from "react";
import { Check, Clock, Upload, Shield, MapPin, Edit, Calendar, Tractor } from "lucide-react";

export default function ProfileKYCPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const farmerProfile = {
        name: 'Rajesh Patel',
        phone: '+91 9876543210',
        email: 'rajesh.patel@example.com',
        address: 'Village Sundarpur, District Indore, Madhya Pradesh - 452001',
        memberSince: 'January 2025',
        profileCompletion: 85,
        kycStatus: 'Verified',
        farmDetails: {
            farmName: 'Patel Organic Farm',
            farmSize: '5 acres',
            primaryCrops: ['Wheat', 'Rice', 'Vegetables'],
            farmingType: 'Organic',
            location: {
                village: 'Sundarpur',
                taluka: 'Sanwer',
                district: 'Indore',
                state: 'Madhya Pradesh'
            },
            irrigationType: 'Drip Irrigation',
            soilType: 'Black Soil (Regur)',
        },
        bankDetails: {
            accountName: 'Rajesh Patel',
            accountNumber: 'XXXX XXXX 1234',
            bankName: 'State Bank of India',
            ifscCode: 'SBIN0002345',
            upiId: 'rajeshpatel@sbi'
        },
        documents: [
            { name: 'Aadhaar Card', status: 'Verified', date: '15 Jan, 2025', type: 'identity' },
            { name: 'PAN Card', status: 'Verified', date: '15 Jan, 2025', type: 'identity' },
            { name: 'Land Record (Khasra/Khatauni)', status: 'Verified', date: '16 Jan, 2025', type: 'farm' },
            { name: 'Bank Statement', status: 'Verified', date: '17 Jan, 2025', type: 'bank' },
            { name: 'Organic Certification', status: 'Pending', date: '20 Jan, 2025', type: 'certification' },
        ]
    };

    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Profile & KYC</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your profile information and KYC verification documents</p>
            </div>

            {/* Profile Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="h-20 w-20 bg-[#A7C957] rounded-xl text-white flex items-center justify-center text-2xl font-semibold">
                        {farmerProfile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-900">{farmerProfile.name}</h2>
                        <p className="text-[#386641] font-medium">{farmerProfile.farmDetails.farmName}</p>
                        <p className="text-sm text-gray-500">{farmerProfile.farmDetails.farmingType} Farmer</p>

                        <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="flex items-center justify-center md:justify-start text-sm">
                                <span className="text-gray-500 mr-1">Member since:</span>
                                <span className="font-medium">{farmerProfile.memberSince}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-1 text-sm">
                                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    <Shield className="w-3 h-3 mr-1" />
                                    KYC {farmerProfile.kycStatus}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:text-right">
                        <div className="inline-flex items-center px-4 py-2 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors text-sm cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" /> Edit Profile
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="text-sm text-gray-500 mb-1 flex items-center justify-between">
                        <span>Profile completion</span>
                        <span>{farmerProfile.profileCompletion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#386641] h-2.5 rounded-full" style={{ width: `${farmerProfile.profileCompletion}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8" aria-label="Tabs">
                    {['profile', 'farm-details', 'bank-details', 'documents'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                                ? 'border-[#386641] text-[#386641]'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Personal Information */}
            {activeTab === 'profile' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                        <button className="text-sm text-[#386641] hover:text-[#294D25] flex items-center">
                            <Edit className="h-4 w-4 mr-1" /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{farmerProfile.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-medium">{farmerProfile.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="font-medium">{farmerProfile.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">{farmerProfile.address}</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-[#6A994E]" />
                            Recent Activity
                        </h3>

                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0 h-3 w-3 rounded-full bg-green-400 mt-1.5 mr-3"></div>
                                <div>
                                    <p className="text-sm text-gray-900">You completed your KYC verification</p>
                                    <p className="text-xs text-gray-500">17 Jan, 2025 - 10:30 AM</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 h-3 w-3 rounded-full bg-blue-400 mt-1.5 mr-3"></div>
                                <div>
                                    <p className="text-sm text-gray-900">Profile information updated</p>
                                    <p className="text-xs text-gray-500">15 Jan, 2025 - 03:45 PM</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 h-3 w-3 rounded-full bg-purple-400 mt-1.5 mr-3"></div>
                                <div>
                                    <p className="text-sm text-gray-900">Account created</p>
                                    <p className="text-xs text-gray-500">12 Jan, 2025 - 09:15 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Farm Details */}
            {activeTab === 'farm-details' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Farm Details</h3>
                        <button className="text-sm text-[#386641] hover:text-[#294D25] flex items-center">
                            <Edit className="h-4 w-4 mr-1" /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="text-sm text-gray-500">Farm Name</p>
                            <p className="font-medium">{farmerProfile.farmDetails.farmName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Farm Size</p>
                            <p className="font-medium">{farmerProfile.farmDetails.farmSize}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Farming Type</p>
                            <p className="font-medium">{farmerProfile.farmDetails.farmingType}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Soil Type</p>
                            <p className="font-medium">{farmerProfile.farmDetails.soilType}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Irrigation Type</p>
                            <p className="font-medium">{farmerProfile.farmDetails.irrigationType}</p>
                        </div>
                    </div>

                    <div className="mb-6 pt-6 border-t border-gray-100">
                        <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                            <MapPin className="h-5 w-5 mr-2 text-[#6A994E]" />
                            Farm Location
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-xs text-gray-500">Village</p>
                                <p className="text-sm font-medium">{farmerProfile.farmDetails.location.village}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Taluka</p>
                                <p className="text-sm font-medium">{farmerProfile.farmDetails.location.taluka}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">District</p>
                                <p className="text-sm font-medium">{farmerProfile.farmDetails.location.district}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">State</p>
                                <p className="text-sm font-medium">{farmerProfile.farmDetails.location.state}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                        <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                            <Tractor className="h-5 w-5 mr-2 text-[#6A994E]" />
                            Primary Crops
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {farmerProfile.farmDetails.primaryCrops.map((crop, index) => (
                                <span key={index} className="bg-[#F7F9F3] text-[#386641] px-3 py-1.5 rounded-lg text-sm">
                                    {crop}
                                </span>
                            ))}
                            <button className="px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:bg-gray-50 flex items-center">
                                <span className="text-lg mr-1">+</span> Add More
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bank Details */}
            {activeTab === 'bank-details' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Bank & Payment Details</h3>
                        <button className="text-sm text-[#386641] hover:text-[#294D25] flex items-center">
                            <Edit className="h-4 w-4 mr-1" /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500">Account Holder Name</p>
                            <p className="font-medium">{farmerProfile.bankDetails.accountName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Account Number</p>
                            <p className="font-medium">{farmerProfile.bankDetails.accountNumber}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Bank Name</p>
                            <p className="font-medium">{farmerProfile.bankDetails.bankName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">IFSC Code</p>
                            <p className="font-medium">{farmerProfile.bankDetails.ifscCode}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">UPI ID</p>
                            <p className="font-medium">{farmerProfile.bankDetails.upiId}</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-[#F7F9F3] rounded-lg">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <Shield className="h-5 w-5 text-[#386641]" />
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-medium text-[#386641]">Secure Payment Information</h4>
                                <p className="mt-1 text-xs text-gray-700">
                                    Your bank details are securely stored and only used for processing payments from buyers. We never share this information with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* KYC Documents */}
            {activeTab === 'documents' && (
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">KYC Documents</h3>
                            <button className="inline-flex items-center px-4 py-2 bg-[#386641] text-white rounded-lg text-sm hover:bg-[#294D25] transition-colors">
                                <Upload className="h-4 w-4 mr-2" /> Upload Document
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {farmerProfile.documents.map((doc, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                                                    {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${doc.status === 'Verified'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {doc.status === 'Verified' ? <Check className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                                                    {doc.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {doc.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-3">
                                                    <button className="text-[#386641] hover:text-[#294D25]">View</button>
                                                    <button className="text-red-600 hover:text-red-800">Replace</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${farmerProfile.documents.some(d => d.type === 'identity' && d.status === 'Verified') ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {farmerProfile.documents.some(d => d.type === 'identity' && d.status === 'Verified') ? (
                                        <Check className="h-3 w-3" />
                                    ) : (
                                        <span className="text-xs">1</span>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Identity Proof</p>
                                    <p className="text-xs text-gray-500">Aadhaar Card, PAN Card, or Voter ID</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${farmerProfile.documents.some(d => d.type === 'farm' && d.status === 'Verified') ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {farmerProfile.documents.some(d => d.type === 'farm' && d.status === 'Verified') ? (
                                        <Check className="h-3 w-3" />
                                    ) : (
                                        <span className="text-xs">2</span>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Land Ownership Proof</p>
                                    <p className="text-xs text-gray-500">Khasra/Khatauni, Land Registry Document</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${farmerProfile.documents.some(d => d.type === 'bank' && d.status === 'Verified') ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {farmerProfile.documents.some(d => d.type === 'bank' && d.status === 'Verified') ? (
                                        <Check className="h-3 w-3" />
                                    ) : (
                                        <span className="text-xs">3</span>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Bank Account Proof</p>
                                    <p className="text-xs text-gray-500">Bank Statement, Passbook Copy, Cancelled Cheque</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${farmerProfile.documents.some(d => d.type === 'certification' && d.status === 'Verified') ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {farmerProfile.documents.some(d => d.type === 'certification' && d.status === 'Verified') ? (
                                        <Check className="h-3 w-3" />
                                    ) : (
                                        <span className="text-xs">4</span>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Certification Documents (Optional)</p>
                                    <p className="text-xs text-gray-500">Organic, Natural Farming, or GI Certification</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-[#386641] mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900">KYC Status</h3>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg mb-6 border border-green-100">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <Check className="h-5 w-5 text-green-600" />
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-sm font-medium text-green-800">Your KYC verification is complete</h4>
                                    <p className="mt-1 text-sm text-green-700">You now have access to all features including crop listing, bid management, and payments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600">
                            <p>If you need to update any of your documents or have questions about the verification process, please contact our support team at <a href="mailto:support@farmmarket.in" className="text-[#386641] font-medium">support@farmmarket.in</a> or call <a href="tel:+918887776665" className="text-[#386641] font-medium">+91 888 777 6665</a>.</p>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
