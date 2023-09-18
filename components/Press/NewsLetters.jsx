import React from "react";
import Blog1 from "@/public/blog-1.png";
import Blog2 from "@/public/blog-2.png";
import Blog3 from "@/public/blog-3.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const MockNews = [
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog1,
  },
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog2,
  },
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog3,
  },
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog1,
  },
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog2,
  },
  {
    title: "Your Reliable Debit Card Companion",
    details: "5 mins read • Ganesh Das • Aug 4 2023",
    image: Blog3,
  },
];

const NewsLetters = () => {
  return (
    <div className="flex min-h-screen mx-auto justify-center my-16">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-7 sm:p-0 p-4">
        {MockNews &&
          MockNews.map((news) => {
            return (
              <div className="2xl:w-[400px] h-[550px] border border-white" key={key}>
                <div className="flex flex-col items-start gap-10 p-4">
                  <Image
                  alt="NewsLetter"
                    src={news.image}
                    className="md:aspect-auto xl:w-[368px] h-[270px] aspect-square bg-[#211F37] shrink-0 mix-blend-luminosity"
                  />
                  <div className="w-full flex flex-col items-start gap-2">
                    <h5 className="text-[#F8F8F8] font-poppins text-2xl font-semibold leading-[150%]">
                      {news.title}
                    </h5>
                    <p className="text-[#9C9C9C] font-poppins text-sm font-normal leading-[170%] tracking-[-0.165px]">
                      {news.details}
                    </p>
                  </div>
                  <button className="border-gradient-right bg-[#0D0D0D] flex min-w-[168px] px-6 py-4 items-center justify-center gap-3">
                    <p className="text-white font-poppins text-sm font-medium leading-[18.4px]">
                      Learn More
                    </p>
                    <FaArrowRight className="text-white text-base" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewsLetters;
