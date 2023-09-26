"use client"

import React, { useState } from 'react'
import logo from "@/public/logo.svg"
import playStore from "@/public/play-store.png"
import XLogo from "@/public/X_logo.svg"
import BankingPartners from "../../../public/banking-partners.svg";
import SecurityPartners from "../../../public/security-partners.svg";
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebook } from "react-icons/bi"
import { FiMinus, FiPlus } from 'react-icons/fi'

const Features = [
    { name: "Debit Card", link: "debit-card", key: 1 },
    { name: "Investing", link: "investing", key: 2 },
    { name: "Security", link: "security", key: 3 },
    { name: "Chores & Allowance", link: "chores-and-allowance", key: 4 },
    { name: "Cashback and Savings", link: "cashback-and-savings", key: 5 },
];
const Plans = [
    { name: "Refer Freinds", link: "refer-freinds", key: 1 },
    { name: "Gifts", link: "gifts", key: 2 },
];
const Learn = [
    { name: "Blog", link: "blog", key: 1 },
    { name: "Help Center", link: "help-center", key: 2 },
    { name: "FAQ", link: "faq", key: 3 },
    { name: "Financial Literacy", link: "financial-literacy", key: 4 },
];
const Resources = [
    { name: "Careers", link: "careers", key: 1 },
    { name: "Leadership", link: "leadership", key: 2 },
    { name: "Press", link: "press", key: 3 },
];
const Partnerships = [
    { name: "For Classrooms", link: "for-classrooms", key: 1 },
    { name: "Credit Unions", link: "credit-unions", key: 2 },
    { name: "Partner With Us", link: "partner-with-us", key: 3 },
];

const Dropdowns = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full ${isOpen ? 'bg-[#121212]' : ''} relative`}>
            <div className="flex justify-between items-center py-5 cursor-pointer transition-all ease-in-out duration-300" onClick={toggleAccordion}>
                <p className={`text-white font-poppins text-sm font-normal transition-all duration-300 ease-in-out leading-[142.857%] ${isOpen ? 'text-[#676767] text-sm opacity-60' : 'text-white text-xs'}`}>
                    {title}
                </p>
                {isOpen ? <FiMinus className="text-white text-base" /> : <FiPlus className="text-white text-base" />}
            </div>
            <div className={`${isOpen ? "relative translate-y-0 z-10" : "-z-10 absolute top-16 -translate-y-[50%]"
                } left-0 transition-all ease-in-out duration-300 p-5`}>
                {items.map((item) => (
                    <p key={item.key} className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4">
                        {item.name}
                    </p>
                ))}
            </div>
            <hr className='h-px bg-[#1E1E1E] opacity-20' />
        </div>
    );
};

const MobileFooter = () => {
    return (
        <div className='flex px-5 py-10 flex-col items-center gap-10 bg-[#121213]'>
            <div className='flex flex-col items-start gap-3 self-stretch'>
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
                    <BiLogoFacebook className="text-white opacity-70 text-xl relative -top-[2px]" />
                    {/* Linkedin */}
                    <svg className='relative -top-1' xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <g clip-path="url(#clip0_5133_4834)">
                            <path d="M0.852539 11.4914C0.852539 5.52131 5.69221 0.681641 11.6623 0.681641C17.6323 0.681641 22.4719 5.52131 22.4719 11.4914C22.4719 17.4614 17.6323 22.3011 11.6623 22.3011C5.69221 22.3011 0.852539 17.4614 0.852539 11.4914Z" fill="white" fill-opacity="0.1" />
                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8.65338 7.35925C8.65338 8.06598 8.1214 8.63147 7.26723 8.63147H7.25157C6.42914 8.63147 5.89746 8.06598 5.89746 7.35925C5.89746 6.63757 6.44533 6.08789 7.28337 6.08789C8.1214 6.08789 8.63748 6.63757 8.65338 7.35925ZM8.49191 9.63613V16.9965H6.04219V9.63613H8.49191ZM17.3265 16.9965L17.3266 12.7763C17.3266 10.5155 16.1181 9.4633 14.5061 9.4633C13.2055 9.4633 12.6232 10.1777 12.298 10.6789V9.6363H9.84799C9.88024 10.3269 9.84799 16.9967 9.84799 16.9967H12.298V12.8861C12.298 12.6661 12.3139 12.4466 12.3787 12.2892C12.5557 11.8497 12.9588 11.3946 13.6356 11.3946C14.5224 11.3946 14.8769 12.0696 14.8769 13.0587V16.9965H17.3265Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5133_4834">
                                <rect width="22.3009" height="22.3009" fill="white" transform="translate(0.849609)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Image src={XLogo} alt='twitter' className='' />
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
            </div>
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className='text-white text-xl font-semibold'>We work with trusted partners</h1>
                        <p className='text-[#878787] text-xs font-normal leading-[170%]'>Yolo deploys high level security standards to keep your money safe</p>
                    </div>
                    <div className="flex items-start w-full flex-col gap-4">
                        <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 gap-3 bg-white rounded-[7px] items-start">
                            <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                                SECURITY PARTNERS
                            </p>
                            <Image src={SecurityPartners} alt="Security" className='w-full' />
                        </div>
                        <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 pb-[26px] gap-1 bg-white rounded-[7px] items-start">
                            <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                                BANKING AND PAYMENT PARTNERS
                            </p>
                            <Image src={BankingPartners} alt="Footer" className='w-full' />
                        </div>
                    </div>
                </div>
                {/* <p className='text-[#F3F3F3] text-xs font-normal leading-[170%]'>*Yolo Core and Yolo + Invest families can earn monthly rewards of 1% per annum, Yolo Max families can earn 2% per annum, and Yolo Infinity families can earn 5% per annum on an average daily savings balance of up to $5,000 per family. Only Yolo Max and Infinity families can earn 1% cash back on spending monthly. To qualify, the Primary Account must be in Good Standing and have a verified ACH funding account. See Yolo Terms of Service for details. Subject to change at any time.</p> */}
                <div className='flex flex-wrap justify-start items-start gap-3'>
                    <p className='text-[#F3F3F3] text-xs font-normal leading-[150%]'>copyright © 2023 Trivy Technologies Pvt Ltd.</p>
                    <div className="flex items-center gap-4">
                        <p className='text-[#F3F3F3] text-xs font-normal leading-[150%]'>privacy policy</p>
                        <div className='w-px h-4 bg-white'></div>
                        <p className='text-[#F3F3F3] text-xs font-normal leading-[150%]'>terms and conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter
