import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Accessibility = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement - Sylonow</title>
        <meta name="description" content="Learn about Sylonow's commitment to digital accessibility and our WCAG compliance efforts." />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
                  <p className="mb-4">
                    Sylonow is committed to ensuring digital accessibility for people with disabilities. 
                    We are continually improving the user experience for everyone, and applying the 
                    relevant accessibility standards.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conformance Status</h2>
                  <p className="mb-4">
                    The Web Content Accessibility Guidelines (WCAG) defines requirements for designers 
                    and developers to improve accessibility for people with disabilities. It defines 
                    three levels of conformance: Level A, Level AA, and Level AAA.
                  </p>
                  <p className="mb-4">
                    Sylonow is partially conformant with WCAG 2.1 level AA. Partially conformant means 
                    that some parts of the content do not fully conform to the accessibility standard.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Keyboard navigation support</li>
                    <li>Text alternatives for non-text content</li>
                    <li>Clear heading structure</li>
                    <li>Sufficient color contrast</li>
                    <li>Resizable text support</li>
                    <li>ARIA landmarks and labels</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback</h2>
                  <p className="mb-4">
                    We welcome your feedback on the accessibility of Sylonow. Please let us know if you 
                    encounter accessibility barriers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: accessibility@sylonow.com</li>
                    <li>Phone: [Your Phone Number]</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assessment Approach</h2>
                  <p className="mb-4">
                    Sylonow assessed the accessibility of our platform by the following approaches:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Self-evaluation</li>
                    <li>External accessibility evaluation</li>
                    <li>Automated accessibility testing</li>
                    <li>User feedback analysis</li>
                  </ul>
                </section>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Need Assistance?</h2>
                <p className="text-gray-600 mb-4">
                  If you need assistance or have specific accessibility requirements, please don't 
                  hesitate to contact us.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Accessibility; 