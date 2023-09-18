import React from 'react'
import Media1 from "@/public/media1.png"
import Media2 from "@/public/media2.png"
import Media3 from "@/public/media3.png"
import Media4 from "@/public/media4.png"
import Image from 'next/image'

const Media = () => {
  return (
      <div className='py-10 mx-auto max-w-[1030px] flex flex-col items-center gap-8 shrink-0'>
          <h1 className='text-white text-center font-poppins text-4xl font-semibold leading-[150%]'>In the Media</h1>
          <div className='flex flex-wrap w-full justify-between items-center'>
              <Image src={Media4} alt='Media' />
              <Image src={Media3} alt='Media' />
              <Image src={Media2} alt='Media' />
              <Image src={Media1}  alt='Media'/>
          </div>
    </div>
  )
}

export default Media
