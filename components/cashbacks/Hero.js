import React from 'react'
import cashback1 from "@/public/cashback-hero-1.svg"
import cashback2 from "@/public/cashback-hero-2.svg"
import cashback3 from "@/public/cashback-hero-3.svg"
import group from "@/public/group.svg";
import netflix from "@/public/netflix.png";
import starbucks from "@/public/startbucks-green.png";
import macdonald from "@/public/McDonald's.png";
import puma from "@/public/puma.svg";
import dominos from "@/public/domino's.png";
import swiggy from "@/public/swiggy.png";
import zomato from "@/public/Zomato.png";
import spotify from "@/public/spotify.png";
import yoloCoin from "@/public/yolo-coin.png"
import Image from 'next/image'
import Button from '../modules/Button';

const Hero = () => {
  return (
      <div className='flex flex-col mx-auto gap-20 mt-12 max-w-3xl relative'>
          <div className="absolute -left-[20%] top-[30%]">
              <Image src={yoloCoin} />
          </div>
          <div className="absolute -right-[15%] top-[10%]">
              <Image src={yoloCoin} />
          </div>
          <div className='flex flex-col items-center gap-6'>
              <div className='flex flex-col items-center gap-4'>
                  <h1 className='text-[#F8F8F8] text-center font-poppins text-5xl font-semibold'>Believe us or not, Get Cash back & Rewards on every spend</h1>
                  <p className='text-[#9C9C9C] max-w-md text-center text-base font-normal'>Earn Cash back & Exciting Rewards on every spent made via yolo app and debit card.</p>
              </div>
              <div className="sm:w-2/3 flex flex-col w-full sm:flex-row items-center gap-4 sm:items-start">
                  <input
                      type="number"
                      className="py-3 px-3 text-[#3b3b3b] sm:w-7/12 w-full xl:text-base text-sm rounded-sm focus:outline-none leading-[150%] lowercase"
                      placeholder="Enter mobile number"
                  />
                  <Button buttonName={"Get Started"} />
              </div>
          </div>
          <div>
              <div className='relative flex items-center flex-col h-[300px] top-20 max-w-3xl'>
                  <div className="absolute top-[10%] max-w-3xl mx-auto flex justify-center items-end w-11/12">
                      <div className='absolute shadow-2xl p-5 left-[10%] -translate-x-[110%] z-10 flex justify-center items-center w-20 h-20 bg-white rounded-full'>
                          <Image src={netflix} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[20%] -translate-x-[110%] z-20 flex justify-center items-center w-24 h-24 bg-white rounded-full'>
                          <Image src={swiggy} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[30%] -translate-x-[100%] z-30 flex justify-center items-center w-28 h-28 bg-white rounded-full'>
                          <Image src={spotify} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[40%] -translate-x-[80%] z-40 flex justify-center items-center w-32 h-32 bg-white rounded-full'>
                          <Image src={zomato} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[50%] -translate-x-[50%] z-50 flex justify-center items-center w-36 h-36 bg-white rounded-full'>
                          <Image src={starbucks} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[60%] -translate-x-[20%] z-40 flex justify-center items-center w-32 h-32 bg-white rounded-full'>
                          <Image src={puma} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[70%] translate-x-0 z-30 flex justify-center items-center w-28 h-28 bg-white rounded-full'>
                          <Image src={dominos} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[80%] translate-x-[10%] z-20 flex justify-center items-center w-24 h-24 bg-white rounded-full'>
                          <Image src={macdonald} />
                      </div>
                      <div className='absolute shadow-2xl p-5 left-[90%] translate-x-[15%] z-10 flex justify-center items-center w-20 h-20 bg-white rounded-full'>
                          <Image src={group} />
                      </div>
                  </div>
                  <Image src={cashback1} className='absolute -top-[10%] z-[9]' width={800} />
                  <Image src={cashback2} className='absolute top-0 z-[5]' width={800} />
                  <Image src={cashback3} className='absolute top-[10%] z-0' width={800} />
             </div>
          </div>
    </div>
  )
}

export default Hero
