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

const Campus = () => {
    return (
        <div className="bg-[#151515] flex flex-col justify-center items-center xl:min-h-screen ">
            <div className="flex flex-col xl:flex-row gap-[134px] sm:w-[85.97%] w-full items-center justify-start px-10 py-12 xl:py-40">
                <div className="flex flex-col w-[500px] gap-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-white font-poppins text-[40px] font-semibold leading-normal">
                            Make Your Campus<br/>Digital Through {" "}
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
                            <Image src={LJUniversity} alt="LJ University" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="absolute flex items-center justify-center h-20 w-20 -ml-4 mt-1 rounded-full backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={ShieldCheck} alt="Sheild Check" />
                    </div>
                    <div className="absolute flex flex-row items-center justify-start pl-[14px] gap-3 h-16 w-[230px] mt-11 ml-[270px] rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={Student} alt="Student" />
                        <h5 className="text-white font-poppins text-xs font-medium leading-normal tracking-[-0.052px]">
                            Make your hostel login<br/>digital
                        </h5>
                    </div>
                    <Image src={CampusImg} alt="Campus Image" className="h-[321px] w-[321px]" />
                    <div className="absolute flex flex-row items-center justify-start pl-[14px] gap-3 h-16 w-[230px] -ml-28 -mt-28 rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={CreditCard} alt="Credit Card" />
                        <h5 className="text-white font-poppins text-xs font-medium leading-normal tracking-[-0.052px]">
                            Get access to hybrid<br/>card that do multiple tasks
                        </h5>
                    </div>
                    <div className="absolute flex flex-row items-center justify-start pl-[14px] h-16 w-[230px] -mt-[50px] ml-[225px] gap-3 rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={Newspaper} alt="Newspaper" />
                        <h5 className="text-white font-poppins text-xs font-medium leading-normal tracking-[-0.052px]">
                        Digital Onboarding<br/>-Paperless Campus
                        </h5>
                    </div>
                    <div className="absolute flex items-center justify-center h-20 w-20 ml-16 mt-2 rounded-full backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                        <Image src={ChatsTeardrop} alt="Chats Teardrop" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campus;