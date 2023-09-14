import React from 'react'
import Hero from "@/components/cashbacks/Hero"
import Deals from "@/components/cashbacks/Deals"
import Transaction from "@/components/cashbacks/Transaction"
import EarnCB from "@/components/cashbacks/EarnCB"
import AboutYoloApp from '@/components/modules/AboutYoloApp'

const page = () => {
  return (
    <div>
      <Hero />
      <Deals />
      <Transaction />
      <EarnCB />
      <AboutYoloApp />
    </div>
  )
}

export default page
