'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
const faqs = [
  {
    id: 1,
    question: "Do I need to come to a gym?",
    answer:
      "Not at all. I can train you at your home, in a park, or at my training space. Wherever suits you best.",
  },
  {
    id: 2,
    question: "Can beginners start with you?",
    answer:
      "Absolutely. I work with all fitness levels, from complete beginners to experienced athletes. Programs are tailored to your current ability.",
  },
  {
    id: 3,
    question: "Can the training be personalised?",
    answer:
      "Yes! Every session is customised to your goals, schedule, and fitness level. We can adjust exercises if you have any injuries or limitations.",
  },
  {
    id: 4,
    question: "How often should I train?",
    answer:
      "It depends on your goals and availability. Most clients start with 2–3 sessions per week, and we adjust as you progress.",
  },
  {
    id: 5,
    question: "Do I need equipment?",
    answer:
      "Not necessarily. I bring what's needed for your session, and many exercises can be done using just your body weight. Optional equipment can be added for variety and progression.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-black min-h-screen relative">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header Section */}
        <div className="absolute inset-0">
            <Image
            src="/images/pattern-lr-bg.png"
            alt="Transformation background"
            fill
            className="h-full w-full object-cover opacity-20"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/100"></div>
        </div>

        
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold text-red-500 tracking-wide uppercase">
            Support
          </h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            At Weight Training Fitness, I provide personalised training programs designed to help you reach your fitness goals safely and effectively. Whether your focus is building strength, losing fat, improving athletic performance, or boosting overall wellness, I offer one-on-one coaching that adapts to your individual needs.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm transition-all duration-200 hover:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-gray-900/50"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform duration-200 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openId === faq.id ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-1 text-base leading-7 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative mx-auto mt-16 max-w-2xl text-center sm:mt-20 px-6 py-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-base leading-7 text-gray-400">
            Can&apos;t find the answer you&apos;re looking for? Reach out to me by{' '}
            <a 
              href="/contact" 
              className="font-semibold text-red-500 hover:text-red-400 transition-colors underline decoration-red-500/30 hover:decoration-red-400"
            >
              sending an email
            </a>{' '}
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}