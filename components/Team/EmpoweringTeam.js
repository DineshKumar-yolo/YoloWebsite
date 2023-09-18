import React from 'react'
import empoweringteam from "@/public/teamEmpowering.png"
import signature from "@/public/founderSignature.png"
import Image from 'next/image'

const EmpoweringTeam = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-28 px-10 justify-between items-start bg-white pt-24 bg-design">
      <div className="flex-1 flex justify-center lg:gap-24 flex-col max-w-xl gap-10">
        <h1 className="text-[#0D0D0D] font-poppins text-[37px] font-semibold leading-normal tracking-[-0.165px]">
          “Empowering kids for a financially confident tomorrow.”
        </h1>
        <div className="relative max-h-[465px]">
          <Image src={empoweringteam} className="realtive z-50 w-auto h-auto" alt='Empoering' />
          <div className="w-[555px] h-[422px] absolute rounded-t-3xl top-11 -z-10 bg-[#F4F4F4]"></div>
        </div>
      </div>
      <div className="flex-1 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex gap-6 flex-col items-start">
          <p className="text-[#7F7F7F] font-poppins text-base text-normal leading-[170%] tracking-[-0.165px]">
            In a world where financial complexities can overwhelm even adults,
            our vision shines bright. We`&apos;`re dedicated to simplifying finance for
            children, equipping them with life-changing skills. With us,
            financial literacy becomes a stepping stone toward their dreams.
          </p>
          <p className="text-[#7F7F7F] font-poppins text-base text-normal leading-[170%] tracking-[-0.165px]">
            Imagine a generation of youngsters unafraid of financial hurdles,
            confident in their ability to navigate the economic landscape. Our
            mission envisions just that—a world where children effortlessly
            grasp the essentials of money management, building a prosperous
            future.
          </p>
          <div className="hidden flex-col items-start gap-3 mt-5 lg:flex">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#4D4D4D] font-poppins text-base font-normal leading-[170%]">
                Cheers
              </p>
              <Image src={signature} alt='Empowering' />
            </div>
            <p className="text-[#AA0606] font-poppins text-base font-normal leading-[170%]">
              Founder & Ceo, Shivansh Agarwal
            </p>
          </div>
        </div>
        <div className="flex gap-6 flex-col items-start">
          <p className="text-[#7F7F7F] font-poppins text-base text-normal leading-[170%] tracking-[-0.165px]">
            At the heart of our vision lies the belief that every child deserves
            a head start in mastering their finances. By breaking down intricate
            concepts into digestible bits, we`&apos;`re making money matters
            accessible, fostering a generation of financially savvy and
            self-assured individuals.
          </p>
          <p className="text-[#7F7F7F] font-poppins text-base text-normal leading-[170%] tracking-[-0.165px]">
            Building the finances of children shouldn`&apos;`t be a daunting task, but
            an exciting journey of discovery. Our vision ignites this
            excitement, as we empower children with the knowledge and skills
            needed to forge their own path towards financial success.
          </p>
          <div className="flex flex-col items-start gap-3 mt-5 lg:hidden">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#4D4D4D] font-poppins text-base font-normal leading-[170%]">
                Cheers
              </p>
              <Image src={signature} alt=''/>
            </div>
            <p className="text-[#AA0606] font-poppins text-base font-normal leading-[170%]">
              Founder & Ceo, Shivansh Agarwal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpoweringTeam
