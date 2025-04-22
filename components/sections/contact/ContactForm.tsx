'use client'

import { useState } from 'react'

interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)
    const [privacyAccepted, setPrivacyAccepted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Log form data
            console.log('Form submitted with data:', formData)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Here you would typically send the data to your API
            // await fetch('/api/contact', {
            //     method: 'POST',
            //     body: JSON.stringify(formData)
            // })

            setSubmitStatus('success')
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
            setPrivacyAccepted(false)
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <div className="lg:col-span-3">
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#294D25] mb-6">Get in Touch</h2>

                {submitStatus === 'success' && (
                    <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded">
                        <p className="text-green-700">Thank you for your message! We&apos;ll get back to you shortly.</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
                        <p className="text-red-700">There was an error sending your message. Please try again.</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A7C957] focus:border-[#A7C957] outline-none transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A7C957] focus:border-[#A7C957] outline-none transition-all"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A7C957] focus:border-[#A7C957] outline-none transition-all"
                                placeholder="Optional"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject *
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A7C957] focus:border-[#A7C957] outline-none transition-all"
                            >
                                <option value="">Select a topic</option>
                                <option value="Account Support">Account Support</option>
                                <option value="Technical Issue">Technical Issue</option>
                                <option value="Billing Question">Billing Question</option>
                                <option value="Feature Request">Feature Request</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A7C957] focus:border-[#A7C957] outline-none transition-all resize-none"
                            placeholder="Please describe your issue or question in detail"
                        ></textarea>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="privacy"
                            type="checkbox"
                            checked={privacyAccepted}
                            onChange={(e) => setPrivacyAccepted(e.target.checked)}
                            required
                            className="h-4 w-4 text-[#386641] focus:ring-[#A7C957] rounded"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                            I agree to the <a href="/privacy" className="text-[#6A994E] hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !privacyAccepted}
                        className={`w-full px-8 py-4 bg-[#386641] text-white font-medium rounded-lg transition-all
                        ${(isSubmitting || !privacyAccepted) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#294D25]'}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
