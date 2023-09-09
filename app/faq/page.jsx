import React from 'react'
import Hero from "@/components/FAQ/Hero"
import Navtop from '@/components/modules/navtop/Navtop'
import Navbar from '@/components/modules/navbar/Navbar'
import MobileNavbar from '@/components/modules/navbar/MobileNavbar'
import Footer from '@/components/modules/footer/Footer'
import SearchBlogs from '@/components/modules/SearchBlogs'
import Faqs from "@/components/FAQ/Faqs"
import MoreFaqs from "@/components/FAQ/MoreFaqs"

const page = () => {
  return (
      <div className='bg-[#0D0D0D]'>
          <Navtop />
          <div className='hidden xl:flex'>
              <Navbar />
          </div>
          <div className='flex xl:hidden'>
              <MobileNavbar />
          </div>
          <Hero />
          <SearchBlogs />
          <Faqs />
          <MoreFaqs />
          <Footer />
    </div>
  )
}

export default page
