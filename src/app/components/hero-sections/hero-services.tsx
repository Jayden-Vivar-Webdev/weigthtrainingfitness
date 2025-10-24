import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ServicesHero() {
  return (
    <div className="bg-black">
      <div className="relative isolate overflow-hidden">
        {/* Background Image for Mobile/Tablet */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            alt="Weight Training Fitness Services"
            src="/images/transformation.jpg"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 pb-50 pt-80 sm:pb-60 sm:pt-80 lg:px-8 lg:pb-40 lg:pt-60 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                {/* Badge */}
                <div className="hidden lg:flex mb-8 sm:mb-10">
                  <div className="hidden sm:flex relative rounded-full px-4 py-2 text-sm leading-6 text-gray-400 ring-1 ring-gray-800 hover:ring-gray-700 transition-all">
                    Helping clients achieve their fitness goals for over 10 years.{' '}
                    <a href="/about" className="font-semibold text-white hover:text-red-500 transition-colors">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Weight Training Fitness Services
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                  Push your limits and achieve your fitness goals with our tailored personal training. From strength building to transformation, we help you get results that last.
                </p>

                {/* CTA Button */}
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg 
                             hover:bg-red-500 hover:scale-105 active:scale-95
                             transition-all duration-200 ease-out
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Desktop Only */}
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-full w-full">
            {/* Gradient Overlays */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
            
            {/* Image */}
            <Image
              alt="Weight Training Fitness Services"
              src="/images/transformation.jpg"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}