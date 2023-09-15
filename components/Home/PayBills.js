import React from 'react'
import Button from '../modules/Button'
import Image from 'next/image'
import creditCard from '@/public/creditcard.png'

const PayBills = () => {
  return (
      <div className='h-screen bg-black paybill-bg'>
          <div className='flex flex-col xl:ml-[7%] px-10 justify-center items-start h-screen gap-8 xl:w-[505px]'>
              <div className='flex flex-col items-start justify-center gap-5'>
                  <h1 className='text-[#F8F8F8] font-poppins md:text-[40px] text-2xl leading-[150%] font-semibold'>Pay bills with your personal prepaid card</h1>
                  <p className='text-[#9C9C9C] font-poppins md:text-lg text-sm font-normal leading-[170%] tracking-[-0.165px]'>Yes, It is not a dream we made it possible for you to get your first credit card</p>
              </div>
        <Button buttonName={"Apply Now"} />
        <Image src={creditCard} alt="creditcard" className='bg-transparent block sm:hidden' />
          </div>
    </div>
  )
}

export default PayBills
