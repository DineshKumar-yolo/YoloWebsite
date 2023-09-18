import React from 'react'
import lightning from "@/public/Lightning.svg"
import clock from "@/public/clock.svg"
import brain from "@/public/brain.svg"
import Image from 'next/image';

const Mores = [
    {
        key:1,
        image: lightning,
        title: "instant amount transfer",
        content: "Once your task is verified get instant money directly to your bank account.",
    },
    {
        key:2,
        image: clock,
        title: "earn more in less time",
        content: "Complete tasks in 5-10 mins and earn huge.",
    },
    {
        key:3,
        image: brain,
        title: "learn while your earn",
        content: "By completing these tasks learn with the motivation of earning",
    },
];

const LearnMore = () => {
    return (
        <div className='max-w-[1240px] flex lg:my-24 mx-auto p-10 lg:p-0 gap-20 flex-col items-center'>
            <h2 className="w-full text-left font-poppins text-4xl font-semibold text-white">Learn more about tasks</h2>
            <div className="flex w-full flex-wrap items-center gap-5 h-auto">
                {
                    Mores && Mores.map((more) => (
                        <div key={more.key} className='flex px-5 lg:px-0 flex-col justify-center items-center max-w-sm w-full gap-10 border-gradient-bottom h-[326px] bg-[#121213]'>
                            <div className='max-w-xs flex flex-col items-start gap-8'>
                                <Image src={more.image} alt='LearnMore'/>
                                <div className="flex flex-col items-start gap-5">
                                    <h5 className='text-white font-poppins text-2xl font-semibold lowercase'>{more.title}</h5>
                                    <p className='max-w-[290px] text-[#9C9C9C] text-base font-normal'>{more.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LearnMore
