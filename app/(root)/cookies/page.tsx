import { Container } from '@/components/ui/container'
import BackgroundPattern from '@/components/ui/BackgroundPattern'
import Link from 'next/link'

const CookiePolicyPage = () => {
    return (
        <>
            <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white py-20 md:py-28 overflow-hidden">
                <BackgroundPattern id="cookie-pattern" />
                <Container className="relative">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex space-x-3 text-sm opacity-90">
                            <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#A7C957]">Cookie Policy</span>
                        </nav>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                            <span className="text-sm font-medium">Last Updated: {new Date().toLocaleDateString()}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Protecting Your <br className="hidden sm:block" />
                            <span className="text-[#A7C957]">Privacy & Data</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#DDE7C7] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Understanding how we use cookies to improve your experience and protect your data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 text-center mt-12 animate-fade-in-up delay-200">
                            {[
                                { label: 'Cookie Types', value: '4' },
                                { label: 'Data Protection', value: '100%' },
                                { label: 'User Control', value: 'Full' },
                            ].map((stat, i) => (
                                <div key={i} className="flex-1 min-w-[150px]">
                                    <div className="text-2xl font-bold text-[#A7C957] mb-1">{stat.value}</div>
                                    <div className="text-sm text-[#DDE7C7]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>

                {/* Bottom wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#F7F9F3]">
                        <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                    </svg>
                </div>
            </div>

            <div className="bg-[#F7F9F3] py-16">
                <Container>
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Existing content sections wrapped in proper styling */}
                        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
                            {/* Header */}
                            <div className="mb-10">
                                <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4">
                                    <span className="text-sm font-medium text-[#386641]">Cookie Policy</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-[#294D25] mb-4">How We Use Cookies</h1>
                                <p className="text-gray-600 max-w-3xl">
                                    Last Updated: July 15, 2023
                                </p>
                            </div>

                            {/* Content */}
                            <div className="space-y-8 text-gray-700">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">What Are Cookies</h2>
                                    <p>
                                        Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                                        They are widely used to make websites work more efficiently and provide information to the website owners.
                                        At Mandi Mart, we use cookies to enhance your browsing experience and provide personalized services.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">Types of Cookies We Use</h2>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {[
                                            {
                                                title: 'Essential Cookies',
                                                description: 'These cookies are necessary for the website to function properly and cannot be switched off.',
                                            },
                                            {
                                                title: 'Analytical Cookies',
                                                description: 'These help us understand how visitors interact with our website by collecting and reporting information anonymously.',
                                            },
                                            {
                                                title: 'Functional Cookies',
                                                description: 'These cookies enable the website to provide enhanced functionality and personalization.',
                                            },
                                            {
                                                title: 'Marketing Cookies',
                                                description: 'These are used to track visitors across websites to display relevant advertisements.',
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="bg-[#F7F9F3] p-4 rounded-lg border border-[#A7C957]/10">
                                                <h3 className="font-medium text-[#386641] mb-2">{item.title}</h3>
                                                <p className="text-sm">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">How We Use Cookies</h2>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>To remember your preferences and settings</li>
                                        <li>To improve our website based on how you use it</li>
                                        <li>To authenticate users and prevent fraudulent use</li>
                                        <li>To analyze how our website is performing</li>
                                        <li>To enable language preferences and translation services for farmers across different regions</li>
                                        <li>To save your session information (like crops you&apos;re interested in)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">Managing Your Cookie Preferences</h2>
                                    <p className="mb-4">
                                        You can manage your cookie preferences through your browser settings. Most browsers allow you to:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Block or delete all cookies</li>
                                        <li>Block third-party cookies</li>
                                        <li>Browse in private/incognito mode</li>
                                        <li>Clear cookies when you close your browser</li>
                                    </ul>
                                    <p className="mt-4 text-sm italic">
                                        Please note that restricting cookies may impact the functionality of our website and your user experience.
                                    </p>
                                </div>

                                <div className="bg-[#386641]/5 p-6 rounded-xl">
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">Your Consent</h2>
                                    <p className="mb-4">
                                        By using our platform, you consent to our use of cookies in accordance with this Cookie Policy.
                                        You can withdraw your consent at any time by adjusting your browser settings or contacting our support team.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                        <button className="px-6 py-3 bg-[#386641] text-white rounded-lg hover:bg-[#294D25] transition-colors">
                                            Accept All Cookies
                                        </button>
                                        <button className="px-6 py-3 border border-[#386641] text-[#386641] rounded-lg hover:bg-[#386641]/10 transition-colors">
                                            Customize Settings
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-[#386641] mb-3">Contact Us</h2>
                                    <p>
                                        If you have any questions about our use of cookies, please <a href="/contact" className="text-[#6A994E] hover:text-[#386641] underline">contact us</a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <section className="text-center bg-gradient-to-br from-[#386641] to-[#294D25] p-12 rounded-xl text-white">
                            <h2 className="text-3xl font-bold mb-4">Take Control of Your Privacy</h2>
                            <p className="text-[#DDE7C7] mb-8 max-w-2xl mx-auto">
                                Choose how you want your data to be handled. We respect your privacy choices.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg transition-all">
                                    Accept All Cookies
                                </button>
                                <button className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-lg transition-all">
                                    Customize Settings
                                </button>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default CookiePolicyPage