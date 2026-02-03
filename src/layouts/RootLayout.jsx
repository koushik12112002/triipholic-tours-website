import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'
import WhatsAppButton from '../components/ui/WhatsAppButton.jsx'

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-hero-gradient">
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

