"use client";

import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import eductionFeatures from "../../public/educational-features.png";
import Image from "next/image";
import { BiMinus } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const workData = [
    {
      key: 1,
      question: "Digital Hostel",
      answer: "Investors can fill up the join form on groww Venture or get referred by any other Investor (already on the platform). In both cases, our Investor Relations team will review and approve your credentials before providing you the login for the platform..",
    },
    {
      key: 2,
      question: "Digital Cafeterial",
      answer: "Investors can fill up the join form on groww Venture or get referred by any other Investor (already on the platform). In both cases, our Investor Relations team will review and approve your credentials before providing you the login for the platform..",
    },
    {
      key: 3,
      question: "Digital Onboarding-Paperless Campus",
      answer: "Investors can fill up the join form on groww Venture or get referred by any other Investor (already on the platform). In both cases, our Investor Relations team will review and approve your credentials before providing you the login for the platform..",
    },
    {
      key: 4,
      question: "Hybrid Card",
      answer: "Investors can fill up the join form on groww Venture or get referred by any other Investor (already on the platform). In both cases, our Investor Relations team will review and approve your credentials before providing you the login for the platform..",
    },
  ];

  const WorkList = () =>{
    return workData.map((item, index) => (
      <div
      key={item.key} 
        className={`grid grid-col-1 gap-3 items-start self-stretch relative border-b border-white border-opacity-10 ${
          activeIndex === index ? "bg-[#121212]" : ""
        }`}
      >
        <div
          key={index}
          className="flex py-4 flex-col items-start gap-4 self-stretch cursor-pointer hover:bg-[#121212]"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between px-5 items-start self-stretch">
            <p
              className={`font-poppins font-normal block leading-[142.857%] transition-all duration-300 ${
                activeIndex === index
                  ? "text-[#676767] text-xs"
                  : "text-white text-sm"
              }`}
            >
              {item.question}
            </p>
            {activeIndex === index ? (
              <>
                <BiMinus className="text-white text-lg shrink-0 transition-all duration-300" />
              </>
            ) : (
              <>
                <VscAdd className="text-white text-lg shrink-0 transition-all duration-300" />
              </>
            )}
          </div>
        </div>
        <div
          className={`${activeIndex === index ? "relative translate-y-0 z-10" : "-z-10 absolute top-16 -translate-y-[100%]"
            } transition-all ease-in-out duration-300 p-4`}
        >
          <p className="text-white text-sm">{item.answer}</p>
        </div>
      </div>
    ))
  }

  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center lg:h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[12%] sm:w-[85.97%] w-full px-10 py-12 lg:py-0">
        <div className="flex flex-col gap-8 flex-1 xl:w-5/12 shrink-0">
          <div className="flex flex-col gap-4">
            <p className="text-[#7F7F7F] font-poppins text-base font-normal tracking-[2px] uppercase">
              our features
            </p>
            <h1 className="text-white font-poppins text-4xl max-w-sm font-semibold leading-normal tracking-[-0.165px]">
              Your digital partner at every step
            </h1>
          </div>
          <WorkList />
          
        </div>
        <div className="flex-1">
          <Image src={eductionFeatures} className="shrink-0" alt="Work" />
        </div>
      </div>
    </div>
  );
};

export default Works;
