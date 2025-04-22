import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'

const CallToAction = () => {
    return (
        <section className="py-16 bg-[#294D25] text-white">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Better Prices for Your Harvest?</h2>
                    <p className="text-lg mb-8 text-[#DDE7C7]">
                        Join thousands of farmers selling directly to buyers and increasing their income.
                        Our platform is free to join, with no hidden fees.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup"
                            className="px-8 py-3 bg-[#F2C94C] hover:bg-[#F2BB3B] text-[#294D25] font-medium rounded-lg transition-all duration-200">
                            Sign Up Now
                        </Link>
                        <Link href="/how-it-works"
                            className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-lg transition-all duration-200">
                            Learn More
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-[#386641]/50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">For Farmers</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    List crops for free
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Get better prices than mandis
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Secure payments
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#386641]/50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">For Buyers</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Source directly from farmers
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Quality verification system
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Logistics support
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#386641]/50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Support</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    24/7 helpline in 10 languages
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Field assistance available
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#A7C957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    Contact: support@farmmarket.in
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CallToAction