import React from 'react'
import Hero from "@/components/FAQ/Hero"
import SearchBlogs from '@/components/modules/SearchBlogs'
import Faqs from "@/components/FAQ/Faqs"
import MoreFaqs from "@/components/FAQ/MoreFaqs"

const page = () => {
  return (
      <div className=''>
          <Hero />
          <Faqs />
          <section id='contact'>
            <MoreFaqs />
          </section>
    </div>
  )
}

export default page
