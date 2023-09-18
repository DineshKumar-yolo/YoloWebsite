"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import lightning from "../../public/Lightning.svg";
import chats from "../../public//chats.svg";
import users from "../../public/users.svg";
import visa from "../../public/visa.svg";
import { title } from "process";

const AllPartners = [
  {
    image: lightning,
    title: "Future of Finances",
    content:
      "Differentiate your offerings with Industry's only Genz’s Payment platform",
  },
  {
    image: chats,
    title: "Dedicated support",
    content:
      "Get your personal Sandbox, receive tailored sales demos and strategic partner support.",
  },
  {
    image: users,
    title: "broad target audience",
    content: "They make up 40% of India's total population",
  },
  {
    image: visa,
    title: "Certified payment partner",
    content:
      "We have partnered with visa to make sure the transactions are smooth and secured",
  },
];

const Partner = ({ image, title, content }) => {
  return (
    <div className="w-[400px] h-[326px] flex flex-col items-center justify-center gap-3 border-gradient-bottom shrink-0">
      <div className="max-w-xs max-h-[203px]">
        <div className="flex flex-col items-start gap-8 max-w-xs">
          <Image src={image} alt="Partners" />
          <div className="flex flex-col items-start gap-5">
            <h5 className="text-white font-poppins text-2xl font-semibold leading-[24px] lowercase">
              {title}
            </h5>
            <p className="text-[#9C9C9C] font-poppins text-base font-normal leading-[170%]">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const PartnersContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const scrollLeft = () => {
    if (PartnersContainerRef.current?.scrollLeft > 0) {
      PartnersContainerRef.current.scrollTo({
        left: PartnersContainerRef.current.scrollLeft - 420,
        behavior: "smooth",
      });
      setScrollPosition(PartnersContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (
      PartnersContainerRef.current?.scrollLeft <
      PartnersContainerRef.current?.scrollWidth -
        PartnersContainerRef.current?.clientWidth
    ) {
      PartnersContainerRef.current.scrollTo({
        left: PartnersContainerRef.current.scrollLeft + 420,
        behavior: "smooth",
      });
      setScrollPosition(PartnersContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = PartnersContainerRef.current;
    const handleScroll = () => {
      if (container) {
        setIsLeftButtonDisabled(container.scrollLeft === 0);
        setIsRightButtonDisabled(
          container.scrollLeft >= container.scrollWidth - container.clientWidth
        );
      }
    };
    // handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:py-24 md:px-12 py-8 px-10 flex flex-col justify-center items-center bg-[#0D0D0D] overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-10 xl:w-11/12 max-w-[1240px]">
        <div className="flex w-full justify-center lg:justify-between items-start">
          <h2 className="self-stretch text-white text-center lg:text-left font-poppins xl:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
            Why partner with us?
          </h2>
          <div className="hidden md:flex justify-center items-start gap-[17px]">
            <button
              className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${
                isLeftButtonDisabled ? "text-[#383838]" : "text-[#585858]"
              }`}
              onClick={scrollLeft}
              disabled={isLeftButtonDisabled}
            >
              <GoArrowLeft />
            </button>
            <button
              className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${
                isRightButtonDisabled ? "text-[#383838]" : "text-[#585858]"
              }`}
              onClick={scrollRight}
              disabled={isRightButtonDisabled}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div
        key={key}
          className="partner flex flex-wrap xl:flex-nowrap gap-5 w-full overflow-x-auto"
          ref={PartnersContainerRef}
        >
          {AllPartners &&
            AllPartners.map((partner) => {
              return (
                <Partner
                  key={key}
                  image={partner.image}
                  title={partner.title}
                  content={partner.content}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
