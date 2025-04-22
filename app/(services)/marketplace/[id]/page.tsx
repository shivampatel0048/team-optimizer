'use client'

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { sampleProducts } from '@/data/sampleProducts';
import { ProductGallery } from '@/components/sections/marketplace/product-details/ProductGallery';
import { ArrowLeft, Share2 } from 'lucide-react';
import { ProductInfo } from '@/components/sections/marketplace/product-details/ProductInfo';
import { ProductTabs } from '@/components/sections/marketplace/product-details/ProductTabs';
import { RelatedProducts } from '@/components/sections/marketplace/product-details/RelatedProducts';

const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState('details');
    const [quantity, setQuantity] = useState(1);

    const product = sampleProducts.find(p => p.id === id) || sampleProducts[0];

    const productImages = [
        '/images/hero.jpg',
        '/images/step-1.jpg',
        '/images/step-2.jpg',
        '/images/step-3.jpg'
    ];

    // Calculate total price
    const totalPrice = product.pricePerKg * quantity;

    return (
        <div className="min-h-screen bg-[#F7F9F3]">
            <div className="sticky top-0 z-10 bg-[#F7F9F3] border-b border-gray-200">
                <Container>
                    <div className="flex items-center justify-between h-16">
                        <Link href="/marketplace" className="flex items-center text-[#386641] hover:text-[#A7C957] transition-colors">
                            <ArrowLeft size={16} className="mr-1" />
                            <span className="text-sm font-medium">Back to Marketplace</span>
                        </Link>
                        <button className="flex items-center text-sm text-[#386641] hover:text-[#A7C957]">
                            <Share2 size={16} className="mr-1" />
                            Share
                        </button>
                    </div>
                </Container>
            </div>

            <Container className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ProductGallery
                        productName={product.cropName}
                        quantity={product.quantityKg}
                        images={productImages}
                    />

                    <ProductInfo
                        product={product}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        totalPrice={totalPrice}
                    />
                </div>

                <ProductTabs
                    product={product}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <RelatedProducts products={sampleProducts.slice(0, 4)} />
            </Container>
        </div>
    );
};

export default ProductDetailsPage;