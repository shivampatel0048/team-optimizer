'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BuyerSidebar from "@/components/dashboard/BuyerSidebar";
import { useState } from "react";
import { Check, Clock, Upload, Shield,  Edit,  Building2, Briefcase } from 'lucide-react';

export default function BuyerProfilePage() {
    const [activeTab, setActiveTab] = useState('profile');

    const buyerProfile = {
        name: 'Green Foods Ltd.',
        type: 'Food Processor',
        phone: '+91 9876543210',
        email: 'info@greenfoods.com',
        address: 'Industrial Area Phase II, Delhi, NCR - 110020',
        memberSince: 'January 2025',
        profileCompletion: 90,
        kycStatus: 'Verified',
        companyDetails: {
            companyName: 'Green Foods Limited',
            registrationType: 'Private Limited',
            gstNumber: 'GSTIN29ABCDE1234F1Z5',
            turnover: '₹50-100 Cr',
            employeeCount: '100-500',
            procurementTypes: ['Organic Grains', 'Pulses', 'Oil Seeds'],
            operatingStates: ['Delhi NCR', 'Uttar Pradesh', 'Punjab'],
        },
        bankDetails: {
            accountName: 'Green Foods Limited',
            accountNumber: 'XXXX XXXX 5678',
            bankName: 'HDFC Bank',
            ifscCode: 'HDFC0002345',
            upiId: 'greenfoods@hdfcbank'
        },
        documents: [
            { name: 'Company Registration', status: 'Verified', date: '15 Jan, 2025', type: 'identity' },
            { name: 'GST Certificate', status: 'Verified', date: '15 Jan, 2025', type: 'identity' },
            { name: 'FSSAI License', status: 'Verified', date: '16 Jan, 2025', type: 'business' },
            { name: 'Bank Statement', status: 'Verified', date: '17 Jan, 2025', type: 'bank' },
            { name: 'Import Export Code', status: 'Pending', date: '20 Jan, 2025', type: 'business' },
        ]
    };

    return (
        <DashboardLayout sidebar={<BuyerSidebar />}>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Profile & KYC</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your company profile and verification documents</p>
            </div>

            {/* Profile Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="h-20 w-20 bg-[#A7C957] rounded-xl text-white flex items-center justify-center text-2xl font-semibold">
                        {buyerProfile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-900">{buyerProfile.name}</h2>
                        <p className="text-[#386641] font-medium">{buyerProfile.type}</p>
                        <p className="text-sm text-gray-500">Procurement Partner</p>

                        <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="flex items-center justify-center md:justify-start text-sm">
                                <span className="text-gray-500 mr-1">Member since:</span>
                                <span className="font-medium">{buyerProfile.memberSince}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-1 text-sm">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${buyerProfile.kycStatus === 'Verified'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    <Shield className="w-3 h-3 mr-1" />
                                    KYC {buyerProfile.kycStatus}
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
                        <span>{buyerProfile.profileCompletion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#386641] h-2.5 rounded-full" style={{ width: `${buyerProfile.profileCompletion}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                    {['profile', 'company-details', 'bank-details', 'documents'].map((tab) => (
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

            {/* Tab Content */}
            {activeTab === 'profile' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                        <button className="text-sm text-[#386641] hover:text-[#294D25] flex items-center">
                            <Edit className="h-4 w-4 mr-1" /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500">Company Name</p>
                            <p className="font-medium">{buyerProfile.companyDetails.companyName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-medium">{buyerProfile.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="font-medium">{buyerProfile.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">{buyerProfile.address}</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'company-details' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                        <button className="text-sm text-[#386641] hover:text-[#294D25] flex items-center">
                            <Edit className="h-4 w-4 mr-1" /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-500">Registration Type</p>
                            <p className="font-medium">{buyerProfile.companyDetails.registrationType}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">GST Number</p>
                            <p className="font-medium">{buyerProfile.companyDetails.gstNumber}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Annual Turnover</p>
                            <p className="font-medium">{buyerProfile.companyDetails.turnover}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Employee Count</p>
                            <p className="font-medium">{buyerProfile.companyDetails.employeeCount}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                            <Building2 className="h-5 w-5 mr-2 text-[#6A994E]" />
                            Operating States
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {buyerProfile.companyDetails.operatingStates.map((state, index) => (
                                <span key={index} className="bg-[#F7F9F3] text-[#386641] px-3 py-1.5 rounded-lg text-sm">
                                    {state}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                            <Briefcase className="h-5 w-5 mr-2 text-[#6A994E]" />
                            Procurement Categories
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {buyerProfile.companyDetails.procurementTypes.map((type, index) => (
                                <span key={index} className="bg-[#F7F9F3] text-[#386641] px-3 py-1.5 rounded-lg text-sm">
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
                            <p className="text-sm text-gray-500">Account Name</p>
                            <p className="font-medium">{buyerProfile.bankDetails.accountName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Account Number</p>
                            <p className="font-medium">{buyerProfile.bankDetails.accountNumber}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Bank Name</p>
                            <p className="font-medium">{buyerProfile.bankDetails.bankName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">IFSC Code</p>
                            <p className="font-medium">{buyerProfile.bankDetails.ifscCode}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">UPI ID</p>
                            <p className="font-medium">{buyerProfile.bankDetails.upiId}</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-[#F7F9F3] rounded-lg">
                        <div className="flex items-start">
                            <Shield className="h-5 w-5 text-[#386641] mt-0.5" />
                            <div className="ml-3">
                                <h4 className="text-sm font-medium text-[#386641]">Secure Payment Information</h4>
                                <p className="mt-1 text-xs text-gray-700">
                                    Your bank details are securely stored and only used for processing payments to farmers. We never share this information with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                                    {buyerProfile.documents.map((doc, i) => (
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
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${buyerProfile.documents.some(d => d.type === 'identity' && d.status === 'Verified')
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}>
                                    {buyerProfile.documents.some(d => d.type === 'identity' && d.status === 'Verified')
                                        ? <Check className="h-3 w-3" />
                                        : <span className="text-xs">1</span>
                                    }
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Company Identity</p>
                                    <p className="text-xs text-gray-500">Registration Certificate, GST Certificate</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${buyerProfile.documents.some(d => d.type === 'business' && d.status === 'Verified')
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}>
                                    {buyerProfile.documents.some(d => d.type === 'business' && d.status === 'Verified')
                                        ? <Check className="h-3 w-3" />
                                        : <span className="text-xs">2</span>
                                    }
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Business Licenses</p>
                                    <p className="text-xs text-gray-500">FSSAI License, Import Export Code (if applicable)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${buyerProfile.documents.some(d => d.type === 'bank' && d.status === 'Verified')
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}>
                                    {buyerProfile.documents.some(d => d.type === 'bank' && d.status === 'Verified')
                                        ? <Check className="h-3 w-3" />
                                        : <span className="text-xs">3</span>
                                    }
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Bank Account Proof</p>
                                    <p className="text-xs text-gray-500">Bank Statement or Cancelled Cheque</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-[#386641] mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900">Verification Status</h3>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg mb-6 border border-green-100">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <Check className="h-5 w-5 text-green-600" />
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-sm font-medium text-green-800">Your company verification is complete</h4>
                                    <p className="mt-1 text-sm text-green-700">You now have full access to all features including direct procurement, bidding, and payments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600">
                            <p>For any questions about verification or to update your documents, contact our support team at <a href="mailto:support@farmmarket.in" className="text-[#386641] font-medium">support@farmmarket.in</a></p>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
