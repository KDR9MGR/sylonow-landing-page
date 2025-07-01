import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const CookiePolicy = () => {
  const lastUpdated = "May 15, 2024";
  const [showBanner, setShowBanner] = useState(true);

  // Check if cookies are already accepted
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleCustomize = () => {
    // Open customization modal (to be implemented)
    setShowBanner(false);
  };

  const cookieCategories = [
    {
      title: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take such as logging in or filling in forms.",
      required: true,
    },
    {
      title: "Analytics Cookies",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.",
      required: false,
    },
    {
      title: "Marketing Cookies",
      description:
        "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts.",
      required: false,
    },
    {
      title: "Functional Cookies",
      description:
        "These cookies enable enhanced functionality and personalization, such as live chat services and remembering your preferences.",
      required: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Sylonow</title>
        <meta
          name="description"
          content="Learn about how Sylonow uses cookies and how you can control them."
        />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Cookie Policy
              </h1>
              <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your device
                  when you visit our website. They help us provide you with a
                  better experience by remembering your preferences, analyzing
                  how you use our site, and helping with marketing efforts.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-600 mb-6">
                  We use different types of cookies for various purposes. Some
                  cookies are essential for the website to function properly,
                  while others help us improve our services and your experience.
                </p>

                <div className="space-y-6 mt-8">
                  {cookieCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      className="bg-gray-50 rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        {category.required ? (
                          <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                            Required
                          </span>
                        ) : (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                          </label>
                        )}
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Managing Cookies
                </h2>
                <p className="text-gray-600 mb-6">
                  You can control and/or delete cookies as you wish. You can
                  delete all cookies that are already on your computer and you
                  can set most browsers to prevent them from being placed. If
                  you do this, however, you may have to manually adjust some
                  preferences every time you visit a site and some services and
                  functionalities may not work.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-gray-600 mb-6">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for operational, legal, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the new Cookie Policy on this page.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies, please
                  contact us at:
                  <br />
                  Email: privacy@sylonow.com
                  <br />
                                          Address: Company Name: Sylonow Launch Date: July 2025
                  Headquarters: Bengaluru, Karnataka, India Founders: Sangamesh
                  & Srikanth , gagan Industry: Celebration & Surprise Services
                  Business Model: B2C & B2B – Platform-based Service Areas:
                  Now serving in Bengaluru, and coming soon to other cities across India
                  Email: info@sylonow.com Website: www.sylonow.com Social Media:
                  @sylonow give linkdin page link
                </p>
              </div>

              {/* Cookie Consent Banner */}
              <AnimatePresence>
                {showBanner && (
                  <motion.div
                    className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 shadow-lg z-50"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                      <p className="text-gray-600 text-sm md:text-base">
                        We use cookies to enhance your experience. By continuing to
                        visit this site you agree to our use of cookies.
                      </p>
                      <div className="flex gap-4">
                        <button 
                          onClick={handleCustomize}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Customize
                        </button>
                        <button 
                          onClick={handleAcceptAll}
                          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                        >
                          Accept All
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
