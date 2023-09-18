import React from 'react'
import Button from '../modules/Button'
import education from "@/public/education-hero.svg"
import Image from 'next/image'

const Hero = () => {
  return (
      <div className='mx-auto max-w-[1280px] py-12 flex p-10 xl:px-0 flex-col justify-center items-center gap-12'>
          <div className='flex flex-col items-center gap-6 max-w-2xl'>
              <div className='flex flex-col items-center gap-4'>
                  <p className='text-white text-center text-lg not-italic font-normal leading-[170%] tracking-[2px] uppercase'>Education Partnership</p>
                  <h1 className='text-[#F8F8F8] text-center text-4xl font-semibold leading-[150%]'>Make your campus completely digital through Yolo</h1>
              </div>
              <Button buttonName={"Book a Demo Now"} />
          </div> 
         <Image src={education} className='hidden xl:block' alt='Hero' />
    </div>
  )
}

export default Hero