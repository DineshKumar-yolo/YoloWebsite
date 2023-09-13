import React from 'react'

const Hero = () => {
  return (
      <div className='flex flex-col items-center mx-auto gap-6 py-20 max-w-2xl'>
          <div className="flex flex-col items-center gap-4">
              <p className="text-white text-center font-poppins text-lg font-normal leading-[170%] tracking-[2px] uppercase">Press</p>
              <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>Yolo'smaking news.</h1>
              <p className='text-[#9C9C9C] text-center font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>Subscribe now and get quickest updates and weekly newsletter</p>
          </div>
          <div className="flex items-start gap-4 w-full flex-col sm:flex-row px-10 md:px-0">
              <input type="email" className='flex flex-1 px-3 py-4 bg-white focus:outline-none text-black font-poppins text-xs font-medium leading-[150%] lowercase' placeholder='Enter email id' />
              <button className='flex px-8 py-3 flex-1 justify-center items-center gap-3 bg-gradient-to-r from-[#BB0707] to-[#650B0B]'>
                  <p className='flex justify-center items-center text-white font-poppins text-base font-medium leading-[150%]'>Subscribe Newsletter</p>
              </button>
          </div>
    </div>
  )
}

export default Hero
