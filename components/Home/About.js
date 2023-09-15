import React from "react";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex xl:px-[100px] px-10 sm:px-24 py-8 sm:py-16 flex-col w-screen overflow-hidden items-start gap-[10px] bg-[#151515]">
      <div className="flex flex-col xl:flex-row justify-center items-center sm:items-start xl:gap-[108px] gap-14">
        <div className="flex flex-col items-start gap-2 flex-shrink-0">
          <p className="text-[#9C9C9C] font-poppins sm:text-sm text-xs font-normal leading-[170%] tracking-[-0.165px]">
            Join the Magic Waitlist
          </p>
          <div className="sm:w-[153px] w-[130px] sm:h-1 h-[2px] relative bottom-1 rounded-[40px] bg-gradient-to-l from-[#D21A1A] to-[#171717]"></div>
          <h1 className="text-[#F8F8F8] font-poppins sm:w-[496px] sm:text-[32px] text-2xl leading-[150%] font-semibold">
            Be the first in line for a financial adventure
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-14">
          <div className="flex flex-col gap-[14px] items-center">
            <h2 className="text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]">
              30,000
            </h2>
            <p className="text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]">
              Users Waitlisted Already
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <div className="flex gap-[14px] text-white items-center">
              <h2 className="text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]">
                4.0
              </h2>
              <AiFillStar className="text-[40px]" />
            </div>
            <p className="text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]">
              Rating by early testers
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <h2 className="text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]">
              100+
            </h2>
            <p className="text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]">
              Trusted Partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
