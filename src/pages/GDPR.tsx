import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, User, Download, Trash2, Eye, XCircle, RefreshCw, Send } from 'lucide-react';

const GDPR = () => {
  const lastUpdated = "March 15, 2024";

  const userRights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "You have the right to request a copy of your personal data and to verify the lawfulness of processing."
    },
    {
      icon: RefreshCw,
      title: "Right to Rectification",
      description: "You can request correction or completion of your personal data if it is inaccurate or incomplete."
    },
    {
      icon: Trash2,
      title: "Right to Erasure",
      description: "Also known as 'right to be forgotten', you can request deletion of your personal data."
    },
    {
      icon: XCircle,
      title: "Right to Restrict Processing",
      description: "You can request to restrict the processing of your personal data under certain circumstances."
    },
    {
      icon: Download,
      title: "Right to Data Portability",
      description: "You can request to receive your data in a structured format or have it transferred to another controller."
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "You have the right to object to processing of your personal data for certain purposes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Sylonow</title>
        <meta name="description" content="Learn about your rights under GDPR and how Sylonow protects your personal data." />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">GDPR Compliance</h1>
              <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights Under GDPR</h2>
                <p className="text-gray-600 mb-6">
                  Under the General Data Protection Regulation (GDPR), you have enhanced rights regarding 
                  your personal data. We are committed to protecting these rights and ensuring transparency 
                  in our data processing activities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {userRights.map((right, index) => (
                    <motion.div
                      key={right.title}
                      className="bg-gray-50 rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <right.icon className="w-8 h-8 text-pink-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{right.title}</h3>
                      <p className="text-gray-600">{right.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How We Process Your Data</h2>
                <p className="text-gray-600 mb-6">
                  We process personal data only with valid legal bases under GDPR, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Consent: When you explicitly agree to the processing</li>
                  <li>Contract: When processing is necessary for a contract with you</li>
                  <li>Legal Obligation: When required by law</li>
                  <li>Legitimate Interests: When we have a justified business purpose</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Protection Measures</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational measures to ensure a level of security 
                  appropriate to the risk, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Encryption of personal data</li>
                  <li>Regular security assessments</li>
                  <li>Staff training on data protection</li>
                  <li>Access controls and authentication</li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 mb-6">
                  When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place 
                  through standard contractual clauses or other valid transfer mechanisms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exercise Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  To exercise your GDPR rights or if you have any questions about our data protection practices, 
                  please contact our Data Protection Officer at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600">
                    Email: dpo@sylonow.com<br />
                    Address: [Your Company Address]<br />
                    Phone: [Your Phone Number]
                  </p>
                </div>

                {/* Data Request Form Button */}
                <div className="mt-12 text-center">
                  <motion.button
                    className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Data Request
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GDPR; 