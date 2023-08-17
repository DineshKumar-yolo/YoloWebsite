import Navbar from "../../components/modules/navbar/Navbar";
import Navtop from "../../components/modules/navtop/Navtop";
import Hero from "../../components/Blog/Hero";
import SearchBlogs from "../../components/modules/SearchBlogs";
import DebitCardCompanion from "../../components/Blog/DebitCardCompanion";
import AboutYoloApp from "../../components/modules/AboutYoloApp";
import Footer from "../../components/modules/footer/Footer";

const page = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <Navtop />
      <Navbar />
      <Hero />
      <SearchBlogs />
      <DebitCardCompanion />
      <AboutYoloApp />
      <Footer />
    </div>
  );
};

export default page;
