'use client'

import { Suspense, useState } from 'react'
import { Container } from '@/components/ui/container'
import MarketplaceHero from '@/components/sections/marketplace/MarketplaceHero'
import ProductGrid from '@/components/sections/marketplace/ProductGrid'
import FilterSidebar from '@/components/sections/marketplace/FilterSidebar'
import FilterDrawer from '@/components/sections/marketplace/FilterDrawer'
import { Filter } from 'lucide-react'

interface FilterState {
    categories: string[];
    locations: string[];
    priceRange: {
        min: number | null;
        max: number | null;
    };
    certifications: string[];
}

const MarketplacePage = () => {
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        locations: [],
        priceRange: { min: null, max: null },
        certifications: []
    });

    return (
        <>
            <MarketplaceHero />

            <div className="bg-[#F7F9F3] py-16">
                <Container>
                    {/* Mobile filter button */}
                    <div className="flex justify-end mb-4 lg:hidden">
                        <button
                            onClick={() => setIsFilterSheetOpen(true)}
                            className="flex items-center px-4 py-2 bg-[#386641] text-white rounded-lg"
                        >
                            <Filter size={16} className="mr-2" />
                            Filters
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/4 hidden lg:block">
                            <FilterSidebar filters={filters} setFilters={setFilters} />
                        </div>
                        <div className="w-full lg:w-3/4">
                            <Suspense fallback={<span>Loading...</span>}>
                                <ProductGrid />
                            </Suspense>
                        </div>
                    </div>
                </Container>
            </div>

            <FilterDrawer
                isOpen={isFilterSheetOpen}
                onClose={() => setIsFilterSheetOpen(false)}
                filters={filters}
                setFilters={setFilters}
            />
        </>
    )
}

export default MarketplacePage