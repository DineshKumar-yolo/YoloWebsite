import React from 'react'
import FreindsRefer from "@/public/freinds-refer.png"
import Image from 'next/image'

const ReferFreinds = () => {
  return (
      <div className='flex lg:py-40 py-20 flex-col lg:flex-row lg:px-24 px-12 justify-center gap-[10%] items-center bg-white'>
          <div className="flex-1 flex flex-col gap-8 max-w-xl max-h-auto rounded-2xl">
              <h2 className='text-[#212426] lg:hidden block font-poppins text-[40px] font-semibold leading-[150%]'>Teens can also invite to their friends</h2>
              <Image src={FreindsRefer} alt='Refer' />
          </div>
          <div className='flex flex-1 flex-col max-w-lg justify-center items-center gap-8 shrink-0'>
              <h2 className='text-[#212426] lg:block hidden font-poppins text-[40px] font-semibold leading-[150%]'>Teens can also invite to their friends</h2>
              <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px] my-8 lg:my-0'>
                  Invite your friends by app and get amazing rewards and YOLO Coins and use them for shopping and much much more...
              </p>
          </div>
    </div>
  )
}

export default ReferFreinds
