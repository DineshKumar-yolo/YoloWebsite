import React from 'react'
import Hero from "@/components/Tasks/Hero"
import LearnMore from "@/components/Tasks/LearnMore"
import Works from "@/components/Tasks/Works"
import Applications from "@/components/Tasks/Applications"
import AboutYoloApp from '@/components/modules/AboutYoloApp'

const page = () => {
  return (
      <div>
          <Hero />
          <LearnMore />
          <Works />
          <Applications />
          <AboutYoloApp />
    </div>
  )
}

export default page
