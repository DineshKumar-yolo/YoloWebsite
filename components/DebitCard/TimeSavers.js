"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Wifi from "../../public/wifi.svg";
import Rocket from "../../public/RocketLaunch.svg";
import Storefront from "../../public/Storefront.svg";
import Wallet from "../../public/Wallet.svg";

const TimeSaverContext = [
  {
    key: 1,
    timeHead: "Tap & Pay",
    timeImage: Wifi,
    timeContent: "Tap and make the payment anywhere you go",
  },
  {
    key: 2,
    timeHead: "Boost among your friends",
    timeImage: Rocket,
    timeContent:
      "Share your mini website with your friends from your payments card",
  },
  {
    key: 3,
    timeHead: "Store and ATM controls",
    timeImage: Storefront,
    timeContent:
      "Choose exactly where your kids can spend. Set ATM cash withdrawal limits, too.",
  },
  {
    key: 4,
    timeHead: "Balance tracking",
    timeImage: Wallet,
    timeContent: "You and your kids see historic activity on their accounts.",
  },
];

const TimeSaverBoxes = ({ timeImage, timeHead, timeContent }) => {
  return (
    <div className="border-gradient-bottom h-full">
      <div className="flex flex-col items-start mx-[41px] mt-[59px] gap-[30px] w-44 h-full md:w-[319px] md:h-[326px]">
        <Image src={timeImage} alt="TimeSavers" />
        <div className="flex flex-col items-start gap-5">
          <h5 className="text-white font-poppins text-base md:text-[26px] font-semibold leading-[92.308%] lowercase">
            {timeHead}
          </h5>
          <p className="text-[#9C9C9C] font-poppins text-xs md:text-base font-normal leading-[170%] tracking-[-0.165px]">
            {timeContent}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimeSavers = () => {
  const TimeSaverContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const scrollLeft = () => {
    if (TimeSaverContainerRef.current?.scrollLeft > 0) {
      TimeSaverContainerRef.current.scrollTo({
        left: TimeSaverContainerRef.current.scrollLeft - 420,
        behavior: "smooth",
      });
      setScrollPosition(TimeSaverContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (
      TimeSaverContainerRef.current?.scrollLeft <
      TimeSaverContainerRef.current?.scrollWidth -
        TimeSaverContainerRef.current?.clientWidth
    ) {
      TimeSaverContainerRef.current.scrollTo({
        left: TimeSaverContainerRef.current.scrollLeft + 420,
        behavior: "smooth",
      });
      setScrollPosition(TimeSaverContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = TimeSaverContainerRef.current;
    const handleScroll = () => {
      if (container) {
        setIsLeftButtonDisabled(container.scrollLeft === 0);
        setIsRightButtonDisabled(
          container.scrollLeft >= container.scrollWidth - container.clientWidth
        );
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:py-24 md:px-12 py-8 px-10 flex flex-col justify-center items-center min-h-screen md:h-full overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-10 xl:w-11/12 w-full">
        <div className="flex w-full lg:flex-row flex-col justify-between items-start gap-10">
          <div className="flex flex-1 flex-col lg:items-start items-center w-full flex-grid gap-3">
            <p className="self-stretch text-[#676767] text-center lg:text-left font-poppins xl:text-base text-sm font-normal leading-[170%] tracking-[2px] uppercase">
              our features
            </p>
            <h2 className="self-stretch text-white font-poppins text-center lg:text-left xl:text-[40px] text-xl font-semibold leading-normal tracking-[-0.165px]">
              Unlock these time-savers.
            </h2>
          </div>
          <div className="flex flex-1 items-center w-full lg:justify-end justify-center gap-4">
            <button
              className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${
                isLeftButtonDisabled ? "text-[#383838]" : "text-white"
              }`}
              onClick={scrollLeft}
              disabled={isLeftButtonDisabled}
            >
              <GoArrowLeft />
            </button>
            <button
              className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${
                isRightButtonDisabled ? "text-[#383838]" : "text-white"
              }`}
              onClick={scrollRight}
              disabled={isRightButtonDisabled}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div
          className="review flex flex-nowrap justify-start gap-5 w-full overflow-x-scroll"
          ref={TimeSaverContainerRef}
          style={{ padding: "0 20px" }}
        >
          {TimeSaverContext &&
            TimeSaverContext.map((timesaver) => {
              return (
                <TimeSaverBoxes
                  key={timesaver.key}
                  timeImage={timesaver.timeImage}
                  timeHead={timesaver.timeHead}
                  timeContent={timesaver.timeContent}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TimeSavers;
