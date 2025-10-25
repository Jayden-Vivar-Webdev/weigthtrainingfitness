import {
    BoltIcon,
    TrophyIcon,
    UserGroupIcon,
    HeartIcon,
    FireIcon,
    ChartBarIcon,
  } from '@heroicons/react/24/outline'
  import Image from 'next/image'
  
  const features = [
    {
      name: 'Personalised Clearout',
      description: 'Your pantry assessment is tailored to your specific health goals, dietary needs, and lifestyle preferences.',
      icon: FireIcon,
    },
    {
      name: 'Expert Guidance',
      description: 'Work with a certified professional who identifies hidden unhealthy ingredients and educates you on better choices.',
      icon: TrophyIcon,
    },
    {
      name: 'Complete Grocery List',
      description: 'Receive a personalised shopping list with healthy alternatives to replace what we remove from your pantry.',
      icon: ChartBarIcon,
    },
    {
      name: 'Flexible Scheduling',
      description: 'Book your clean out at times that work for you. We will fit in with your schedule to help you.',
      icon: UserGroupIcon,
    },
    {
      name: 'Results Focused',
      description: 'Our proven method helps you eliminate nutritional saboteurs and set up your kitchen for success.',
      icon: BoltIcon,
    },
    {
      name: 'Long Term Health',
      description: 'Learn sustainable habits and nutrition knowledge that benefit your health well beyond the clean out.',
      icon: HeartIcon,
    },
  ]
  
    
  export default function PantryCleanOut() {
    return (
      <div id='pantrycleanout' className="bg-gray-900/80 pb-24 sm:py-32 relative">
          <Image
            alt="Pantry Clean Out Service"
            src="/images/pattern-lr-bg.png"
            fill
            className="absolute inset-0 size-full object-cover opacity-10 [mask-image:linear-gradient(to_top,black_70%,transparent_100%)] z-0 pointer-events-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base py-5 font-semibold text-red-600">Special Service Offer</h2>
            <p className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight leading-tight text-white sm:text-balance sm:text-5xl">
              In Home Pantry Clean Out Service
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your kitchen space for success<span className="font-bold text-white"></span>. We come to your home, removes all the unhealthy foods sabotaging your progress, and provides you with a customised grocery list for success.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Image
              alt="Pantry Clean Out Service"
              src="/images/pantry-clean.jpg"
              width={2432}
              height={1442}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900/80 pt-[7%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What&apos;s Included in Your Service
            </h3>
          </div>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-red-600" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center px-6 z-20">
          <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-8">
            <p className="text-base leading-7 text-gray-300">
              Ready to commit to your nutrition goals? This service is perfect for those who want to eliminate temptation and set themselves up for success. 
              <span className="block mt-4 text-lg font-semibold text-white">
                Complete Pantry Overhaul • Contact Us Now • Includes Custom Grocery List
              </span>
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    )
  }