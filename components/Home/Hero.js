import React from "react";
import Image from "next/image";
import Button from "../modules/Button";
import hero_phone_1 from "../../public/hero-phone-1.png";
import hero_phone_2 from "../../public/hero-phone-2.png";
import hero_phone_3 from "../../public/hero-phone-3.png";
import hero_image from "../../public/hero-image.png";
import hero_image_2 from "../../public/hero-image-2.png";

const Hero = () => {
  return (
    <div className="overflow-hidden min-w-full">
      <div className="flex flex-col gap-8 items-center xl:py-12 py-16 xl:w-1/2 px-10 mx-auto font-poppins">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#F8F8F8] text-center text-2xl xl:text-4xl font-semibold leading-[150%]">
            Automating Universities and Digitalizing Student Life
          </h1>
          <p className="text-[#9C9C9C] text-center xl:text-base text-xs font-normal leading-[170%] tracking-[-0.165px]">
            Simplified Payment & Seamless access for kids & students
          </p>
        </div>
        <div className="sm:w-2/3 flex w-full items-center justify-center">
          <Button buttonName={"Get Your Card"} />
        </div>
      </div>
      <div className="absolute gap-[121px] -ml-[40px] mt-20 flex flex-row w-full">
        <div className="rounded-full blur-[100px] -z-10 bg-[#660B0B] w-[461px] h-[461px]"></div>
        <div className="rounded-full blur-[100px] -z-10 bg-[#660B0B] w-[461px] h-[461px]"></div>
        <div className="rounded-full blur-[100px] -z-10 bg-[#660B0B] w-[461px] h-[461px]"></div>
      </div>
      <div className="flex flex-wrap flex-row justify-center gap-5 slg:gap-14">
        <div className="md:w-[241px] w-[141px] h-16 flex gap-2 mt-10 slg:mt-20 mlg:mt-[300px] md:py-3 md:px-2 p-2 justify-center items-center rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
          <Image src={hero_image} alt="hero" />
          <p className="text-white font-poppins md:text-xs text-[6px] font-medium leading-normal tracking-[-0.054px]">
            Money Sent <span className="text-[#38C15E]">successfully</span> to Rai
            Mahalaxmi{" "}
          </p>
        </div>
        <div className="flex slg:order-last items-end justify-center gap-6 sm:gap-2 md:gap-3 h-3/6 md:px-10 shrink-[10]">
          <Image src={hero_phone_1} alt="Hero" />
          <Image src={hero_phone_2} alt="Hero" />
          <Image src={hero_phone_3} alt="Hero" />
        </div>
        <div className="md:w-[191px] w-[124px] md:h-[91px] h-16 mlg:mt-[100px] md:px-2 md:py-4 p-2 flex flex-col gap-3 justify-center items-start rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
          <div className="flex justify-between items-center md:gap-4 gap-2">
            <Image src={hero_image_2} height={2.897} width={11.554} alt="hero" />
            <h5 className="text-white font-poppins md:text-xs text-[7px] font-medium leading-normal tracking-[-0.052px]">
              Get Verified Instantly
            </h5>
          </div>
          <p className="text-white md:w-[163.836px] w-[106px] font-poppins md:text-[9.489px] text-[5px] font-normal leading-normal tracking-[-0.052px]">
            Get your account verified in just 60 secs and enjoy the product
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
