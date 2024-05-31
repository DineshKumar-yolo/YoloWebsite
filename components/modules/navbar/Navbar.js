import Link from "next/link";
import React from "react";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Scanner from "../../../public/Scanner.png";

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

const Navbar = () => {

  const Menu = ({ name, list }) => {
    return (
      <li className="relative float-left group">
        <button className="flex gap-px pl-2 rounded-xl">
          {name}
          <RiArrowDropDownLine className="text-3xl" />
        </button>
        <ul className="absolute rounded-3xl m-auto top-[30px] z-10 bg-[#1B1B1B] p-2 w-[200px] hidden group-hover:block " >
          {
            list.map((item) => {
              return (
                <li key={item.key} className="p-2 w-full">
                  <a
                    key={item.key}
                    href={`/${item.link}`}
                    className="hover:text-[#850505] w-full"
                  >
                    {item.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </li>
    )
  }

  return (
    <div className="flex justify-between items-center mx-[100px] text-white py-5 text-lg">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      {/* <div>
        <ul className="flex list-none gap-8 font-poppins text-slate-300">
          <Menu name="For GenZ" list={Features} />
          <li className="relative float-left group">
            <Link className="flex gap-px pl-2 rounded-xl" href="/for-classrooms" >
              For Colleges
            </Link>
          </li>
          <Menu name="Learn" list={Learn} />
          <Menu name="Who we are" list={Resources} />
          <Menu name="Partnerships" list={Partnerships} />
        </ul>
      </div> */}
      <div className="relative border-gradient-bottom shadow flex justify-center items-center h-10 bg-transparent text-[#8A8989] px-3 group cursor-pointer">
        <button className="flex w-[20px] p-[1px] items-start shrink-0">
          <BiLogoPlayStore />
        </button>
        <div className="absolute group-hover:block rounded-lg m-auto w-auto h-auto p-4 top-[40px] z-10 bg-[#1B1B1B] hidden " >
          <Image src={Scanner} alt="Scanner" width={109} height={109} />
          <p className="text-white w-[112px] pt-[10px] text-center font-poppins text-[12px] font-normal leading-[18px] -tracking-[0.165px] " >scan qr code to download app</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
