'use client'

import * as React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Location options data
const locations = [
    { value: "", label: "All Locations" },
    { value: "uttar-pradesh", label: "Uttar Pradesh" },
    { value: "punjab", label: "Punjab" },
    { value: "haryana", label: "Haryana" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "tamil-nadu", label: "Tamil Nadu" },
    { value: "karnataka", label: "Karnataka" },
    { value: "west-bengal", label: "West Bengal" },
]

interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
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

const FilterDrawer = ({ isOpen, onClose, filters, setFilters }: FilterDrawerProps) => {
    const [localFilters, setLocalFilters] = React.useState(filters);
    const [locationOpen, setLocationOpen] = React.useState(false)

    const handleApplyFilters = () => {
        setFilters(localFilters);
        onClose();
    };

    // ...existing filter toggle and handler functions...

    return (
        <Drawer open={isOpen} onOpenChange={onClose}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-lg flex flex-col h-[80vh]">
                    <DrawerHeader>
                        <DrawerTitle>Filters</DrawerTitle>
                    </DrawerHeader>

                    {/* Make this div scrollable */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6 space-y-6">
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
                                                onChange={() => {
                                                    setLocalFilters(prev => ({
                                                        ...prev,
                                                        categories: prev.categories.includes(category)
                                                            ? prev.categories.filter(c => c !== category)
                                                            : [...prev.categories, category]
                                                    }));
                                                }}
                                                className="w-4 h-4 text-[#386641] rounded bg-gray-100 border-gray-300 focus:ring-[#A7C957]"
                                            />
                                            <label htmlFor={`mobile-category-${i}`} className="ml-2 text-sm text-gray-700">
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Updated Location Filter with Combobox */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">LOCATION</h3>
                                <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={locationOpen}
                                            className="w-full justify-between border-gray-300 focus:ring-[#A7C957] text-left font-normal"
                                        >
                                            {localFilters.locations[0]
                                                ? locations.find((location) => location.value === localFilters.locations[0])?.label
                                                : "All Locations"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search location..." className="h-9" />
                                            <CommandList>
                                                <CommandEmpty>No location found.</CommandEmpty>
                                                <CommandGroup>
                                                    {locations.map((location) => (
                                                        <CommandItem
                                                            key={location.value}
                                                            value={location.value}
                                                            onSelect={(currentValue) => {
                                                                setLocalFilters(prev => ({
                                                                    ...prev,
                                                                    locations: currentValue ? [currentValue] : []
                                                                }));
                                                                setLocationOpen(false);
                                                            }}
                                                        >
                                                            {location.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    localFilters.locations[0] === location.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">PRICE RANGE (₹)</h3>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={localFilters.priceRange.min || ''}
                                        onChange={(e) => {
                                            const value = e.target.value ? Number(e.target.value) : null;
                                            setLocalFilters(prev => ({
                                                ...prev,
                                                priceRange: { ...prev.priceRange, min: value }
                                            }));
                                        }}
                                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={localFilters.priceRange.max || ''}
                                        onChange={(e) => {
                                            const value = e.target.value ? Number(e.target.value) : null;
                                            setLocalFilters(prev => ({
                                                ...prev,
                                                priceRange: { ...prev.priceRange, max: value }
                                            }));
                                        }}
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
                                                onChange={() => {
                                                    setLocalFilters(prev => ({
                                                        ...prev,
                                                        certifications: prev.certifications.includes(cert)
                                                            ? prev.certifications.filter(c => c !== cert)
                                                            : [...prev.certifications, cert]
                                                    }));
                                                }}
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
                    </div>

                    {/* Sticky footer */}
                    <div className="border-t border-gray-200 bg-white p-6">
                        <button
                            onClick={handleApplyFilters}
                            className="w-full py-3 bg-[#386641] hover:bg-[#294D25] text-white font-medium rounded-lg transition-all mb-3"
                        >
                            Apply Filters
                        </button>
                        <DrawerClose asChild>
                            <button className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-lg transition-all">
                                Cancel
                            </button>
                        </DrawerClose>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default FilterDrawer;
