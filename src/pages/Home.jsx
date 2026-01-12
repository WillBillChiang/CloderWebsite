import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import FAQ from '../components/FAQ'

function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [activeStep, setActiveStep] = useState(0)

  const features = [
    {
      icon: '👤',
      title: 'Authentic Profiles',
      description: 'Share your genuine interests and passions. Be yourself and find others who appreciate you for who you are.',
    },
    {
      icon: '🎯',
      title: 'Smart Matching',
      description: 'Get matched with people who share your interests and are available at the same time as you.',
    },
    {
      icon: '📅',
      title: 'Availability-Based Matching',
      description: 'Input when you\'re free, and we\'ll connect you with others available at the same time for in-person meetups.',
    },
    {
      icon: '🤝',
      title: 'Real Connections',
      description: 'No endless texting. Cloder is designed to get you meeting people in person, where real friendships begin.',
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: 'Your privacy and safety are our top priorities. Meet in public places and stay in control.',
    },
    {
      icon: '🌟',
      title: 'Community Driven',
      description: 'Join a community of people who value authentic, face-to-face connections.',
    },
  ]

  const userFlow = [
    {
      step: 1,
      title: 'Create Your Profile',
      description: 'Tell us about your interests, hobbies, and what you\'re passionate about.',
      icon: '✍️',
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 2,
      title: 'Search for Groups',
      description: 'Browse groups based on your interests and select your availability to find meetups that fit your schedule.',
      icon: '🔍',
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 3,
      title: 'Get Matched by Time',
      description: 'We match you with people who share your interests AND are available at the same times as you.',
      icon: '🎯',
      color: 'from-pink-400 to-pink-600',
    },
    {
      step: 4,
      title: 'Meet In Person',
      description: 'Connect in real life and build meaningful, lasting friendships.',
      icon: '🤝',
      color: 'from-orange-400 to-orange-600',
    },
  ]

  return (
    <>
      <SEO
        title="Make New Friends | Cloder - Connect in Real Life"
        description="Make new friends who share your interests and are available when you are. Cloder helps you find friends nearby and connect in real life. Set your availability, get matched by interests and time, and meet up in person for authentic friendships."
        keywords="make new friends, find friends nearby, meet new people, connect in real life, real life connections, find local friends, friendship app, meet people near me, make friends app, find friends with similar interests"
        canonical="https://cloderconnect.com/"
      />
      <StructuredData type="website" />
      <div className="overflow-hidden">
        {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 left-1/2 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Make New Friends &
                <span className="text-gradient"> Connect in Real Life</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Make new friends who share your interests and are free when you are. Share your availability, get matched with people nearby, and meet up in person. No more endless texting—just real connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://apps.apple.com/us/app/cloder/id6755250994"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Download on iOS
              </a>
            </motion.div>

            {/* Floating emoji animations */}
            <div className="mt-16 flex justify-center gap-8">
              {['👋', '🎉', '☕', '🎨', '🎮', '📚'].map((emoji, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-4xl hidden md:block"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-gray-400">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Cloder</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're redefining how people connect by prioritizing authentic, face-to-face interactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  hoveredFeature === index
                    ? 'bg-gradient-to-br from-primary-50 to-accent-50 shadow-xl transform scale-105'
                    : 'bg-gray-50 hover:shadow-lg'
                }`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with Cloder is easy. Follow these simple steps to begin making real connections.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {userFlow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative"
                >
                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 h-full ${
                      activeStep === index
                        ? 'bg-white shadow-2xl transform scale-105'
                        : 'bg-white/80 shadow-lg'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-3xl mb-4 mx-auto`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-500 mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  {index < userFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="https://apps.apple.com/us/app/cloder/id6755250994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Download on iOS
            </a>
          </motion.div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In a world where digital connections have replaced face-to-face interactions, we believe it's time to bring back the joy of meeting people in real life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Cloder was created to help you find your community—people who share your passions and want to connect authentically. Whether you're looking for a coffee chat, a hiking buddy, or someone to explore art galleries with, Cloder makes it easy to find and meet people who get you.
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                  "Real friendships happen in real life."
                </p>
                <p className="text-gray-600">
                  Join thousands of people who are choosing meaningful connections over endless scrolling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Make Real Connections?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Cloder today and start building meaningful friendships in your community.
            </p>
            <a
              href="https://apps.apple.com/us/app/cloder/id6755250994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Download on iOS
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
    </>
  )
}

export default Home
