import React from 'react'
import { Container } from '@/components/ui/container'

const Stats = () => {
    const buyerCategories = [
        {
            type: "Wholesalers",
            description: "Buy crops in bulk for distribution",
            percentage: "38%",
            volume: "₹48 Cr+",
            color: "#F2C94C",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            )
        },
        {
            type: "Retailers",
            description: "Kirana stores & local markets",
            percentage: "26%",
            volume: "₹33 Cr+",
            color: "#A7C957",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            type: "Food Processors",
            description: "Manufacturers of food products",
            percentage: "21%",
            volume: "₹27 Cr+",
            color: "#6A994E",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            type: "HORECA",
            description: "Hotels, restaurants & catering",
            percentage: "15%",
            volume: "₹19 Cr+",
            color: "#386641",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3 text-[#294D25]">Meet Your Buyers</h2>
                    <p className="text-[#6A994E] max-w-2xl mx-auto">
                        Our platform connects you directly with diverse buyers across industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {buyerCategories.map((item, index) => (
                        <div key={index} className="bg-[#F7F9F3] p-6 rounded-xl shadow-sm border border-[#A7C957]/20">
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                                    style={{ backgroundColor: `${item.color}30` }}
                                >
                                    <div className="text-lg" style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#386641] mb-2">{item.type}</h3>
                                <p className="text-sm text-[#4B5563] mb-4">{item.description}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-[#6A994E] mb-1">Platform Share</p>
                                        <p className="text-lg font-medium text-[#4B5563]">{item.percentage}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#6A994E] mb-1">Trade Volume</p>
                                        <p className="text-lg font-bold text-[#386641]">{item.volume}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#386641] text-white p-8 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">₹127 Cr+</div>
                        <p>Total value of crops traded</p>
                    </div>
                    <div className="bg-[#6A994E] text-white p-8 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">10,000+</div>
                        <p>Farmers on our platform</p>
                    </div>
                    <div className="bg-[#A7C957] text-[#294D25] p-8 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">1,200+</div>
                        <p>Active buyers nationwide</p>
                    </div>
                </div>

                <div className="mt-12 bg-[#F7F9F3] p-6 rounded-xl shadow-sm border border-[#A7C957]/20">
                    <h3 className="text-2xl font-bold text-center mb-6 text-[#294D25]">Price Advantage by Buyer Type</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-[#A7C957]/30">
                                    <th className="p-3 text-[#386641]">Buyer Type</th>
                                    <th className="p-3 text-[#386641]">Traditional Price</th>
                                    <th className="p-3 text-[#386641]">Platform Price</th>
                                    <th className="p-3 text-[#386641]">Farmer&apos;s Advantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[#A7C957]/20">
                                    <td className="p-3 font-medium">Wholesalers</td>
                                    <td className="p-3">₹100/kg</td>
                                    <td className="p-3 font-bold text-[#386641]">₹135/kg</td>
                                    <td className="p-3"><span className="text-[#6A994E] font-bold">+35%</span></td>
                                </tr>
                                <tr className="border-b border-[#A7C957]/20">
                                    <td className="p-3 font-medium">Retailers</td>
                                    <td className="p-3">₹100/kg</td>
                                    <td className="p-3 font-bold text-[#386641]">₹128/kg</td>
                                    <td className="p-3"><span className="text-[#6A994E] font-bold">+28%</span></td>
                                </tr>
                                <tr className="border-b border-[#A7C957]/20">
                                    <td className="p-3 font-medium">Food Processors</td>
                                    <td className="p-3">₹100/kg</td>
                                    <td className="p-3 font-bold text-[#386641]">₹142/kg</td>
                                    <td className="p-3"><span className="text-[#6A994E] font-bold">+42%</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">HORECA</td>
                                    <td className="p-3">₹100/kg</td>
                                    <td className="p-3 font-bold text-[#386641]">₹145/kg</td>
                                    <td className="p-3"><span className="text-[#6A994E] font-bold">+45%</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Stats
