import React from 'react'
import Hero from "@/components/UserDelete/Hero"
import DeleteMail from '../../components/UserDelete/DeleteMail'

const page = () => {
  return (
      <div className=''>
          <Hero />
          <section id='contact'>
            <DeleteMail />
          </section>
    </div>
  )
}

export default page
