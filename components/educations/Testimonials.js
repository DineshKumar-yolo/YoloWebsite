"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import parent1 from "@/public/parent1.svg";

const AllTestimonials = [
  {
    key: 1,
    name: "Aviral Malthora",
    position: "VP Scaler",
    img: parent1,
    title: "Best platform to pay money to anyone.",
    content:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.",
  },
  {
    key: 2,
    name: "Aviral Malthora",
    position: "VP Scaler",
    img: parent1,
    title: "Best platform to pay money to anyone.",
    content:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.",
  },
  {
    key: 3,
    name: "Aviral Malthora",
    position: "VP Scaler",
    img: parent1,
    title: "Best platform to pay money to anyone.",
    content:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.",
  },
  {
    key: 4,
    name: "Aviral Malthora",
    position: "VP Scaler",
    img: parent1,
    title: "Best platform to pay money to anyone.",
    content:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.",
  },
];

const Testimonial = ({ name, position, img, title, content }) => {
  return (
    <div className="xl:w-[1240px] w-full h-full xl:h-[318px] bg-[#121213] xl:px-[105px] p-5 xl:py-10 shrink-0">
      <div className="flex flex-wrap justify-between items-center relative gap-5">
        <div className="flex flex-col items-start gap-5 max-w-[487px]">
          <div className="flex flex-col items-start gap-3">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="38"
                viewBox="0 0 48 38"
                fill="none"
              >
                <path
                  d="M19.223 38H0V19.0571C0 7.7978 6.40767 1.44545 19.223 0V9.47147C13.0072 9.6997 9.82254 12.8949 9.66907 19.0571H19.223V38ZM48 38H28.777V19.0571C28.777 7.7978 35.1847 1.44545 48 0V9.47147C41.7842 9.6997 38.5995 12.8949 38.446 19.0571H48V38Z"
                  fill="url(#paint0_linear_4918_8517)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4918_8517"
                    x1="0"
                    y1="38"
                    x2="48"
                    y2="38"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB0707" />
                    <stop offset="1" stop-color="#650B0B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="max-w-[429px] text-white font-poppins text-3xl font-medium">
              {title}
            </h1>
            <p className="text-white font-poppins text-sm font-normal leading-[170%] opacity-40">
              {content}
            </p>
          </div>
        </div>
        <div className="absolute shrink-0 left-[55%] xl:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="195"
            viewBox="0 0 217 195"
            fill="none"
          >
            <path
              d="M210.532 99.9189C210.532 99.9189 187.361 73.1185 158.699 56.4576C139.456 45.2725 113.664 41.7141 97.7287 57.2524C83.9482 70.6896 79.8781 89.7378 91.3009 105.229C97.2024 113.233 110.056 114.723 115.302 109.33C118.799 105.734 123.47 97.4697 115.312 87.5247C103.521 73.1519 65.1059 65.743 47.4855 71.6697C19.4994 81.0831 8.55055 107.787 8.55055 107.787"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M19.3555 104.463L8.34848 108.475L5.27128 96.8546"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex xl:flex-col justify-center w-full xl:w-auto items-center gap-4">
          <Image
            src={img}
            className="h-20 w-20 xl:h-40 xl:w-40"
            alt="Testimonials"
          />
          <div className="flex text-white font-poppins leading-[150%] flex-col justify-center items-center gap-1">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-base font-normal opacity-60">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const scrollLeft = () => {
    if (testimonialsContainerRef.current?.scrollLeft > 0) {
      testimonialsContainerRef.current.scrollTo({
        left: testimonialsContainerRef.current.scrollLeft - 1260,
        behavior: "smooth",
      });
      setScrollPosition(testimonialsContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (
      testimonialsContainerRef.current?.scrollLeft <
      testimonialsContainerRef.current?.scrollWidth -
        testimonialsContainerRef.current?.clientWidth
    ) {
      testimonialsContainerRef.current.scrollTo({
        left: testimonialsContainerRef.current.scrollLeft + 1260,
        behavior: "smooth",
      });
      setScrollPosition(testimonialsContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = testimonialsContainerRef.current;
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
      <div className="flex flex-col justify-center items-center gap-10 xl:w-[1240px] w-full">
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col items-start flex-grid gap-3">
            <p className="self-stretch text-[#676767] font-poppins xl:text-base text-sm font-normal leading-[170%] tracking-[2px] uppercase">
              Testimonials
            </p>
            <h2 className="self-stretch text-white font-poppins xl:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]">
              Hear from the Top Leaders
            </h2>
          </div>
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
          className="review flex flex-wrap xl:flex-nowrap gap-5 w-full overflow-x-auto"
          ref={testimonialsContainerRef}
        >
          {AllTestimonials &&
            AllTestimonials.map((testimonial) => {
              return (
                <Testimonial
                  key={testimonial.key}
                  name={testimonial.name}
                  img={testimonial.img}
                  title={testimonial.title}
                  position={testimonial.position}
                  content={testimonial.content}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
