"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import review_1 from '../../public/review-1.png'
import review_2 from '../../public/review-2.png'
import review_3 from '../../public/review-3.png'
import review_4 from '../../public/review-4.png'


const AllReviews = [
  {
    key:1,
    name: "Rajesh Jain",
    userImg: review_1,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "I was skeptical at first, but using my personal debit card for bill payments with this service has been a game-changer. It's so convenient, and I can't believe I didn't start using it sooner!",
  },
  {
    key:2,
    name: "RK Vishnoi",
    userImg: review_2,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "Getting my first prepaid card through this product was a breeze. I never thought it would be this easy, and now I feel more in control of my finances than ever before.",
  },
  {
    key:3,
    name: "Gopal Das",
    userImg: review_3,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "The prepaid card I got through this service has been a lifesaver. It's perfect for managing my expenses and staying on top of my budget.",
  },
  {
    key:4,
    name: "Deepika",
    userImg: review_4,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "This service has saved me so much time and effort when it comes to managing my bills. I love how it simplifies the process and keeps everything in one place.",
  },
  {
    key:5,
    name: "Vishal",
    userImg: review_2,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "Getting my first prepaid card through this product was a breeze. I never thought it would be this easy, and now I feel more in control of my finances than ever before.",
  },
  {
    key:6,
    name: "Karanjot",
    userImg: review_3,
    username: "@username",
    date: "22.03.2021",
    reviewContent:
      "This service has saved me so much time and effort when it comes to managing my bills. I love how it simplifies the process and keeps everything in one place.",
  },
];

const Review = ({ userImg, name, username, date, reviewContent }) => {
    return (
        <div>
            <div className='flex flex-col flex-grid p-5 items-start rounded-[10px] h-[260px] lg:w-[400px] w-[280px] sm:w-[320px] bg-[#121213]'>
                <div className="flex pb-4 gap-[10px] self-stretch items-center">
                    <Image src={userImg} alt="Review"/>
                    <div>
                        <h5 className='text-white font-poppins text-sm font-medium leading-[140%]'>{name}</h5>
                        <p className='text-[#676767] font-inter text-sm font-normal leading-[140%]'>{username}</p>
                    </div>
                </div>
                <div className='mt-[16px] flex pb-[16px] items-start gap-[10px] self-stretch flex-grow'>
                    <p className='text-[#878787] font-poppins text-sm font-normal leading-[170%] tracking-[-0.165px]'>{reviewContent}</p>
                </div>
                <div className='flex justify-between items-end self-stretch'>
                    <Link href="/" className='flex flex-col items-start text-[#676767]'>Show original</Link>
                    <p className='text-[#676767] text-center font-inter text-sm font-normal leading-[140%]'>{date}</p>
                </div>
            </div>
        </div>
    )
}

const Reviews = () => {
    const reviewsContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
    const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

    const scrollLeft = () => {
        if (reviewsContainerRef.current?.scrollLeft > 0) {
            reviewsContainerRef.current.scrollTo({
                left: reviewsContainerRef.current.scrollLeft - 420,
                behavior: 'smooth',
            });
            setScrollPosition(reviewsContainerRef.current.scrollLeft);
        }
    };

    const scrollRight = () => {
        if (reviewsContainerRef.current?.scrollLeft < reviewsContainerRef.current?.scrollWidth - reviewsContainerRef.current?.clientWidth) {
            reviewsContainerRef.current.scrollTo({
                left: reviewsContainerRef.current.scrollLeft + 420,
                behavior: 'smooth',
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
                    container.scrollLeft >=
                    container.scrollWidth - container.clientWidth
                );
            }
        };
        // handleScroll();
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='md:py-24 md:px-12 py-8 px-10 flex flex-col justify-center items-center overflow-hidden'>
            <div className='flex flex-col justify-center items-center gap-10 xl:w-11/12 w-full'>
                <div className='flex w-full justify-between items-start'>
                    <div className='flex flex-col items-start flex-grid gap-3'>
                        <p className='self-stretch text-[#676767] font-poppins xl:text-base text-sm font-normal leading-[170%] tracking-[2px] uppercase'>Testimonials</p>
                        <h2 className='self-stretch text-white font-poppins xl:text-[40px] text-3xl font-semibold leading-normal tracking-[-0.165px]'>Voices of Happy Customers</h2>
                    </div>
                    <div className='hidden xl:flex justify-center items-start gap-[17px]'>
                        <button className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${isLeftButtonDisabled ? 'text-[#383838]' : 'text-[#585858]'}`} onClick={scrollLeft} disabled={isLeftButtonDisabled}><GoArrowLeft /></button>
                        <button className={`flex h-14 px-3 justify-center items-center xl:text-2xl text-lg border-gradient-bottom ${isRightButtonDisabled ? 'text-[#383838]' : 'text-[#585858]'}`} onClick={scrollRight} disabled={isRightButtonDisabled}><GoArrowRight /></button>
                    </div>
                </div>
                <div className='review flex flex-wrap xl:flex-nowrap justify-between gap-5 w-full overflow-x-scroll' ref={reviewsContainerRef}>
                    {
                        AllReviews && AllReviews.map((EachReview) => {
                            return (
                                <Review key={AllReviews.key} userImg={EachReview.userImg} name={EachReview.name} username={EachReview.username} date={EachReview.date} reviewContent={EachReview.reviewContent} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews
