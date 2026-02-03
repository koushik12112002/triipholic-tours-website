import { NavLink } from 'react-router-dom'
import { site } from '../../config/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-wine-secondary/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-wine-muted">{site.tagline}</p>
            <div className="mt-4 space-y-1 text-sm text-wine-muted">
              <p>{site.address}</p>
              <p>
                <a className="hover:text-wine-light" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="hover:text-wine-light" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="md:justify-self-center">
            <p className="text-sm font-semibold text-wine-light">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-wine-muted">
              <li>
                <NavLink className="hover:text-wine-light" to="/destinations">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-wine-light" to="/packages">
                  Tour Packages
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-wine-light" to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-wine-light" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-wine-light">Business Hours</p>
            <p className="mt-3 text-sm leading-6 text-wine-muted">
              Mon–Sat: 10:00 AM – 7:00 PM
              <br />
              Sun: By appointment
            </p>
            <p className="mt-4 text-xs text-wine-muted/80">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

