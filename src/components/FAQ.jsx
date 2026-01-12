import { motion } from 'framer-motion'
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I make new friends with Cloder?",
      answer: "Making new friends with Cloder is simple: Create your profile sharing your interests and hobbies, search for groups based on your interests, select your availability when looking for meetups, and join groups to meet people in person and build real friendships."
    },
    {
      question: "How does Cloder help me find friends nearby?",
      answer: "Cloder uses your location (with your permission) to connect you with people in your local area who share your interests. This makes it easy to arrange in-person meetups without traveling far."
    },
    {
      question: "What makes Cloder different from other apps to meet new people?",
      answer: "Cloder focuses on availability-based matching. We don't just match you with people who share your interests—we match you with people who are actually free at the same times as you, making it much easier to move from matching to meeting in real life."
    },
    {
      question: "Is Cloder safe for meeting new people?",
      answer: "Cloder has a zero-tolerance policy for inappropriate behavior. We have content filtering, a reporting system, and encourage all meetups to happen in public places. Your safety is our top priority."
    },
    {
      question: "How much does Cloder cost?",
      answer: "Cloder is completely free to download and use. There are no hidden fees or premium subscriptions required to make new friends."
    },
    {
      question: "Can I use Cloder to find friends with specific interests?",
      answer: "Absolutely! When you create your profile, you share your interests, hobbies, and passions. Cloder's matching algorithm connects you with people who share similar interests, whether that's hiking, art, gaming, coffee, or anything else."
    },
    {
      question: "What if I'm shy or introverted?",
      answer: "Cloder is perfect for introverts! By matching based on shared interests and availability, you already have common ground before meeting. Plus, you control when and where you meet, so you can choose comfortable, low-pressure environments."
    },
    {
      question: "How do I set my availability?",
      answer: "When searching for groups, you can select the times and days you're available to attend meetups. This helps you find groups and events that fit your schedule, making it easy to connect with others when you're free."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about making new friends with Cloder
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
