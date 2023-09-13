import React from 'react'
import Hero from "@/components/Partners/Hero"
import Brands from "@/components/Partners/Brands"
import Partners from "@/components/Partners/Partners"
import ExclusiveSpots from "@/components/Partners/ExclusiveSpots"
import BrandsStandout from "@/components/Partners/BrandsStandout";
import Faq from "@/components/modules/Faq";
import JoinUs from '@/components/Partners/JoinUs'

const page = () => {
  return (
      <div>
          <Hero />
          <Brands />
          <Partners />
          <ExclusiveSpots />
      <BrandsStandout />
      <Faq />
      <JoinUs />
    </div>
  )
}

export default page
