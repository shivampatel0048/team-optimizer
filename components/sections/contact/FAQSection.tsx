'use client'

import { useState } from 'react'

const faqData = [
    {
        q: "How quickly will I receive a response?",
        a: "We aim to respond to all inquiries within 24 business hours. Complex technical issues may require additional time."
    },
    {
        q: "Do you provide phone support?",
        a: "Yes, our customer support team is available by phone during business hours for all registered users."
    },
    {
        q: "Which payment methods do you accept?",
        a: "We accept all major payment methods including UPI, bank transfers, credit/debit cards, and mobile wallets. All transactions are secure and encrypted."
    },
    {
        q: "How do you verify farmers on the platform?",
        a: "We have a thorough verification process that includes document verification, field visits, and references from local agricultural offices to ensure authenticity."
    },
    {
        q: "What happens if there's a dispute?",
        a: "Our dedicated dispute resolution team handles any issues between buyers and sellers. We have a structured process to ensure fair resolution within 48-72 hours."
    },
    {
        q: "Can I cancel my listing?",
        a: "Yes, you can cancel or modify your listing at any time before receiving a confirmed order. Active orders require mutual agreement to cancel."
    },
    {
        q: "Is my data secure?",
        a: "We implement bank-grade security measures and comply with all data protection regulations. Your information is encrypted and never shared without consent."
    },
    {
        q: "Do you offer transportation services?",
        a: "Yes, we partner with verified logistics providers. You can arrange transportation directly through our platform with real-time tracking."
    }
]

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqData[0], isOpen: boolean, onToggle: () => void }) => {
    return (
        <div className="border border-gray-100 rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full p-4 sm:p-6 flex justify-between items-center hover:bg-[#F7F9F3] transition-colors text-left"
            >
                <h3 className="font-semibold text-[#386641]">{faq.q}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-[#A7C957] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <p className="p-4 sm:p-6 pt-0 text-gray-600">{faq.a}</p>
            </div>
        </div>
    )
}

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="mt-16 bg-white p-5 sm:p-8 md:p-12 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#294D25] mb-6 text-center">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((faq, i) => (
                    <FAQItem
                        key={i}
                        faq={faq}
                        isOpen={openIndex === i}
                        onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQSection
