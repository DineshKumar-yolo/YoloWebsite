import React from "react";
import logo from "../../../public/logo.svg";
import playStore from "../../../public/play-store.png";
import BankingPartners from "../../../public/banking-partners.png";
import SecurityPartners from "../../../public/security-partners.png";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Features = [
  { name: "Debit Card", link: "debit-card" },
  { name: "Investing", link: "investing" },
  { name: "Security", link: "security" },
  { name: "Chores & Allowance", link: "chores-and-allowance" },
  { name: "Cashback and Savings", link: "cashback-and-savings" },
];
const Plans = [
  { name: "Refer Freinds", link: "refer-freinds" },
  { name: "Gifts", link: "gifts" },
];
const Learn = [
  { name: "Blog", link: "blog" },
  { name: "Help Center", link: "help-center" },
  { name: "FAQ", link: "faq" },
  { name: "Financial Literacy", link: "financial-literacy" },
];
const Resources = [
  { name: "Careers", link: "careers" },
  { name: "Leadership", link: "leadership" },
  { name: "Press", link: "press" },
];
const Partnerships = [
  { name: "For Classrooms", link: "for-classrooms" },
  { name: "Credit Unions", link: "credit-unions" },
  { name: "Partner With Us", link: "partner-with-us" },
];

const Footer = () => {
  return (
    <div className="py-16 xl:px-[100px] px-10 w-full bg-[#121213] inline-flex justify-center flex-col items-center gap-36">
      <div className="flex xl:flex-row flex-col xl:w-[1240px] xl:h-[216px] items-start gap-5 shrink-0">
        <div className="w-[190px]">
          <Image src={logo} className="mb-[31px]" />
          <Link
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=com.getyolo&pcampaignid=web_share"
            }
          >
            <Image
              src={playStore}
              className="mb-[20.86px] w-[120.83px] h-[37.31px] shrink-0"
            />
          </Link>
          <div className="flex gap-4 items-start opacity-20 text-white text-2xl">
            <FaFacebook className="rounded-full cursor-pointer" />
            <ImLinkedin className="rounded-[50%] cursor-pointer" />
            <AiFillTwitterCircle className="rounded-[50%] cursor-pointer" />
          </div>
        </div>
        <div className="flex pb-4 flex-wrap justify-between items-start gap-5 flex-grid">
          <div className="flex flex-col sm:w-[190px] items-start justify-start">
            <h5 className="text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]">
              Features
            </h5>
            {Features &&
              Features.map((feature) => {
                return (
                  <p
                    // href={`/${feature.link}`}
                    className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4"
                  >
                    {feature.name}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col sm:w-[190px] items-start justify-start">
            <h5 className="text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]">
              Plans
            </h5>
            {Plans &&
              Plans.map((plan) => {
                return (
                  <p
                    // href={`/${plan.link}`}
                    className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4"
                  >
                    {plan.name}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col sm:w-[190px] items-start justify-start">
            <h5 className="text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]">
              Learn
            </h5>
            {Learn &&
              Learn.map((learn) => {
                return (
                  <p
                    // href={`/${learn.link}`}
                    className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4"
                  >
                    {learn.name}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col sm:w-[190px] items-start justify-start">
            <h5 className="text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px] uppercase">
              Resources
            </h5>
            {Resources &&
              Resources.map((resource) => {
                return (
                  <p
                    // href={`/${resource.link}`}
                    className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4"
                  >
                    {resource.name}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col sm:w-[190px] items-start justify-start">
            <h5 className="text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]">
              Partnerships
            </h5>
            {Partnerships &&
              Partnerships.map((partners) => {
                return (
                  <p
                    // href={`/${partners.link}`}
                    className="text-white font-poppins text-sm font-normal leading-[142.857%] mb-4"
                  >
                    {partners.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start gap-[68px] 2xl:w-[1240px]">
        <div className="flex flex-col items-start gap-12">
          <div className="flex items-start flex-wrap justify-between w-full gap-5 xl:gap-0">
            <div className="flex flex-col justify-center items-start gap-1">
              <h4 className="text-white font-poppins text-2xl font-semibold leading-[133.333%]">
                We work with trusted partners
              </h4>
              <p className="text-white opacity-60 text-xs font-normal leading-[133.333%]">
                Jupiter deploys high level security standards to keep your money
                safe
              </p>
            </div>
            <div className="flex items-start lg:flex-row flex-col gap-4">
              <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 gap-3 bg-white rounded-[7px] items-start">
                <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                  SECURITY PARTNERS
                </p>
                <Image src={SecurityPartners} />
              </div>
              <div className="max-w-[341px] flex flex-1 w-full flex-col p-4 pb-[26px] gap-3 bg-white rounded-[7px] items-start">
                <p className="text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]">
                  BANKING AND PAYMENT PARTNERS
                </p>
                <Image src={BankingPartners} />
              </div>
            </div>
          </div>
          <p className="text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%] text-justify">
            *Yolo Core and Yolo + Invest families can earn monthly rewards of 1%
            per annum, Yolo Max families can earn 2% per annum, and Yolo
            Infinity families can earn 5% per annum on an average daily savings
            balance of up to $5,000 per family. Only Yolo Max and Infinity
            families can earn 1% cash back on spending monthly. To qualify, the
            Primary Account must be in Good Standing and have a verified ACH
            funding account. See Yolo Terms of Service for details. Subject to
            change at any time.
          </p>
        </div>
        <div className="w-full flex-wrap flex justify-end items-start gap-5 md:gap-0">
          {/* <p className="text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]">
            copyright © 2020-22 Dreamplug Technologies Pvt Ltd.
          </p> */}
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy">
              <p className="text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]">
                privacy policy
              </p>
            </Link>
            <div className="w-[1px] h-7 bg-white"></div>
            <Link href="/terms-of-services">
              <p className="text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]">
                terms and conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
