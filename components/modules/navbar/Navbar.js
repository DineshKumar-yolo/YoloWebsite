import Link from "next/link";
import React from "react";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import logo from "../../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center mx-24 text-white py-5 text-lg">
      <div>
        <Link href="/">
          <Image src={logo} />
        </Link>
      </div>
      <div>
        <ul className="flex list-none gap-[32px] font-poppins text-slate-300">
          <li className="inline-block">
            <Link href="">Features</Link>
          </li>
          <li className="inline-block">
            <Link href="">Plans</Link>
          </li>
          <li className="inline-block">
            <Link href="">Learn</Link>
          </li>
          <li className="inline-block">
            <Link href="">Who we are</Link>
          </li>
          <li className="inline-block">
            <Link href="">Partnerships</Link>
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
