"use client";

import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";

const MobileNavbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className="flex px-5 sm:py-10 py-4 items-center justify-between gap-3 text-white w-full relative">
      <Link href="/">
        <Image src={logo} alt="YOLO" className="h-6 w-20" />
      </Link>
      <button onClick={() => setisMenuOpen(!isMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H20M13 18H20"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={`${
          !isMenuOpen ? "-translate-y-[100%] -z-10" : "translate-y-0 z-10"
        } shadow-2xl transition-all duration-300 w-full md:py-10 py-7 m-0 absolute top-0 left-0 flex flex-col items-center gap-8 bg-gradient-to-b from-[#BB0707] via-20% to-[#650B0B]`}
      >
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="flex items-end w-full justify-end px-5 text-white text-2xl"
        >
          <VscChromeClose />
        </button>
        <Link
          href="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="text-[#CFCFCF] font-poppins text-lg font-normal tracking-[-0.165px]"
        >
          Features
        </Link>
        <Link
          href="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="text-[#CFCFCF] font-poppins text-lg font-normal tracking-[-0.165px]"
        >
          Plans
        </Link>
        <Link
          href="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="text-[#CFCFCF] font-poppins text-lg font-normal tracking-[-0.165px]"
        >
          Learn
        </Link>
        <Link
          href="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="text-[#CFCFCF] font-poppins text-lg font-normal tracking-[-0.165px]"
        >
          Who we are
        </Link>
        <Link
          href="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="text-[#CFCFCF] font-poppins text-lg font-normal tracking-[-0.165px]"
        >
          Partnerships
        </Link>

        {/* Need Approval for this beacause its looks nasty */}
        {/* <div className="border-gradient-bottom my-6 flex justify-center items-center h-10 bg-transparent text-[#8A8989] px-3">
                  <button className="flex w-[20px] p-[1px] items-start shrink-0">
                      <BiLogoPlayStore />
                  </button>
                  <button className="flex w-[20px] px-[3px] py-[1.5px] items-start shrink-0">
                      <BiLogoApple />
                  </button>
              </div> */}
      </div>
    </div>
  );
};

export default MobileNavbar;
