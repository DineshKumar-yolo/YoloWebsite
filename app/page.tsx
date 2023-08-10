import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import ScanAndPay from '../components/Home/ScanandPay'
import Extras from '../components/Home/Extras'
import PayBills from '../components/Home/PayBills'
import Rewards from '../components/Home/Rewards'
import Reviews from '../components/Home/Reviews'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ScanAndPay />
      <Extras />
      <PayBills />
      <Rewards />
      {/* Currently working on review section */}
      {/* <Reviews /> */}
    </main>
  )
}
