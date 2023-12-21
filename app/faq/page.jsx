import React from 'react'
import Hero from "@/components/FAQ/Hero"
import SearchBlogs from '@/components/modules/SearchBlogs'
import Faqs from "@/components/FAQ/Faqs"
import MoreFaqs from "@/components/FAQ/MoreFaqs"

const page = () => {
  return (
      <div className=''>
          <Hero />
          <SearchBlogs />
          <Faqs />
          <MoreFaqs />
    </div>
  )
}

export default page
