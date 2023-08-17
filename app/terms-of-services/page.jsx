import Navtop from "../../components/modules/navtop/Navtop";
import Navbar from "../../components/modules/navbar/Navbar";
import Hero from "../../components/TermsofServices/Hero";
import Footer from "../../components/modules/footer/Footer";

const page = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <Navtop />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default page;
