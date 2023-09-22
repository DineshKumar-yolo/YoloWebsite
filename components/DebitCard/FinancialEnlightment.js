import React from 'react'
import hero_image_2 from '../../public/hero-image-2.png'
import Image from 'next/image'
import Button from '../modules/Button'

const FinancialEnlightment = () => {
  return (
    <div className="bg-[#F8F8F8] flex-wrap flex w-full md:min-h-screen">
      <div className="flex flex-1 justify-center items-center px-10 md:px-0 py-10 md:py-0">
        <div className="flex flex-col md:gap-8 gap-4 md:items-start items-center justify-center max-w-[500px]">
          <h1 className="text-[#212426] font-poppins md:text-left text-center text-xl md:text-[40px] font-semibold leading-[150%]">
            The path to financial enlightenment.
          </h1>
          <p className="text-[#7F7F7F] font-poppins md:text-left text-center text-xs md:text-base font-normal leading-[170%] tracking-[-0.165px]">
            YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely.
            Informed Parents with Real-time Notifications. Financial Freedom for
            the Whole Family.
          </p>
          <Button buttonName={"Join Now"} styles={"md:mt-8 mt-4"} />
        </div>
      </div>
      <div className="flex flex-1 FinancialEnlightment-bg min-w-[360px] min-h-[426px]">
        <div className="md:w-[217px] md:h-[104.16px] w-[192px] h-[98px] px-2 py-4 flex flex-col gap-3 justify-center items-center relative top-[15%] md:left-[50%] left-[45%] rounded-2xl md:rounded-md backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
          <div className="flex justify-between items-center gap-4">
            <Image
              src={hero_image_2}
              className="aspect-video md:aspect-auto"
              height={29.5}
              width={29.5}
              alt="Financial"
            />
            <h5 className="text-black font-poppins text-[10px] md:text-[13.5px] font-medium leading-normal tracking-[-0.052px]">
              Get Verified Instantly
            </h5>
          </div>
          <p className="text-black w-[163.836px] font-poppins text-[10px] md:text-[9px] font-normal leading-normal tracking-[-0.059px]">
            Get your account verified in just 60 secs and enjoy the product
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinancialEnlightment
