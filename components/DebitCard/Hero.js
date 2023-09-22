import React from "react";
import debitCard from "../../public/Debit_Card.png";
import Button from "../modules/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-10 lg:px-0">
      <div className="inline-flex flex-col items-center gap-24 md:gap-20 w-[706px]">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-white text-center font-poppins text-sm md:text-lg font-normal leading-[170%] trac   ing-[2px] uppercase">
              Unlocking Financial Freedom
            </p>
            <h1 className="text-[#F8F8F8] text-center font-poppins text-2xl md:text-[44px] font-semibold leading-[150%]">
              Your Reliable Debit Card Companion
            </h1>
          </div>
          <div className="sm:w-2/3 flex w-full items-center gap-4 sm:items-start">
            <input
              type="number"
              className="py-3 px-3 text-[#3b3b3b] flex-1 w-full md:text-base text-xs rounded-sm focus:outline-none leading-[150%] lowercase"
              placeholder="Enter mobile number"
            />
            <Button buttonName={"Join the waitlist"} />
          </div>
        </div>
        <div>
          <Image src={debitCard} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
