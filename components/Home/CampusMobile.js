import React from "react";
import Button from "../modules/Button";
import Image from "next/image";
import Swarnim from "../../public/swarnimUniversity.png"
import LJUniversity from "../../public/LJUniversity.png"
import CampusImg from "../../public/Campus.png"
import ShieldCheck from "../../public/ShieldCheck.svg"
import Student from "../../public/Student.svg"
import CreditCard from "../../public/CreditCard.svg"
import Newspaper from "../../public/Newspaper.svg"
import ChatsTeardrop from "../../public/ChatsTeardrop.svg"

const CampusMobile = () => {
    return (
        <div className="bg-[#151515] flex flex-col justify-start items-center">
            <div className="flex flex-col w-full items-center justify-center md:gap-32 md:px-10 md:py-12 xl:py-40 gap-20 px-5 py-9">
                <div>
                    <div className="absolute flex items-center justify-center md:h-20 md:w-20 md:-ml-4 md:mt-1 h-11 w-11 -ml-2 mt-1 rounded-full backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={ShieldCheck} alt="Sheild Check" className="md:h-[34px] h-[18px] md:w-[35px] w-[18px] " />
                    </div>
                    <div className="absolute flex flex-row items-center justify-start md:pl-[14px] md:gap-3 md:h-16 md:w-[230px] md:mt-11 md:ml-[270px] md:rounded-2xl pl-1 gap-1 h-9 w-32 mt-6 ml-[133px] rounded-xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={Student} alt="Student" />
                        <h5 className="text-white font-poppins md:text-xs text-[8px] font-medium leading-normal md:tracking-[-0.052px] tracking-[-0.003px]">
                            Make your hostel login<br />digital
                        </h5>
                    </div>
                    <div className="flex w-full h-full items-center justify-center">
                        <Image src={CampusImg} alt="Campus Image" className="md:h-[321px] md:w-[321px] h-[170px] w-[170px] " />
                    </div>
                    <div className="absolute flex flex-row items-center justify-start md:pl-[14px] md:gap-3 md:h-16 md:w-[230px] md:-ml-28 md:-mt-28 md:rounded-2xl pl-1 gap-1 h-9 w-[150px] -ml-[66px] -mt-16 rounded-xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={CreditCard} alt="Credit Card" />
                        <h5 className="text-white font-poppins md:text-xs text-[8px] font-medium leading-normal md:tracking-[-0.052px] tracking-[-0.003px]">
                            Get access to hybrid<br />card that do multiple tasks
                        </h5>
                    </div>
                    <div className="absolute flex flex-row items-center justify-start md:pl-[14px] md:gap-3 md:h-16 md:w-[230px] md:-mt-[50px] md:ml-[225px] md:rounded-2xl pl-1 gap-1 h-9 w-32  -mt-7 ml-28 rounded-xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={Newspaper} alt="Newspaper" />
                        <h5 className="text-white font-poppins md:text-xs text-[8px] font-medium leading-normal md:tracking-[-0.052px] tracking-[-0.003px]">
                            Digital Onboarding<br />-Paperless Campus
                        </h5>
                    </div>
                    <div className="absolute flex items-center justify-center md:h-20 md:w-20 md:ml-16 md:mt-2 h-11 w-11 ml-9 mt-1 rounded-full backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={ChatsTeardrop} alt="Chats Teardrop" className="md:h-[34px] h-[18px] md:w-[35px] w-[18px] " />
                    </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-6 items-center justify-start sm:mt-20">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-white font-poppins md:text-[40px] text-[20px] md:font-semibold font-normal leading-normal tracking-[-0.165px]">
                            Make Your Campus<br />Digital Through {" "}
                            <span className="bg-gradient-to-r from-[#BB0707] to-[#650B0B] text-transparent bg-clip-text">
                                Yolo
                            </span>
                        </h1>
                        <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]">
                            YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.
                        </p>
                    </div>
                    <div>
                        <Button buttonName={"Book a Demo Now"} />
                    </div>
                    <div className="gap-2">
                        <p className="text-white font-poppins text-base font-normal leading-[170%] tracking-[2px] uppercase">
                            Our Partners
                        </p>
                        <div className="flex flex-row gap-4">
                            <Image src={Swarnim} alt="Swarnim University Logo" />
                            <Image src={LJUniversity} alt="LJ University" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampusMobile;