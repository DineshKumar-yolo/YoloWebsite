import React from "react";
import Button from "../modules/Button";
import social from "@/public/social.svg";
import iot from "@/public/iot.svg";
import plugins from "@/public/plugins.svg";
import Image from "next/image";

const Communications = () => {
  return (
    <div className="flex max-w-[1240px] flex-col xl:px-0 px-10 py-10 xl:py-24 m-auto items-start gap-20 justify-center">
      <div className="flex w-full flex-col lg:flex-row gap-5 items-start justify-between self-stretch">
        <h3 className="flex flex-1 flex-grid text-4xl text-white font-semibold leading-normal">
          Communication made easy with students
        </h3>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
        <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
          <div className="flex flex-col items-start gap-7 mt-14">
            <Image src={social} alt="Communications"/>
            <div className="flex max-w-xs flex-col items-start gap-5">
              <h1 className="font-poppins text-white text-2xl font-semibold leading-[24px] lowercase">
                Centralised Communication
              </h1>
              <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                Our omni-communication tool enables easy communicate with
                students, staff across different notification channels.
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
          <div className="flex flex-col items-start gap-7">
            <Image src={iot} alt="IOT" />
            <div className="flex max-w-xs flex-col items-start gap-5">
              <h1 className="font-poppins text-white text-2xl font-semibold leading-[24px] lowercase">
                IOT Intergration
              </h1>
              <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                Integrates with your existing IoT devices automatically. Make
                data-driven decisions a habit with Yolo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-14 py-16 flex-col justify-center items-center gap-3 border-gradient-bottom h-80">
          <div className="flex flex-col items-start gap-7">
            <Image src={plugins} alt="Plugins" />
            <div className="flex max-w-xs flex-col items-start gap-5">
              <h1 className="font-poppins text-white text-2xl font-semibold leading-[24px] lowercase">
                Software Plug-in
              </h1>
              <p className="text-[#7F7F7F] font-poppins text-base font-normal leading-[170%]">
                Easily integrate with your current software solutions in a few
                clicks. It is that easy to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communications;
