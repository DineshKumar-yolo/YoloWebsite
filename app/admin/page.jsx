import Link from 'next/link';
import React from 'react'
import { FaExclamation } from 'react-icons/fa'

const page = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-screen text-[#909194] text-3xl">
          <FaExclamation className="border-[3px] border-[#909194] p-1 rounded-full" />
          <p className='p-1'>Work for this page is pending <Link href="/admin/login" className='text-red-900 hover:border-b-2 hover:border-red-900 transition-all duration-150'>Click Here</Link> for admin login page</p>
    </div>
  );
}

export default page
