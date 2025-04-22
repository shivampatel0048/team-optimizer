import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, MapPin, Star, MessageCircle, ArrowRight, Truck } from 'lucide-react';

interface ProductTabsProps {
    product: any;
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function ProductTabs({ product, activeTab, onTabChange }: ProductTabsProps) {
    const handleTabChange = (value: string) => {
        onTabChange(value);
    };

    return (
        <div className="mt-16">
            <Tabs
                defaultValue={activeTab}
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
            >
                <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 bg-[#F7F9F3] p-1 rounded-xl">
                    {['details', 'location', 'reviews'].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="px-8 py-3 rounded-lg data-[state=active]:bg-[#386641] hover:bg-[#386641]/10 data-[state=active]:text-white capitalize transition-all duration-300"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="mt-8">
                    <TabsContent value="details" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-[#294D25]">Product Details</h2>
                                <span className="px-3 py-1 bg-[#F7F9F3] text-[#386641] text-sm font-medium rounded-full">Premium Quality</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#386641] mb-3">Description</h3>
                                        <p className="text-gray-600">Premium quality {product.cropName} grown using sustainable farming practices. No chemical pesticides used.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-[#386641] mb-3">Storage Instructions</h3>
                                        <ul className="space-y-2">
                                            {['Store in cool, dry place', 'Keep away from direct sunlight', 'Optimal temperature: 20-25°C'].map((item, i) => (
                                                <li key={i} className="flex items-center text-gray-600">
                                                    <ArrowRight size={16} className="text-[#A7C957] mr-2" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#F7F9F3] p-4 rounded-xl">
                                        <h3 className="text-lg font-semibold text-[#386641] mb-3">Certifications</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Organic Certified', 'Quality Checked', 'Premium Grade', 'Eco-Friendly'].map((cert, i) => (
                                                <div key={i} className="flex items-center">
                                                    <CheckCircle size={16} className="text-[#A7C957] mr-2" />
                                                    <span className="text-sm text-gray-700">{cert}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                                        <table className="w-full">
                                            <tbody>
                                                {[
                                                    { label: 'Variety', value: 'Premium' },
                                                    { label: 'Harvest Date', value: new Date(product.harvestDate).toLocaleDateString() },
                                                    { label: 'Shelf Life', value: '3-4 weeks' },
                                                    { label: 'Packaging', value: 'Eco-friendly bags' },
                                                    { label: 'Min Order', value: '10 kg' }
                                                ].map((row, i) => (
                                                    <tr key={i} className="border-b last:border-0">
                                                        <td className="py-3 px-4 text-gray-600">{row.label}</td>
                                                        <td className="py-3 px-4 text-gray-900 font-medium">{row.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="location" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="relative w-full h-0 pb-[75%] bg-[#F7F9F3] rounded-xl overflow-hidden">
                                        <iframe
                                            title={`Map showing ${product.location.village}, ${product.location.district}`}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1992168749994!2d77.38534397477478!3d23.176238610577272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c434929431579%3A0x310e1d28b365480f!2sJagran%20Lakecity%20University!5e1!3m2!1sen!2sin!4v1745335513184!5m2!1sen!2sin"
                                            className="absolute inset-0 w-full h-full rounded-xl"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg shadow-md">
                                            <div className="flex items-center space-x-2">
                                                <MapPin size={16} className="text-[#386641]" />
                                                <p className="text-sm font-medium text-[#294D25]">{product.location.village}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#386641] mb-4">Delivery Options</h3>
                                        <div className="space-y-3">
                                            {[
                                                { type: 'Local Delivery', price: '₹300', time: '1-2 days' },
                                                { type: 'Express Shipping', price: '₹500', time: '24 hours' },
                                                { type: 'Pickup', price: 'Free', time: 'Same day' }
                                            ].map((option, i) => (
                                                <div key={i} className="flex items-start space-x-3 p-3 bg-[#F7F9F3] rounded-lg">
                                                    <Truck className="text-[#A7C957] mt-1" size={18} />
                                                    <div>
                                                        <p className="font-medium text-[#294D25]">{option.type}</p>
                                                        <p className="text-sm text-gray-600">{option.price} • {option.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="reviews" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                <button className="sm:order-2 w-fit px-4 py-2 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors flex items-center">
                                    <MessageCircle size={18} className="mr-2" />
                                    Write Review
                                </button>
                                <div className="sm:order-1">
                                    <h2 className="text-2xl font-bold text-[#294D25] mb-1">Customer Reviews</h2>
                                    <p className="text-gray-600">What buyers are saying about this product</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                <div className="md:col-span-2">
                                    <div className="space-y-6">
                                        {[
                                            { author: "Rahul M.", rating: 5, date: "2 days ago", comment: "Excellent quality and fresh produce. Will order again!" },
                                            { author: "Priya S.", rating: 4, date: "1 week ago", comment: "Good quality but delivery took longer than expected." },
                                            { author: "Amit K.", rating: 5, date: "2 weeks ago", comment: "Best quality I've found on the platform. Highly recommended!" }
                                        ].map((review, i) => (
                                            <div key={i} className="p-4 bg-[#F7F9F3] rounded-xl">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 bg-[#386641] text-white rounded-full flex items-center justify-center font-medium">
                                                            {review.author[0]}
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="font-medium text-[#294D25]">{review.author}</p>
                                                            <div className="flex items-center">
                                                                {Array(5).fill(0).map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        size={12}
                                                                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm text-gray-500">{review.date}</span>
                                                </div>
                                                <p className="text-gray-600 mt-2">{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#F7F9F3] p-6 rounded-xl h-fit">
                                    <h3 className="text-lg font-semibold text-[#294D25] mb-4">Rating Summary</h3>
                                    <div className="space-y-2">
                                        {[5, 4, 3, 2, 1].map((rating) => (
                                            <div key={rating} className="flex items-center">
                                                <span className="w-8 text-sm text-gray-600">{rating}</span>
                                                <div className="flex-1 mx-2 bg-white rounded-full h-2">
                                                    <div
                                                        className="bg-[#A7C957] h-2 rounded-full"
                                                        style={{
                                                            width: rating === 5 ? '70%' : rating === 4 ? '20%' : '10%'
                                                        }}
                                                    />
                                                </div>
                                                <span className="w-12 text-sm text-gray-600 text-right">
                                                    {rating === 5 ? '70%' : rating === 4 ? '20%' : '10%'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
