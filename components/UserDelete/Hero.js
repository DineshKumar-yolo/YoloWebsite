import React from 'react'
import Link from 'next/link'
import Button from '../modules/Button'

const Hero = () => {
    return (
        <div className='flex justify-center items-center w-full mb-36 mt-10'>
            <div className="flex flex-col items-center gap-6 justify-center">
                <h5 className='text-white text-center font-poppins xl:text-lg text-base font-normal leading-[170%] tracking-[2px] uppercase'>Delete user</h5>
                <h1 className='text-[#F8F8F8] text-center font-poppins xl:text-[44px] text-3xl font-semibold leading-[150%]'>
                    Contact us to <br className='xs:block hidden' />Delete user
                </h1>
                <p className='text-[#9C9C9C] text-center text-base font-normal leading-[170%] tracking-[-0.165px]'>We will not be happy to leave</p>
            </div>
        </div>
    )
}

export default Hero
