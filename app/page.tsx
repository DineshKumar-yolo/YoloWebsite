import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import ScanAndPay from '../components/Home/ScanandPay'
import Extras from '../components/Home/Extras'
import PayBills from '../components/Home/PayBills'
import Rewards from '../components/Home/Rewards'
import Reviews from '../components/modules/Reviews'
import Faq from '../components/modules/Faq'
import AboutYoloApp from '../components/modules/AboutYoloApp'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <ScanAndPay />
      <Extras />
      <PayBills />
      <Rewards />
      <Reviews />
      <Faq />
      <AboutYoloApp />
      {/* Currently working on footer */}
      <Footer />
    </main>
  );
}
