import React from "react";
import { RiAddLine } from "react-icons/ri";
import scanandpay from "../../public/scanandpay.png";
import Image from "next/image";

const Works = () => {
  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center lg:h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[12%] sm:w-[85.97%] w-full px-10 py-12 lg:py-0">
        <div className="flex flex-col gap-8 flex-1 xl:w-5/12 shrink-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-poppins text-[40px] xl:w-3/4 font-semibold leading-normal tracking-[-0.165px]">
              Sit Relaxed, We are there!
            </h1>
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Spending notifications in real time
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Turn your card off in an instant
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Spend and ATM Controls
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
        </div>
        <div className="sm:block flex-1">
          <Image src={scanandpay} className="shrink-0 xl:w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default Works;
