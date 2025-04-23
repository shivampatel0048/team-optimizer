'use client';

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FarmerSidebar from "@/components/dashboard/FarmerSidebar";
import { useState, useEffect } from "react";
import { Camera, Check, Info, AlertCircle } from 'lucide-react';

export default function AddCropPage() {
    const [cropImages, setCropImages] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        cropName: '',
        quantity: '',
        harvestType: '',
        harvestDate: '',
        certification: '',
        description: '',
        price: '',
        minOrderQuantity: '',
        paymentTerms: '',
        deliveryOption: '',
        additionalTerms: '',
    });

    // Sample categories and varieties
    const cropCategories = ["Grains", "Vegetables", "Fruits", "Pulses", "Spices", "Oil Seeds"];
    const harvestTypes = ["Fresh Harvest", "Stored", "Processed"];
    const certifications = ["Organic", "Natural Farming", "GI Tagged", "None"];

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Updated image capture function
    const handleImageCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files?.[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                setCropImages(prev => [...prev, base64String]);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare submission data
        const submissionData = {
            ...formData,
            images: cropImages,
        };

        // Log the complete form data
        console.log('Form Submission Data:', submissionData);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true); // Show success message instead of using steps
        }, 1500);
    };

    // If form was submitted successfully, show success message
    if (isSuccess) {
        return (
            <DashboardLayout sidebar={<FarmerSidebar />}>
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Crop Listed Successfully!</h2>
                    <p className="text-gray-600 mb-6">Your crop listing has been added to the marketplace and is now visible to potential buyers.</p>

                    <div className="bg-[#F7F9F3] p-6 rounded-lg max-w-md mx-auto mb-6">
                        <h3 className="font-medium text-[#386641] mb-2">Next Steps</h3>
                        <ul className="text-sm text-left space-y-2">
                            <li className="flex items-start">
                                <Check className="h-4 w-4 text-[#386641] mt-0.5 mr-2" />
                                <span>Keep your phone handy to respond quickly to buyer inquiries</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-4 w-4 text-[#386641] mt-0.5 mr-2" />
                                <span>You will receive notifications when buyers place bids</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-4 w-4 text-[#386641] mt-0.5 mr-2" />
                                <span>Manage your listing from the &quot;My Crop Listings&quot; section</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-6 py-2 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors">
                            View My Listing
                        </button>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="px-6 py-2 border border-[#A7C957] text-[#386641] rounded-lg hover:bg-[#F7F9F3] transition-colors"
                        >
                            Add Another Crop
                        </button>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    // Main form
    return (
        <DashboardLayout sidebar={<FarmerSidebar />}>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Crop</h1>

            <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                    {/* Section 1: Crop Details */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">1. Crop Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Crop Category*</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    required
                                >
                                    <option value="">Select category</option>
                                    {cropCategories.map((category, index) => (
                                        <option key={index} value={category.toLowerCase()}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Crop Name/Variety*</label>
                                <input
                                    type="text"
                                    name="cropName"
                                    value={formData.cropName}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Basmati Rice, Alphonso Mango"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Available (kg)*</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 500"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Type</label>
                                <select
                                    name="harvestType"
                                    value={formData.harvestType}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                >
                                    <option value="">Select type</option>
                                    {harvestTypes.map((type, index) => (
                                        <option key={index} value={type.toLowerCase()}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Date*</label>
                                <input
                                    type="date"
                                    name="harvestDate"
                                    value={formData.harvestDate}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Certification (if any)</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`cert-${index}`}
                                            name="certification"
                                            value={cert.toLowerCase()}
                                            checked={formData.certification === cert.toLowerCase()}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-[#386641] focus:ring-[#A7C957] border-gray-300"
                                        />
                                        <label htmlFor={`cert-${index}`} className="ml-2 text-sm text-gray-700">{cert}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Crop Description</label>
                            <textarea
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Describe your crop quality, special features, etc."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                            ></textarea>
                        </div>
                    </div>

                    {/* Section 2: Crop Images */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">2. Crop Images</h2>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Add Crop Images <span className="text-gray-500">(Min. 1 required)</span>
                            </label>

                            {!isMobile && (
                                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
                                    <AlertCircle className="inline-block h-4 w-4 mr-2" />
                                    Image capture is only available on mobile devices for better quality photos.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                                {cropImages.map((image, index) => (
                                    <div key={index} className="relative h-32 border border-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Crop image ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white"
                                            onClick={() => setCropImages(images => images.filter((_, i) => i !== index))}
                                        >
                                            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                                {isMobile && (
                                    <div className="col-span-1 md:col-span-2">
                                        <input
                                            type="file"
                                            id="camera-input"
                                            accept="image/*"
                                            capture="environment"
                                            className="hidden"
                                            onChange={handleImageCapture}
                                        />
                                        <label
                                            htmlFor="camera-input"
                                            className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer w-full"
                                        >
                                            <Camera className="h-8 w-8 text-gray-400" />
                                            <span className="mt-2 text-sm text-gray-500">Take Photo with Camera</span>
                                            <span className="mt-1 text-xs text-gray-400">Capture high-quality images</span>
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100 text-sm text-blue-800 flex items-start">
                                <Info className="h-5 w-5 mr-2 flex-shrink-0 text-blue-500 mt-0.5" />
                                <div>
                                    <p className="font-medium mb-1">Photo Tips:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Ensure good lighting for clear images</li>
                                        <li>Take photos from multiple angles</li>
                                        <li>Include close-ups to show quality & texture</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Pricing & Terms */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">3. Pricing & Terms</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Price (₹ per kg)*</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 40"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                    required
                                />
                                <div className="flex items-center mt-2 text-xs text-[#386641]">
                                    <Info className="h-3 w-3 mr-1" />
                                    <span>Market average: ₹35-45 per kg</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Order Quantity (kg)</label>
                                <input
                                    type="number"
                                    name="minOrderQuantity"
                                    value={formData.minOrderQuantity}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 50"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                                <select
                                    name="paymentTerms"
                                    value={formData.paymentTerms}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                >
                                    <option value="">Select payment terms</option>
                                    <option value="advance">Full Advance</option>
                                    <option value="partial">50% Advance</option>
                                    <option value="delivery">Payment on Delivery</option>
                                    <option value="credit">7 Days Credit</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Options</label>
                                <select
                                    name="deliveryOption"
                                    value={formData.deliveryOption}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                                >
                                    <option value="">Select delivery option</option>
                                    <option value="self">Self Pickup by Buyer</option>
                                    <option value="local">Local Delivery (within 50km)</option>
                                    <option value="shipping">Shipping Available</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="bg-[#F7F9F3] p-4 rounded-lg border border-[#A7C957]/20">
                                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1 text-[#386641]" />
                                    Listing Validity
                                </h3>
                                <p className="text-sm text-gray-600">Your crop listing will be valid for 30 days. After this period, you can choose to relist if the crop hasn&apos;t been sold.</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Terms (optional)</label>
                            <textarea
                                rows={3}
                                name="additionalTerms"
                                value={formData.additionalTerms}
                                onChange={handleInputChange}
                                placeholder="Any specific requirements for buyers"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 text-[#386641] focus:ring-[#A7C957] border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                    I confirm that the information provided is accurate and I agree to the <a href="#" className="text-[#386641] hover:underline">Terms & Conditions</a>.
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-3 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : 'Add Crop Listing'}
                        </button>
                    </div>
                </div>
            </form>
        </DashboardLayout>
    );
}
