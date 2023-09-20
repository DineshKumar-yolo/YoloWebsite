import React from 'react'

const Button = ({buttonName, styles}) => {
  return (
    <div>
      <button className={`flex md:px-10 px-4 py-3 justify-center items-center xl:text-base text-xs text-white rounded-sm font-medium leading-[150%] bg-gradient-to-r from-[#BB0707] to-[#650B0B] ${styles}`}>
        {buttonName}
      </button>
    </div>
  );
}

export default Button
