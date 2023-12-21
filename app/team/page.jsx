import React from 'react'
import Hero from "@/components/Team/Hero"
import EmpoweringTeam from "@/components/Team/EmpoweringTeam"
import TeamMember from "@/components/Team/TeamMember"
import Media from "@/components/Team/Media"
import AboutYoloApp from '@/components/modules/AboutYoloApp'

const page = () => {
  return (
    <div>
      <Hero />
      <EmpoweringTeam />
      <TeamMember />
      <Media />
      <AboutYoloApp />
    </div>
  )
}

export default page
