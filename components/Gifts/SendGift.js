import React from 'react'
import logo from "@/public/logo.svg"
import debitCard from "@/public/Debit_Card.png"
import Image from 'next/image'
import Button from '../modules/Button'

const SendGift = () => {
    return (
        <div className='max-w-[1240px] rounded-2xl bg-[#121213] bg-design mx-auto'>
            <div className='flex xl:px-52 flex-col xl:flex-row xl:py-32 p-10 gap-32 items-start'>
                <div className="flex flex-col flex-1 items-start gap-8">
                    <div className="flex items-center gap-6">
                        <Image src={logo} />
                        <Button buttonName={"Gift"} styles={"rounded-xl"} />
                    </div>
                    <Image src={debitCard} />
                </div>
                <div className="flex flex-col flex-1 items-start gap-10">
                    <div className='flex flex-col items-start gap-6'>
                        <div className="flex flex-col w-full items-start gap-1 self-stretch border-b border-white border-opacity-50">
                            <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-20'>Who is this gift for</label>
                            <input type="text" className='text-white font-poppins text-base font-semibold opacity-50 focus:outline-none bg-transparent' placeholder='Shivansh Agarwal' />
                        </div>
                        <div className="flex flex-col items-start gap-2 self-stretch">
                            <p className='text-white font-poppins text-sm font-medium opacity-20'>How you would like to get this delivered</p>
                            <div className="flex items-start gap-2">
                                <button className="flex px-6 py-2 items-center border-t border-l border-r border-white rounded-full">
                                    <p className='text-white text-center font-poppins text-xs font-normal lowercase'>Text Message</p>
                                </button>
                                <button className="flex px-6 py-2 items-center border-t border-l border-r border-white rounded-full">
                                    <p className='text-white text-center font-poppins text-xs font-normal lowercase'>print</p>
                                </button>
                                <button className="flex px-6 py-2 items-center border-t border-l border-r border-white rounded-full">
                                    <p className='text-white text-center font-poppins text-xs font-normal lowercase'>email</p>
                                </button>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex flex-col items-start gap-1 self-stretch">
                                    <p className='text-white font-poppins text-sm font-medium opacity-20'>What personal message would you like to send</p>
                                    <p className='text-white font-poppins text-sm font-medium opacity-50'>Hope you enjoyed your order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button buttonName={"Let’s Collaborate"} />
                </div>
            </div>
        </div>
    )
}

export default SendGift
