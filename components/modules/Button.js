import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div>
      <button className="flex px-10 py-3 justify-center items-center xl:text-base text-sm text-white rounded-sm font-medium leading-[150%] bg-gradient-to-r from-[#BB0707] to-[#650B0B]">
        {buttonName}
      </button>
    </div>
  );
}

export default Button
