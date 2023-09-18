import React from 'react'
import Button from '../modules/Button'
import instagram from "@/public/instgram.png"
import discord from "@/public/discord.svg"
import users from "@/public/users4.svg"
import Image from 'next/image'

const BrandsStandout = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='flex max-w-[1240px] flex-col xl:px-0 px-10 py-10 xl:py-24 m-auto items-start gap-20 justify-center'>
                <div className="flex w-full flex-col lg:flex-row gap-5 items-start justify-between self-stretch">
                    <h3 className="flex flex-1 flex-grid text-4xl text-[#0D0D0D] font-semibold leading-normal">We make your brand stand out through every social platform</h3>
                    <div className='flex-1 justify-end flex'>
                        <Button buttonName={"Let’s Collaborate"} />
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap items-center gap-5'>
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom bg-[#F8F8F8]">
                        <div className="flex flex-col items-start gap-7">
                            <Image src={instagram} alt='Brands' />
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    Instagram
                                </h1>
                                <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]'>
                                    Creating buzz throughstories and posts
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom bg-[#F8F8F8]">
                        <div className="flex flex-col items-start gap-7">
                            <Image src={discord} alt='Brands' />
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    Discord
                                </h1>
                                <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]'>
                                    Sparking conversationsand spreading the word                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom bg-[#F8F8F8]">
                        <div className="flex flex-col items-start gap-7">
                            <Image src={users} alt='Brands'/>
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    Community
                                </h1>
                                <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]'>
                                    every month our experts team conducts webinars                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandsStandout
