import React from 'react'
import Hero from "@/components/educations/Hero"
import EducationPartners from "@/components/educations/EducationPartners"
import Works from "@/components/educations/Works"
import Communications from "@/components/educations/Communications"
import DigitalTf from "@/components/educations/DigitalTf"
import Testimonials from '@/components/educations/Testimonials'
import Faq from '@/components/modules/Faq'
import Demo from "@/components/educations/Demo"

const page = () => {
  return (
      <div>
          <Hero />
          <EducationPartners />
          <Works />
          <Communications />
          <DigitalTf />
          <Testimonials />
          <Faq />
          <Demo />
    </div>
  )
}

export default page
