import { FireIcon, BoltIcon, HeartIcon } from '@heroicons/react/20/solid';
import WeeklyPlan from './weekly-plan'
import Image from 'next/image';

export default function ServiceContent() {
  return (
    <>
    {/* CTA Section */}
    <div className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your transformation?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Book your first 1-on-1 session today and experience personalized training that delivers real results. 
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

    
    <div id='pt' className="relative bg-black mt-30 border-b border-gray-800">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              alt=""
              width={800}
              height={1000}
              src="/images/gym-set.jpg"
              className="absolute inset-0 size-full bg-gray-900 object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/1 to-transparent"></div>
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-red-600">Personal Training</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              1-on-1 Training Sessions
            </h1>
            <p className="mt-6 para-text">
              Experience personalized fitness coaching tailored specifically to your goals, fitness level, and lifestyle. 
              Our 1-on-1 sessions provide the focused attention and expert guidance you need to achieve real, lasting results.
            </p>
            <div className="mt-10 para-text">
              <p>
                Every client is unique, which is why our 1-on-1 training sessions are completely customized to fit your 
                individual needs. Whether you&apos;re looking to build strength, lose weight, improve athletic performance, or 
                simply feel better in your daily life, we&apos;ll create a program designed specifically for you and your goals.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-300">
                <li className="flex gap-x-3">
                  <FireIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-red-600"
                  />
                  <span>
                    <strong className="font-semibold text-white">Customized Programming.</strong> Each session is designed 
                    around your specific goals, current fitness level, and any limitations or injuries you may have. No cookie-cutter 
                    workouts—just results-driven training that works for you.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-red-600"
                  />
                  <span>
                    <strong className="font-semibold text-white">Expert Coaching & Form Correction.</strong> Receive real-time 
                    feedback and technique coaching to ensure you&apos;re performing exercises safely and effectively, maximizing your 
                    results while minimizing injury risk.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-red-600"
                  />
                  <span>
                    <strong className="font-semibold text-white">Accountability & Motivation.</strong> Stay on track with 
                    consistent support, progress tracking, and the encouragement you need to push through plateaus and achieve 
                    your fitness goals faster.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our 1-on-1 sessions go beyond just working out. We focus on building sustainable habits, improving your 
                relationship with fitness, and creating a training experience that fits seamlessly into your life. With flexible 
                scheduling and personalized attention every step of the way, you&apos;ll have everything you need to succeed.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                New to training? We&apos;ve got you covered.
              </h2>
              <p className="">
                Whether you&apos;re a complete beginner or getting back into fitness after time away, our 1-on-1 sessions provide 
                a welcoming, judgment-free environment. We&apos;ll start where you are, not where you think you should be, and 
                build your confidence and strength gradually. Every session is an opportunity to learn, grow, and move closer 
                to becoming the strongest version of yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <WeeklyPlan />
    </>
    
  )
}