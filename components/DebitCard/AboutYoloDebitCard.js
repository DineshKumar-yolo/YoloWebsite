import React from "react";
import { PiChecks } from "react-icons/pi";

const AboutYoloDebitCard = () => {
  return (
    <div className="lg:px-[100px] px-10 py-28 flex flex-wrap items-center justify-between gap-10">
      <div className="flex flex-col justify-center items-start gap-8 lg:shrink-0">
        <h1 className="text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px] text-center">
          We’ve got your back.
        </h1>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Mastercard’s Zero Liability Protection
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Debit cards are FDIC-insured up to $250,000
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Turn cards on or off from the app
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Real-time spending notifications
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            YOLO blocks unsafe spending categories
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Choose to log in with touch or face ID
          </p>
        </div>
        <div className="flex items-center gap-[10px] self-stretch">
          <PiChecks className="text-[#9C9C9C] text-lg" />
          <p className="text-[#9C9C9C] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]">
            Our Support Team is available 24/7
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-10 lg:w-[438px] w-full">
        <div className="flex lg:px-10 px-5 py-[34px] justify-start items-center border-gradient-bottom w-full">
          <div className="flex items-start gap-[30px] shrink-0">
            <PiChecks className="text-[#06AA65] text-3xl" />
            <p className="text-[#BFBFBF] font-poppins text-lg font-medium leading-[133.333%] lowercase">
              Turn cards on and off
            </p>
          </div>
        </div>
        <div className="flex lg:px-10 px-5 py-[34px] justify-start items-center border-gradient-bottom w-full">
          <div className="flex items-start gap-[30px] shrink-0">
            <PiChecks className="text-[#06AA65] text-3xl" />
            <p className="text-[#BFBFBF] font-poppins text-lg font-medium leading-[133.333%] lowercase">
              Get advance protecion
            </p>
          </div>
        </div>
        <div className="flex lg:px-10 px-5 py-[34px] justify-start items-center border-gradient-bottom w-full">
          <div className="flex items-start gap-[30px] shrink-0">
            <PiChecks className="text-[#06AA65] text-3xl" />
            <p className="text-[#BFBFBF] font-poppins text-lg font-medium leading-[133.333%]">
              FDIC Insured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYoloDebitCard;
