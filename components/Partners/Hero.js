import React from 'react'
import Button from '../modules/Button'
import partners from "@/public/partners.png"
import group from "@/public/group-white.svg"
import netflix from "@/public/netflix.png"
import starbucks from "@/public/startbucks.png"
import macdonald from "@/public/McDonald's.png"
import puma from "@/public/puma.svg"
import dominos from "@/public/domino's.png"
import Image from 'next/image'

const Hero = () => {
  return (
      <div className='flex justify-center flex-col gap-40 items-center'>
          <div className='flex flex-col items-center gap-6 max-w-2xl'>
              <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>
                  Grow your brand by tapping into the largest GenZ market
              </h1>
              <Button buttonName={"Let’s Collaborate"} />
          </div>
          <div className="relative lg:block hidden">
              <Image src={group} className='absolute -left-96 -top-32'  alt='Hero'/>
              <Image src={netflix} className='absolute -left-48'  alt='Hero'/>
              <Image src={starbucks} className='absolute -left-[500px] top-48'  alt='Hero'/>
              <Image src={partners} className='flex max-w-3xl justify-end center ' alt='Hero' />
              <Image src={macdonald} className='absolute left-96 -top-32'  alt='Hero'/>
              <Image src={dominos} className='absolute left-[700px] -top-12'  alt='Hero'/>
              <Image src={puma} className='absolute left-[500px] top-48' alt='Hero' />
          </div>
    </div>
  )
}

export default Hero
