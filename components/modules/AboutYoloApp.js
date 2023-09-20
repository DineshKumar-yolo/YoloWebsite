import React from "react";
import heroImage from "../../public/hero-phone-2.png";
import PlayStore from "../../public/play-store.png";
import AppStore from "../../public/app-store.png";
import Image from "next/image";
import Link from "next/link";

const AboutYoloApp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0D0D0D] w-full">
      <div className="w-10/12 lg:h-[398px] px-10 flex flex-col lg:flex-row lg:gap-[181px] gap-8 m-auto justify-center lg:items-end items-center shrink-0 bg-[#121213] rounded-2xl bg-design">
        <div className="flex flex-col lg:gap-8 gap-6 items-start justify-center my-auto">
          <div className="flex xl:w-[505px] flex-col justify-center items-start gap-[14px]">
            <h1 className="text-white font-poppins md:text-[40px] text-xl font-semibold leading-normal tracking-[-0.165px]">
              Get the YOLO App Now.
            </h1>
            <p className="text-[#878787] font-poppins md:text-lg text-xs font-normal leading-[150%]">
              With this platform, you can access to all the features, and learn
              investing and saving
            </p>
          </div>
          <div className="inline-flex items-start lg:gap-5 gap-3">
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.getyolo&pcampaignid=web_share"
              }
            >
              <Image src={PlayStore} alt="About"/>
            </Link>
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.getyolo&pcampaignid=web_share"
              }
            >
              <Image src={AppStore} alt="AppStore" />
            </Link>
          </div>
        </div>
        <Image
        alt="Hero"
          src={heroImage}
          className="lg:w-[344px] lg:h-[526px] w-44 h-64 shrink-0"
        />
      </div>
    </div>
  );
};

export default AboutYoloApp;
