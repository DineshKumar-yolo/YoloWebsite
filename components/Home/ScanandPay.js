"use client"

import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
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
      key:1,
      title: "Pay Anywhere in Seconds",
      content: "Effortlessly manage transactions tailored for students and kids, making money matters stress-free."
    },
    {
      key:2,
      title: "Get Rewards for every payment",
      content: "Dive into financial literacy while having fun, turning learning into an adventure.",
    },
    {
      key:3,
      title: "Subscribe to favourite OTT’s",
      content: "Enjoy your favorite shows and content hassle-free, without any complications.",
    },
    {
      key:4,
      title: "Get internship opportunities",
      content: "Unlock doors to real-world experience and growth, kickstarting your career journey.",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center xl:min-h-screen">
      <div className="flex flex-col xl:flex-row gap-[123px] sm:w-[85.97%] w-full px-10 py-12 xl:py-40">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[2px] uppercase">
              our features
            </p>
            <h1 className="text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]">
              Discover All-in-One Convenience with {" "}
              <span className="bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-transparent bg-clip-text">
                Yolo
              </span>
            </h1>
          </div>
          {accordionData.map((item, index) => (
            <div key={accordionData.key} className={`flex flex-col relative justify-between items-stretch gap-4 transition-all duration-300 ease-in-out cursor-pointer ${activeIndex === index ? "bg-[#121212]" : ""}`}>
              <div
                key={index}
                className="flex justify-between items-stretch px-5 py-4 hover:bg-[#121212] cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className={`${activeIndex === index ? "text-[#676767] text-xs" : "text-white text-sm"} transition-all duration-300`}>{item.title}</p>
                {
                  activeIndex === index ? (
                    <>
                      <FiMinus
                        className="text-white text-[24px] transition-all duration-300"
                      />
                    </>
                  ) : (
                    <>
                      <RiAddLine
                        className="text-white text-[24px] transition-all duration-300"
                      />
                    </>
                  )
                }
              </div>
              <div
                className={`${activeIndex === index ? "relative translate-y-0 z-10" : "-z-10 absolute top-16 -translate-y-[50%]"
                  } left-0 transition-all ease-in-out duration-300 p-5`}
              >
                <p className="text-white text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:block flex-1 h-full">
          <Image src={scanandpay} alt="Scan&Pay"/>
        </div>
      </div>
    </div>
  );
};

export default ScanandPay;
