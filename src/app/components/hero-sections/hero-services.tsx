import Image from "next/image"
import { ArrowRight } from "lucide-react"
export default function ServicesHero() {

  return (
    <div className="bg-black dark:bg-white-900">

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block dark:fill-white-900"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 pb-32 pt-50 sm:pb-40 sm:pt-60 lg:px-8 lg:pb-56 lg:pt-90 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="text-white relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-white-900/10 hover:ring-white-900/20 dark:text-white-400 dark:ring-white/10 dark:hover:ring-white/20">
                      Helping clients achieve their fitness goals for over 10 years.{'  '}
                    <a href="/about" className="whitespace-nowrap font-semibold text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white-900 sm:text-7xl dark:text-white">
                Weight Training Fitness Services
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-white-500 sm:text-xl/8 dark:text-white-400">
                Push your limits and achieve your fitness goals with our tailored personal training. From strength building to transformation, we help you get results that last.
                </p>
                <div className="mt-10 flex">
                  <a
                      href="/contact"
                      className="flex items-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-lg font-semibold text-white shadow-lg 
                              hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out
                              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                      Get started
                      <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-white-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 dark:bg-white-800">
        <div className="absolute inset-x-0 top-0 h-200 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          <Image
            alt="Weight Training Fitness Services"
            width={500}
            height={500}
            src="/images/transformation.jpg"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  )
}
