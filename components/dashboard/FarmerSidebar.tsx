import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function FarmerSidebar() {
    const pathname = usePathname();

    const links = [
        { name: 'Dashboard', href: '/farmer', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'My Crop Listings', href: '/farmer/listings', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { name: 'Bids Received', href: '/farmer/bids', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { name: 'My Buyers', href: '/farmer/buyers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
        { name: 'Add New Crop', href: '/farmer/add-crop', icon: 'M12 4v16m8-8H4' },
        { name: 'Profile & KYC', href: '/farmer/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    ];

    return (
        <div className="flex flex-col flex-grow">
            <div className="px-4 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#386641]">FarmMarket</h2>
                <div className="mt-1 text-sm text-[#6A994E]">Farmer Portal</div>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
                {links.map((link) => {
                    // Updated active state logic to correctly handle nested routes
                    const isActive = pathname === link.href ||
                        (pathname.startsWith(`${link.href}/`) && link.href !== '/farmer') ||
                        (link.href === '/farmer' && pathname === '/farmer');

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                isActive
                                    ? "bg-[#386641] text-white"
                                    : "text-gray-700 hover:bg-[#A7C957]/20 hover:text-[#386641]"
                            )}
                        >
                            <svg
                                className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "text-[#6A994E]")}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                            </svg>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 mt-auto">
                <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    );
}
