"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import review_1 from "../../public/review-1.png";
import review_2 from "../../public/review-2.png";
import review_3 from "../../public/review-3.png";
import review_4 from "../../public/review-4.png";
import review_5 from "../../public/review-5.png";
import review_6 from "../../public/review-6.png";

const AllReviews = [
  {
    key: 1,
    name: "Aishwarya Singhal",
    userImg: review_1,
    username: "@aishwarya_singhal",
    date: "22.03.2021",
    reviewContent:
      "Yolo changed how I handle payments. It's so simple and stress-free! Earning Yolo Coins is like a bonus after each purchase!",
  },
  {
    key: 2,
    name: "Kunj Joshi",
    userImg: review_2,
    username: "@kunj_joshi",
    date: "22.03.2021",
    reviewContent:
      "I love how Yolo connects me to various OTT platforms effortlessly. No more subscription headaches, just pure entertainment!",
  },
  {
    key: 3,
    name: "Akshat Gupta",
    userImg: review_3,
    username: "@akshat_gupta",
    date: "22.03.2021",
    reviewContent:
      "Yolo isn’t just about payments; it’s a gateway to opportunities. Thanks to Yolo, I landed my dream internship! It’s life-changing.",
  },
  {
    key: 4,
    name: "Vipul Jain",
    userImg: review_4,
    username: "@vipul_jain",
    date: "22.03.2021",
    reviewContent:
      "Participating in giveaways and tasks through Yolo has been exciting! The platform keeps surprising me with its engaging activities.",
  },
  {
    key: 5,
    name: "Arpit Sharma",
    userImg: review_5,
    username: "@arpit_sharma",
    date: "22.03.2021",
    reviewContent:
      "Yolo’s prepaid card feature is a game-changer! I ordered mine in minutes, making transactions a breeze. Highly recommended!",
  },
  {
    key: 6,
    name: "Karanjot",
    userImg: review_6,
    username: "@karanjot_12",
    date: "22.03.2021",
    reviewContent:
      "Yolo isn't just a platform; it's a supportive community. The way it offers perks and growth opportunities is phenomenal. I feel valued.",
  },
];

const Review = ({ userImg, name, username, date, reviewContent, key }) => {
  return (
    <div>
      <div className="flex flex-col flex-grid lg:p-5 p-4 items-start rounded-[10px] h-full lg:h-[260px] lg:w-[400px] w-[280px] sm:w-[320px] bg-[#121213]">
        <div className="flex pb-4 gap-[10px] self-stretch items-center">
          <Image src={userImg} alt="Review" width={40} height={40} />
          <div>
            <h5 className="text-white font-poppins text-sm font-medium leading-[140%]">
              {name}
            </h5>
            <p className="text-[#676767] font-inter text-sm font-normal leading-[140%]">
              {username}
            </p>
          </div>
        </div>
        <div className="mt-[16px] flex pb-[16px] items-start gap-[10px] self-stretch flex-grow">
          <p className="text-[#878787] font-poppins text-sm font-normal leading-[170%] tracking-[-0.165px]">
            {reviewContent}
          </p>
        </div>
        <div className="flex justify-between items-end self-stretch">
          <Link href="/" className="flex flex-col items-start text-[#676767]">
            Show original
          </Link>
          <p className="text-[#676767] text-center font-inter text-sm font-normal leading-[140%]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviewsContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const scrollLeft = () => {
    if (reviewsContainerRef.current?.scrollLeft > 0) {
      reviewsContainerRef.current.scrollTo({
        left: reviewsContainerRef.current.scrollLeft - 420,
        behavior: "smooth",
      });
      setScrollPosition(reviewsContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (
      reviewsContainerRef.current?.scrollLeft <
      reviewsContainerRef.current?.scrollWidth -
        reviewsContainerRef.current?.clientWidth
    ) {
      reviewsContainerRef.current.scrollTo({
        left: reviewsContainerRef.current.scrollLeft + 420,
        behavior: "smooth",
      });
      setScrollPosition(reviewsContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = reviewsContainerRef.current;
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
    <div className="md:py-24 md:px-12 py-8 px-10 flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-10 xl:w-11/12 w-full">
        <div className="flex w-full lg:flex-row flex-col justify-between items-start gap-10">
          <div className="flex flex-1 flex-col lg:items-start items-center w-full flex-grid gap-3">
            <p className="self-stretch text-[#676767] text-center lg:text-left font-poppins xl:text-base text-sm font-normal leading-[170%] tracking-[2px] uppercase">
              Testimonials
            </p>
            <h2 className="self-stretch text-white font-poppins text-center lg:text-left xl:text-[40px] text-xl font-semibold leading-normal tracking-[-0.165px]">
              Voices of Happy Customers
            </h2>
          </div>
          <div className="flex flex-1 items-center w-full lg:justify-end justify-center gap-4">
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
        <div className="relative flex flex-nowrap justify-start w-[100vw] overflow-x-scroll">
        <div
          className="review flex flex-nowrap justify-start gap-5 w-full overflow-x-scroll"
          ref={reviewsContainerRef}
          style={{ padding: "0 20px" }}
        >
          <div className="lg:pl-16" ></div>
          {AllReviews &&
            AllReviews.map((EachReview) => {
              return (
                <Review
                  key={EachReview.key}
                  userImg={EachReview.userImg}
                  name={EachReview.name}
                  username={EachReview.username}
                  date={EachReview.date}
                  reviewContent={EachReview.reviewContent}
                />
              );
            })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
