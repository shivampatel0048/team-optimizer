import React, { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface DashboardLayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
}

export default function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#F7F9F3]">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={cn(
                "fixed inset-y-0 left-0 w-64 transform transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 md:z-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col flex-grow h-full pt-5 overflow-y-auto bg-white border-r border-gray-200 shadow-sm">
                    {sidebar}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top Navigation */}
                <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
                    <button
                        type="button"
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                    <div className="text-xl font-semibold text-[#294D25]">
                        {pathname.includes('/farmer') && 'Farmer Dashboard'}
                        {pathname.includes('/buyer') && 'Buyer Dashboard'}
                        {pathname.includes('/admin') && 'Admin Dashboard'}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button className="p-1 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-[#386641] text-white flex items-center justify-center">
                            <span className="text-sm font-medium">US</span>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-4 md:p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
