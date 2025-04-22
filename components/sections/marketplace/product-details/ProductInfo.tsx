import { Star, User, MapPin, Calendar, Truck } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ProductInfoProps {
    product: any;
    quantity: number;
    setQuantity: (quantity: number) => void;
    totalPrice: number;
}

export function ProductInfo({ product, quantity, setQuantity, totalPrice }: ProductInfoProps) {
    const harvestDate = new Date(product.harvestDate);
    const daysSinceHarvest = formatDistanceToNow(harvestDate, { addSuffix: true });
    const postedDate = new Date(product.postedDate);
    const daysSincePosted = formatDistanceToNow(postedDate, { addSuffix: true });

    return (
        <div className="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#294D25] order-2 sm:order-1">
                        {product.cropName}
                    </h1>

                    <div className="flex items-center bg-[#F7F9F3] px-2 py-0.5 sm:!px-3 sm:!py-1 rounded-full border border-[#A7C957]/20 whitespace-nowrap order-1 sm:order-2 w-fit text-sm sm:text-base">
                        <span className="text-[#386641] font-bold mr-1">₹{product.pricePerKg}</span>
                        <span className="text-gray-500">per kg</span>
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.8 (56 reviews)</span>
                </div>
            </div>

            <div className="border-t border-b border-gray-100 py-4 space-y-3 mb-6">
                <div className="flex items-start">
                    <User size={18} className="text-[#6A994E] mt-0.5 mr-3" />
                    <div>
                        <p className="text-sm text-gray-800 font-medium">Farmer</p>
                        <p className="text-sm text-gray-600">{product.farmer.name} <span className="bg-[#A7C957]/20 text-[#386641] text-xs px-2 py-0.5 rounded-full ml-2 font-medium">Verified</span></p>
                    </div>
                </div>

                <div className="flex items-start">
                    <MapPin size={18} className="text-[#6A994E] mt-0.5 mr-3" />
                    <div>
                        <p className="text-sm text-gray-800 font-medium">Location</p>
                        <p className="text-sm text-gray-600">{product.location.village}, {product.location.district}, {product.location.state}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <Calendar size={18} className="text-[#6A994E] mt-0.5 mr-3" />
                    <div>
                        <p className="text-sm text-gray-800 font-medium">Harvest Date</p>
                        <p className="text-sm text-gray-600">{new Date(product.harvestDate).toLocaleDateString()} <span className="text-[#6A994E] text-xs">(Harvested {daysSinceHarvest})</span></p>
                    </div>
                </div>

                <div className="flex items-start">
                    <Truck size={18} className="text-[#6A994E] mt-0.5 mr-3" />
                    <div>
                        <p className="text-sm text-gray-800 font-medium">Delivery Options</p>
                        <p className="text-sm text-gray-600">Available for pickup or delivery within 50km</p>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity (kg)</label>
                <div className="flex items-center">
                    <button
                        className="border border-gray-300 rounded-l-md px-3 py-2 text-[#294D25] hover:bg-gray-100"
                        onClick={() => setQuantity(Math.max(1, quantity - 10))}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        max={product.quantityKg}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border-y border-gray-300 py-2 px-3 w-24 text-center focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
                    />
                    <button
                        className="border border-gray-300 rounded-r-md px-3 py-2 text-[#294D25] hover:bg-gray-100"
                        onClick={() => setQuantity(Math.min(product.quantityKg, quantity + 10))}
                    >
                        +
                    </button>
                    <span className="ml-2 text-sm text-gray-500">Available: {product.quantityKg}kg</span>
                </div>
            </div>

            <div className="bg-[#F7F9F3] p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="text-[#294D25] font-semibold">₹{totalPrice}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Estimated taxes:</span>
                    <span>₹{Math.round(totalPrice * 0.05)}</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex items-center justify-between font-bold">
                    <span className="text-gray-700">Total:</span>
                    <span className="text-[#294D25]">₹{totalPrice + Math.round(totalPrice * 0.05)}</span>
                </div>
            </div>

            <div className="flex space-x-4">
                <button className="w-full py-3 bg-[#386641] hover:bg-[#294D25] text-white font-medium rounded-lg transition-all">
                    Buy Now
                </button>
                <button className="w-full py-3 border border-[#386641] text-[#386641] hover:bg-[#386641]/10 font-medium rounded-lg transition-all">
                    Contact Seller
                </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
                Posted {daysSincePosted} • Protected by Farmer Market&apos;s Buyer Guarantee
            </p>
        </div>
    );
}
