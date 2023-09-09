import Footer from '@/components/modules/footer/Footer';
import MobileNavbar from '@/components/modules/navbar/MobileNavbar';
import Navbar from '@/components/modules/navbar/Navbar';
import Navtop from '@/components/modules/navtop/Navtop'
import Hero from "@/components/Refer&Earn/Hero"
import Works from "@/components/Refer&Earn/Works"
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
          <Navtop />
          <div className='hidden xl:flex'>
              <Navbar />
          </div>
          <div className='flex xl:hidden'>
              <MobileNavbar />
          </div>
          <Hero />
          <Works />
          <Footer />
    </div>
  );
}

export default page
