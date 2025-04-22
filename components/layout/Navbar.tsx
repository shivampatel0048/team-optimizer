'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-1">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.png"
                                alt="Mandi Mart Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-bold text-xl ${scrolled ? 'text-[#294D25]' : 'text-white'}`}>
                            Mandi Mart
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/how-it-works" className={`${scrolled ? 'text-[#386641]' : 'text-white'} hover:text-[#A7C957] transition-colors`}>
                            How It Works
                        </Link>
                        <Link href="/marketplace" className={`${scrolled ? 'text-[#386641]' : 'text-white'} hover:text-[#A7C957] transition-colors`}>
                            Marketplace
                        </Link>
                        <Link href="/pricing" className={`${scrolled ? 'text-[#386641]' : 'text-white'} hover:text-[#A7C957] transition-colors`}>
                            Pricing
                        </Link>
                        <Link href="/about" className={`${scrolled ? 'text-[#386641]' : 'text-white'} hover:text-[#A7C957] transition-colors`}>
                            About Us
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className={`${scrolled ? 'text-[#386641] hover:text-[#294D25]' : 'text-white hover:text-[#A7C957]'} transition-colors`}>
                            Log in
                        </Link>
                        <Link href="/signup" className={`px-5 py-2 rounded-lg transition-all ${scrolled
                            ? 'bg-[#386641] text-white hover:bg-[#294D25]'
                            : 'bg-white text-[#294D25] hover:bg-[#F2C94C]'
                            }`}>
                            Sign up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${scrolled ? 'text-[#386641]' : 'text-white'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 border border-gray-100">
                        <div className="flex flex-col space-y-4">
                            <Link href="/how-it-works" className="text-[#386641] hover:text-[#A7C957] transition-colors px-2 py-1">
                                How It Works
                            </Link>
                            <Link href="/marketplace" className="text-[#386641] hover:text-[#A7C957] transition-colors px-2 py-1">
                                Marketplace
                            </Link>
                            <Link href="/pricing" className="text-[#386641] hover:text-[#A7C957] transition-colors px-2 py-1">
                                Pricing
                            </Link>
                            <Link href="/about" className="text-[#386641] hover:text-[#A7C957] transition-colors px-2 py-1">
                                About Us
                            </Link>
                            <div className="border-t border-gray-200 pt-2 flex flex-col space-y-2">
                                <Link href="/login" className="text-[#386641] hover:text-[#A7C957] transition-colors px-2 py-1">
                                    Log in
                                </Link>
                                <Link href="/signup" className="bg-[#386641] text-white hover:bg-[#294D25] px-4 py-2 rounded-lg transition-all text-center">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
