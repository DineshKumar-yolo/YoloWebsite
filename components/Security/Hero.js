import React from 'react'
import Securityinfo from "@/public/security-info.svg"
import Button from '../modules/Button'
import Image from 'next/image'

const Hero = () => {
  return (
      <div className='flex justify-center items-center gap-16 flex-col px-10'>
          <div className="flex-1 flex flex-col items-center gap-6 pt-12">
              <div className="flex flex-col items-center gap-4">
                  <p className='text-white text-center font-poppins text-lg font-normal leading-[170%] tracking-[2px] uppercase'>you are secure !</p>
                  <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>
                      Safety and Security is the <br />
                      first thing for us
                  </h1>
              </div>
              <div className="flex gap-4 items-start flex-wrap justify-center w-full xl:w-auto">
                  <input type="number" className="py-3 px-3 text-[#3b3b3b] xl:w-[56%] w-[80%] text-base rounded-sm focus:outline-none leading-[150%] lowercase" placeholder="Enter mobile number" />
                  <Button buttonName={"Get Started"} />
              </div>
          </div>
          <div className='shrink-0 max-w-3xl'>
              <Image src={Securityinfo} alt='Security' />
          </div>
    </div>
  )
}

export default Hero
