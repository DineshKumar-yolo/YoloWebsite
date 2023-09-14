import React from 'react'
import Button from '../modules/Button'

const Hero = () => {
    return (
        <div className='flex justify-center items-center w-full mb-36 mt-10'>
            <div className="flex flex-col items-center gap-6 justify-center">
                <h5 className='text-white text-center font-poppins xl:text-lg text-base font-normal leading-[170%] tracking-[2px] uppercase'>FAq’s</h5>
                <h1 className='text-[#F8F8F8] text-center font-poppins xl:text-[44px] text-3xl font-semibold leading-[150%]'>
                    Struggling in knowing us
                </h1>
                <p className='text-[#9C9C9C] text-center text-base font-normal leading-[170%] tracking-[-0.165px]'>We are happy to answer your questions</p>
                <div className="flex gap-4 items-start flex-wrap justify-center w-full xl:w-auto">
                    <input type="number" className="py-3 px-3 text-[#3b3b3b] xl:w-[56%] w-[80%] text-base rounded-sm focus:outline-none leading-[150%] lowercase" placeholder="Enter mobile number" />
                    <Button buttonName={"Get Started"} />
                </div>
            </div>
        </div>
    )
}

export default Hero
