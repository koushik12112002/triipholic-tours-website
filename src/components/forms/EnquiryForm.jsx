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
  if (!values.phone.trim()) errors.phone = 'Phone number is required.'
  if (!values.journeyDate) errors.journeyDate = 'Journey date is required.'
  if (!values.returnDate) errors.returnDate = 'Return date is required.'
  if (!values.destination.trim()) errors.destination = 'Destination is required.'
  if (!values.adults || values.adults < 1) errors.adults = 'Min 1 adult required.'
  if (!values.carCount || values.carCount < 1) errors.carCount = 'Min 1 car required.'
  if (!values.roomCount || values.roomCount < 1) errors.roomCount = 'Min 1 room required.'
  return errors
}

/**
 * Reusable field wrapper for labels and errors.
 */
function Field({ label, error, children }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold tracking-[0.2em] text-wine-muted uppercase">{label}</p>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-[10px] text-red-400 mt-1 font-medium"
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
    phone: '',
    journeyDate: '',
    returnDate: '',
    destination: '',
    adults: 1,
    children: 0,
    carCount: 1,
    carType: '4 Seater',
    roomCount: 1,
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [loading, setLoading] = useState(false)

  const errors = useMemo(() => validate(values), [values])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'idle', message: '' })

    const currentErrors = validate(values)
    if (Object.keys(currentErrors).length > 0) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' })
      return
    }

    setLoading(true)
    try {
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
        phone: '',
        journeyDate: '',
        returnDate: '',
        destination: '',
        adults: 1,
        children: 0,
        carCount: 1,
        carType: '4 Seater',
        roomCount: 1,
      })
    } catch (err) {
      console.error('Submission failed:', err)
      setStatus({
        state: 'error',
        message: 'Submission failed. Please try again or contact us via WhatsApp.'
      })
    } finally {
      setLoading(false)
    }
  }

  const inputClasses = (error) => cn(
    "h-11 w-full rounded-xl border bg-white/5 px-4 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/30",
    error ? "border-red-500/50" : "border-white/10 focus:border-wine-accent"
  )

  return (
    <div className={cn('rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-soft backdrop-blur-xl', className)}>
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-white">Plan Your Journey</h2>
        <p className="mt-2 text-sm text-wine-muted font-light">
          Provide your travel details below and we'll craft the perfect itinerary for you.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" error={status.state === 'error' && errors.name}>
            <input
              type="text"
              value={values.name}
              onChange={(e) => setValues(v => ({ ...v, name: e.target.value }))}
              placeholder="Full Name"
              className={inputClasses(errors.name && status.state === 'error')}
            />
          </Field>
          <Field label="Phone Number" error={status.state === 'error' && errors.phone}>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => setValues(v => ({ ...v, phone: e.target.value }))}
              placeholder="+91"
              className={inputClasses(errors.phone && status.state === 'error')}
            />
          </Field>
        </div>

        {/* Dates */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Date of Journey" error={status.state === 'error' && errors.journeyDate}>
            <input
              type="date"
              value={values.journeyDate}
              onChange={(e) => setValues(v => ({ ...v, journeyDate: e.target.value }))}
              className={cn(inputClasses(errors.journeyDate && status.state === 'error'), "color-scheme-dark")}
            />
          </Field>
          <Field label="Return Date" error={status.state === 'error' && errors.returnDate}>
            <input
              type="date"
              value={values.returnDate}
              onChange={(e) => setValues(v => ({ ...v, returnDate: e.target.value }))}
              className={cn(inputClasses(errors.returnDate && status.state === 'error'), "color-scheme-dark")}
            />
          </Field>
        </div>

        {/* Destination */}
        <Field label="Destinations" error={status.state === 'error' && errors.destination}>
          <input
            type="text"
            value={values.destination}
            onChange={(e) => setValues(v => ({ ...v, destination: e.target.value }))}
            placeholder="e.g. Darjeeling, Gangtok"
            className={inputClasses(errors.destination && status.state === 'error')}
          />
        </Field>

        {/* Counts */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
          <Field label="No. of Adults" error={status.state === 'error' && errors.adults}>
            <input
              type="number"
              min="1"
              value={values.adults}
              onChange={(e) => setValues(v => ({ ...v, adults: parseInt(e.target.value) || '' }))}
              className={inputClasses(errors.adults && status.state === 'error')}
            />
          </Field>
          <Field label="Children (4-8 years)">
            <input
              type="number"
              min="0"
              value={values.children}
              onChange={(e) => setValues(v => ({ ...v, children: parseInt(e.target.value) || 0 }))}
              className={inputClasses(false)}
            />
          </Field>
        </div>

        {/* Car Details */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Required no. of car" error={status.state === 'error' && errors.carCount}>
            <input
              type="number"
              min="1"
              value={values.carCount}
              onChange={(e) => setValues(v => ({ ...v, carCount: parseInt(e.target.value) || '' }))}
              className={inputClasses(errors.carCount && status.state === 'error')}
            />
          </Field>
          <Field label="Car type">
            <select
              value={values.carType}
              onChange={(e) => setValues(v => ({ ...v, carType: e.target.value }))}
              className={cn(inputClasses(false), "appearance-none")}
            >
              <option value="4 Seater">4 Seater</option>
              <option value="8 Seater">8 Seater</option>
            </select>
          </Field>
        </div>

        {/* Rooms */}
        <Field label="Require no. of rooms" error={status.state === 'error' && errors.roomCount}>
          <input
            type="number"
            min="1"
            value={values.roomCount}
            onChange={(e) => setValues(v => ({ ...v, roomCount: parseInt(e.target.value) || '' }))}
            className={inputClasses(errors.roomCount && status.state === 'error')}
          />
        </Field>

        <div className="flex flex-col gap-4 pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Sending Request...' : 'Submit Enquiry'}
          </Button>

          <AnimatePresence>
            {status.state !== 'idle' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={cn(
                  "text-sm text-center font-medium",
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
