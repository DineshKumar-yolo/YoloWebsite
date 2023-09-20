"use client"

import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Navtop = () => {
    const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${
        isClicked ? "-translate-y-[100%] -z-10 absolute w-screen" : "translate-y-0 z-0 relative w-screen"
      } transition-all duration-500 flex bg-gradient-to-r from-[#BB0707] to-[#650B0B] m-auto items-center px-5 sm:px-0 justify-center py-1.5 gap-2`}
    >
      <p className="sm:hidden block text-center text-white text-sm font-medium leading-[170%]">One month, on us. Download the app today</p>
      <p className='sm:block hidden font-poppins text-white text-xs md:text-sm leading-[170%] font-normal'>One months, on us. <span className='font-medium'>Download the app today for a one-month trial</span></p>
      <button className='text-xl text-white' onClick={() => setIsClicked(!isClicked)}>
        <RxCross2 />
      </button>
    </div>
  );
}

export default Navtop
