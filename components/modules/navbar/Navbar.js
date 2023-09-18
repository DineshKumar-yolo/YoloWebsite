import Link from "next/link";
import React from "react";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-24 text-white py-5 text-lg">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo"/>
        </Link>
      </div>
      <div>
        <ul className="flex list-none gap-7 font-poppins text-slate-300">
          <li className="flex gap-px">
            <Link href="">Features</Link>
            <RiArrowDropDownLine className="text-3xl" />
          </li>
          <li className="flex gap-px">
            <Link href="">Plans</Link>
            <RiArrowDropDownLine className="text-3xl" />
          </li>
          <li className="flex gap-px">
            <Link href="">Learn</Link>
            <RiArrowDropDownLine className="text-3xl" />
          </li>
          <li className="flex gap-px">
            <Link href="">Who we are</Link>
            <RiArrowDropDownLine className="text-3xl" />
          </li>
          <li className="flex gap-px">
            <Link href="">Partnerships</Link>
            <RiArrowDropDownLine className="text-3xl" />
          </li>
        </ul>
      </div>
      <div className="border-gradient-bottom shadow flex justify-center items-center h-10 bg-transparent text-[#8A8989] px-3">
        <button className="flex w-[20px] p-[1px] items-start shrink-0">
          <BiLogoPlayStore />
        </button>
        <button className="flex w-[20px] px-[3px] py-[1.5px] items-start shrink-0">
          <BiLogoApple />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
