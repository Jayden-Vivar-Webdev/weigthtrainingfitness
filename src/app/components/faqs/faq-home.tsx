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
]

export default function FAQs() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto">
          <h1 className="red-h-text">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Weight Training Fitness, I provide personalised training programs designed to help you reach your fitness goals safely and effectively. Whether your focus is building strength, losing fat, improving athletic performance, or boosting overall wellness, I offer one-on-one coaching that adapts to your individual needs. Every session is tailored to you, ensuring consistent progress and support every step of the way.
          </p>
        </div>

        {/* FAQs Grid */}
        <div className="mx-auto mt-16 sm:mt-20">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-red-600/50 hover:bg-gray-900/80"
              >
                <dt className="text-lg font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <p className="text-base leading-7 text-gray-400">
            Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-red-400 hover:text-red-500 transition-colors">
              sending us an email
            </a>{' '}
            and we&apos;ll get back to you as soon as we can.
          </p>
        </div>
      </div>
    </div>
  )
}