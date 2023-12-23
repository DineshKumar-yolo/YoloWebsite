"use client";

import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const Features = [
  { name: "Debit Card", link: "debit-card", key: 1 },
  { name: "Investing", link: "investing", key: 2 },
  { name: "Security", link: "security", key: 3 },
  { name: "Chores & Allowance", link: "tasks", key: 4 },
  { name: "Cashback and Savings", link: "cashback-and-savings", key: 5 },
];
const Plans = [
  { name: "Refer Friends", link: "refer-friends", key: 1 },
  { name: "Gifts", link: "gifts", key: 2 },
];
const Learn = [
  { name: "Blog", link: "blog", key: 1 },
  { name: "Help Center", link: "help-center", key: 2 },
  { name: "FAQ", link: "faq", key: 3 },
  { name: "Financial Literacy", link: "financial-literacy", key: 4 },
];
const Resources = [
  { name: "team", link: "team", key: 1 },
  { name: "Careers", link: "careers", key: 2 },
  { name: "Leadership", link: "leadership", key: 3 },
  { name: "Press", link: "press", key: 4 },
];
const Partnerships = [
  { name: "For Classrooms", link: "for-classrooms", key: 1 },
  { name: "Credit Unions", link: "credit-unions", key: 2 },
  { name: "Partner With Us", link: "partner-with-us", key: 3 },
];

const MobileNavbar = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isFeatures, setisFeatures] = useState(false);
  const [isPlans, setisPlans] = useState(false);
  const [isLearn, setisLearn] = useState(false);
  const [isResources, setisResources] = useState(false);
  const [isPartnerships, setisPartnerships] = useState(false);

  const List = ({ Items }) => {
    return (
      <div className="flex flex-col w-[95%] gap-6">
        {Items.map((item) => {
          return (
            <Link
              key={item.key}
              href={`/${item.link}`}
              onClick={() => setisMenuOpen(!setisMenuOpen)}
              className="block px-10 text-[#868686] font-poppins text-base font-normal tracking-[-0.165px]"
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex px-5 sm:py-10 py-4 items-center justify-between gap-6 text-white w-full relative">
      <Link href="/">
        <Image src={logo} alt="YOLO" className="h-6 w-20" />
      </Link>
      <button onClick={() => {
        setisMenuOpen(!isMenuOpen);
        setisFeatures(false);
        setisPlans(false);
        setisLearn(false);
        setisResources(false);
        setisPartnerships(false);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H20M13 18H20"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={`${!isMenuOpen ? "-translate-y-[100%] -z-10" : "translate-y-0 z-20"
          } shadow-2xl transition-all duration-300 w-full min-h-screen px-5 md:py-10 py-6 m-0 top-0 left-0 fixed flex flex-col items-center gap-10 bg-[#0D0D0D]`}
      >
        <div className="flex w-full">
          <Link href="/">
            <Image src={logo} alt="YOLO" className="h-6 w-20" />
          </Link>
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className="flex items-end w-full justify-end text-white text-2xl"
          >
            <VscChromeClose />
          </button>
        </div>
        <div className="flex flex-col w-full gap-6">
        <Link
          href=""
          onClick={() => {
            setisFeatures(!isFeatures);
          }}
          className={"flex w-full justify-between text-[#CFCFCF] font-poppins text-base font-normal tracking-[-0.165px]"}
        >
          For GenZ <RiArrowDropDownLine className="text-3xl" />
        </Link>
        {
          isFeatures ?
            <List Items={Features} />
            : null
        }
        </div>
        <div className="flex flex-col w-full gap-6">
        <Link
          href="/for-classrooms"
          className="flex w-full justify-between text-[#CFCFCF] font-poppins text-base font-normal tracking-[-0.165px]"
        >
          For Colleges
        </Link>
        {
          isPlans ?
            <List Items={Plans} />
            : null
        }
        </div>
        <div className="flex flex-col w-full gap-6">
        <Link
          href=""
          onClick={() => setisLearn(!isLearn)}
          className="flex w-full justify-between text-[#CFCFCF] font-poppins text-base font-normal tracking-[-0.165px]"
        >
          Learn <RiArrowDropDownLine className="text-3xl" />
        </Link>
        {
          isLearn ?
            <List Items={Learn} />
            : null
        }
        </div>
        <div className="flex flex-col w-full gap-6">
        <Link
          href=""
          onClick={() => setisResources(!isResources)}
          className="flex w-full justify-between text-[#CFCFCF] font-poppins text-base font-normal tracking-[-0.165px]"
        >
          Who we are <RiArrowDropDownLine className="text-3xl" />
        </Link>
        {
          isResources ?
            <List Items={Resources} />
            : null
        }
        </div>
        <div className="flex flex-col w-full gap-6">
        <Link
          href=""
          onClick={() => setisPartnerships(!isPartnerships)}
          className="flex w-full justify-between text-[#CFCFCF] font-poppins text-base font-normal tracking-[-0.165px]"
        >
          Partnerships <RiArrowDropDownLine className="text-3xl" />
        </Link>
        {
          isPartnerships ?
            <List Items={Partnerships} />
            : null
        }
        </div>

        {/* Need Approval for this beacause its looks nasty */}
        {/* <div className="border-gradient-bottom my-6 flex justify-center items-center h-10 bg-transparent text-[#8A8989] px-3">
                  <button className="flex w-[20px] p-[1px] items-start shrink-0">
                      <BiLogoPlayStore />
                  </button>
                  <button className="flex w-[20px] px-[3px] py-[1.5px] items-start shrink-0">
                      <BiLogoApple />
                  </button>
              </div> */}
      </div>
    </div>
  );
};

export default MobileNavbar;
