import React from 'react'
import DownloadApp from "@/public/download-app.png"
import PlayStore from '../../public/play-store.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
      <div className='flex justify-between items-center mx-24'>
          <div className="flex flex-1 max-w-xl flex-col justify-center items-start gap-6">
              <div className="flex flex-col justify-center items-start gap-4">
                  <p className='text-white font-poppins text-lg font-normal leading-[150%] uppercase'>
                      Download YOLO APP
                  </p>
                  <h1 className='text-[#F8F8F8] font-poppins lg:text-5xl text-3xl font-semibold leading-[150%]'>
                      Get the yolo app now, 
                      and enjoy using!
                  </h1>
                  <Link href={"/download"}>
                      <Image src={PlayStore} alt='PlayStore' />
                  </Link>
              </div>
          </div>
          <div className='flex-1 max-w-xl shrink-0 relative hidden lg:flex items-center justify-center z-10'>
              <div className="absolute w-[500px] h-[500px] bottom-[10%] -z-10 rounded-full bg-gradient-to-b from-red-900 opacity-20 to-transparent"></div>
              <div className="absolute w-[550px] h-[550px] bottom-[8%] -z-10 rounded-full bg-gradient-to-b from-red-900 opacity-10 to-transparent"></div>
              <div className="absolute w-[600px] h-[600px] bottom-[10%] -z-10 rounded-full bg-gradient-to-b from-red-900 opacity-5 to-transparent"></div>
              <Image src={DownloadApp} className='z-10' alt='Download App' />
          </div>
    </div>
  )
}

export default Hero
