import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'
import Button from "../modules/Button"

const JoinUs = () => {
  return (
    <div className='bg-design py-24 flex-wrap mx-auto my-40 flex justify-center items-center max-w-[1240px] rounded-2xl bg-[#121213] overflow-hidden'>
      <div className='flex w-full flex-wrap justify-between items-center lg:mx-28 mx-10'>
        <div className='flex flex-col items-start gap-8'>
          <div className="flex items-center gap-6">
            <Image src={logo} />
            <Button buttonName={"Brand Partner"} />
          </div>
          <div className='flex flex-col max-w-md items-start gap-2'>
            <h3 className='text-white font-poppins text-3xl font-semibold'>Join us, and together we'll define the future of Children Finances</h3>
            <p className='text-[#878787] font-poppins text-sm font-normal leading-[170%]'>Apply to the Yolo Partnership Program</p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-10'>
          <div className='flex flex-col items-start gap-6'>
            <div className='flex items-start w-full flex-wrap gap-6'>
              <div className="flex flex-col flex-1 items-start gap-1 self-stretch border-b border-white border-opacity-50">
                <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-10'>first name</label>
                <input type="text" className='text-white font-poppins text-base font-semibold opacity-50 focus:outline-none bg-transparent' placeholder='Shivansh' />
              </div>
              <div className="flex flex-col flex-1 items-start gap-1 self-stretch border-b border-white border-opacity-50">
                <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-10'>last name</label>
                <input type="text" className='text-white font-poppins text-base font-semibold opacity-50 focus:outline-none bg-transparent' placeholder='Agarwal' />
              </div>
            </div>
            <div className="flex flex-col flex-1 items-start gap-1 self-stretch border-b border-white border-opacity-50">
              <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-10'>Work Email</label>
              <input type="text" className='text-white font-poppins text-base font-semibold opacity-50 focus:outline-none bg-transparent' placeholder='Shivansh@gmail.com' />
            </div>
            <div className="flex flex-col flex-1 items-start gap-1 self-stretch border-b border-white border-opacity-50">
              <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-10'>Company Name</label>
              <input type="text" className='text-white font-poppins text-base font-semibold opacity-50 focus:outline-none bg-transparent' placeholder='Red corp' />
            </div>
            <div className="flex flex-col flex-1 items-start gap-1 self-stretch border-b border-white border-opacity-50">
              <label htmlFor="name" className='text-white font-poppins text-sm font-medium opacity-10'>How you would like to partner</label>
              <select name="partner" className='w-full bg-transparent text-white opacity-50 outline-none' id="partner">
                <option value="Select Option" className='bg-[#121213] text-white opacity-50 checked:bg-white focus:outline-none checked:opacity-50 checked:text-black'>Select One</option>
                <option value="Option1" className='bg-[#121213] text-white opacity-50 checked:bg-white checked:opacity-50 checked:text-black'>Option1</option>
                <option value="Option2" className='bg-[#121213] text-white opacity-50 checked:bg-white checked:opacity-50 checked:text-black'>Option2</option>
                <option value="Option3" className='bg-[#121213] text-white opacity-50 checked:bg-white checked:opacity-50 checked:text-black'>Option3</option>
                <option value="Option4" className='bg-[#121213] text-white opacity-50 checked:bg-white checked:opacity-50 checked:text-black'>Option4</option>
              </select>
            </div>
          </div>
          <Button buttonName={"Let’s Collaborate"} />
        </div>
      </div>
    </div>
  )
}

export default JoinUs
