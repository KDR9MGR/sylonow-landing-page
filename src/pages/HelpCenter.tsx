import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Sylonow's AI-powered celebration system work?",
      answer: "Our AI system analyzes your preferences, occasion, and requirements to create personalized celebration recommendations. It considers factors like theme, budget, and guest preferences to suggest the perfect elements for your special moment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "How far in advance should I book my celebration?",
      answer: "We recommend booking at least 2-3 weeks in advance for standard celebrations, and 4-6 weeks for large events or peak seasons. However, we also offer last-minute booking options when available."
    },
    {
      question: "Can I customize my celebration package?",
      answer: "Yes! Our AI system allows for full customization of all celebration packages. You can modify themes, add or remove elements, and adjust details to match your preferences and budget."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard cancellation policy allows for full refunds up to 7 days before the event date. Cancellations within 7 days are eligible for partial refunds or credit for future bookings, depending on the circumstances."
    }
  ];

  const commonTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Sylonow",
      link: "/support/getting-started"
    },
    {
      title: "Account Management",
      description: "Manage your profile and settings",
      link: "/support/account"
    },
    {
      title: "Booking & Payments",
      description: "Information about reservations and transactions",
      link: "/support/booking"
    },
    {
      title: "Customization Options",
      description: "Explore ways to personalize your celebration",
      link: "/support/customization"
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Help Center - Sylonow</title>
        <meta name="description" content="Get help and support for your Sylonow experience. Find answers to common questions and learn how to make the most of our platform." />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col mt-10">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>

              {/* Search Section */}
              <div className="mb-12">
                <div className="relative max-w-2xl">
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Common Topics */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {commonTopics.map((topic, index) => (
                    <motion.div
                      key={topic.title}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-lg border border-gray-200 hover:border-pink-500 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-gray-600 mb-4">{topic.description}</p>
                      <a href={topic.link} className="text-pink-600 hover:text-pink-700 font-medium">
                        Learn more →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      initial={false}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedFaq === index ? "auto" : 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 py-4 text-gray-600 bg-gray-50">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Contact Support */}
              <section className="mt-16">
                <div className="bg-pink-50 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still Need Help?</h2>
                  <p className="text-gray-600 mb-6">
                    Our support team is available 24/7 to assist you with any questions or concerns.
                  </p>
                  <a
                    href="/support/contact"
                    className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </section>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HelpCenter; 