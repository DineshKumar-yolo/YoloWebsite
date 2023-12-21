"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
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
      key: 1,
      question: "How does using my personal debit card for bill payments work?",
      mobileQuestion: "How to apply for prepaid card?",
      answer: "To register on Yolo, you can follow these steps...",
    },
    {
      key: 2,
      question: "Are there any hidden fees or charges when using this service?",
      mobileQuestion: "Can I trust the prepaid card service?",
      answer: "The answer to another frequently asked question...",
    },
    {
      key: 3,
      question: "How can I get started with your product?",
      mobileQuestion: "Are there any hidden fees or charges?",
      answer: "The answer to yet another frequently asked question...",
    },
    {
      key: 4,
      question: "Can I trust the prepaid card provided by your service?",
      mobileQuestion: "What benefits do I get?",
      answer: "The answer to one more frequently asked question...",
    },
    {
      key: 5,
      question:
        "What benefits do I get from using your service for bill payments?",
      mobileQuestion: "How can I get started with product?",
      answer: "The answer to the last frequently asked question...",
    },
  ];

  return (
    <div className="flex h-screen justify-center items-center bg-[#0D0D0D]">
      <div className="flex flex-col items-center self-stretch w-10/12 gap-10 m-auto">
        <div className="flex flex-col sm:flex-row md:items-start items-center justify-between sm:gap-3 gap-10 self-stretch">
          <div className="flex flex-col md:items-start items-center gap-3 flex-grid">
            <p className="text-white font-poppins md:text-base text-xs font-normal leading-[170%] tracking-[2px] opacity-50 uppercase">
              Got Questions ?
            </p>
            <h1 className="text-white font-poppins md:text-[40px] text-xl font-semibold leading-normal tracking-[-0.165px]">
              We got you covered
            </h1>
          </div>
          <Link href="/faq">
            <button className="flex md:w-[295px] min-w-[168px] md:px-8 px-6 md:py-4 py-3 justify-center items-center md:gap-[10px] gap-2 border-gradient-right bg-[#0D0D0D]">
              <p className="text-white md:text-base text-xs font-medium leading-[115%]">
                Have More Questions
              </p>
              <GoArrowRight className="md:text-2xl text-lg text-white" />
            </button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between w-full gap-5">
          {faqData.map((item, index) => (
            <div
            key={item.key} 
              className={`grid grid-col-1 gap-3 items-start self-stretch relative ${
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
                    className={`font-poppins font-normal md:hidden block leading-[142.857%] transition-all duration-300 ${
                      activeIndex === index
                        ? "text-[#676767] text-sm"
                        : "text-white text-xs"
                    }`}
                  >
                    {item.mobileQuestion}
                  </p>
                  <p
                    className={`font-poppins font-normal md:block hidden leading-[142.857%] transition-all duration-300 ${
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
