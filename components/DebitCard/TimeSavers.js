"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Lightning from '../../public/Lightning.svg'
import Bell from '../../public/BellSimple.svg'
import Mobile from '../../public/DeviceMobileCamera.svg'
import Wallet from '../../public/Wallet.svg'

const TimeSaverContext = [
    {
        'timeHead': 'Instant money transfers',
        'timeImage': Lightning,
        'timeContent': "Send money instantly to your kids' accounts.",
    },
    {
        'timeHead': 'Real-time notifications',
        'timeImage': Bell,
        'timeContent': 'Keep tabs on spending with alerts any time the card is used — or declined.'
    },
    {
        'timeHead': 'Mobile payments',
        'timeImage': Mobile,
        'timeContent': 'Use our pay feature in app for payments.',
    },
    {
        'timeHead': 'Balance tracking',
        'timeImage': Wallet,
        'timeContent': 'Use our pay feature in app for payments.',
    }
]

const TimeSaverBoxes = ( {timeImage, timeHead, timeContent} ) => {
    return (
        <div className='w-[400px] border-gradient-bottom'>
            <div className='flex flex-col items-start mx-[41px] mt-[59px] gap-[30px] w-[319px] h-[326px]'>
                <Image src={timeImage} />
                <div className='flex flex-col items-start gap-5'>
                    <h5 className='text-white font-poppins text-[26px] font-semibold leading-[92.308%] lowercase'>{timeHead}</h5>
                    <p className='text-[#9C9C9C] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>
                        {timeContent}
                    </p>
                </div>
            </div>
        </div>
    )
}

const TimeSavers = () => {
    const TimeSaverContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
    const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

    const scrollLeft = () => {
        if (TimeSaverContainerRef.current?.scrollLeft > 0) {
            TimeSaverContainerRef.current.scrollTo({
                left: TimeSaverContainerRef.current.scrollLeft - 420,
                behavior: 'smooth',
            });
            setScrollPosition(TimeSaverContainerRef.current.scrollLeft);
        }
    };

    const scrollRight = () => {
        if (TimeSaverContainerRef.current?.scrollLeft < TimeSaverContainerRef.current?.scrollWidth - TimeSaverContainerRef.current?.clientWidth) {
            TimeSaverContainerRef.current.scrollTo({
                left: TimeSaverContainerRef.current.scrollLeft + 420,
                behavior: 'smooth',
            });
            setScrollPosition(TimeSaverContainerRef.current.scrollLeft);
        }
    };

    const handleScroll = () => {
        const container = TimeSaverContainerRef.current;
        if (container) {
            setIsLeftButtonDisabled(container.scrollLeft === 0);
            setIsRightButtonDisabled(
                container.scrollLeft >=
                container.scrollWidth - container.clientWidth
            );
        }
    };

    useEffect(() => {
        handleScroll();
        TimeSaverContainerRef.current.addEventListener('scroll', handleScroll);
        return () => {
            TimeSaverContainerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
      <div className='flex flex-col py-24 px-[100px] gap-20 items-center bg-[#151515]'>
          <div className='flex justify-between items-start w-[1240px]'>
              <div className='flex flex-col items-start flex-grid gap-3'>
                  <h1 className='text-white font-poppins text-[40px] font-semibold leading-normal tracking-[-0.165px]'>Unlock these time-savers.</h1>
              </div>
              <div className='flex justify-center items-start gap-[17px]'>
                  <button className={`flex h-14 px-3 justify-center items-center text-2xl border-gradient-bottom ${isLeftButtonDisabled ? 'text-[#383838]' : 'text-white'}`} onClick={scrollLeft} disabled={isLeftButtonDisabled}><GoArrowLeft /></button>
                  <button className={`flex h-14 px-3 justify-center items-center text-2xl border-gradient-bottom ${isRightButtonDisabled ? 'text-[#383838]' : 'text-white'}`} onClick={scrollRight} disabled={isRightButtonDisabled}><GoArrowRight /></button>
              </div>
          </div>
          <div ref={TimeSaverContainerRef} className='w-[1240px] flex justify-start items-center gap-5 overflow-x-auto'>
              {
                  TimeSaverContext && TimeSaverContext.map((timesaver) => {
                      return (
                          <TimeSaverBoxes timeImage={timesaver.timeImage} timeHead={timesaver.timeHead} timeContent={timesaver.timeContent} />
                      )
                  })
              }
          </div>
    </div>
  )
}

export default TimeSavers
