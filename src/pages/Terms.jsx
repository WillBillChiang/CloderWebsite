import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Terms() {
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
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-gray-600">Last updated: December 3, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                Welcome to Cloder! These Terms of Service ("Terms") govern your use of our app and services.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using Cloder, you agree to be bound by these Terms. If you do not agree, do not use the app.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                <p className="text-gray-700">
                  You must be at least 18 years old to use Cloder. By using the app, you represent that you are 18 or older.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Account & Security</h2>
                <p className="text-gray-700">
                  You are responsible for maintaining the confidentiality of your account and for all activities under it. Notify us immediately of any unauthorized use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. ZERO TOLERANCE POLICY FOR OBJECTIONABLE CONTENT</h2>
                <p className="text-gray-700 mb-4">
                  We have a strict zero tolerance policy for objectionable content and abusive behavior. ANY violation of these guidelines may result in immediate account suspension or termination without warning.
                </p>
                <p className="text-gray-700 mb-2">
                  Prohibited content and behaviors include, but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Harassment, bullying, or threatening behavior</li>
                  <li>Hate speech or discriminatory language</li>
                  <li>Spam or repetitive messaging</li>
                  <li>Inappropriate sexual content</li>
                  <li>Violence or threats of violence</li>
                  <li>Sharing of personal information without consent</li>
                  <li>Impersonation of others</li>
                  <li>Content that violates local laws</li>
                  <li>Any form of abusive behavior toward other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Content Moderation & Enforcement</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>All messages are automatically filtered for inappropriate content before sending</li>
                  <li>Content that violates our guidelines is blocked at the app level</li>
                  <li>Users can report messages and users for review</li>
                  <li>All reports are reviewed and acted upon within 24 hours</li>
                  <li>Violating users will have their content removed and accounts terminated immediately</li>
                  <li>We reserve the right to remove any content and suspend any account without prior notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. User Safety Tools</h2>
                <p className="text-gray-700 mb-2">
                  You have access to safety tools including:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Content filtering that blocks inappropriate messages before sending</li>
                  <li>Reporting system for inappropriate content and users</li>
                  <li>Blocking system to prevent unwanted interactions</li>
                  <li>Community guidelines accessible throughout the app</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Events & Safety</h2>
                <p className="text-gray-700">
                  Cloder connects people for real-life events. You are solely responsible for your safety and conduct at events. Use your best judgment and follow local laws and guidelines.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700">
                  Cloder and its logos are our property. You may not use our trademarks without permission. You retain rights to your own content, but grant us a limited license to host and display it as necessary to operate the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate your access for violations of these Terms. You may stop using the app at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Disclaimers & Limitation of Liability</h2>
                <p className="text-gray-700">
                  The service is provided "as is." We disclaim warranties to the fullest extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700">
                  We may update these Terms from time to time. We will post the updated Terms and the "Last updated" date above.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Liability Waiver</h2>
                <p className="text-gray-700">
                  You understand and agree that using Cloder to connect with others and to attend or host events involves inherent risks, including but not limited to the risk of physical or emotional harm, illness, property damage, or other loss. To the fullest extent permitted by law, you voluntarily assume all such risks and release, waive, and discharge Cloder, its affiliates, officers, employees, and agents from any and all liability for any injury, loss, or damages of any kind arising out of or related to your use of the app or participation in any activities or events arranged through the app, whether occurring before, during, or after such activities or events, and whether caused by negligence or otherwise.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Privacy & Data</h2>
                <p className="text-gray-700">
                  We collect personal information you provide to us, such as name, display name, email, birthday, photos, bio, interests, preferences, pronouns, gender, location, and any other profile details you submit during account creation or later edits. We also collect location information (when you grant permission) and usage data. Our collection and use of personal information are described in our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
                <p className="text-gray-700">
                  For questions, contact us at{' '}
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
            <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">
              View Privacy Policy →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms
