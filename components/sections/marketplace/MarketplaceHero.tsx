import { Container } from '@/components/ui/container'
import Link from 'next/link'
import BackgroundPattern from '@/components/ui/BackgroundPattern'
import SearchBar from './SearchBar'

const MarketplaceHero = () => {
    return (
        <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white py-20 md:py-28 overflow-hidden">
            <BackgroundPattern id="marketplace-pattern" />

            <Container className="relative">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <nav className="flex space-x-3 text-sm opacity-90">
                        <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-[#A7C957]">Marketplace</span>
                    </nav>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                        <span className="text-sm font-medium">Connecting Farmers & Buyers</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                        Explore Fresh Crops <br className="hidden sm:block" />
                        <span className="text-[#A7C957]">Directly from Farmers</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#DDE7C7] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                        Search and buy directly from nearby farms or sellers.
                        Transparent pricing, verified listings, quality produce.
                    </p>

                    <div className="mt-8 animate-fade-in-up delay-100">
                        <SearchBar />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-center mt-12 animate-fade-in-up delay-200">
                        {[
                            { label: 'Active Listings', value: '2,500+' },
                            { label: 'Verified Farmers', value: '750+' },
                            { label: 'States Covered', value: '15' },
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
    )
}

export default MarketplaceHero
