import React from "react";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex xl:px-[100px] px-10 sm:px-24 py-8 sm:py-16 flex-col w-screen overflow-hidden items-stretch gap-[10px] bg-[#151515]">
      <div className="flex flex-col xl:flex-row justify-between w-full items-center sm:items-start xl:gap-[200px] gap-14">
        <div className="flex flex-col items-center lg:items-start gap-2 flex-shrink-0">
          <p className="text-[#9C9C9C] font-poppins md:text-left text-center sm:text-sm text-xs font-normal leading-[170%] tracking-[-0.165px]">
            Download The App Now
          </p>
          <div className="sm:w-[153px] w-[130px] sm:h-1 h-[2px] relative bottom-1 md:left-0 xs:left-0 left-[30%] rounded-[40px] bg-gradient-to-l from-[#D21A1A] to-[#171717]" />
          <h1 className="text-[#F8F8F8] font-poppins  sm:text-[32px] text-xl text-center md:text-left leading-[150%] font-semibold">
            Be First in Line for a <br /> Financial Adventure!
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-14 w-full">
          <div className="flex flex-col gap-[14px] items-center">
            <h2 className="text-white font-poppins md:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
              30,000
            </h2>
            <p className="text-[#9C9C9C] text-center font-poppins md:text-base text-sm font-normal leading-[170%] tracking-[-0.165px]">
              Users Waitlisted Already
            </p>
          </div>
          <div className="flex flex-col md:gap-[14px] gap-2 items-center">
            <div className="flex gap-[14px] text-white items-center">
              <h2 className="text-white font-poppins md:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
                4.0
              </h2>
              <AiFillStar className="md:text-[40px] text-3xl" />
            </div>
            <p className="text-[#9C9C9C] text-center font-poppins md:text-base text-sm font-normal leading-[170%] tracking-[-0.165px]">
              Rating by early testers
            </p>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <h2 className="text-white font-poppins md:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
              100+
            </h2>
            <p className="text-[#9C9C9C] text-center font-poppins md:text-base text-sm font-normal leading-[170%] tracking-[-0.165px]">
              Brand Partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
