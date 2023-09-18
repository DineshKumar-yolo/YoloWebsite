import React from 'react'
import companies from '../../public/companies-logos.png'
import Image from 'next/image'

const Rewards = () => {
  return (
    <div className="flex xl:px-[100px] bg-[#F8F8F8] px-10 xl:py-[60px] py-8 flex-col items-start lg:gap-12 gap-8 overflow-hidden">
      <p className="text-[#212426] font-poppins text-2xl font-normal leading-[170%]">
        rewards from brands you love.
      </p>
      <Image
      alt='Rewards'
        src={companies}
        className="min-w-[1520px] h-auto animate-scrolling-photos"
      />
    </div>
  );
}

export default Rewards
