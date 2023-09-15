import React from 'react'
import girl from "@/public/girl-3.png"
import task1 from "@/public/tasksvg.svg"
import task2 from "@/public/tasksvg2.svg"
import Button from '../modules/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col items-center px-10 lg:px-0'>
            <div className="flex flex-col items-center gap-6 max-w-2xl py-10">
                <h1 className='text-[#F8F8F8] text-center font-poppins text-4xl font-semibold'>
                    Earn and learn with yolo with tasks in just 5-10 minutes
                </h1>
                <div className="sm:w-2/3 flex flex-col w-full sm:flex-row items-center gap-4 sm:items-start">
                    <input
                        type="number"
                        className="py-3 px-3 text-[#3b3b3b] sm:w-7/12 w-full xl:text-base text-sm rounded-sm focus:outline-none leading-[150%] lowercase"
                        placeholder="Enter mobile number"
                    />
                    <Button buttonName={"Get Started"} />
                </div>
            </div>
            <div className="flex">
                <Image src={task2} className='relative -top-24 lg:block hidden' />
                <Image src={girl} />
                <Image src={task1} className='lg:block hidden' />
            </div>
        </div>
    )
}

export default Hero
