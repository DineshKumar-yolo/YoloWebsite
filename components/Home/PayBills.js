import React from 'react'
import Button from '../modules/Button'
import Image from 'next/image'
import creditCard from '@/public/creditcard.png'

const PayBills = () => {
  return (
    <div className="h-screen bg-black paybill-bg">
      <div className="flex flex-col px-10 lg:ml-16 py-20 justify-end lg:justify-center lg:items-start items-center h-screen gap-8 lg:max-w-[505px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-[#F8F8F8] font-poppins md:text-4xl lg:text-left text-center text-xl leading-[150%] font-semibold">
            Pay bills with your <br className="hidden md:block" /> personal prepaid card
          </h1>
          <p className="text-[#9C9C9C] font-poppins md:text-lg lg:text-left text-center text-sm font-normal leading-[170%] tracking-[-0.165px]">
            Your First Prepaid Card: Turning Dreams into Reality
          </p>
        </div>
        <Button buttonName={"Apply Now"} />
      </div>
    </div>
  );
}

export default PayBills
