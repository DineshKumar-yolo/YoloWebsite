import Link from 'next/link'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsChatLeftText } from "react-icons/bs"

const MoreFaqs = () => {
  return (
      <div className='w-full py-40 flex justify-center items-center'>
          <div className='max-w-[1240px] min-h-[398px] w-full shrink-0 rounded-2xl bg-[#121213] bg-design'>
              <div className='md:mx-28 flex flex-col items-start gap-10 my-14 xl:px-0 px-6'>
                  <div className="flex max-w-[505px] w-full flex-col justify-center items-center gap-4">
                      <h2 className='text-white font-poppins text-4xl font-semibold leading-normal tracking-[-0.165px]'>
                          Can&apos;t find what you&apos;re looking for?
                      </h2>
                      <p className="font-poppins text-[#878787] text-lg font-normal leading-[150%]">
                          We`&apos;`re here to help 24 hours a day, 7 days a week. Holiday hours may apply.
                      </p>
                  </div>
                  <div className='flex items-start gap-5'>
                      <Link href={"#"} className='border-gradient-right flex min-w-[168px] px-6 py-4 justify-center items-center gap-3 border bg-[#121213]'>
                          <p className='text-white font-poppins text-sm font-medium leading-[131.429%]'>Email Us</p>
                          <FaRegEnvelope className="text-white text-lg" />
                      </Link>
                      <Link href={"#"} className='border-gradient-right flex min-w-[168px] px-6 py-4 justify-center items-center gap-3 border bg-[#121213]'>
                          <p className='text-white font-poppins text-sm font-medium leading-[131.429%]'>Text us</p>
                          <BsChatLeftText className="text-white text-lg" />
                      </Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default MoreFaqs
