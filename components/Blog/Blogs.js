import React from 'react'
import Blog1 from "@/public/blog-1.png"
import Blog2 from "@/public/blog-2.png"
import Blog3 from "@/public/blog-3.png"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

const MockBlogs = [
    {
        key: 1,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog1
    },
    {
        key: 2,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog2
    },
    {
        key: 3,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog3
    },
    {
        key: 4,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog1
    },
    {
        key: 5,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog2
    },
    {
        key: 6,
        title: "Your Reliable Debit Card Companion",
        details: "5 mins read • Ganesh Das • Aug 4 2023",
        image: Blog3
    },
]

const Blogs = () => {
    return (
        <div className='flex min-h-screen justify-center my-16'>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-16 gap-5 my-7 sm:p-0 p-4'>
                {
                    MockBlogs && MockBlogs.map((blog) => {
                        return (
                            <div className='2xl:w-[350px] h-[550px]  border border-white' key={MockBlogs.key}>
                                <div className='flex flex-col items-start gap-10 p-4'>
                                    <Image src={blog.image} className="md:aspect-auto xl:w-[368px] h-[270px] aspect-square bg-[#211F37] shrink-0 mix-blend-luminosity" alt='Blogs' />
                                    <div className='w-full flex flex-col items-start gap-2'>
                                        <h5 className='text-[#F8F8F8] font-poppins text-2xl font-semibold leading-[150%]'>{blog.title}</h5>
                                        <p className='text-[#9C9C9C] font-poppins text-sm font-normal leading-[170%] tracking-[-0.165px]'>{blog.details}</p>
                                    </div>
                                    <button className='border-gradient-right bg-[#0D0D0D] flex min-w-[168px] px-6 py-4 items-center justify-center gap-3'>
                                        <p className='text-white font-poppins text-sm font-medium leading-[18.4px]'>Learn More</p>
                                        <FaArrowRight className="text-white text-base" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs
