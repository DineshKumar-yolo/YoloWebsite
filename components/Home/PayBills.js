import React from 'react'

const PayBills = () => {
  return (
      <div className='h-screen bg-black paybill-bg'>
          <div className='flex flex-col ml-[100px] justify-center items-start h-screen gap-8 w-[505px]'>
              <div className='flex flex-col items-start justify-center gap-5'>
                  <h1 className='text-[#F8F8F8] font-poppins text-[40px] leading-[150%] font-semibold'>Pay your bills with your personal debit cards</h1>
                  <p className='text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]'>Yes, It is not a dream we made it possible for you to get your first credit card</p>
              </div>
              <button className='flex px-[42px] py-3 justify-center items-center gap-[10px] bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-white font-poppins text-base font-medium leading-[150%]'>Apply Now</button>
          </div>
    </div>
  )
}

export default PayBills
