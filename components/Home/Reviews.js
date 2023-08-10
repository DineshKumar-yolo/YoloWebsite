import Image from 'next/image'
import React from 'react'


const Review = ({reviewImg, reviewName, username}) => {
    return (
        <div className='flex flex-grid p-5 items-start rounded-[10px] bg-[#121213]'>
            <div className="flex pb-4 gap-[10px] self-stretch items-center">
                <Image src={reviewImg} />
                <div>
                    <h5 className='text-white font-poppins text-sm font-medium leading-[140%]'>{reviewName}</h5>
                    <p className='text-[#676767] font-inter text-sm font-normal leading-[140%]'>{username}</p>
                </div>
            </div>
        </div>
    )
}

const Reviews = () => {
  return (
      <div className='mt-[72px] py-24 px-12 flex flex-col justify-center items-center gap-10'>
        
    </div>
  )
}

export default Reviews
