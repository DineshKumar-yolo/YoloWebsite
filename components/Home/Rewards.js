import React from 'react'
import companies from '../../public/companies-logos.png'
import Image from 'next/image'

const Rewards = () => {
  return (
    <div className='flex px-[100px] py-[60px] flex-col items-start gap-12'>
      <p className='text-[#212426] font-poppins text-2xl font-normal leading-[170%]'>
        rewards from brands you love.
      </p>
      <Image src={companies} />
    </div>
  )
}

export default Rewards
