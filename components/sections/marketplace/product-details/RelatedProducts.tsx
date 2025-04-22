import Image from 'next/image';
import Link from 'next/link';

interface RelatedProductsProps {
    products: any[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#294D25] mb-6">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <Link
                        key={product.id}
                        href={`/marketplace/${product.id}`}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                    >
                        <div className="relative h-40 bg-gray-100">
                            <div className="absolute top-2 left-2 z-10">
                                <span className="px-2 py-1 bg-[#A7C957] text-xs font-semibold text-white rounded-full">
                                    {product.quantityKg}kg
                                </span>
                            </div>
                            <Image
                                src={'/images/hero.jpg'}
                                alt={product.cropName}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                loading="lazy"
                            />
                        </div>
                        {/* ...product card content... */}
                    </Link>
                ))}
            </div>
        </div>
    );
}
