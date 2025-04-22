import React from 'react'
import { Container } from '@/components/ui/container'

const Features = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "AI-Powered Price Predictions",
            description: "Get real-time crop price forecasts based on market trends, helping you decide when to sell for maximum profit."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            title: "Multilingual Support",
            description: "Use our platform in 10+ regional languages, making it accessible for farmers across all states."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Image-Based Crop Listing",
            description: "Simply take photos of your harvest and our AI will help categorize and grade your crops automatically."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            title: "Offline SMS Mode",
            description: "Limited internet? No problem. Access core features via SMS to stay connected with buyers and market prices."
        }
    ]

    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3 text-[#294D25]">Features Designed for Farmers</h2>
                    <p className="text-[#6A994E] max-w-2xl mx-auto">
                        Simple tools that help you sell better, know more, and earn more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#F7F9F3] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-[#A7C957]/20">
                            <div className="text-[#6A994E] mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-[#386641]">{feature.title}</h3>
                            <p className="text-[#4B5563]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Features