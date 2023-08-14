import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const About = () => {
  return (
      <div className='flex px-[100px] py-14 flex-col items-start gap-[10px] bg-[#151515]'>
          <div className='flex justify-end items-center gap-[108px]'>
              <div className='flex flex-col items-start gap-2 flex-grow flex-shrink-0'>
                  <p className='text-[#9C9C9C] font-poppins text-sm font-normal leading-[170%] tracking-[-0.165px]'>Join the Magic Waitlist</p>
                  <div className='w-[153px] h-1 relative bottom-1 rounded-[40px] bg-gradient-to-l from-[#D21A1A] to-[#171717]'></div>
                  <h1 className='text-[#F8F8F8] font-poppins w-[496px] text-[32px] leading-[150%] font-semibold'>Be One of the First to Experience Genie's Wonders!</h1>
              </div>
              <div className='flex items-start gap-14'>
                  <div className='flex flex-col gap-[14px] items-center'>
                      <h2 className='text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]'>40,000</h2>
                      <p className='text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>Users Waitlisted Already</p>
                  </div>
                  <div className='flex flex-col gap-[14px] items-center'>
                      <div className='flex gap-[14px] text-white items-center'>
                          <h2 className='text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]'>4.9</h2>
                          <AiFillStar className="text-[40px]" />
                      </div>
                      <p className='text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>Rating by early testers</p>
                  </div>
                  <div className='flex flex-col gap-[14px] items-center'>
                      <h2 className='text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]'>15+</h2>
                      <p className='text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>Trusted Partnerships</p>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default About
