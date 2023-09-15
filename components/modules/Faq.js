"use client"

import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { VscAdd } from "react-icons/vsc";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "How do I register on Yolo?",
      answer: "To register on Yolo, you can follow these steps...",
    },
    {
      question: "Another FAQ Question",
      answer: "The answer to another frequently asked question...",
    },
    {
      question: "Yet Another FAQ Question",
      answer: "The answer to yet another frequently asked question...",
    },
    {
      question: "One More FAQ Question",
      answer: "The answer to one more frequently asked question...",
    },
    {
      question: "Last FAQ Question",
      answer: "The answer to the last frequently asked question...",
    },
  ];

  return (
    <div className="flex h-screen justify-center items-center bg-[#0D0D0D]">
      <div className="flex flex-col items-center self-stretch w-10/12 gap-10 m-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between sm:gap-3 gap-10 self-stretch">
          <div className="flex flex-col items-start gap-3 flex-grid">
            <p className="text-white font-poppins md:text-base text-sm font-normal leading-[170%] tracking-[-0.165px] opacity-50">
              Got Questions ?
            </p>
            <h1 className="text-white font-poppins md:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
              We got you covered
            </h1>
          </div>
          <Link href="/faq">
            <button className="flex md:w-[295px] min-w-[168px] px-8 py-4 justify-center items-center gap-[10px] border-gradient-right bg-[#0D0D0D]">
              <p className="text-white md:text-base text-sm font-medium leading-[115%]">
                Have More Questions
              </p>
              <GoArrowRight className="text-2xl text-white" />
            </button>
          </Link>
        </div>
        <div className="flex justify-start flex-col flex-wrap items-start gap-5 self-stretch md:max-h-[252px] h-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch relative cursor-pointer hover:bg-[#121212]"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between px-5 items-start self-stretch">
                <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                  {item.question}
                </p>
                <VscAdd
                  className={`text-white text-sm transition-all duration-300 ${
                    activeIndex === index ? "transform rotate-45" : ""
                  }`}
                />
              </div>
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } transition-all ease-in-out duration-300 bg-[#0D0D0D] w-full p-4 z-10 absolute top-16`}
              >
                <p className="text-white text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
