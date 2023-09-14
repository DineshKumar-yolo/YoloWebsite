import React from 'react'
import debitCard from '../../public/Debit_Card.png'
import Button from '../modules/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center px-10 lg:px-0'>
            <div className='inline-flex flex-col items-center gap-20 w-[706px]'>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex flex-col items-center gap-4'>
                        <p className='text-white text-center font-poppins text-lg font-normal leading-[170%] tracking-[2px] uppercase'>Unlocking Financial Freedom</p>
                        <h1 className='text-[#F8F8F8] text-center font-poppins text-[44px] font-semibold leading-[150%]'>Your Reliable Debit Card Companion</h1>
                    </div>
                    <Button buttonName={"Apply Now"} />
                </div>
                <div><Image src={debitCard} /></div>
            </div>
        </div>
    )
}

export default Hero
