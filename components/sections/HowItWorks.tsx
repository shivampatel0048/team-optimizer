import React from 'react'
import { Container } from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Farmers List Crops',
            description: 'Take a photo, add details about your produce, quantity and set your price.',
            icon: '/images/step-1.jpg'
        },
        {
            number: '2',
            title: 'Buyers Make Offers',
            description: 'Interested buyers will send purchase requests with their price offers.',
            icon: '/images/step-2.jpg'
        },
        {
            number: '3',
            title: 'Farmers Accept Offers',
            description: 'Review and accept the best offers from verified buyers.',
            icon: '/images/step-3.jpg'
        },
        {
            number: '4',
            title: 'Payment & Logistics',
            description: 'Secure payment and assistance with transportation options.',
            icon: '/images/step-4.jpg'
        }
    ]

    return (
        <section id='howItWorks' className="py-16 bg-[#F7F9F3]">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3 text-[#294D25]">How It Works</h2>
                    <p className="text-[#6A994E] max-w-2xl mx-auto">
                        From farm to market in four simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-[7.5rem] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-[#A7C957]"></div>

                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#A7C957] text-[#294D25] flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                                {step.number}
                            </div>
                            <div className="w-16 h-16 mb-4 relative rounded-full overflow-hidden">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#386641]">{step.title}</h3>
                            <p className="text-[#4B5563]">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/get-started" className="inline-block px-8 py-3 bg-[#386641] hover:bg-[#2D5232] text-white font-medium rounded-lg transition-all duration-200">
                        Get Started Today
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default HowItWorks
