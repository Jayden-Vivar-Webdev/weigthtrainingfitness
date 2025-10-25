'use client'
import { ChangeEvent, useState } from 'react'
import BookingCalendar from '@/app/components/date-picker'
import HeroContact from '@/app/components/hero-sections/hero-contact'

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f7252a7e-3533-4ca8-8ff7-800441328e02', // Replace with your Web3Forms access key
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        })
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly.'
      })
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <HeroContact/>
      <div className="mx-auto max-w-4xl px-2 pb-20">
    
        {/* Contact Form */}
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute -inset-1 rounded-3xl blur-xl"></div>
          
          <div className="relative rounded-3xl py-8 px-4 sm:p-10 shadow-2xl border border-gray-800">

            {/* Status Messages */}
            {submitStatus.type && (
              <div id="thankyou" className={`mb-6 p-4 rounded-xl ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/50 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/50 text-red-400'
              }`}>
                <p className="m-0! text-base text-center font-medium">{submitStatus.message}</p>
              </div>
            )}
            
            <div className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+61 4255 287"
                  />
                </div>
              </div>

              <BookingCalendar />
            
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Service Interest <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                    <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    <option value="" className="bg-gray-800 text-gray-400">Select a service</option>
                    <option value="1-on-1" className="bg-gray-800 text-gray-200">1 on 1 Personal Training</option>
                    <option value="mobile" className="bg-gray-800 text-gray-200">Mobile Personal Training</option>
                    <option value="5x-sessions" className="bg-gray-800 text-gray-200">5 x Sessions Package</option>
                    <option value="pantry-cleanout" className="bg-gray-800 text-gray-200">Pantry Clean Out & Grocery List</option>
                    <option value="other" className="bg-gray-800 text-gray-200">Other</option>
                    </select>
                    
                    {/* Custom arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your fitness goals and what you hope to achieve..."
                />
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                disabled={isSubmitting}
                className="w-full bg-red-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-red-600 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500 disabled:active:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}