import React from 'react';
import Image from 'next/image';
const services = [
  {
    id: 1,
    name: '1 x Personal Training Session',
    href: '/services#pt',
    price: '$100',
    description: 'Full Personalised Session Based On Your Needs.',
    imageSrc: '/images/personal-training.jpg',
    imageAlt: 'Full personalised session based on clients needs',
  },
  {
    id: 2,
    name: '5 x Personal Training Sessions',
    href: '/services#weeklypt',
    price: '$250',
    description: 'Locked In Price. Full Week Of Personal Training.',
    imageSrc: '/images/5xsessions.jpg',
    imageAlt: 'Full Week Personal Training',
  },
  {
    id: 3,
    name: 'Mobile Personal Training',
    href: '/services#mobilept',
    price: 'Contact',
    description: 'Bringing Personal Training To You. Get Results With Limited Time.',
    imageSrc: '/images/mobile-personal-trainer.jpg',
    imageAlt: 'Fully customised personal training that is Mobile',
  },
  {
    id: 4,
    name: 'In House Pantry Clear Out',
    href: '/services#pantrycleanout',
    price: 'Contact',
    description: 'Customised Clean Out & Groceries List For Your Goals.',
    imageSrc: '/images/pantry.jpg',
    imageAlt: 'Full customised pantry clean out with groceries list',
  },
];

export default function StyledServiceList() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-4 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </div>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 transition-all duration-500 hover:border-red-900/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/30"
        
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent z-10 opacity-0  transition-opacity duration-500"></div>
                
                <Image
                  alt={service.imageAlt}
                  src={service.imageSrc}
                  width={500}
                  height={800}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
               
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative overflow-hidden rounded-full bg-black/80 backdrop-blur-md px-5 py-1.5 border border-red-900/30">
                    <div className="absolute inset-0 to-transparent transition-opacity duration-500"></div>
                      <p className="text-base font-bold text-white tracking-wide mt-0!">{service.price}</p>
                  </div>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative flex flex-1 flex-col p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-500 group-hover:text-red-400 transition-colors duration-300">
                    View Details
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600/10 group-hover:bg-red-600/20 transition-all duration-300">
                    <svg 
                      className="w-4 h-4 text-red-500 transition-transform duration-300 group-hover:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-all duration-500 group-hover:w-full"></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative text-center mt-16">
          <p className="text-gray-400 mb-6">Can&apos;t find what you&apos;re looking for?</p>
          <a href='/contact' className="cursor-pointer px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50 hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}