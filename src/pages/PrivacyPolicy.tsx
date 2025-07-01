import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Bell, Server, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "April 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Demographic information (Age, gender, location)",
        "Payment information (Credit card details, billing address)",
        "Usage data (How you interact with our services)",
        "Device information (IP address, browser type, device type)"
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        "With service providers and business partners",
        "For legal requirements and business transfers",
        "With your consent",
        "In aggregated, anonymized form"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "Encryption of sensitive information",
        "Regular security audits",
        "Secure data storage",
        "Employee training and access controls",
        "Incident response procedures"
      ]
    },
    {
      id: "do-not-sell",
      title: "Do Not Sell My Personal Information",
      content: [
        "You have the right to opt-out of the sale of your personal information",
        "We do not sell your personal information to third parties",
        "You can exercise your rights by contacting us",
        "We will respond to your request within 45 days"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Sylonow</title>
        <meta name="description" content="Learn about how Sylonow collects, uses, and protects your personal information." />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col mt-10">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  At Sylonow, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our services. Please read 
                  this privacy policy carefully. By using our services, you agree to the collection and 
                  use of information in accordance with this policy.
                </p>

                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </motion.section>
                ))}

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
                  <p className="text-gray-600 mb-4">
                    Depending on where you reside, you may have certain rights regarding your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <Eye className="w-6 h-6 text-pink-600 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Access Your Data</h3>
                      <p className="text-gray-600">Request a copy of your personal information</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <Lock className="w-6 h-6 text-pink-600 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Data Security</h3>
                      <p className="text-gray-600">Your data is encrypted and securely stored</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <Bell className="w-6 h-6 text-pink-600 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Communication Preferences</h3>
                      <p className="text-gray-600">Control how we communicate with you</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <Shield className="w-6 h-6 text-pink-600 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                      <p className="text-gray-600">Request deletion or restriction of your data</p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600">
                      Email: privacy@sylonow.com<br />
                      Address: Company Name: Sylonow Launch Date: July 2025
                      Headquarters: Bengaluru, Karnataka, India Founders:
                      Sangamesh & Srikanth , gagan Industry: Celebration &
                      Surprise Services Business Model: B2C & B2B – Platform-based
                      Service Areas: Now serving in Bengaluru, and coming soon to other cities across India
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy; 