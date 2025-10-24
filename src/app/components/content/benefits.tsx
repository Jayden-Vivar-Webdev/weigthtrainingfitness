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
    description: 'These programs are built for people short on time but hungry to achieve greatness.',
    icon: FireIcon,
  },
  {
    name: 'Certified Trainers',
    description: 'All programs are designed by certified professionals so you can train safely and effectively.',
    icon: TrophyIcon,
  },
  {
    name: 'Simple Steps',
    description: 'Follow our step-by-step programs from start to finish — no confusion, just results.',
    icon: ChartBarIcon,
  },
  {
    name: 'Personalised Support',
    description: 'Need adjustments? Our trainers will guide and tailor your program to your unique goals.',
    icon: UserGroupIcon,
  },
  {
    name: 'Train with Purpose',
    description: 'Our methods are designed to build lasting habits and real strength.',
    icon: BoltIcon,
  },
  {
    name: 'Health Focused',
    description: 'Every program promotes not just performance, but long-term health and wellbeing.',
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base py-5 font-semibold text-red-400">Everything you need</h2>
          <p className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
            No Time? No Problem
          </p>
          <p className="mt-6 para-text">
            We will help you get in shape. Follow one of our programs for proven results. Reach out and if you have time book an in person PT session.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto md:max-w-3/4 px-6 lg:px-8">
          <Image
            alt="App screenshot"
            src="/images/wtf-ad.png"
            width={2432}
            height={1442}
            className="mb-[-%] rounded-xl shadow-2xl ring-1 ring-white/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-black pt-[7%]" />
          </div>
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
  