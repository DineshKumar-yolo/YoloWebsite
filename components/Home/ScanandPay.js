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
      key: 1,
      title: "Pay with Ease",
      content: "Pay effortlessly for seamless and convenient transactions."
    },
    {
      key: 2,
      title: "Earn Yolo Coins",
      content: "Get Yolo Coins with every transaction for added rewards.",
    },
    {
      key: 3,
      title: "OTT Subscription",
      content: "Access exclusive OTT subscriptions hassle-free and easily.",
    },
    {
      key: 4,
      title: "Internship Opportunities",
      content: "Explore exciting internship opportunities for career growth and experience.",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center xl:min-h-screen">
      <div className="flex flex-col xl:flex-row gap-[123px] sm:w-[85.97%] w-full items-center px-10 py-12 xl:py-40">
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
          <div>
            {accordionData.map((item, index) => (
              <div
                key={accordionData.key}
                className={`flex flex-col relative justify-center  items-stretch px-5 py-[30px] transition-all  duration-700 ease-in-out hover:bg-[#121212] border-b-[0.3px] border-[#1E1E1E] cursor-pointer ${activeIndex === index ? "bg-[#121212]" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div key={index} className="flex justify-between items-stretch transition-all ease-in-out duration-700" >
                  <p className={`${activeIndex === index ? "text-[#676767] text-xs" : "text-white text-sm"} transition-all ease-in-out duration-700`}>{item.title}</p>
                  {
                    activeIndex === index ? (
                      <>
                        <FiMinus
                          className="text-white text-[24px] transition-all duration-700"
                        />
                      </>
                    ) : (
                      <>
                        <RiAddLine
                          className="text-white text-[24px] transition-all duration-700"
                        />
                      </>
                    )
                  }
                </div>
                <div
                  className={`${activeIndex === index ? "relative z-10 h-10" : "-z-10 overflow-hidden h-0"
                    } transition-all linear duration-700 `}
                >
                  <p className="text-white text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:block flex-1 h-full">
          <Image src={scanandpay} alt="Scan&Pay" />
        </div>
      </div>
    </div>
  );
};

export default ScanandPay;
