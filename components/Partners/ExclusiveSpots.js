import React from 'react'
import exclusive from "@/public/yoloExclusive.png"
import Image from 'next/image'

const ExclusiveSpots = () => {
    return (
        <div className='m-auto max-w-[1240px] flex lg:py-40 py-10 xl:px-0 px-10 flex-wrap items-center justify-between'>
            <div className="flex max-w-lg flex-col justify-center items-start gap-8 shrink-0">
                <div className='flex flex-col justify-center items-start gap-4'>
                    <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[2px] uppercase'>Opportunity</p>
                    <h3 className='text-white font-poppins text-4xl font-semibold leading-normal tracking-[-0./165px]'>
                        All eyes on you, Get a exclusive spot in our app
                    </h3>
                </div>
            </div>
            <div>
                <Image src={exclusive} />
            </div>
        </div>
    )
}

export default ExclusiveSpots
