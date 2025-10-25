import { FireIcon, BoltIcon, HeartIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export default function MobilePt() {
  return (
    <>
      {/* CTA Section with Gradient Background */}

      <div id='mobilept' className="relative bg-black border-t border-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img
            src="/images/dumbells.jpg"
            alt="Transformation background"
            className="h-full w-full object-cover opacity-60"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Mobile Personal Training
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Book your first mobile personal training session today. Don&apos;t stress, let us come to you. 
                Limited spots available.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                href="/contact"
                className="rounded-md bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
                >
                Book Your Session
                </a>
            </div>
            </div>
        </div>
        </div>

     

      {/* Mobile Personal Training Section with Enhanced Layout */}
      <div id='pt' className="relative bg-black border-b border-gray-800 overflow-x-hidden">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-10 lg:pl-8 lg:pr-0">
          {/* Text Content - Left Side */}
          <div className="px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:max-w-none lg:pb-32 lg:pt-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
                <span className="text-sm font-semibold text-red-500">Mobile Personal Training</span>
              </div>
              <h1 className="mt-6 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Training That Comes to You
              </h1>
              <p className="mt-6 para-text">
                Experience the ultimate convenience of professional fitness coaching delivered directly to your home, park, or preferred location. 
                Our mobile training brings the gym to you with all the equipment and expertise you need for effective workouts.
              </p>

              <div className="mt-12 space-y-6 text-gray-400">
                <p className="para-text">
                  Skip the commute and train on your schedule. Our mobile personal training service eliminates every barrier between you and your fitness goals. 
                  We bring professional grade equipment, expert coaching, and personalised programming right to your doorstep whether that&apos;s your home, 
                  local park, or gym. You get the same high quality training experience without ever leaving your neighborhood.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 space-y-4">
                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors">
                          <FireIcon className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Complete Equipment Setup</h3>
                        <p className="text-sm leading-6 text-gray-400">
                          We arrive fully equipped with everything needed for an effective workout. Dumbbells, resistance bands, kettlebells, mats, and more. No gym membership required, no equipment purchases necessary.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors">
                          <BoltIcon className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ultimate Flexibility & Convenience</h3>
                        <p className="text-sm leading-6 text-gray-400">
                          Train at times that work for your busy lifestyle. Early morning before work, during lunch breaks, or evening sessions, we adapt to your schedule. Save time on commuting and maximize your day.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors">
                          <HeartIcon className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Private & Comfortable Environment</h3>
                        <p className="text-sm leading-6 text-gray-400">
                          Train in the privacy and comfort of your own space without gym crowds or intimidation. Perfect for those who prefer a more personal, relaxed training atmosphere where you can focus completely on your goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-8 para-text">
                  Mobile training isn&apos;t just convenient it&apos;s more effective. With personalised attention in a comfortable environment, 
                  you&apos;ll stay consistent, build confidence faster, and see results without the hassle of traditional gym workouts. Whether you have 
                  a home gym setup, a garage, outdoor space, or just a living room, we&apos;ll make it work and deliver professional training that fits your lifestyle.
                </p>

                {/* Beginner-Friendly Callout */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/5 px-8 pb-5 border border-red-600/20">
                  <h2 className="text-2xl m-0 font-bold tracking-tight text-white">
                    Perfect for busy professionals and families
                  </h2>
                  <p className=" text-base leading-7 text-gray-300">
                    No time for the gym? No problem. Our mobile training is designed for people with demanding schedules who still want to prioritise their health. 
                    Parents can train while kids nap or play nearby. Professionals can fit in effective workouts without losing hours to commuting. 
                    We handle everything for you, just show up ready to work. It&apos;s personal training adapted to a busy modern lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side with Enhanced Overlay */}
          <div className="relative h-100 w-full lg:h-auto lg:w-[80vw] overflow-hidden">
            <Image
              alt="Mobile personal training session at client's location"
              width={800}
              height={1000}
              src="/images/gym-set.jpg"
              className="absolute inset-0 size-full bg-gray-900 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/1 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:via-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          </div>
        </div>
      </div>
    </>
  )
}