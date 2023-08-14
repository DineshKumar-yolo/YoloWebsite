import React from 'react'
import Button from '../modules/Button'

const Hero = () => {
  return (
      <div className='flex mb-24 mt-12 flex-col gap-6 justify-center items-center'>
          <div className='flex flex-col gap-4 items-center'>
              <h5 className='text-white text-center font-poppins text-lg font-normal leading-[170%] tracking-[2px] uppercase'>Blogs</h5>
              <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>
                  Learn more about <br />
                  financesas a teenager
              </h1>
              <p className='text-[#9C9C9C] text-center text-base font-normal leading-[170%] tracking-[-0.165px]'>Subscribe now for free and get knowledge about finance</p>
          </div>
          <div className="flex gap-4 items-start">
              <input type="number" className="py-3 px-3 text-[#3b3b3b] w-[56%] text-base rounded-sm focus:outline-none leading-[150%] lowercase" placeholder="Enter mobile number" />
              <Button buttonName={"Get Started"} />
          </div>
    </div>
  )
}

export default Hero
