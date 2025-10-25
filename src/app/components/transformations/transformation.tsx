import React from 'react';
import Image from 'next/image';

const transformations = [
  {
    id: 1,
    clientName: 'The Achiever',
    duration: '8 Months',
    beforeImage: '/images/michael.jpg',
    afterImage: '/images/michael-after.jpg',
    results: 'Lost 15kg, Gained Muscle',
  },
  {
    id: 2,
    clientName: 'The Goal Crusher',
    duration: '16 Weeks',
    beforeImage: '/images/shaun.jpg',
    afterImage: '/images/shaun-after.jpg',
    results: 'Weight Loss, Improved Strength',
  },
  {
    id: 3,
    clientName: 'The Committed',
    duration: '4 Months',
    beforeImage: '/images/amree.jpg',
    afterImage: '/images/amree-after.jpg',
    results: 'Weight Loss',
  },
  {
    id: 4,
    clientName: 'Muscle Builder',
    duration: '12 Months',
    beforeImage: '/images/john.PNG',
    afterImage: '/images/john-after.jpg',
    results: 'Lost 12kg, Toned Physique',
  },
];

export default function TransformationGallery() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-4">
            Real Results. Real People.
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            See the incredible transformations our clients have achieved through dedication and personalised training
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 transition-all duration-500 hover:border-red-900/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/30"
            >
              {/* Before/After Images Container */}
              <div className="relative h-96 flex">
                {/* Before Image */}
                <div className="relative w-1/2 overflow-hidden border-r-2 border-zinc-800">
                  <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-700">
                    <p className="text-xs mt-0! font-bold text-gray-300 tracking-wide">BEFORE</p>
                  </div>
                  <Image
                    alt={`${transformation.clientName} before transformation`}
                    src={transformation.beforeImage}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Left fade overlay */}
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none" />
                </div>

                {/* After Image */}
                <div className="relative w-1/2 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20 bg-red-600/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-red-500">
                    <p className="text-xs mt-0! font-bold text-white tracking-wide">AFTER</p>
                  </div>
                  <Image
                    alt={`${transformation.clientName} after transformation`}
                    src={transformation.afterImage}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Right fade overlay */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative p-6 bg-gradient-to-b from-zinc-900/50 to-black">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {transformation.clientName}
                  </h3>
                  <span className="text-sm font-semibold text-red-500 bg-red-600/10 px-3 py-1 rounded-full">
                    {transformation.duration}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {transformation.results}
                </p>

                {/* Stats Icons */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Verified Result</span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">Ready to start your transformation?</p>
          <a 
            href='/contact' 
            className="inline-block cursor-pointer px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}