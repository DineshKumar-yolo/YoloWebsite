import React from 'react'
import group from "@/public/group.svg"
import netflix from "@/public/netflix.png"
import starbucks from "@/public/startbucks.png"
import macdonald from "@/public/McDonald's.png"
import puma from "@/public/puma.svg"
import dominos from "@/public/domino's.png"
import swiggy from "@/public/swiggy.png"
import zomato from "@/public/Zomato.png"
import spotify from "@/public/spotify.png"
import Image from 'next/image'

const Brands = () => {
  return (
      <div className='flex px-24 py-16 flex-col items-start gap-12 bg-[#F8F8F8]'>
          <h1 className='text-[#212426] font-poppins text-2xl font-normal leading-[170%]'>Brands we have worked with</h1>
          <div className='flex w-full justify-between gap-10 items-center flex-wrap mix-blend-darken'>
              <Image src={group}  alt='Brands'/>
              <Image src={starbucks}  alt='Brands'/>
              <Image src={netflix} alt='Brands' />
              <Image src={swiggy}  alt='Brands'/>
              <Image src={puma}  alt='Brands'/>
              <Image src={dominos}  alt='Brands'/>
              <Image src={macdonald}  alt='Brands'/>
              <Image src={zomato} alt='Brands' />
              <Image src={spotify}  alt='Brands'/>
          </div>
    </div>
  )
}

export default Brands
