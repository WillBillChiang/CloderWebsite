import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Support() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back link */}
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Need <span className="text-gradient">Support?</span>
            </h1>
            <p className="text-gray-600 text-lg">We're here to help!</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="text-center">
              {/* Support icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

              <p className="text-gray-700 mb-8 text-lg">
                Have questions, feedback, or need assistance? Our support team is ready to help you.
              </p>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 mb-8">
                <p className="text-gray-700 mb-4">Email us at:</p>
                <a
                  href="mailto:cloderconnect@gmail.com"
                  className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  cloderconnect@gmail.com
                </a>
              </div>

              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">What we can help with:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical support and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Account and billing inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Feature requests and feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Privacy and data concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>General questions about Cloder</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">
              Privacy Policy →
            </Link>
            <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-semibold">
              Terms of Service →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Support
