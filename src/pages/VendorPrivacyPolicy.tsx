import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VendorPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sylonow Vendor App</h2>
          
          <div className="text-gray-600 mb-6 space-y-1">
            <p><strong>Effective Date:</strong> May 12, 2025</p>
            <p><strong>Last Updated:</strong> May 12, 2025</p>
            <p><strong>Owned by:</strong> Sylonow Vision Private Limited</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Sylonow Vision Private Limited ("Sylonow", "we", "us", or "our") is committed to safeguarding the privacy and security of your personal data. This Privacy Policy outlines how we collect, use, store, and share your data when you use the Sylonow Vendor App ("App"). By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p className="text-gray-700">
              This policy is governed by the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, under the Information Technology Act, 2000 of India.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect the following types of information from vendors:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Personal Information:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Full name</li>
                  <li>Business name and location</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>Profile image (optional)</li>
                  <li>GST number (for invoicing purposes)</li>
                  <li>PAN number (for tax compliance)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Vendor-Specific Data:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Service categories (e.g., decorator, venue, catering)</li>
                  <li>Service-related data, including pricing and availability</li>
                  <li>Vendor operating hours</li>
                  <li>Bookings and order details</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3 Device & Usage Data:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Device information (e.g., device type, OS, version)</li>
                  <li>IP address</li>
                  <li>App usage logs (pages visited, actions taken, clicks, etc.)</li>
                  <li>Geolocation data (for delivery coordination)</li>
                  <li>Error logs and crash data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.4 Payment Data:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Payment details (processed via third-party payment providers, such as Razorpay, Paytm)</li>
                  <li>Invoices and transaction history</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Register and maintain your vendor account</li>
              <li>Process service bookings and manage customer interactions</li>
              <li>Enable secure QR-based verification during service provision</li>
              <li>Notify you of new orders, updates, and system changes</li>
              <li>Manage payments and invoicing</li>
              <li>Provide customer support</li>
              <li>Analyze usage trends and improve app functionality</li>
              <li>Send promotional offers and service updates (optional)</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal information. However, we may share your data under the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>With customers:</strong> Customer-specific details (such as service, booking time, and location) may be shared to fulfill the booking.</li>
              <li><strong>With third-party service providers:</strong> For payment processing, cloud storage, SMS/email notifications, and app analytics.</li>
              <li><strong>For legal purposes:</strong> We may disclose information when required by law, a court order, or to protect legal rights.</li>
            </ul>
            <p className="text-gray-700">
              All third-party providers must comply with data protection regulations and are bound by confidentiality agreements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. QR-Based Vendor Verification</h2>
            <p className="text-gray-700 mb-4">To ensure a secure service experience:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vendors must scan a QR code provided by customers upon arrival for service verification.</li>
              <li>Customer data will be shared only for verification purposes and will not be accessible post-service.</li>
              <li>Sylonow will not be responsible for any issues related to the vendor's actions or the service post-QR verification.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">We take the following measures to ensure the safety of your data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Encryption:</strong> All sensitive data is encrypted during transmission and storage.</li>
              <li><strong>Access Control:</strong> Only authorized personnel have access to your personal and business data.</li>
              <li><strong>Two-Factor Authentication (2FA):</strong> For account security, we encourage the use of two-factor authentication during login.</li>
            </ul>
            <p className="text-gray-700">
              Despite our best efforts, no method of electronic transmission or storage is 100% secure. If there is a data breach, we will notify affected users within 72 hours as per legal requirements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technology</h2>
            <p className="text-gray-700 mb-4">The app uses cookies and similar technologies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Improve app performance</li>
              <li>Track usage patterns</li>
              <li>Provide personalized content</li>
              <li>Enable marketing campaigns (if opted-in)</li>
            </ul>
            <p className="text-gray-700">
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights Under Indian Law</h2>
            <p className="text-gray-700 mb-4">
              As per the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Correct, update, or delete your data</li>
              <li>Withdraw your consent at any time (this may limit functionality)</li>
              <li>Request that we stop using your personal data for marketing purposes</li>
            </ul>
            <p className="text-gray-700">
              For exercising any of these rights, please contact us at: <a href="mailto:info@sylonow.com" className="text-purple-600 hover:underline">info@sylonow.com</a>
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Retention of Data</h2>
            <p className="text-gray-700 mb-4">
              We retain your data for as long as your account is active, or as necessary to fulfill the purposes for which it was collected, including legal, tax, and accounting obligations.
            </p>
            <p className="text-gray-700">
              You may request data deletion by contacting us, and we will comply, except where retention is required for compliance with legal obligations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">
              The App is not intended for individuals under the age of 18, and we do not knowingly collect or store data from children. If we learn that we have inadvertently collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may revise this Privacy Policy periodically to reflect changes in our practices or for legal, regulatory, or operational reasons. All changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For any questions or concerns regarding this Privacy Policy, or to request changes to your information, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Sylonow Vision Private Limited</p>
              <p className="text-gray-700"><strong>Address:</strong> JP Nagar Bengaluru 560078</p>
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:info@sylonow.com" className="text-purple-600 hover:underline">info@sylonow.com</a></p>
              <p className="text-gray-700"><strong>Phone:</strong> 9480709432</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorPrivacyPolicy;