import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import ScanAndPay from '../components/Home/ScanandPay'
import Campus from '../components/Home/Campus'
import CampusMobile from '../components/Home/CampusMobile'
import Extras from '../components/Home/Extras'
import PayBills from '../components/Home/PayBills'
import Rewards from '../components/Home/Rewards'
import Reviews from '../components/modules/Reviews'
import Faq from '../components/modules/Faq'
import AboutYoloApp from '../components/modules/AboutYoloApp'
import ScanandPayMobile from "@/components/Home/MobileScanandPay"


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className='lg:block hidden'>
        <ScanAndPay />
      </div>
      <div className='lg:hidden block'>
        <ScanandPayMobile />
      </div>
      <div className='lg:block hidden'>
        <Campus />
      </div>
      <div className='lg:hidden Block'>
        <CampusMobile />
      </div>
      <Extras />
      <PayBills />
      <Rewards />
      <Reviews />
      <Faq />
      <AboutYoloApp />
    </main>
  );
}
