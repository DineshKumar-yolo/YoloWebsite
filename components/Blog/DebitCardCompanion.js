"use client"

import React, { useEffect, useRef, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import YoloCard from '../../public/Yolo-DebitCard.png'
import Image from 'next/image';


const scrollContent = [
    {
        image: YoloCard,
        buttons: {
            button1: "Debit Card",
            button2: "Genie",
        },
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        content:
            "YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.",
    },
    {
        image: YoloCard,
        buttons: {
            button1: "Debit Card",
            button2: "Genie",
        },
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        content:
            "YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.",
    },
    {
        image: YoloCard,
        buttons: {
            button1: "Debit Card",
            button2: "Genie",
        },
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        content:
            "YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.",
    },
    {
        image: YoloCard,
        buttons: {
            button1: "Debit Card",
            button2: "Genie",
        },
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        content:
            "YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.",
    },
];

const DebitCardCompanion = () => {
    const CardCompanionContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
    const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

    const scrollLeft = () => {
      const innerWidth = window.innerWidth;
      const scrollLeft = CardCompanionContainerRef.current?.scrollLeft;

      if (scrollLeft > 0) {
        const scrollAmount = Math.min(1029, innerWidth); // Set the maximum scroll amount to either 1029 or the inner width, whichever is smaller.
        CardCompanionContainerRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
        setScrollPosition(CardCompanionContainerRef.current.scrollLeft);
      }
    };

    const scrollRight = () => {
      const innerWidth = window.innerWidth;
      const scrollLeft = CardCompanionContainerRef.current?.scrollLeft;
      const scrollWidth = CardCompanionContainerRef.current?.scrollWidth;
      const clientWidth = CardCompanionContainerRef.current?.clientWidth;

      if (scrollLeft < scrollWidth - clientWidth) {
        const scrollAmount = Math.min(1029, innerWidth); // Set the maximum scroll amount to either 1029 or the inner width, whichever is smaller.
        CardCompanionContainerRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
        setScrollPosition(CardCompanionContainerRef.current.scrollLeft);
      }
    };


    useEffect(() => {
        const container = CardCompanionContainerRef.current;
        const handleScroll = () => {
            if (container) {
                setIsLeftButtonDisabled(container.scrollLeft === 0);
                setIsRightButtonDisabled(
                    container.scrollLeft >=
                    container.scrollWidth - container.clientWidth
                );
            }
        };
        handleScroll();
          container.addEventListener("scroll", handleScroll);
          return () => {
            container.removeEventListener("scroll", handleScroll);
          };
    }, []);
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='xl:w-[1029px] w-full inline-flex flex-col items-center gap-10'>
                <div className="flex xl:overflow-x-hidden overflow-x-auto w-full" ref={CardCompanionContainerRef}>
                    {
                        scrollContent && scrollContent.map((scrollcontent, index) => {
                            return (
                                <div key={index} className='flex flex-wrap xl:flex-nowrap items-center gap-10 w-full px-5 shrink-0'>
                                    <Image src={scrollcontent.image} className='xl:w-[504px] xl:h-[430px] aspect-square xl:aspect-auto rounded-2xl block' />
                                    <div className='flex flex-col items-start gap-3 w-[485px]'>
                                        <div className='flex flex-col items-start gap-3'>
                                            <div className='flex flex-col items-start gap-6'>
                                                <div className='flex items-start gap-4'>
                                                    <button className='flex justify-center items-center gap-[10px] px-4 py-2 border-gradient-bottom text-white font-poppins text-base font-normal leading-normal tracking-[-0.165px]'>{scrollcontent.buttons.button1}</button>
                                                    <button className='flex justify-center items-center gap-[10px] px-4 py-2 border-gradient-bottom text-white font-poppins text-base font-normal leading-normal tracking-[-0.165px]'>{scrollcontent.buttons.button2}</button>
                                                </div>
                                                <h1 className='text-[#F8F8F8] font-poppins text-[39px] font-semibold leading-[150%]'>Your Reliable Debit Card Companion</h1>
                                            </div>
                                            <div className='text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>{scrollcontent.details}</div>
                                        </div>
                                        <p className='text-[#CCC] font-poppins text-lg font-normal leading-[170%] tracking-[-0.165px]'>{scrollcontent.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center items-start gap-[17px]'>
                    <button className={`flex h-14 px-3 justify-center items-center text-2xl border-gradient-bottom ${isLeftButtonDisabled ? 'text-[#383838]' : 'text-[#585858]'}`} onClick={scrollLeft} disabled={isLeftButtonDisabled}><GoArrowLeft /></button>
                    <button className={`flex h-14 px-3 justify-center items-center text-2xl border-gradient-bottom ${isRightButtonDisabled ? 'text-[#383838]' : 'text-[#585858]'}`} onClick={scrollRight} disabled={isRightButtonDisabled}><GoArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default DebitCardCompanion
