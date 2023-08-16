import React from 'react'
import Button from '../modules/Button'

const PayBills = () => {
  return (
      <div className='h-screen bg-black paybill-bg'>
          <div className='flex flex-col ml-[7%] justify-center items-start h-screen gap-8 w-[505px]'>
              <div className='flex flex-col items-start justify-center gap-5'>
                  <h1 className='text-[#F8F8F8] font-poppins text-[40px] leading-[150%] font-semibold'>Pay your bills with your personal debit cards</h1>
                  <p className='text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]'>Yes, It is not a dream we made it possible for you to get your first credit card</p>
              </div>
              <Button buttonName={"Apply Now"} />
          </div>
    </div>
  )
}

export default PayBills
