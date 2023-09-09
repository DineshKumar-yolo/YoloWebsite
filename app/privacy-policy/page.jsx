import Navtop from "../../components/modules/navtop/Navtop";
import Navbar from "../../components/modules/navbar/Navbar";
import Hero from "../../components/TermsofServices/Hero";
import Footer from "../../components/modules/footer/Footer";
import MobileNavbar from "../../components/modules/navbar/MobileNavbar";

const page = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <Navtop />
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default page;
