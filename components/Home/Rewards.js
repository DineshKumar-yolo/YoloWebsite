import React from 'react'
import companies from '../../public/companies-logos.png'
import Image from 'next/image'

const Rewards = () => {
  return (
    <div className='flex xl:px-[100px] px-10 xl:py-[60px] py-8 flex-col items-start lg:gap-12 gap-8'>
      <p className='text-[#212426] font-poppins text-2xl font-normal leading-[170%]'>
        rewards from brands you love.
      </p>
      <Image src={companies} className='w-auto h-auto' />
    </div>
  )
}

export default Rewards
