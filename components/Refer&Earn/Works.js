import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import scanandpay from "../../public/ScanandPay.svg";
import Image from "next/image";

const Works = () => {
  return (
    <div className="bg-[#0D0D0D] flex flex-col justify-center items-center xl:h-screen">
      <div className="flex flex-col xl:flex-row justify-center gap-[123px] sm:w-[85.97%] w-full px-10 py-12 xl:py-0">
        <div className="flex flex-col gap-8 w-[505px] shrink-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-poppins text-[40px] w-3/4 font-semibold leading-normal tracking-[-0.165px]">
              How It Works
            </h1>
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Head over to profile section
            </p>
            <RiArrowDownSLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Copy your refer code or send on socials
            </p>
            <RiArrowDownSLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Ask your friend to input while onboarding
            </p>
            <RiArrowDownSLine className="text-white text-[24px]" />
          </div>
          <div className="flex justify-between items-stretch pt-[30px] gap-[30px] w-full px-5">
            <p className="text-white font-poppins text-sm">
              Get ₹5000 both once KYC is done
            </p>
            <RiArrowDownSLine className="text-white text-[24px]" />
          </div>
        </div>
        <div className="sm:block">
          <Image src={scanandpay} className="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
