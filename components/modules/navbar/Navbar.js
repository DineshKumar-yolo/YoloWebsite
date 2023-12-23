import Link from "next/link";
import React from "react";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import logo from "../../../public/logo.svg";
import Image from "next/image";
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

const Navbar = () => {

  const Menu = ({ name, list }) => {
    return (
      <li className="relative float-left group">
        <button className="flex gap-px pl-2 rounded-xl">
          {name}
          <RiArrowDropDownLine className="text-3xl" />
        </button>
        <ul className="absolute rounded-3xl m-auto top-[30px] z-10 shadow-sm shadow-[#303030] bg-[#0D0D0D] p-2 w-[200px] hidden group-hover:block " >
          {
            list.map((item) => {
              return (
                <li className="p-2 w-full">
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
      <div>
        <ul className="flex list-none gap-8 font-poppins text-slate-300">
          <Menu name="For GenZ" list={Features} />
          <li className="relative float-left group">
            <Link className="flex gap-px pl-2 rounded-xl" href="/for-classroom" >
              For Colleges
            </Link>
          </li>
          <Menu name="Learn" list={Learn} />
          <Menu name="Who we are" list={Resources} />
          <Menu name="Partnerships" list={Partnerships} />
        </ul>
      </div>
      <div className="border-gradient-bottom shadow flex justify-center items-center h-10 bg-transparent text-[#8A8989] px-3">
        <button className="flex w-[20px] p-[1px] items-start shrink-0">
          <BiLogoPlayStore />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
