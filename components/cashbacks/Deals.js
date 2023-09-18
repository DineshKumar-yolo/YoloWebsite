import React from "react";
import offers from "@/public/offers.svg";
import Image from "next/image";

const Deals = () => {
  return (
    <div className="xl:my-40 max-w-[1240px] flex flex-wrap justify-between items-center mx-auto">
      <Image src={offers} alt="Deals"/>
      <div className="flex flex-col justify-center items-start gap-4 max-w-lg w-full">
        <p className="text-[#7F7F7F] text-base font-normal tracking-[2px] uppercase">
          Save money on brands
        </p>
        <h2 className="max-w-sm text-white text-4xl font-semibold">
          Get daily cash back opportunities on brand deals
        </h2>
      </div>
    </div>
  );
};

export default Deals;
