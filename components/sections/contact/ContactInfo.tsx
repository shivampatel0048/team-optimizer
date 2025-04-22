const ContactInfo = () => {
    return (
        <div className="lg:col-span-2">
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-[#294D25] mb-6">Contact Information</h2>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#A7C957]/20 flex items-center justify-center text-[#386641]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-[#386641]">Email</h3>
                            <a href="mailto:support@mandimart.com" className="text-gray-600 hover:text-[#6A994E]">
                                support@mandimart.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#A7C957]/20 flex items-center justify-center text-[#386641]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-[#386641]">Phone</h3>
                            <p className="text-gray-600">
                                +91 1800 123 4567 <span className="text-sm text-gray-500">(Toll-free)</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#A7C957]/20 flex items-center justify-center text-[#386641]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-[#386641]">Address</h3>
                            <p className="text-gray-600">
                                Mandi Mart Headquarters<br />
                                123 AgriTech Park, Sector 10<br />
                                Gurugram, Haryana 122001<br />
                                India
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold text-[#294D25] mb-4">Hours of Operation</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium">Closed</span>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6">
                    <p className="text-sm text-gray-500">
                        For urgent matters outside of business hours, please email us and we&apos;ll respond as soon as possible.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
