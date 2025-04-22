import React from 'react'
import { Container } from '@/components/ui/container'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I used to sell to local traders who offered low prices. Now I get offers from buyers across the state and earn 35% more for my wheat.",
            name: "Rajesh Patel",
            title: "Wheat Farmer",
            location: "Gujarat",
            image: "https://github.com/shadcn.png"
        },
        {
            quote: "As a food processor, finding quality produce directly from farmers has improved our margins and quality. The verification system ensures we get what we pay for.",
            name: "Priya Sharma",
            title: "Owner",
            location: "Sharma Food Products",
            image: "https://github.com/shadcn.png"
        },
        {
            quote: "I don't speak English well, but the app works in Hindi. I can list my vegetables with just photos and get fair prices from city buyers.",
            name: "Lakshmi Devi",
            title: "Vegetable Grower",
            location: "Andhra Pradesh",
            image: "https://github.com/shadcn.png"
        }
    ]

    return (
        <section className="py-16 bg-[#F7F9F3]">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3 text-[#294D25]">Success Stories</h2>
                    <p className="text-[#6A994E] max-w-2xl mx-auto">
                        Hear from farmers and buyers who have transformed their businesses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[#A7C957]/20">
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                    <div className="text-2xl text-[#A7C957] mb-3"><Quote size={32} /></div>
                                    <p className="italic text-[#4B5563] mb-5">
                                        {testimonial.quote}
                                    </p>
                                </div>

                                <div className="flex items-center mt-4">
                                    <div className="mr-4 w-12 h-12 relative rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#386641]">{testimonial.name}</p>
                                        <p className="text-sm text-[#6A994E]">
                                            {testimonial.title}, {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Testimonials
