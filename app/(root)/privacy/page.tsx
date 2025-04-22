import { Container } from '@/components/ui/container'
import Link from 'next/link'
import BackgroundPattern from '@/components/ui/BackgroundPattern'

const PrivacyPage = () => {
    return (
        <>
            <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white py-20 md:py-28 overflow-hidden">
                <BackgroundPattern id="privacy-pattern" />
                <Container className="relative">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex space-x-3 text-sm opacity-90">
                            <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#A7C957]">Privacy Policy</span>
                        </nav>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
                            <span className="text-sm font-medium">Last Updated: {new Date().toLocaleDateString()}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Your Trust is Our <br className="hidden sm:block" />
                            <span className="text-[#A7C957]">Foundation</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#DDE7C7] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            We are committed to protecting your personal information and ensuring transparency in how we use your data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 text-center mt-12 animate-fade-in-up delay-200">
                            {[
                                { label: 'Data Protection', value: '256-bit' },
                                { label: 'Security Audits', value: 'Monthly' },
                                { label: 'Compliance Rate', value: '100%' },
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
                        {[
                            {
                                title: 'Information We Collect',
                                content: (
                                    <>
                                        <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
                                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                            <li>Name and contact information</li>
                                            <li>Farm location and size details</li>
                                            <li>Crop information and trading preferences</li>
                                            <li>Payment and transaction details</li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: 'How We Use Your Information',
                                content: (
                                    <>
                                        <p className="text-gray-600 mb-4">Your information helps us provide and improve our services:</p>
                                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                            <li>Facilitating transactions between farmers and buyers</li>
                                            <li>Improving our platform and user experience</li>
                                            <li>Sending important updates and notifications</li>
                                            <li>Preventing fraud and ensuring platform security</li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: 'Data Security',
                                content: (
                                    <>
                                        <p className="text-gray-600 mb-4">We implement robust security measures to protect your data:</p>
                                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                            <li>End-to-end encryption for sensitive information</li>
                                            <li>Regular security audits and updates</li>
                                            <li>Strict access controls and monitoring</li>
                                            <li>Compliance with industry security standards</li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: 'Your Rights',
                                content: (
                                    <>
                                        <p className="text-gray-600 mb-4">You have control over your personal data:</p>
                                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                            <li>Access your personal information</li>
                                            <li>Request data correction or deletion</li>
                                            <li>Opt-out of marketing communications</li>
                                            <li>Export your data in a portable format</li>
                                        </ul>
                                    </>
                                )
                            }
                        ].map((section, i) => (
                            <section key={i} className="bg-[#F7F9F3] p-8 rounded-xl shadow-sm border border-[#A7C957]/20 hover:border-[#A7C957]/40 transition-all">
                                <h2 className="text-3xl font-bold text-[#294D25] mb-6">{section.title}</h2>
                                {section.content}
                            </section>
                        ))}

                        {/* Contact Section */}
                        <section className="text-center bg-gradient-to-br from-[#386641] to-[#294D25] p-12 rounded-xl text-white">
                            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
                            <p className="text-[#DDE7C7] mb-8 max-w-2xl mx-auto">
                                Our Data Protection team is here to help with any questions about your privacy and data security.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact" className="px-8 py-3 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg transition-all">
                                    Contact DPO
                                </a>
                                <a href="/faq" className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-lg transition-all">
                                    View FAQ
                                </a>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PrivacyPage