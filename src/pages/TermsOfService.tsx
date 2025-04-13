import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <>
      <Helmet>
        <title>Terms of Service - Sylonow</title>
        <meta name="description" content="Sylonow's Terms of Service - Read our terms and conditions for using our platform." />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing or using Sylonow's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 mb-6">
                  Sylonow provides an AI-powered celebration planning and management platform. Our services include 
                  but are not limited to event planning, gift recommendations, and celebration coordination.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 mb-4">When creating an account, you must:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Promptly update any changes to your information</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 mb-6">
                  Users agree to pay all fees and charges associated with their account on a timely basis. 
                  Prices for services are subject to change upon notice. All payments are non-refundable 
                  except as expressly provided in our refund policy.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  All content, features, and functionality of our services are owned by Sylonow and are 
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. User Content</h2>
                <p className="text-gray-600 mb-6">
                  By submitting content to our platform, you grant Sylonow a worldwide, non-exclusive, 
                  royalty-free license to use, reproduce, modify, and distribute the content.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  Sylonow shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use or inability to use our services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  material changes via email or through our platform.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  For questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@sylonow.com
                  <br />
                  Address: Company Name: Sylonow Launch Date: May 2025
                  Headquarters: Bengaluru, Karnataka, India Founders:
                  Sangamesh & Srikanth , gagan Industry: Celebration &
                  Surprise Services Business Model: B2C & B2B – Platform-based
                  Service Areas: Launching in Bengaluru, with planned
                  expansion across India Email: info@sylonow.com Website:
                  www.sylonow.com Social Media: @sylonow give linkdin page link
                </p>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService; 