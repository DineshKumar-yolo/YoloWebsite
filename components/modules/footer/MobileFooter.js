"use client"

import React, { useState } from 'react'
import logo from "@/public/logo.svg"
import playStore from "@/public/play-store.png"
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import XLogo from "@/public/X_logo.svg"
import BankingPartners from "../../../public/banking-partners.svg";
import SecurityPartners from "../../../public/security-partners.svg";
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebook } from "react-icons/bi"
import { FiMinus, FiPlus } from 'react-icons/fi'

const Features = [
    { name: "Debit Card", link: "debit-card", key: 1 },
    { name: "Security", link: "security", key: 2 },
    { name: "Chores & Allowance", link: "tasks", key: 3 },
    { name: "Cashback and Savings", link: "cashback-and-savings", key: 4 },
];
const Plans = [
    { name: "Refer Friends", link: "refer-friends", key: 1 },
    { name: "Gifts", link: "gifts", key: 2 },
];
const Learn = [
    { name: "Blog", link: "blog", key: 1 },
    { name: "FAQ", link: "faq", key: 2 },
];
const Resources = [
    { name: "team", link: "team", key: 1 },
    { name: "Press", link: "press", key: 2 },
];
const Partnerships = [
    { name: "For Classrooms", link: "for-classrooms", key: 1 },
    { name: "Partner With Us", link: "partner-with-us", key: 2 },
];

const Dropdowns = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full ${isOpen ? 'bg-[#121212]' : ''} flex flex-col justify-center  items-stretch px-5 py-[30px] transition-all  duration-700 ease-in-out hover:bg-[#121212] border-b-[0.3px] border-[#1E1E1E] cursor-pointer`} onClick={toggleAccordion}>
            <div className="flex justify-between items-stretch transition-all ease-in-out duration-700" >
                <p className={`text-white font-poppins text-sm font-normal transition-all duration-700 ease-in-out leading-[142.857%] ${isOpen ? 'text-[#676767] text-sm opacity-60' : 'text-white text-xs'}`}>
                    {title} (coming soon)
                </p>
                {isOpen ?
                    <FiMinus className="text-white text-base transition-all duration-700" />
                    :
                    <FiPlus className="text-white text-base transition-all duration-700" />
                }
            </div>
            <div className={`${isOpen ? "relative z-10 h-full  pt-4" : "pt-0 -z-10 overflow-hidden h-0"
                } pl-5 transition-all ease-in-out duration-700`}>
                {items.map((item) => (
                    <p key={item.key} className="text-white font-poppins text-sm font-normal leading-[142.857%] transition-all ease-in-out duration-700">
                        {item.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

const MobileFooter = () => {
    const year = new Date().getFullYear();

    return (
        <div className='flex px-5 py-10 flex-col items-center gap-10 bg-[#121213]'>
            {/* <div className='flex flex-col items-start gap-3 self-stretch'>
                <div className="flex items-center justify-between self-stretch">
                    <Image src={logo} alt='YOLO' className='h-5 w-16' />
                    <Link
                        target="_blank"
                        href={
                            "https://play.google.com/store/apps/details?id=com.getyolo&pcampaignid=web_share"
                        }
                    >
                        <Image src={playStore} alt='Download' className='h-8 w-24' />
                    </Link>
                </div>
                <div className='flex items-start justify-center gap-2'>
                    <Image src={instagram} alt="instagram" width={30} height={30} className="cursor-pointer" />
                    <Image src={linkedin} alt="linkedin" width={30} height={30} className="cursor-pointer" />
                    <Image src={twitter} alt="twitter" width={30} height={30} className="cursor-pointer" />
                </div>
            </div>
            <div className='w-full flex flex-col items-start'>
                <Dropdowns title="Features" items={Features} />
                <Dropdowns title="Plans" items={Plans} />
                <Dropdowns title="Learn" items={Learn} />
                <Dropdowns title="Resources" items={Resources} />
                <Dropdowns title="Partnerships" items={Partnerships} />
            </div>
            <div>
                <hr className='h-px bg-[#1E1E1E]' />
            </div> */}
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-white text-xl font-semibold'>We work with trusted partners</h1>
                        <p className='text-[#878787] text-xs font-normal leading-[170%]'>Yolo deploys high level security standards to keep your money safe</p>
                    </div>
                    <div className="flex items-start w-full flex-col gap-4">
                        {/* <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 gap-3 bg-white rounded-[7px] items-start">
                            <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                                SECURITY PARTNERS
                            </p>
                            <Image src={SecurityPartners} alt="Security" className='w-full' />
                        </div> */}
                        <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 pb-[26px] gap-1 bg-white rounded-[7px] items-start">
                            <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                                BANKING AND PAYMENT PARTNERS
                            </p>
                            <Image src={BankingPartners} alt="Footer" className='w-full' />
                        </div>
                    </div>
                </div>
                {/* <p className='text-[#F3F3F3] text-xs font-normal leading-[170%]'>*Yolo Core and Yolo + Invest families can earn monthly rewards of 1% per annum, Yolo Max families can earn 2% per annum, and Yolo Infinity families can earn 5% per annum on an average daily savings balance of up to $5,000 per family. Only Yolo Max and Infinity families can earn 1% cash back on spending monthly. To qualify, the Primary Account must be in Good Standing and have a verified ACH funding account. See Yolo Terms of Service for details. Subject to change at any time.</p> */}
                <div className='flex flex-wrap justify-center items-center gap-3'>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy-policy" className='text-center text-[#F3F3F3] text-xs font-normal leading-[150%]'>privacy policy</Link>
                        <div className='w-px h-4 bg-white'></div>
                        <Link href="/terms-of-services" className='text-center text-[#F3F3F3] text-xs font-normal leading-[150%]'>terms and conditions</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/faq/#contact" className='text-center text-[#F3F3F3] text-xs font-normal leading-[150%]'>contact us</Link>
                        <div className='w-px h-4 bg-white'></div>
                        <Link href="/user-account-delete" className='text-center text-[#F3F3F3] text-xs font-normal leading-[150%]'>YOLO account deletion</Link>
                    </div>
                    <p className='text-[#F3F3F3] text-xs font-normal leading-[150%]'>copyright © {year} Trivy Technologies Pvt Ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter
