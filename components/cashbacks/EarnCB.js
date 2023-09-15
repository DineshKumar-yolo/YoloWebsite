import React from "react";
import transaction from "@/public/debitCardTransaction.svg";
import Image from "next/image";

const EarnCB = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <div className="xl:py-40 max-w-[1240px] flex flex-wrap justify-between items-center mx-auto">
                <div className="flex flex-col justify-center items-start gap-8 max-w-md w-full">
                    <h2 className="text-[#121213] text-4xl font-semibold">
                        Earn cash back when you spend on yolo partnered brands
                    </h2>
                    <p className="text-[#7F7F7F] text-base font-normal">
                        Get great deals & cashback on your favourite brand when you spend with
                        yolo card.
                    </p>
                </div>
                <Image className="rounded-2xl" src={transaction} />
            </div>
        </div>
    );
};

export default EarnCB;
