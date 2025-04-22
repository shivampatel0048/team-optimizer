import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface ProductCardProps {
    product: {
        id: string
        cropName: string
        images: string[]
        pricePerKg: number
        quantityKg: number
        location: {
            village: string
            district: string
            state: string
        }
        harvestDate: string
        farmer: {
            name: string
        }
        postedDate: string
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    // Calculate days since posted
    const postedDate = new Date(product.postedDate);
    const daysSincePosted = formatDistanceToNow(postedDate, { addSuffix: true });

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="relative h-48 bg-gray-100">
                <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 bg-[#A7C957] text-xs font-semibold text-white rounded-full">
                        {product.quantityKg}kg
                    </span>
                </div>

                {/* Use Image component with the provided image or fallback */}
                <Image
                    src={product.images[0] || "/images/hero.jpg"}
                    alt={product.cropName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-[#386641] mb-1 truncate group-hover:text-[#294D25] transition-colors">
                        {product.cropName}
                    </h3>
                    <div className="text-[#A7C957] font-semibold">
                        ₹{product.pricePerKg}/kg
                    </div>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                    🌱 {product.farmer.name}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                    📍 {product.location.village}, {product.location.district}, {product.location.state}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                        Posted {daysSincePosted}
                    </span>

                    <Link href={`/marketplace/${product.id}`}
                        className="px-3 py-1.5 bg-[#386641] text-white text-sm font-medium rounded hover:bg-[#294D25] transition-colors">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
