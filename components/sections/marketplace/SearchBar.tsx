'use client'

import { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by crop name, location, or farmer..."
                            className="w-full py-3 pl-12 pr-4 bg-white text-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="flex-shrink-0 py-3 px-6 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg shadow-lg transition-all">
                    Search
                </button>
            </div>
            <div className="mt-3 flex flex-wrap justify-center text-sm gap-3">
                <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all">Organic</button>
                <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all">Wheat</button>
                <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all">Rice</button>
                <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all">Fresh Fruits</button>
            </div>
        </div>
    )
}

export default SearchBar
