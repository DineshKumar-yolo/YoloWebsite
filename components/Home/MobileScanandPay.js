"use client";

import React, { useState, useEffect } from "react";
import scanandpay from "../../public/ScanandPay.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const ScanandPayMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const accordionData = [
    {
      key: 1,
      title: "Pay Anywhere in Seconds",
      content:
        "Effortlessly manage transactions tailored for students and kids, making money matters stress-free.",
    },
    {
      key: 2,
      title: "Get Rewards for every payment",
      content:
        "Dive into financial literacy while having fun, turning learning into an adventure.",
    },
    {
      key: 3,
      title: "Subscribe to favourite OTT’s",
      content:
        "Enjoy your favorite shows and content hassle-free, without any complications.",
    },
    {
      key: 4,
      title: "Get internship opportunities",
      content:
        "Unlock doors to real-world experience and growth, kickstarting your career journey.",
    },
  ];

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < accordionData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    setIsLeftButtonDisabled(activeIndex === 0);
    setIsRightButtonDisabled(activeIndex === accordionData.length - 1);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(scrollRight, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="bg-[#0D0D0D]">
      <div className="flex flex-col gap-5 items-center justify-center w-full px-10 py-12 xl:py-40">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#7F7F7F] font-poppins text-sm text-center font-normal leading-[170%] tracking-[2px] uppercase">
            Our Features
          </p>
          <h1 className="text-white font-poppins text-xl text-center font-semibold leading-normal tracking-[-0.165px]">
            Discover All-in-One Convenience with{" "}
            <span className="bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-transparent bg-clip-text">
              Yolo
            </span>
          </h1>
        </div>
        <div className="flex items-start gap-3">
          <button
            className={`flex h-10 px-3 justify-center items-center text-lg border-gradient-bottom ${
              isLeftButtonDisabled
                ? "text-[#383838] opacity-50"
                : "text-[#585858]"
            }`}
            onClick={scrollLeft}
            disabled={isLeftButtonDisabled}
          >
            &lt;
          </button>
          <button
            className={`flex h-10 px-3 justify-center items-center text-lg border-gradient-bottom ${
              isRightButtonDisabled
                ? "text-[#383838] opacity-50"
                : "text-[#585858]"
            }`}
            onClick={scrollRight}
            disabled={isRightButtonDisabled}
          >
            &gt;
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full mb-4">
            <Image src={scanandpay} alt="Scan&Pay" />
          </div>
          <div className="flex items-center">
            <div className="w-full">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-5 bg-[#121212] flex flex-col items-center gap-4 rounded-[10px]"
                >
                  <h5 className="text-white font-poppins text-base text-center font-medium leading-[140%]">
                    {accordionData[activeIndex].title}
                  </h5>
                  <p className="text-white font-poppins text-sm text-center font-normal leading-[170%] tracking-[-0.165px]">
                    {accordionData[activeIndex].content}
                  </p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanandPayMobile;
