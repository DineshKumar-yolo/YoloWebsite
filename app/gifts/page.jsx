import React from 'react'
import Hero from "@/components/Gifts/Hero"
import SendGift from "@/components/Gifts/SendGift"
import Testimonial from "@/components/Gifts/Testimonials"
import Brands from "@/components/Gifts/Brands"

const page = () => {
  return (
      <div>
          <Hero />
          <SendGift />
          <Testimonial />
          <Brands />
    </div>
  )
}

export default page
