"use client"

import { Container } from '@/components/ui/container'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import FAQSection from '@/components/sections/contact/FAQSection'

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <div className="bg-[#F7F9F3] py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
          <FAQSection />
        </Container>
      </div>
    </>
  )
}

export default ContactPage