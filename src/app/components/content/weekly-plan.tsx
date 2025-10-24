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
      name: 'Fully Customized',
      description: 'Every session is tailored to your specific goals, fitness level, and any physical limitations.',
      icon: FireIcon,
    },
    {
      name: 'Expert Guidance',
      description: 'Train with a certified professional who ensures proper form and maximum effectiveness.',
      icon: TrophyIcon,
    },
    {
      name: 'Progress Tracking',
      description: 'We monitor your improvements across all 5 sessions and adjust your program as you get stronger.',
      icon: ChartBarIcon,
    },
    {
      name: 'Flexible Scheduling',
      description: 'Book sessions at times that work for you — morning, evening, or weekend slots available.',
      icon: UserGroupIcon,
    },
    {
      name: 'Results Focused',
      description: 'Our proven methods are designed to deliver real, measurable results in just 5 sessions.',
      icon: BoltIcon,
    },
    {
      name: 'Long-Term Health',
      description: 'Build sustainable habits and techniques that benefit your health well beyond these sessions.',
      icon: HeartIcon,
    },
  ]
  
    
  export default function PTPackage() {
    return (
      <div id='weeklypt' className="bg-gray-900/80 pb-24 sm:py-32 relative">
          <Image
            alt="Personal Training Sessions"
            src="/images/pattern-lr-bg.png"
            fill
            className="absolute inset-0 size-full object-cover opacity-10 [mask-image:linear-gradient(to_top,black_70%,transparent_100%)] z-0 pointer-events-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base py-5 font-semibold text-red-600">Special Package Offer</h2>
            <p className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              5 x Personal Training Session Package
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lock in 5 personalized training sessions for just <span className="font-bold text-white">$250</span>. Get dedicated 1-on-1 coaching, customized programming, and the accountability you need to achieve your fitness goals.
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
              alt="Personal Training Package"
              src="/images/wtf-ad.png"
              width={2432}
              height={1442}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-black pt-[7%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What&apos;s Included in Your Package
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
              Ready to commit to your fitness goals? This package is perfect for those who want consistent training and real results. 
              <span className="block mt-4 text-lg font-semibold text-white">
                5 Sessions • $250 • Save $50
              </span>
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    )
  }