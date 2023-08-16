"use client"

import Link from 'next/link'
import AdminLogin from '../../../public/adminloginimage.png'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import { useState } from 'react'

const Login = () => {
    const [clicked, setClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputFocus = () => {
        setClicked(true);
    }

    const handleInputBlur = () => {
        if (inputValue === '') {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='flex flex-col justify-start items-start'>
                <Link href="/admin" className='absolute top-8 left-6 z-10'>
                    <Image src={logo} className='w-[98px] h-[29px] shrink-0' />
                </Link>
                <Image src={AdminLogin} className='filter grayscale h-screen' />
            </div>
            <div className='flex justify-center items-center mx-auto'>
                <div className='flex flex-col items-start gap-6'>
                    <div className='flex flex-col items-start gap-[30px]'>
                        <h1 className='text-[#45474A] font-poppins text-4xl font-bold leading-[150%]'>Log In</h1>
                        <div className="flex flex-col items-start gap-4">
                            <div className={`relative flex w-[450px] flex-col transition-all duration-150 ${clicked ? 'py-2' : 'py-4'} px-3 justify-center items-start gap-[1] rounded-md bg-[#F8F8F8]`}>
                                <label htmlFor="email" className={`text-[#909194] font-poppins ${clicked ? 'relative top-0 z-0' : 'absolute top-[30%] z-10'}`}>Email ID</label>
                                <input type="email" id='input' onChange={handleInputChange} className='bg-transparent focus:outline-none z-10 focus:z-0' onFocus={handleInputFocus} onBlur={handleInputBlur} />
                            </div>
                            <div className={`relative flex w-[450px] flex-col transition-all duration-100 ${clicked ? 'py-2' : 'py-4'} px-3 justify-center items-start gap-[1] rounded-md bg-[#F8F8F8]`}>
                                <label htmlFor="email" className={`text-[#909194] font-poppins ${clicked ? 'relative top-0 z-0' : 'absolute top-[30%] z-10'}`}>Password</label>
                                <input type="email" id='input' onChange={handleInputChange} className='bg-transparent focus:outline-none z-10 focus:z-0' onFocus={handleInputFocus} onBlur={handleInputBlur} />
                            </div>
                            <Link href="/admin" className='text-[#909194] font-poppins text-xs font-normal leading-[150%]'>forget password ?</Link>
                        </div>
                    </div>
                    <Link href="/admin">
                        <button className='flex w-[450px] bg-[#BB0707] px-5 py-3 gap-3 items-center justify-center text-center text-white font-poppins text-sm font-normal leading-[150%]'>Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
