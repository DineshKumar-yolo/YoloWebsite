import React from 'react'
import Money from "@/public/transferMoney.svg"
import Image from 'next/image';

const Transaction = () => {
  return (
    <div className="xl:my-40 max-w-[1240px] flex flex-wrap justify-between items-center mx-auto">
      <div className="flex flex-col justify-center items-start gap-4 max-w-lg w-full">
        <p className="text-[#7F7F7F] text-base font-normal tracking-[2px] uppercase">
          Yolo COINS
        </p>
        <h2 className="max-w-sm text-white text-4xl font-semibold">
          Get yolo coins on every spent and use it for shopping
        </h2>
      </div>
      <Image src={Money} alt='Transactions' />
    </div>
  );
}

export default Transaction
