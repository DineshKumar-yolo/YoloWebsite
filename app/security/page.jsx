import Footer from "@/components/modules/footer/Footer";
import MobileNavbar from "@/components/modules/navbar/MobileNavbar";
import Navbar from "@/components/modules/navbar/Navbar";
import Navtop from "@/components/modules/navtop/Navtop";
import Hero from "@/components/Security/Hero"
import SecurityPartners from "@/components/Security/SecurityPartners"
import SecurityConcerns from "@/components/Security/SecurityConcerns"
import Works from "@/components/Security/Works"
import React from "react";
import Faq from "@/components/modules/Faq";
import AboutYoloApp from "@/components/modules/AboutYoloApp";

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SecurityPartners />
      <SecurityConcerns />
      <Works />
      <Faq />
      <AboutYoloApp />
    </div>
  );
};

export default page;
