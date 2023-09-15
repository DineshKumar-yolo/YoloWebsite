import React from 'react'
import tasksApplication from "@/public/taskApplication.svg"
import Image from 'next/image'

const Applications = () => {
  return (
      <div className='xl:my-40 mx-auto p-10 flex flex-wrap-reverse gap-10 xl:p-0 max-w-[1240px] items-center justify-between'>
          <Image src={tasksApplication} />
          <div className='flex flex-col justify-center items-start gap-4 max-w-sm'>
              <p className='text-[#7F7F7F] font-poppins text-base font-normal tracking-[2px] uppercase'>Done with tasks ?</p>
              <h2 className='text-white font-poppins text-4xl font-semibold'>Apply to your dream company through yolo</h2>
          </div>
    </div>
  )
}

export default Applications
