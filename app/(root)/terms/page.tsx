import React from 'react'
import { Container } from '@/components/ui/container'
import BackgroundPattern from '@/components/ui/BackgroundPattern'
import Link from 'next/link'

const TermsPage = () => {
    return (
        <>
            <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white py-20 md:py-28 overflow-hidden">
                <BackgroundPattern id="terms-pattern" />
                <Container className="relative">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex space-x-3 text-sm opacity-90">
                            <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#A7C957]">Terms of Service</span>
                        </nav>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                            <span className="text-sm font-medium">Last Updated: {new Date().toLocaleDateString()}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Fair & Transparent <br className="hidden sm:block" />
                            <span className="text-[#A7C957]">Terms of Service</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#DDE7C7] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Please read these terms carefully before using our platform. These terms govern your use of Mandi Mart.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 text-center mt-12 animate-fade-in-up delay-200">
                            {[
                                { label: 'Platform Rules', value: 'Simple' },
                                { label: 'Updated', value: 'Regular' },
                                { label: 'Support', value: '24/7' },
                            ].map((stat, i) => (
                                <div key={i} className="flex-1 min-w-[150px]">
                                    <div className="text-2xl font-bold text-[#A7C957] mb-1">{stat.value}</div>
                                    <div className="text-sm text-[#DDE7C7]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>

                {/* Bottom wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#F7F9F3]">
                        <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                    </svg>
                </div>
            </div>

            <div className="bg-[#F7F9F3] py-16">
                <Container>
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Terms Sections */}
                        {[
                            {
                                title: '1. Acceptance of Terms',
                                content: (
                                    <div className="prose prose-lg text-gray-600">
                                        <p>By accessing or using Mandi Mart, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>You must be 18 years or older to use this service</li>
                                            <li>You are responsible for maintaining your account security</li>
                                            <li>You agree to provide accurate and complete information</li>
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                title: '2. User Obligations',
                                content: (
                                    <div className="prose prose-lg text-gray-600">
                                        <p>As a user of our platform, you agree to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Comply with all applicable laws and regulations</li>
                                            <li>Maintain accurate product listings and descriptions</li>
                                            <li>Honor commitments made through our platform</li>
                                            <li>Respect other users rights and privacy</li>
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                title: '3. Transaction Rules',
                                content: (
                                    <div className="prose prose-lg text-gray-600">
                                        <p>All transactions on our platform must follow these guidelines:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Use our secure payment system for all transactions</li>
                                            <li>Accurately represent product quality and quantity</li>
                                            <li>Follow dispute resolution procedures when needed</li>
                                        </ul>
                                    </div>
                                )
                            }
                        ].map((section, i) => (
                            <section key={i} className="bg-[#F7F9F3] p-8 rounded-xl shadow-sm border border-[#A7C957]/20">
                                <h2 className="text-3xl font-bold text-[#294D25] mb-6">{section.title}</h2>
                                {section.content}
                            </section>
                        ))}

                        {/* Contact CTA */}
                        <section className="text-center bg-gradient-to-br from-[#386641] to-[#294D25] p-12 rounded-xl text-white">
                            <h2 className="text-3xl font-bold mb-4">Need Clarification?</h2>
                            <p className="text-[#DDE7C7] mb-8 max-w-2xl mx-auto">
                                Our legal team is here to help you understand our terms of service better.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="px-8 py-3 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg transition-all">
                                    Contact Support
                                </Link>
                                <Link href="/faq" className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-lg transition-all">
                                    View FAQ
                                </Link>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TermsPage