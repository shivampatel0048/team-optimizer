'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ui/ProductCard'
import { sampleProducts } from '@/data/sampleProducts'

const ProductGrid = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get pagination and sort params from URL
    const page = Number(searchParams.get('page')) || 1;
    const sort = searchParams.get('sort') ?? 'recent';
    const itemsPerPage = 6;

    // Update URL when page or sort changes
    const updateQueryParams = (updates: { page?: number; sort?: string }) => {
        const params = new URLSearchParams(searchParams);

        if (updates.page) {
            params.set('page', updates.page.toString());
        }

        if (updates.sort) {
            params.set('sort', updates.sort);
        }

        router.push(`?${params.toString()}`);
    };

    // Sort products based on selected option
    const sortedProducts = [...sampleProducts].sort((a, b) => {
        switch (sort) {
            case 'price-low':
                return a.pricePerKg - b.pricePerKg;
            case 'price-high':
                return b.pricePerKg - a.pricePerKg;
            case 'quantity':
                return b.quantityKg - a.quantityKg;
            case 'recent':
            default:
                return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        }
    });

    // Get current page products
    const indexOfLastProduct = page * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    // Add this pagination helper function
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        const delta = 1; // Number of pages to show before and after current page
        const pages: (number | string)[] = [];

        if (totalPages <= 4) {
            // If 4 or fewer pages, show all
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        // Always include first page
        pages.push(1);

        // Calculate range around current page
        const rangeStart = Math.max(2, currentPage - delta);
        const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

        // Add ellipsis before range if needed
        if (rangeStart > 2) {
            pages.push('...');
        }

        // Add range
        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }

        // Add ellipsis after range if needed
        if (rangeEnd < totalPages - 1) {
            pages.push('...');
        }

        // Always include last page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#294D25]">Available Crops ({sampleProducts.length})</h2>
                <div className="flex items-center space-x-2">
                    <label htmlFor="sort" className="text-sm text-gray-600 hidden sm:inline">Sort by:</label>
                    <select
                        id="sort"
                        value={sort}
                        onChange={(e) => updateQueryParams({ sort: e.target.value })}
                        className="text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                    >
                        <option value="recent">Most Recent</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="quantity">Quantity Available</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-1300:grid-cols-3 gap-6">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Updated Pagination */}
            <div className="mt-10 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                    <button
                        onClick={() => updateQueryParams({ page: Math.max(1, page - 1) })}
                        disabled={page === 1}
                        className={`py-2 px-4 bg-white border border-gray-300 rounded-l-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                            }`}
                    >
                        Previous
                    </button>

                    {getPageNumbers(page, totalPages).map((pageNum, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (typeof pageNum === 'number') {
                                    updateQueryParams({ page: pageNum });
                                }
                            }}
                            disabled={typeof pageNum === 'string'}
                            className={`py-2 px-4 border border-gray-300 ${typeof pageNum === 'string'
                                    ? 'cursor-default'
                                    : pageNum === page
                                        ? 'bg-[#386641] text-white border-[#386641]'
                                        : 'bg-white hover:bg-gray-50'
                                }`}
                        >
                            {pageNum}
                        </button>
                    ))}

                    <button
                        onClick={() => updateQueryParams({ page: Math.min(totalPages, page + 1) })}
                        disabled={page === totalPages}
                        className={`py-2 px-4 bg-white border border-gray-300 rounded-r-md ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                            }`}
                    >
                        Next
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default ProductGrid
