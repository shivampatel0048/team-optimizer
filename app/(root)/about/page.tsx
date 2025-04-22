import { Container } from '@/components/ui/container'
import BackgroundPattern from '@/components/ui/BackgroundPattern'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-[#386641] to-[#294D25] text-white py-20 md:py-28 overflow-hidden">
        <BackgroundPattern id="about-pattern" />
        <Container className="relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex space-x-3 text-sm opacity-90">
              <Link href="/" className="hover:text-[#A7C957] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#A7C957]">About Us</span>
            </nav>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-[#A7C957] bg-opacity-20 rounded-full mb-4 animate-fade-in">
              <span className="text-sm font-medium">Established 2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Revolutionizing <br className="hidden sm:block" />
              <span className="text-[#A7C957]">Agricultural Trade</span>
            </h1>

            <p className="text-lg md:text-xl text-[#DDE7C7] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Connecting farmers and buyers for a sustainable future through technology and innovation.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center mt-12 animate-fade-in-up delay-200">
              {[
                { label: 'Active Markets', value: '500+' },
                { label: 'States Covered', value: '15+' },
                { label: 'Daily Transactions', value: '10K+' },
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
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden translate-y-1">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#F7F9F3]">
            <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </div>

      <div className="bg-[#F7F9F3] py-16">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Mission Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#294D25] mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Empowering farmers with direct market access and fair prices while providing buyers with quality agricultural products. We&apos;re committed to creating a transparent, efficient, and sustainable agricultural marketplace that benefits both farmers and buyers.
              </p>
            </section>

            {/* Story Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#294D25] mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">Founded in 2025, Mandi Mart emerged from a simple yet powerful idea: to bridge the gap between farmers and buyers. Our founders, coming from agricultural backgrounds, witnessed firsthand the challenges faced by farmers in getting fair prices for their produce.</p>
                <p className="mb-4">What started as a small pilot project in Gujarat has now grown into a nationwide platform, serving thousands of farmers and buyers across India. Our journey has been marked by continuous innovation, learning from our users, and adapting to meet their needs.</p>
                <p>Today, we&apos;re proud to be India&apos;s fastest-growing agricultural marketplace, but we&apos;re just getting started.</p>
              </div>
            </section>

            {/* Impact Stats */}
            <section className="bg-[#F7F9F3] p-8 rounded-xl shadow-sm border border-[#A7C957]/20">
              <h2 className="text-3xl font-bold text-[#294D25] mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '50,000+', label: 'Farmers Registered' },
                  { value: '₹100Cr+', label: 'Trade Volume' },
                  { value: '1,000+', label: 'Villages Reached' },
                  { value: '35%', label: 'Avg. Income Increase' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#386641] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Values Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#294D25] mb-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Transparency',
                    description: 'We believe in complete transparency in pricing, quality assessment, and transactions.',
                    icon: '🔍'
                  },
                  {
                    title: 'Farmer First',
                    description: 'Every decision we make starts with considering its impact on our farming community.',
                    icon: '🌾'
                  },
                  {
                    title: 'Innovation',
                    description: 'We continuously innovate to make agricultural trading more efficient and accessible.',
                    icon: '💡'
                  },
                ].map((value, i) => (
                  <div key={i} className="bg-[#F7F9F3] p-6 rounded-lg shadow-sm border border-[#A7C957]/20 hover:border-[#A7C957]/40 transition-colors">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-[#386641] mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recognition Section */}
            <section className="bg-[#F7F9F3] p-8 rounded-xl shadow-sm border border-[#A7C957]/20">
              <h2 className="text-3xl font-bold text-[#294D25] mb-6">Recognition & Awards</h2>
              <div className="space-y-4">
                {[
                  'Best AgriTech Startup 2023 - Indian Agricultural Awards',
                  'Innovation in Rural Development - Digital India Awards',
                  'Top 10 Impactful Startups - StartupIndia Initiative',
                ].map((award, i) => (
                  <div key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-[#A7C957] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Us CTA */}
            <section className="text-center bg-gradient-to-br from-[#386641] to-[#294D25] p-12 rounded-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
              <p className="text-[#DDE7C7] mb-8 max-w-2xl mx-auto">
                Be part of India&apos;s agricultural transformation. Whether you&apos;re a farmer looking to get better prices or a buyer seeking quality produce, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="px-8 py-3 bg-[#A7C957] hover:bg-[#8FB944] text-[#294D25] font-medium rounded-lg transition-all">
                  Get Started
                </a>
                <a href="/contact" className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-lg transition-all">
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AboutPage