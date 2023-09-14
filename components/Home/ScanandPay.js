import React from "react";
import { RiAddLine } from "react-icons/ri";
import scanandpay from "../../public/ScanandPay.svg";
import Image from "next/image";

const ScanandPay = () => {
  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center xl:h-screen">
      <div className="flex flex-col xl:flex-row gap-[123px] sm:w-[85.97%] w-full px-10 py-12 xl:py-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[2px] uppercase">
              our features
            </p>
            <h1 className="text-white font-poppins text-[40px] w-3/4 font-semibold leading-normal tracking-[-0.165px]">
              Pay, Earn & Save with{" "}
              <span className="bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-transparent bg-clip-text">
                Ginie
              </span>
            </h1>
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] px-5">
            <p className="text-white font-poppins text-sm">
              Pay Anywhere in Seconds
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] px-5">
            <p className="text-white font-poppins text-sm">
              Get Rewards for every payment
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] px-5">
            <p className="text-white font-poppins text-sm">
              Subscribe to favourite OTT’s
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] px-5">
            <p className="text-white font-poppins text-sm">
              Get internship opportunities
            </p>
            <RiAddLine className="text-white text-[24px]" />
          </div>
        </div>
        <div className="sm:block">
          <Image src={scanandpay} />
        </div>
      </div>
    </div>
  );
};

export default ScanandPay;
