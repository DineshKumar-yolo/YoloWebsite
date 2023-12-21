import Hero from "../../components/Blog/Hero";
import SearchBlogs from "../../components/modules/SearchBlogs";
import DebitCardCompanion from "../../components/Blog/DebitCardCompanion";
import AboutYoloApp from "../../components/modules/AboutYoloApp";
import Blogs from "@/components/Blog/Blogs"

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <SearchBlogs />
      <DebitCardCompanion />
      <Blogs />
      <AboutYoloApp />
    </div>
  );
};

export default page;
