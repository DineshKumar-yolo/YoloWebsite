"use client";
import Navtop from '@/components/modules/navtop/Navtop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileNavbar from '@/components/modules/navbar/MobileNavbar'
import Navbar from '@/components/modules/navbar/Navbar'
import Footer from '@/components/modules/footer/Footer'
import MobileFooter from "@/components/modules/footer/MobileFooter"
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Yolo Pay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const routesWithoutFooter = ['/profile/'];
  var hideLayout = false;
  for (const str of routesWithoutFooter) {
    // Check if the current string includes the substring
    if (pathname.includes(str)) {
      // If found, set the flag and break out of the loop
      hideLayout = true;
      break;
    }
  }
  console.log(pathname, hideLayout);

  return (
    <html lang="en" className="bg-[#0D0D0D]">
      <head>
        <title>Yolo Pay</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className={`${inter.className} font-poppins overflow-x-hidden`}>
        {/* <Navtop /> */}
        {
          !hideLayout && (
            <div className="block lg:hidden">
              <MobileNavbar />
            </div>
          )
        }
        {
          !hideLayout && (
            <div className="lg:block hidden">
              <Navbar />
            </div>
          )
        }

        {children}

        {
          !hideLayout && (
            <div className="block lg:hidden">
              <MobileFooter />
            </div>
          )
        }
        {
          !hideLayout && (
            <div className="lg:block hidden">
              <Footer />
            </div>
          )
        }
      </body>
    </html>
  );
}
