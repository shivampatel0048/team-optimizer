
import React from 'react'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import CallToAction from '@/components/sections/CallToAction'
import HowItWorks from '@/components/sections/HowItWorks'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Page