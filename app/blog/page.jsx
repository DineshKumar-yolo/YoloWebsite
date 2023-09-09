import Navbar from "../../components/modules/navbar/Navbar";
import Navtop from "../../components/modules/navtop/Navtop";
import Hero from "../../components/Blog/Hero";
import SearchBlogs from "../../components/modules/SearchBlogs";
import DebitCardCompanion from "../../components/Blog/DebitCardCompanion";
import AboutYoloApp from "../../components/modules/AboutYoloApp";
import Footer from "../../components/modules/footer/Footer";
import MobileNavbar from "@/components/modules/navbar/MobileNavbar";
import Blogs from "@/components/Blog/Blogs"

const page = () => {
  return (
    <div className="bg-[#0D0D0D] overflow-x-hidden">
      <Navtop />
      <div className="xl:block hidden">
      <Navbar />
      </div>
      <div className="flex xl:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <SearchBlogs />
      <DebitCardCompanion />
      <Blogs />
      <AboutYoloApp />
      <Footer />
    </div>
  );
};

export default page;
