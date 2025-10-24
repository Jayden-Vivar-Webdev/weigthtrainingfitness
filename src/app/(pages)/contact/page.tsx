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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }



    const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };


  return (
    <div className="min-h-screen">
      <HeroContact/>
      <div className="mx-auto max-w-4xl px-2 pb-20">
    
        {/* Contact Form */}
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute -inset-1 rounded-3xl blur-xl"></div>
          
          <div className="relative rounded-3xl py-8 px-4 sm:p-10 shadow-2xl border border-gray-800">

            
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
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750"
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
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750"
                    placeholder="+1 (555) 000-0000"
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
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750"
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
                    className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 cursor-pointer appearance-none"
                    >
                    <option value="" className="bg-gray-800 text-gray-400">Select a service</option>
                    <option value="1-on-1" className="bg-gray-800 text-gray-200">1 on 1 Personal Training</option>
                    <option value="mobile" className="bg-gray-800 text-gray-200">Mobile Personal Training</option>
                    <option value="5x-sessions" className="bg-gray-800 text-gray-200">5x Sessions</option>
                    <option value="pantry-cleanout" className="bg-gray-800 text-gray-200">Pantry Clean Out</option>
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
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-gray-750 resize-none"
                  placeholder="Tell us about your fitness goals and what you hope to achieve..."
                />
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="w-full bg-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-red-700 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Send Message
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