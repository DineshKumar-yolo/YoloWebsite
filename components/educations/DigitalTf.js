import React from "react";
import Button from "../modules/Button";
import chats from "@/public/chats.svg";
import clock from "@/public/clock.svg";
import events from "@/public/yolo-giveaways.svg";
import Image from "next/image";

const DigitalTf = () => {
    return (
        <div className="bg-[#F8F8F8]">

            <div className="flex max-w-[1240px] flex-col xl:px-0 px-10 py-10 xl:py-24 m-auto items-start gap-20 justify-center">
                <div className="flex w-full flex-col lg:flex-row gap-5 items-start justify-between self-stretch">
                    <h3 className="flex flex-1 flex-grid text-4xl text-[#0D0D0D] font-semibold leading-normal">
                        Supporting your digital transformation every step of the way
                    </h3>
                    <div className='flex-1 justify-end flex'>
                        <Button buttonName={"Book a Demo Now"} />
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
                        <div className="flex flex-col items-start gap-7 mt-14">
                            <Image src={chats} />
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    Live Chat support
                                </h1>
                                <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                                    Our Support team is available for your team always 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
                        <div className="flex flex-col items-start gap-7">
                            <Image src={clock} />
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    quick response 
                                </h1>
                                <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                                    clear your queries without any wait time and on priority
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
                        <div className="flex flex-col items-start gap-7">
                            <Image src={events} />
                            <div className="flex max-w-xs flex-col items-start gap-5">
                                <h1 className="font-poppins text-[#0D0D0D] text-2xl font-semibold leading-[24px] lowercase">
                                    Monthly Events
                                </h1>
                                <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                                    every month our experts team conducts webinars
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalTf;
