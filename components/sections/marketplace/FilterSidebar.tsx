'use client'

interface FilterSidebarProps {
    filters: {
        categories: string[];
        locations: string[];
        priceRange: { min: number | null, max: number | null };
        certifications: string[];
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        categories: string[];
        locations: string[];
        priceRange: { min: number | null, max: number | null };
        certifications: string[];
    }>>;
}

const FilterSidebar = ({ filters, setFilters }: FilterSidebarProps) => {
    const toggleCategory = (category: string) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const toggleCertification = (certification: string) => {
        setFilters(prev => ({
            ...prev,
            certifications: prev.certifications.includes(certification)
                ? prev.certifications.filter(c => c !== certification)
                : [...prev.certifications, certification]
        }));
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilters(prev => ({
            ...prev,
            locations: value ? [value] : []
        }));
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numValue = value ? Number(value) : null;
        setFilters(prev => ({
            ...prev,
            priceRange: {
                ...prev.priceRange,
                [type]: numValue
            }
        }));
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-[#294D25] mb-6">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">CATEGORY</h3>
                <div className="space-y-2">
                    {['Grains', 'Vegetables', 'Fruits', 'Pulses', 'Oil Seeds'].map((category, i) => (
                        <div key={i} className="flex items-center">
                            <input
                                id={`category-${i}`}
                                type="checkbox"
                                checked={filters.categories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="w-4 h-4 text-[#386641] rounded bg-gray-100 border-gray-300 focus:ring-[#A7C957]"
                            />
                            <label htmlFor={`category-${i}`} className="ml-2 text-sm text-gray-700">
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">LOCATION</h3>
                <select
                    value={filters.locations[0] || ''}
                    onChange={handleLocationChange}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                >
                    <option value="">All Locations</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="punjab">Punjab</option>
                    <option value="haryana">Haryana</option>
                    <option value="maharashtra">Maharashtra</option>
                </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">PRICE RANGE (₹)</h3>
                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        placeholder="Min"
                        value={filters.priceRange.min || ''}
                        onChange={(e) => handlePriceChange('min', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max || ''}
                        onChange={(e) => handlePriceChange('max', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                    />
                </div>
            </div>

            {/* Certification */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">CERTIFICATION</h3>
                <div className="space-y-2">
                    {['Organic Certified', 'Natural Farming', 'GI Tagged'].map((cert, i) => (
                        <div key={i} className="flex items-center">
                            <input
                                id={`cert-${i}`}
                                type="checkbox"
                                checked={filters.certifications.includes(cert)}
                                onChange={() => toggleCertification(cert)}
                                className="w-4 h-4 text-[#386641] rounded bg-gray-100 border-gray-300 focus:ring-[#A7C957]"
                            />
                            <label htmlFor={`cert-${i}`} className="ml-2 text-sm text-gray-700">
                                {cert}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => console.log('Applied filters:', filters)}
                className="w-full py-3 bg-[#386641] hover:bg-[#294D25] text-white font-medium rounded-lg transition-all"
            >
                Apply Filters
            </button>
        </div>
    )
}

export default FilterSidebar
