import React from 'react'
import heroImage from '../../public/hero-phone-2.png'
import PlayStore from '../../public/play-store.png'
import AppStore from '../../public/app-store.png'
import Image from 'next/image'

const AboutYoloApp = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#0D0D0D]'>
            <div className='w-10/12 h-[398px] flex gap-[181px] m-auto justify-center items-end shrink-0 bg-[#121213] rounded-2xl bg-design'>
                <div className='flex flex-col gap-8 items-start justify-center my-auto'>
                    <div className='flex w-[505px] flex-col justify-center items-start gap-[14px]'>
                        <h1 className='text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]'>Get the YOLO App Now.</h1>
                        <p className='text-[#878787] font-poppins text-lg font-normal leading-[150%]'>With this platform,  you can access to all the features, and learn investing and saving</p>
                    </div>
                    <div className='inline-flex items-start gap-5'>
                        <button>
                            <Image src={PlayStore} />
                        </button>
                        <button>
                            <Image src={AppStore} />
                        </button>
                    </div>
                </div>
                <Image src={heroImage} className='w-[344px] h-[526px] shrink-0' />
            </div>
        </div>
    )
}

export default AboutYoloApp
