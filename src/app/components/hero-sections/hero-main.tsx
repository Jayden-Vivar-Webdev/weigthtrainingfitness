'use client'
import Image from "next/image"
import FitnessStatsSection from "../stats/business-stats"



export default function HeroMain() {


  return (
    <div className="bg-black">
      <div className="relative isolate overflow-hidden pt-30 pb-0 md:pb-20">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <Image
          alt="Personal Training Programs"
          src="/images/dumbells.jpg"
          fill
          className="absolute inset-0 -z-10 size-full object-cover opacity-[0.2]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-32 pb-20 sm:pt-48 lg:pt-56">
           
            
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Personal Training That Makes A Difference
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
                Let us be the next step to your dream body.
              </p>
              
            </div>
            
          </div>
          <FitnessStatsSection />
          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        </div>
      </div>
    </div>
  )
}
