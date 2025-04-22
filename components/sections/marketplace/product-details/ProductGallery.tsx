'use client'

import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
    productName: string;
    quantity: number;
    images: string[];
}

export function ProductGallery({ productName, quantity, images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="space-y-6">
            <div className="relative h-[500px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                    src={images[selectedImage]}
                    alt={productName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute top-4 left-4 bg-[#A7C957]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    {quantity}kg available
                </div>
            </div>

            <div className="flex space-x-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                                ? 'border-[#A7C957] shadow-lg'
                                : 'border-transparent hover:border-gray-200'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`${productName} ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
