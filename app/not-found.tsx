'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import NotFoundIllustration from '@/components/icons/NotFoundIllustration'

const NotFoundPage = () => {
    return (
        <div className="bg-gradient-to-b from-[#F7F9F3] to-white min-h-screen pt-24 pb-16 flex items-center">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4">
                            <span className="text-sm font-medium text-[#386641]">404 Error</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#294D25]">
                            Field Not Found
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            Looks like you&apos;ve wandered into an unplanted field. The crop you&apos;re looking for isn&apos;t growing here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/"
                                className="px-8 py-3 bg-[#386641] hover:bg-[#294D25] text-white font-medium rounded-lg transition-all duration-200 shadow-md">
                                Back to Home
                            </Link>
                            <Link href="/marketplace"
                                className="px-8 py-3 border border-[#A7C957] text-[#386641] hover:bg-[#A7C957]/10 font-medium rounded-lg transition-all duration-200">
                                Browse Marketplace
                            </Link>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                <Link href="/#howItWorks" className="text-[#386641] hover:text-[#A7C957] transition-colors">
                                    How It Works
                                </Link>
                                <Link href="/pricing" className="text-[#386641] hover:text-[#A7C957] transition-colors">
                                    Pricing
                                </Link>
                                <Link href="/contact" className="text-[#386641] hover:text-[#A7C957] transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="animate-float-slow">
                                <NotFoundIllustration />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white rounded-full p-5 shadow-lg animate-bounce-slow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A7C957]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Search area - optional */}
                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-md text-center">
                        <div className="text-4xl text-[#A7C957] mb-6 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="mb-4 text-[#386641] font-medium">Try finding what you need</p>
                        <div className="flex items-center border-2 border-[#A7C957] rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search crops, farmers, or markets..."
                                className="flex-grow px-4 py-3 outline-none"
                            />
                            <button className="bg-[#A7C957] text-white px-4 py-3 hover:bg-[#8FB944] transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NotFoundPage