"use client"

import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import scanandpay from "../../public/ScanandPay.svg";
import Image from "next/image";

const ScanandPay = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionData = [
    {
      title: "Pay Anywhere in Seconds",
      content:
        "Investors can fill up the join form on Grow Venture or get referred by any other investors (already on the platform). In both cases, our Investors relation team will review and approve your credentials before providing you the login for the platform...",
    },
    {
      title: "Get Rewards for every payment",
      content:
        "Investors can fill up the join form on Grow Venture or get referred by any other investors (already on the platform). In both cases, our Investors relation team will review and approve your credentials before providing you the login for the platform...",
    },
    {
      title: "Subscribe to favourite OTT’s",
      content:
        "Investors can fill up the join form on Grow Venture or get referred by any other investors (already on the platform). In both cases, our Investors relation team will review and approve your credentials before providing you the login for the platform...",
    },
    {
      title: "Get internship opportunities",
      content:
        "Investors can fill up the join form on Grow Venture or get referred by any other investors (already on the platform). In both cases, our Investors relation team will review and approve your credentials before providing you the login for the platform...",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center xl:h-screen">
      <div className="flex flex-col xl:flex-row gap-[123px] sm:w-[85.97%] w-full px-10 py-12 xl:py-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[2px] uppercase">
              our features
            </p>
            <h1 className="text-white font-poppins text-[40px] w-3/4 font-semibold leading-normal tracking-[-0.165px]">
              Discover all the Convenience with{" "}
              <span className="bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-transparent bg-clip-text">
                Yolo
              </span>
            </h1>
          </div>
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-stretch pt-[30px] gap-[30px] px-5 relative hover:bg-[#121212] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-white font-poppins text-sm">{item.title}</p>
              <RiAddLine
                className={`text-white text-[24px] transition-all duration-300 ${activeIndex === index ? "transform rotate-45" : ""
                  }`}
              />
              <div
                className={`absolute ${activeIndex === index ? "block z-10" : "hidden"
                  } top-16 left-0 transition-all ease-in-out duration-300 bg-[#0D0D0D] w-full p-4`}
              >
                <p className="text-white text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:block">
          <Image src={scanandpay} />
        </div>
      </div>
    </div>
  );
};

export default ScanandPay;
