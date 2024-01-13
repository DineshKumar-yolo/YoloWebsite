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
      question: "How do I earn Yolo Coins?",
      mobileQuestion: "How do I earn Yolo Coins?",
      answer: "You earn Yolo Coins with every eligible transaction made on the Yolo platform. The more you use Yolo for payments, the more coins you accumulate, unlocking exciting rewards and benefits.",
    },
    {
      key: 2,
      question: "Can I use Yolo Coins for purchases?",
      mobileQuestion: "Can I use Yolo Coins for purchases?",
      answer: "Yes, definitely! Yolo Coins can be used within the platform for various purposes, including discounted purchases, accessing premium features, participating in giveaways, and more.",
    },
    {
      key: 3,
      question: "How can I subscribe to OTT platforms using Yolo?",
      mobileQuestion: "How can I subscribe to OTT platforms using Yolo?",
      answer: "It's simple! Within the Yolo platform, explore the OTT subscription section, choose your preferred service, and complete the subscription process hassle-free using your Yolo account.",
    },
    {
      key: 4,
      question: "What kind of internship opportunities does Yolo offer?",
      mobileQuestion: "What kind of internship opportunities does Yolo offer?",
      answer: "Yolo provides a diverse range of internship opportunities across various industries. Explore the 'Internship Opportunities' section on our platform to find positions suitable for your interests and skills.",
    },
    {
      key: 5,
      question: "How can I order a prepaid card from Yolo?",
      mobileQuestion: "How can I order a prepaid card from Yolo?",
      answer: "Ordering a prepaid card through Yolo is easy. Simply navigate to the 'Order Card' section, add your address and make payment, and it'll be delivered to your provided address. Enjoy convenient transactions with your Yolo prepaid card!",
    },
  ];

  return (
    <div className="flex h-auto lg:h-screen my-10 lg:my-0 justify-center items-center bg-[#0D0D0D]">
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
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between w-full gap-x-5 mx-5">
          {faqData.map((item, index) => (
            <div
            key={item.key} 
              className={`flex flex-col relative justify-center  items-stretch px-5 pt-7  transition-all  duration-700 ease-in-out hover:bg-[#121212] border-b-[0.3px] border-[#1E1E1E] cursor-pointer ${activeIndex === index ? "bg-[#121212]" : ""}
              `}
              onClick={() => toggleAccordion(index)}
            >
              <div
                key={index}
                className="transition-all ease-in-out duration-700"
              >
                <div className="flex justify-between px-5 items-start self-stretch transition-all ease-in-out duration-700">
                  <p
                    className={`font-poppins font-normal md:hidden block leading-[142.857%] transition-all duration-700 ${
                      activeIndex === index
                        ? "text-[#676767] text-sm"
                        : "text-white text-xs"
                    }`}
                  >
                    {item.mobileQuestion}
                  </p>
                  <p
                    className={`font-poppins font-normal md:block hidden leading-[142.857%] transition-all duration-700 ${
                      activeIndex === index
                        ? "text-[#676767] text-xs"
                        : "text-white text-sm"
                    }`}
                  >
                    {item.question}
                  </p>
                  {activeIndex === index ? (
                    <>
                      <BiMinus className="text-white text-lg shrink-0 transition-all duration-700" />
                    </>
                  ) : (
                    <>
                      <VscAdd className="text-white text-lg shrink-0 transition-all duration-700" />
                    </>
                  )}
                </div>
              </div>
              <div
                className={`${activeIndex === index ? "relative z-10 lg:h-24 md:h-36 h-48 pb-10" : "-z-10 overflow-hidden h-0 pb-0"
                  } transition-all ease-in-out duration-700 p-4`}
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
