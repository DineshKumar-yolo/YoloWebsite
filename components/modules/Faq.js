import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { VscAdd } from "react-icons/vsc";

const Faq = () => {
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
          <div className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch">
            <div className="flex justify-between px-5 items-start self-stretch">
              <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                How do I register on Yolo?
              </p>
              <VscAdd className="text-white text-sm" />
            </div>
          </div>
          <div className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch">
            <div className="flex justify-between px-5 items-start self-stretch">
              <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                How do I register on Yolo?
              </p>
              <VscAdd className="text-white text-sm" />
            </div>
          </div>
          <div className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch">
            <div className="flex justify-between px-5 items-start self-stretch">
              <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                How do I register on Yolo?
              </p>
              <VscAdd className="text-white text-sm" />
            </div>
          </div>
          <div className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch">
            <div className="flex justify-between px-5 items-start self-stretch">
              <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                How do I register on Yolo?
              </p>
              <VscAdd className="text-white text-sm" />
            </div>
          </div>
          <div className="flex pt-[30px] flex-col items-start gap-[30px] self-stretch">
            <div className="flex justify-between px-5 items-start self-stretch">
              <p className="text-white font-poppins text-sm font-normal leading-[142.857%]">
                How do I register on Yolo?
              </p>
              <VscAdd className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
