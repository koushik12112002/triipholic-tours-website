import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { submitEnquiry } from '../../services/enquiryService.js'
import { cn } from '../../utils/cn.js'

/**
 * Validates the enquiry form fields.
 */
function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Full name is required.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email.'
  if (!values.phone.trim()) errors.phone = 'Phone number is required.'
  if (values.phone && values.phone.replace(/\D/g, '').length < 8) errors.phone = 'Enter a valid phone number.'
  if (!values.destination.trim()) errors.destination = 'Destination is required.'
  if (!values.adults || values.adults < 1) errors.adults = 'Number of adults is required (min 1).'
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

/**
 * Reusable field wrapper for labels and errors.
 */
function Field({ label, error, children }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold tracking-[0.18em] text-wine-muted">{label}</p>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-red-200 mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function EnquiryForm({ className }) {
  const location = useLocation()
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    adults: 1,
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [loading, setLoading] = useState(false)

  const errors = useMemo(() => validate(values), [values])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'idle', message: '' })

    const currentErrors = validate(values)
    if (Object.keys(currentErrors).length > 0) {
      setStatus({ state: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    setLoading(true)
    try {
      // Build payload matching Google Apps Script expectations
      const payload = {
        ...values,
        page: window.location.origin + location.pathname,
        submittedAt: new Date().toLocaleString()
      }

      await submitEnquiry(payload)

      setStatus({
        state: 'success',
        message: 'Success! Your enquiry has been sent. We will contact you shortly.'
      })

      // Reset form
      setValues({
        name: '',
        email: '',
        phone: '',
        destination: '',
        adults: 1,
        message: '',
      })
    } catch (err) {
      console.error('Submission failed:', err)
      setStatus({
        state: 'error',
        message: 'Fail to submit enquiry. Please check your connection and try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn('rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-md', className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-wine-light">Enquiry details</h2>
        <p className="mt-2 text-sm leading-6 text-wine-muted">
          Fill out the form below and our travel experts will get back to you with a custom plan.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="FULL NAME" error={status.state === 'error' && errors.name}>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => setValues(v => ({ ...v, name: e.target.value }))}
              placeholder="Your name"
              className={cn(
                "h-12 w-full rounded-xl border bg-white/10 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
                errors.name && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
              )}
            />
          </Field>

          <Field label="EMAIL ADDRESS" error={status.state === 'error' && errors.email}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))}
              placeholder="you@example.com"
              className={cn(
                "h-12 w-full rounded-xl border bg-white/10 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
                errors.email && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
              )}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="PHONE NUMBER" error={status.state === 'error' && errors.phone}>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={(e) => setValues(v => ({ ...v, phone: e.target.value }))}
              placeholder="+91 00000 00000"
              className={cn(
                "h-12 w-full rounded-xl border bg-white/10 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
                errors.phone && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
              )}
            />
          </Field>

          <Field label="NUMBER OF ADULTS" error={status.state === 'error' && errors.adults}>
            <input
              type="number"
              name="adults"
              min="1"
              value={values.adults}
              onChange={(e) => setValues(v => ({ ...v, adults: parseInt(e.target.value) || '' }))}
              placeholder="1"
              className={cn(
                "h-12 w-full rounded-xl border bg-white/10 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
                errors.adults && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
              )}
            />
          </Field>
        </div>

        <Field label="DESTINATION" error={status.state === 'error' && errors.destination}>
          <input
            type="text"
            name="destination"
            value={values.destination}
            onChange={(e) => setValues(v => ({ ...v, destination: e.target.value }))}
            placeholder="Where do you want to go?"
            className={cn(
              "h-12 w-full rounded-xl border bg-white/10 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
              errors.destination && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
            )}
          />
        </Field>

        <Field label="YOUR MESSAGE" error={status.state === 'error' && errors.message}>
          <textarea
            name="message"
            value={values.message}
            onChange={(e) => setValues(v => ({ ...v, message: e.target.value }))}
            placeholder="Tell us about your trip (dates, number of people, etc.)"
            rows={4}
            className={cn(
              "w-full resize-none rounded-2xl border bg-white/10 p-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/50",
              errors.message && status.state === 'error' ? "border-red-400" : "border-white/10 focus:border-wine-accent"
            )}
          />
        </Field>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full sm:w-auto"
          >
            {loading ? 'Sending enquiry...' : 'Submit Enquiry'}
          </Button>

          <AnimatePresence>
            {status.state !== 'idle' && (
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={cn(
                  "text-sm font-medium",
                  status.state === 'success' ? "text-emerald-400" : "text-red-400"
                )}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}
