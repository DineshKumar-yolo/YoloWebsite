import React from 'react'
import partner1 from "@/public/partner-1.svg";
import partner2 from "@/public/partner-2.svg";
import partner3 from "@/public/partner-3.svg";
import partner4 from "@/public/partner-4.svg";
import partner5 from "@/public/partner-5.svg";
import partner6 from "@/public/partner-6.svg";
import partner7 from "@/public/partner-7.svg";
import partner8 from "@/public/partner-8.svg";
import partner9 from "@/public/partner-9.svg";
import Image from 'next/image';

const Partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
];

const SecurityPartners = () => {
  return (
      <div className='flex py-16 lg:px-24 px-10 flex-col items-start justify-center gap-12 bg-[#F8F8F8]'>
          <h2 className='text-[#212426] font-poppins text-2xl font-normal leading-[170%]'>
              Security and Banking Partners
          </h2>
          <div className="flex flex-wrap items-center gap-14">
              {
                  Partners && Partners.map((partner) => {
                      return (
                          <div key={key}>
                              <Image src={partner} alt='Security' />
                          </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default SecurityPartners
