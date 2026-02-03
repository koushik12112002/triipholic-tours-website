import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Destinations from '../pages/Destinations.jsx'
import Home from '../pages/Home.jsx'
import PackageDetails from '../pages/PackageDetails.jsx'
import TourPackages from '../pages/TourPackages.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/packages/:slug" element={<PackageDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

