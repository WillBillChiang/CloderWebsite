import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Cloder"
        description="Learn how Cloder protects your privacy when you make new friends. Read our comprehensive privacy policy."
        canonical="https://cloderconnect.com/privacy"
        keywords="cloder privacy, privacy policy, data protection"
      />
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
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-gray-600">Last updated: October 17, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                This Privacy Policy explains how Cloder collects, uses, and protects your information.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Account Information:</strong> Name, email (when provided by Sign in with Apple).
                  </li>
                  <li>
                    <strong>Usage Data:</strong> App interactions and basic analytics.
                  </li>
                  <li>
                    <strong>Location:</strong> If you grant permission, we may collect approximate location to show relevant events.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To operate and improve the app.</li>
                  <li>To personalize event recommendations.</li>
                  <li>To communicate important updates and safety notices.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
                <p className="text-gray-700">
                  We do not sell your personal information. We may share information with service providers who help us operate the app, subject to confidentiality agreements, or when required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-gray-700">
                  We use appropriate safeguards to protect your data. No method of transmission or storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Your Choices</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You can control permissions (e.g., location) in System Settings.</li>
                  <li>
                    You can request deletion of your account or data by contacting{' '}
                    <a href="mailto:cloderconnect@gmail.com" className="text-primary-600 hover:text-primary-700">
                      cloderconnect@gmail.com
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
                <p className="text-gray-700">
                  Cloder is not directed to minors under 18. If we learn we've collected personal information from a minor under 18, we will take steps to delete it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. International Transfers</h2>
                <p className="text-gray-700">
                  Your data may be processed in countries other than your own. We take steps to ensure appropriate protections are in place.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Changes to this Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy. We will post the updated policy and the "Last updated" date above.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
                <p className="text-gray-700">
                  For privacy questions, contact us at{' '}
                  <a href="mailto:cloderconnect@gmail.com" className="text-primary-600 hover:text-primary-700">
                    cloderconnect@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>

          {/* Related link */}
          <div className="mt-8 text-center">
            <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-semibold">
              View Terms of Service →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Privacy
