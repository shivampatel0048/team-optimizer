'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

interface FilterSheetProps {
    isOpen: boolean
    onClose: () => void
    filters: {
        categories: string[]
        locations: string[]
        priceRange: { min: number | null, max: number | null }
        certifications: string[]
    }
    setFilters: React.Dispatch<React.SetStateAction<{
        categories: string[]
        locations: string[]
        priceRange: { min: number | null, max: number | null }
        certifications: string[]
    }>>
}

const FilterSheet = ({ isOpen, onClose, filters, setFilters }: FilterSheetProps) => {
    const [localFilters, setLocalFilters] = useState(filters);

    const handleApplyFilters = () => {
        setFilters(localFilters);
        onClose();
    };

    const toggleCategory = (category: string) => {
        setLocalFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const toggleCertification = (certification: string) => {
        setLocalFilters(prev => ({
            ...prev,
            certifications: prev.certifications.includes(certification)
                ? prev.certifications.filter(c => c !== certification)
                : [...prev.certifications, certification]
        }));
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setLocalFilters(prev => ({
            ...prev,
            locations: value ? [value] : []
        }));
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numValue = value ? Number(value) : null;
        setLocalFilters(prev => ({
            ...prev,
            priceRange: {
                ...prev.priceRange,
                [type]: numValue
            }
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex flex-col justify-end">
            <div className="bg-white rounded-t-xl max-h-[80vh] overflow-y-auto">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                    <h3 className="font-bold text-xl">Filters</h3>
                    <button onClick={onClose} className="p-2">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {/* Category Filter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">CATEGORY</h3>
                        <div className="space-y-2">
                            {['Grains', 'Vegetables', 'Fruits', 'Pulses', 'Oil Seeds'].map((category, i) => (
                                <div key={i} className="flex items-center">
                                    <input
                                        id={`mobile-category-${i}`}
                                        type="checkbox"
                                        checked={localFilters.categories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                        className="w-4 h-4 text-[#386641] rounded bg-gray-100 border-gray-300 focus:ring-[#A7C957]"
                                    />
                                    <label htmlFor={`mobile-category-${i}`} className="ml-2 text-sm text-gray-700">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">LOCATION</h3>
                        <select
                            value={localFilters.locations[0] || ''}
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
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">PRICE RANGE (₹)</h3>
                        <div className="flex items-center space-x-4">
                            <input
                                type="number"
                                placeholder="Min"
                                value={localFilters.priceRange.min || ''}
                                onChange={(e) => handlePriceChange('min', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={localFilters.priceRange.max || ''}
                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                            />
                        </div>
                    </div>

                    {/* Certification */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">CERTIFICATION</h3>
                        <div className="space-y-2">
                            {['Organic Certified', 'Natural Farming', 'GI Tagged'].map((cert, i) => (
                                <div key={i} className="flex items-center">
                                    <input
                                        id={`mobile-cert-${i}`}
                                        type="checkbox"
                                        checked={localFilters.certifications.includes(cert)}
                                        onChange={() => toggleCertification(cert)}
                                        className="w-4 h-4 text-[#386641] rounded bg-gray-100 border-gray-300 focus:ring-[#A7C957]"
                                    />
                                    <label htmlFor={`mobile-cert-${i}`} className="ml-2 text-sm text-gray-700">
                                        {cert}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
                    <button
                        onClick={handleApplyFilters}
                        className="w-full py-3 bg-[#386641] hover:bg-[#294D25] text-white font-medium rounded-lg transition-all"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterSheet;
