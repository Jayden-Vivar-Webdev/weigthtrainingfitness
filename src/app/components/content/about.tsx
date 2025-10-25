import { AcademicCapIcon, TrophyIcon, HeartIcon, SparklesIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export default function AboutTrainer() {
  return (
    <>
      
        <div className='md:pt-20'></div>
        <div className="relative w-full h-60 lg:h-[40vh] xl:h-[50vh]">
            
            <Image
              alt="Background pattern"
              src="/images/pattern-lr-bg.png"
              fill
              className="absolute inset-0 object-cover opacity-10 mask-image-[linear-gradient(to_top,black_70%,transparent_100%)] z-0 pointer-events-none"
            />
            <Image
                src="/images/about.png"
                alt="Personal Trainer"
                fill
                className="object-contain px-5 lg:object-contain scale-105 translate-y-4 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            />
       
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        
        {/* Background pattern overlay */}
       
        

      {/* About Section with Enhanced Layout */}
      <div id='about-content' className="relative bg-black border-b border-gray-800 overflow-x-hidden">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-10 lg:pl-8 lg:pr-0">
          {/* Text Content - Left Side */}
          <div className="px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:max-w-none lg:pb-32 lg:pt-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
                <span className="text-sm font-semibold text-red-500">10+ Years Experience</span>
              </div>
              <h1 className="mt-6 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Your Partner in Fitness - Ethan
              </h1>
              <p className="">
                With over a decade of experience in personal training and elite sports performance, I specialise in creating customised fitness programs for my clients that deliver real, sustainable results. My approach combines evidence based training methods with genuine care for each client&apos;s unique journey.
              </p>

              <div className="mt-12 space-y-6 text-gray-400">
                <p className="">
                  I believe fitness is more than just exercise it&apos;s about building confidence, creating healthy habits, and unlocking your full potential. Whether you&apos;re taking your first steps toward a healthier lifestyle or pushing to reach new performance goals, I&apos;m here to guide, support, and challenge you every step of the way.
                </p>

                {/* Credentials Cards */}
                <div className="mt-12 space-y-6">
                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors ring-1 ring-red-600/20">
                          <AcademicCapIcon className="h-7 w-7 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Professional Certifications</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Certificate III & IV in Fitness</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">10+ years</strong> of hands-on training experience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Specialised in <strong className="text-white">strength and conditioning</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">CPR and First Aid</strong> certified</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors ring-1 ring-red-600/20">
                          <TrophyIcon className="h-7 w-7 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Elite Sports Background</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Under 16s Harold Matthews</strong> - Cronulla Sharks (National Champions)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Under 18s</strong> - Illawarra Steelers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Under 20s/NRL</strong> - South Sydney Rabbitohs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Bringing a <strong className="text-white">champion&apos;s mindset</strong> to every session</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 group-hover:bg-red-600/20 transition-colors ring-1 ring-red-600/20">
                          <SparklesIcon className="h-7 w-7 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Specialised Expertise</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Injury Rehabilitation</strong> - Safe return to training and injury prevention</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Boxing Training</strong> - Fitness and technical skill development</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Functional Movement</strong> and mobility work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong className="text-white">Personalised Programs</strong> for all fitness levels</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="">
                  My training philosophy is simple: meet you where you are and guide you to where you want to be. Drawing from my elite sports background and decade of coaching experience, I know what it takes to achieve extraordinary results. No judgment, only personalised coaching tailored to your body, your goals, and your lifestyle.
                </p>

                {/* Philosophy Callout */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/5 px-8 pb-5 border border-red-600/20">
                  <h2 className="text-2xl m-0 font-bold tracking-tight text-white">
                    Training Philosophy
                  </h2>
                  <p className="text-base leading-7 text-gray-300">
                    Fitness is a journey, not a destination. Whether you&apos;re recovering from injury, learning to box, or building strength and conditioning, I focus on sustainable habits and proper movement patterns. My clients don&apos;t just get workouts they gain knowledge, confidence, and tools to maintain their results for life. From complete beginners to experienced athletes, I bring the same level of dedication, expertise, and championship mentality to every single session.
                  </p>
                </div>

                {/* Commitment Section */}
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 border border-gray-800">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10">
                        <HeartIcon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">My Commitment to You</h3>
                      <p className="text-base leading-6 text-gray-400">
                        When you train with me, you get more than a workout you get a dedicated coach invested in your success. I&apos;m committed to showing up with energy, expertise, and genuine care for your progress. Your goals become my goals, and together we&apos;ll create the transformation you&apos;re looking for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side with Enhanced Overlay */}
          <div className="relative h-100 w-full lg:h-auto lg:w-[70vw] overflow-hidden">
            <Image
              alt="Personal trainer in action"
              width={1000}
              height={1000}
              src="/images/personal-training.jpg"
              className="absolute inset-0 w-full h-full bg-gray-900 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/1 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:via-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
}