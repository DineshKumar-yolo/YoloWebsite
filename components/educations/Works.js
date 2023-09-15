import React from "react";
import { RiAddLine } from "react-icons/ri";
import eductionFeatures from "../../public/educational-features.png";
import Image from "next/image";

const Works = () => {
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
          <div className="flex justify-between items-stretch py-[30px] gap-[30px] w-full px-5 border-b border-white border-opacity-10">
            <p className="text-white font-poppins text-sm">Digital Hostel</p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pb-[30px] gap-[30px] w-full px-5 border-b border-white border-opacity-10">
            <p className="text-white font-poppins text-sm">Digital Cafeteria</p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pb-[30px] gap-[30px] w-full px-5 border-b border-white border-opacity-10">
            <p className="text-white font-poppins text-sm">Yolo Pay</p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pb-[30px] gap-[30px] w-full px-5 border-b border-white border-opacity-10">
            <p className="text-white font-poppins text-sm">Hybrid Card</p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
        </div>
        <div className="flex-1">
          <Image src={eductionFeatures} className="shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Works;
