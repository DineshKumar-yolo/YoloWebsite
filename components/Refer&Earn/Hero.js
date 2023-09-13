import React from 'react'
import Button from '../modules/Button'
import heroImg from "@/public/hero-phone-2.png"
import girl1 from "@/public/girl-1.png"
import girl2 from "@/public/girl-2.png"
import circle from "@/public/circle-1.png"
import thread from "@/public/thread.png"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex justify-center items-start lg:h-screen overflow-hidden w-full mb-36 mt-10 bg-transparent z-10'>
            <div className="flex flex-col items-center gap-6 justify-center">
                <h5 className='text-white text-center font-poppins xl:text-lg text-base font-normal leading-[170%] tracking-[2px] uppercase'>Refer and Earn ₹5000</h5>
                <h1 className='text-[#F8F8F8] text-center font-poppins xl:text-[44px] text-3xl font-semibold leading-[150%]'>
                    Earn by just inviting <br />
                    your friend to yolo
                </h1>
                <p className='text-[#9C9C9C] text-center text-base font-normal leading-[170%] tracking-[-0.165px]'>We are happy to answer your questions</p>
                <div className="flex gap-4 items-start flex-wrap justify-center w-full xl:w-auto">
                    <input type="number" className="py-3 px-3 text-[#3b3b3b] xl:w-[56%] w-[80%] text-base rounded-sm focus:outline-none leading-[150%] lowercase" placeholder="Enter mobile number" />
                    <Button buttonName={"Get Started"} />
                </div>
                <div className="hidden relative top-10 w-full lg:flex justify-center">
                    <div className="absolute z-10">
                        <Image src={heroImg} />
                    </div>
                    <Image src={girl1} className='absolute z-10 -translate-y-[50%] translate-x-[300%]' />
                    <Image src={thread} className='z-[9] w-[811px]' />
                        <Image src={circle} className='z-[9] absolute' />
                        <Image src={circle} className='z-[5] w-[500px] absolute' />
                    <Image src={circle} className='z-[2] w-[700px] absolute' />
                    <Image src={girl2} className='absolute z-10 translate-y-[30%] -translate-x-[300%]' />
                </div>
            </div>
        </div>
    )
}

export default Hero
