import React from 'react'
import heroTeam from "@/public/heroTeam.png"
import heroTeam2 from "@/public/heroTeam2.png"
import heroTeam3 from "@/public/heroTeam3.png"
import Image from 'next/image'

const Hero = () => {
  return (
      <div className='flex flex-col items-center mx-auto px-10 lg:px-0 gap-4 max-w-3xl overflow-hidden'>
          <h1 className='text-[#F8F8F8] text-center font-poppins lg:text-[44px] text-3xl font-semibold leading-[150%]'>
              We are on a mission to simplify payment solutions for Teens
          </h1>
          <p className='text-[#9C9C9C] text-center font-poppins text-base font-normal leading-[150%] tracking-[-0.165px] max-w-2xl'>
              Through yolo we are making finances simple for teenagers and making them understand the value of money at the earliest stage possible and providing opportunities through internships
          </p>
          <div className="relative">
              <Image src={heroTeam2} className='absolute -left-[50%] -top-16'  alt='Hero'/>
              <Image src={heroTeam} className='shrink-0 max-w-2xl'  alt='Hero'/>
              <Image src={heroTeam3} className='absolute left-[100%] top-0' alt='Hero' />
          </div>
    </div>
  )
}

export default Hero
