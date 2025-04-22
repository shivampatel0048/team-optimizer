import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#294D25] to-[#386641] text-white overflow-hidden">
            {/* Background pattern - wheat/grain pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grain-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M10,1 Q15,5 10,10 Q5,15 10,19 M0,10 Q5,5 10,10 Q15,15 20,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grain-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text content */}
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-[#F2C94C] bg-opacity-30 rounded-full mb-2">
                            <span className="text-sm font-medium text-[#386641]">Direct Farm-to-Market Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Empowering Farmers, Connecting Markets
                        </h1>
                        <p className="text-lg md:text-xl text-[#DDE7C7] max-w-xl">
                            Get fair prices, complete transparency, and sell directly with no middlemen. Your harvest, your price.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/list-crop"
                                className="px-8 py-3 bg-[#F2C94C] hover:bg-[#F2BB3B] text-[#386641] font-medium rounded-lg transition-all duration-200 text-center shadow-lg">
                                List Your Crop
                            </Link>
                            <Link href="/browse"
                                className="px-8 py-3 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg transition-all duration-200 text-center">
                                Browse Crops
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-2">
                                {["https://github.com/shadcn.png", "https://github.com/shadcn.png", "https://github.com/shadcn.png"].map((src, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-[#A7C957] border-2 border-[#386641] overflow-hidden">
                                        <Image
                                            src={src}
                                            alt={`Farmer ${i + 1}`}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-[#DDE7C7]">Joined by 10,000+ farmers across India</p>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative h-72 md:h-96 lg:h-[500px]">
                        <div className="absolute inset-0 bg-[#A7C957] bg-opacity-20 rounded-2xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/hero.jpg"
                                    alt="Farmers selling crops directly to buyers"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/90 rounded-xl p-3 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="text-[#386641] bg-[#A7C957]/20 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#386641] font-bold">+38% Higher</p>
                                        <p className="text-xs text-[#6A994E]">than mandi prices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        fill="#FFFFFF"
                        fillOpacity="1"
                        d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero