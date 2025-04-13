import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const FAQs = () => {
  const faqs = [
    {
      question: "How does Sylonow work?",
      answer: "Sylonow uses AI to help you create and manage celebrations. Simply tell us what you're celebrating, and we'll help you plan everything from invitations to decorations."
    },
    {
      question: "What types of celebrations do you support?",
      answer: "We support all types of celebrations including birthdays, weddings, anniversaries, corporate events, and more. Our AI adapts to your specific needs."
    },
    {
      question: "How far in advance should I plan my celebration?",
      answer: "We recommend starting your planning at least 2-3 weeks in advance for small gatherings and 2-3 months for larger events."
    },
    {
      question: "Can I customize the AI recommendations?",
      answer: "Yes! All AI recommendations are fully customizable. You can adjust any suggestion to match your preferences and style."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods including PayPal and various UPI options."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Sylonow</title>
        <meta name="description" content="Find answers to common questions about Sylonow's celebration planning services." />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
              
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h2>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-pink-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Still have questions?</h2>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Feel free to contact our support team.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Support
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

export default FAQs; 