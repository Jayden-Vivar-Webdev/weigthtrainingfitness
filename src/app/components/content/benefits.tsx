import {
  BoltIcon,          // ⚡ Energy, power, intensity
  TrophyIcon,        // 🏆 Achievement / results
  UserGroupIcon,     // 👥 Community / support
  HeartIcon,         // ❤️ Health / wellbeing
  FireIcon,          // 🔥 Fat burn / motivation
  ChartBarIcon,      // 📈 Progress tracking
} from '@heroicons/react/24/outline'   // outline icons feel cleaner for this section
import Image from 'next/image'
const features = [
  {
    name: 'Push Yourself',
    description: 'One on one personal training designed to get you stronger, fitter, and healthier faster.',
    icon: FireIcon,
  },
  {
    name: 'Certified Trainer',
    description: 'Train safely and effectively with guidance from a certified personal trainer.',
    icon: TrophyIcon,
  },
  {
    name: 'Simple Steps',
    description: 'Easy to follow PT sessions designed to guide you from start to finish for real results.',
    icon: ChartBarIcon,
  },
  {
    name: 'Personalised Support',
    description: 'Tailored sessions to achieve your goals, making adjustments as needed to ensure progress.',
    icon: UserGroupIcon,
  },
  {
    name: 'Train with Purpose',
    description: 'Every session is designed to build strength, confidence, and lasting healthy habits.',
    icon: BoltIcon,
  },
  {
    name: 'Health Focused',
    description: 'Focus on your overall health, ensuring your training benefits both fitness and long term wellbeing.',
    icon: HeartIcon,
  },
  
]

  
export default function BenefitsSection() {
  return (
    <div className="bg-black pb-15 sm:py-15 relative">
        <Image
          alt="Personal Training Programs"
          src="/images/pattern-lr-bg.png"
          fill
          className="absolute inset-0 size-full object-cover opacity-10 [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base py-5 font-semibold text-red-400">Everything you need</h2>
          <p className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
            No Time? No Problem
          </p>
          <p className="mt-6 para-text">
            Transform your body faster with expert personal training. Contact us today to schedule an in person or mobile session.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto md:max-w-3/4 px-6 lg:px-0 relative">
          <Image
            alt="App screenshot"
            src="/images/wtf-ad.png"
            width={2432}
            height={1442}
            className="mb-[-%] rounded-xl shadow-2xl"
          />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black"/>

        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-red-500" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
  