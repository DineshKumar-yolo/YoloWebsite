"use client"

import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from 'react-icons/ci'

const Items = [
  { label: "All Topics", link: "all-topics" },
  { label: "Ginie", link: "ginie" },
  { label: "Debit Card", link: "debit-card" },
  { label: "Giveaways", link: "giveaways" },
  { label: "Tasks", link: "tasks" },
  { label: "Subscription", link: "subscription" },
  { label: "Rewards", link: "rewards" },
  { label: "Games", link: "games" },
];

const SearchBlogs = () => {
  const [activeItem, setActiveItem] = useState(Items[0].label);

  return (
    <div className="flex xl:justify-center items-center px-4 xl:px-0 mx-auto overflow-x-scroll bg-[#151515]">
      <div className="flex justify-center py-3 items-start gap-9">
        <div className="flex items-center gap-1">
          {Items.map((item) => (
            <Link
              key={item.label}
              href={`/${item.link}`}
              className={`flex text-white px-5 py-[10px] justify-center items-center rounded-[72px] ${
                activeItem === item.label ? "bg-[#2C2C2C]" : "bg-transparent"
              } transition-all`}
              onClick={() => setActiveItem(item.label)}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`absolute bg-[#2C2C2C] h-1 w-1/8 rounded-full transition-transform ease-in-out duration-300 ${
              activeItem === "All Topics"
                ? "left-0"
                : activeItem === "Ginie"
                ? "left-1/8"
                : activeItem === "Debit Card"
                ? "left-2/8"
                : activeItem === "Giveaways"
                ? "left-3/8"
                : activeItem === "Tasks"
                ? "left-4/8"
                : activeItem === "Subscription"
                ? "left-5/8"
                : activeItem === "Rewards"
                ? "left-6/8"
                : "left-7/8"
            }`}
          ></div>
              </div>
              <div className="flex px-3 py-[14px] justify-center items-center bg-white gap-1">
                  <input type="text" placeholder="Search by topic" className="text-[#BEBEBE] font-poppins text-sm font-normal leading-[150%] lowercase outline-none focus:outline-none" />
                  <CiSearch className="text-[#7e7e7e] text-lg" />
              </div>
      </div>
    </div>
  );
};

export default SearchBlogs;
