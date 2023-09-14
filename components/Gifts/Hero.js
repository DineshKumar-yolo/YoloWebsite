import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
      <div className='flex flex-col items-center gap-4 max-w-3xl mx-auto my-16' >
          <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>Give a customised gift to your loved ones with Yolo at just ₹599</h1>
          <p className='max-w-2xl text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] text-center'>Send money from your phone to theirs. <Link href="/" className='underline'>Learn more</Link> about how to give money to Greenlight kids.</p>
    </div>
  )
}

export default Hero
