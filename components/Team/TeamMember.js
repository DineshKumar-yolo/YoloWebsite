import Image from 'next/image'
import React from 'react'
import member1 from "@/public/member1.png"
import member2 from "@/public/memeber2.png"
import member3 from "@/public/member3.png"

const TeamMember = () => {
  return (
      <div className='min-h-screen w-full flex justify-center items-center py-24'>
          <div className="flex flex-wrap xl:w-[1240px] flex-col items-center gap-20">
              <h1 className='text-white text-center font-poppins text-4xl font-semibold leading-[150%]'>Team Members</h1>
              <div className='flex flex-wrap px-12 w-full justify-between items-center self-stretch'>
                  <div className="relative">
                      <Image src={member1} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
                  <div className="relative">
                      <Image src={member2} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
                  <div className="relative">
                      <Image src={member3} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
              </div>
              <div className='flex flex-wrap px-12 w-full justify-between items-center self-stretch'>
                  <div className="relative">
                      <Image src={member1} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
                  <div className="relative">
                      <Image src={member2} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
                  <div className="relative">
                      <Image src={member3} className='' />
                      <div className="flex h-1/2 w-full py-3 flex-col justify-end items-center absolute left-0 bottom-0 text-white font-poppins bg-gradient-to-t from-[#0E0F10] to-transparent">
                          <p className='text-base font-bold leading-[150%]'>Mike Jones</p>
                          <p className="text-sm font-medium leading-[150%]">Former CEO of MySpace | Board Director</p>
                        </div>
                  </div>
              </div>
          </div>          
    </div>
  )
}

export default TeamMember
