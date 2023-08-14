import Navbar from "@/components/modules/navbar/Navbar";
import Navtop from "@/components/modules/navtop/Navtop";
import Footer from "@/components/modules/footer/Footer";
import Hero from "@/components/DebitCard/Hero";
import TimeSavers from "@/components/DebitCard/TimeSavers";
import FinancialEnlightment from "@/components/DebitCard/FinancialEnlightment";
import Reviews from "@/components/modules/Reviews";
import Faq from "@/components/modules/Faq";
import AboutYoloApp from "@/components/modules/AboutYoloApp";
import AboutYoloDebitCard from "@/components/DebitCard/AboutYoloDebitCard";

const page = () => {
  return (
    <div className="bg-[#0D0D0D] shrink-0">
      <Navtop />
      <Navbar />
      <Hero />
      <TimeSavers />
      <FinancialEnlightment />
      <AboutYoloDebitCard />
      <Reviews />
      <Faq />
      <AboutYoloApp />
      <Footer />
    </div>
  );
};

export default page;
