import React from "react";
import Navtop from "../navtop/Navtop";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import hero_phone_1 from "../../public/hero-phone-1.png"
import hero_phone_2 from "../../public/hero-phone-2.png"
import hero_phone_3 from "../../public/hero-phone-3.png"
import hero_image from '../../public/hero-image.png'
import hero_image_2 from '../../public/hero-image-2.jpg'

const Hero = () => {
  return (
      <div className="bg-gradient-to-b from-black from-40% to-[#650B0B] mix-blend-overlay">
      <Navtop />
      <Navbar />
          <div className="flex flex-col gap-8 items-center my-12 w-1/2 mx-auto font-poppins">
              <div className="flex flex-col gap-4">
                  <h1 className="text-[#F8F8F8] text-center text-[44px] font-semibold leading-[150%]">Raising Financially Savvy Kids, Introducing Genie</h1>
                  <p className="text-[#9C9C9C] text-center text-base font-normal leading-[170%] tracking-[-0.165px]">Seamless Payments, Exciting Rewards, and Premium App Subscriptions</p>
              </div>
              <div className="w-2/3 flex gap-4 items-start">
                  <input type="number" className="py-4 px-3 text-[#3b3b3b] w-7/12 text-sm rounded-sm focus:outline-none leading-[150%] lowercase" placeholder="Enter mobile number" />
                  <button className="flex px-8 py-4 justify-center items-center text-base text-white rounded-sm font-medium leading-[150%] bg-gradient-to-r from-[#BB0707] to-[#650B0B]">Get Started</button>
              </div>
          </div>
          <div className="w-[241px] flex gap-2 py-3 px-2 justify-center absolute top-[95%] left-[7%] items-center rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
              <Image src={hero_image} />
              <p className="text-white font-poppins text-xs font-medium leading-normal tracking-[-0.054px]">Money Sent <span className="text-[#38C15E]">successfully</span> to Rai Mahalaxmi </p>
          </div>
          <div className="flex items-end justify-center gap-6 h-3/6 ">
              <Image src={hero_phone_1} />
              <Image src={hero_phone_2} />
              <Image src={hero_phone_3} />
          </div>
          <div className="w-[191px] px-2 py-4 flex flex-col gap-3 justify-center items-center absolute top-[79%] right-[10%] rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
              <div className="flex justify-between items-center gap-4">
                  <Image src={hero_image_2} height={2.897} width={11.554} />
                  <h5 className="text-white font-poppins text-xs font-medium leading-normal tracking-[-0.052px]">Get Verified Instantly</h5>
              </div>
              <p className="text-white w-[163.836px] font-poppins text-[9.489px] font-normal leading-normal tracking-[-0.052px]">Get your account verified in just 60 secs and enjoy the product</p>
          </div>
    </div>
  );
};

export default Hero;
