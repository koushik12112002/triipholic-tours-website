import { NavLink } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import PageShell from './_PageShell.jsx'

export default function NotFound() {
  return (
    <PageShell title="Page not found" subtitle="The page you’re trying to reach doesn’t exist.">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <p className="text-sm text-wine-muted">Try going back to the home page or browse packages.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button as={NavLink} to="/" variant="secondary">
            Go Home
          </Button>
          <Button as={NavLink} to="/packages">
            Browse Packages
          </Button>
        </div>
      </div>
    </PageShell>
  )
}

