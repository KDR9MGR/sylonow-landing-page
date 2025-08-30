import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VendorCookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookies Policy – Vendor Application</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> 26/05/2025
          </p>
          
          <p className="text-gray-700 mb-6">
            This Cookies Policy explains how the Vendor Application ("we", "our", or "us") uses cookies and similar technologies to recognize you when you use our mobile application or services. This policy applies solely to vendors accessing and using our vendor platform via the Vendor App.
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device when you access a website or application. They help enhance user experience, improve performance, and collect information regarding usage patterns.
            </p>
            <p className="text-gray-700">
              In our mobile application, we may use cookies and similar technologies like software development kits (SDKs), pixels, beacons, and local storage to store and access data for a smoother and more secure vendor experience.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Why We Use Cookies</h2>
            <p className="text-gray-700 mb-4">We use cookies and similar technologies for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Authentication:</strong> To recognize and log in registered vendors securely.</li>
              <li><strong>Security:</strong> To help detect and prevent fraud, unauthorized access, and to ensure safe vendor operations.</li>
              <li><strong>Preferences:</strong> To remember your settings and preferences such as language, location, and app behavior.</li>
              <li><strong>Analytics:</strong> To collect data about app usage and performance for internal analysis and improvement.</li>
              <li><strong>Support Services:</strong> To enable features such as in-app support, chat systems, and notification delivery.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">a. Strictly Necessary Cookies</h3>
                <p className="text-gray-700">These are essential for the operation of the Vendor App. Without these, the app may not function properly.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">b. Performance & Analytics Cookies</h3>
                <p className="text-gray-700">These cookies collect information on how vendors use the app to help us improve its performance. All data collected is anonymized.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">c. Functional Cookies</h3>
                <p className="text-gray-700">These cookies enable the app to remember choices you make (e.g., business category, preferred city) and provide enhanced features.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">d. Targeting/Advertising Cookies</h3>
                <p className="text-gray-700">Currently, no third-party advertisements are used in the Vendor App. If this changes, this section will be updated and vendors will be notified.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may allow trusted third-party service providers (e.g., Google Analytics for Firebase, Razorpay) to place cookies or similar tracking technologies. These services help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Monitor app usage and errors</li>
              <li>Process payments</li>
              <li>Improve overall user experience</li>
            </ul>
            <p className="text-gray-700">
              Third-party cookies are governed by the privacy policies of the respective providers.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              By using the Vendor App, you consent to our use of cookies. You may disable or delete cookies by adjusting your mobile device settings. However, please note that disabling cookies may limit certain functionalities or result in reduced app performance.
            </p>
            <p className="text-gray-700">
              <strong>Note:</strong> For Android and iOS users, managing cookie preferences may depend on your OS version and device manufacturer.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Collection and Privacy</h2>
            <p className="text-gray-700 mb-4">
              All data collected through cookies and tracking technologies is handled as per our Vendor Privacy Policy, in compliance with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The Information Technology Act, 2000</li>
              <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>Applicable sectoral regulations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Cookies Policy from time to time. You will be notified of any material changes through the app or by email.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions, concerns, or requests regarding this Cookies Policy, please contact our Data Protection Officer (DPO) at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> info@sylonow.com</p>
              <p className="text-gray-700"><strong>Address:</strong> JP Nagar Bengaluru 560078</p>
              <p className="text-gray-700"><strong>Phone:</strong> 9480709432</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorCookiesPolicy;