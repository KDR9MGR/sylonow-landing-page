import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Download } from "lucide-react";

const VendorApp = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "SylonowVendor@2025";

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sylonow-vendor.apk';
    link.download = 'sylonow-vendor.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Vendor App - Sylonow</title>
        <meta name="description" content="Download the Sylonow Vendor App - Exclusive access for authorized vendors." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <Navbar />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {!isAuthenticated ? (
            /* Password Protection Screen */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-6">
                  <Lock className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Vendor App Access
                  </h1>
                  <p className="text-gray-600">
                    Please enter the password to access the vendor app download.
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3"
                  >
                    Access Vendor App
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Authenticated Screen - Download Page */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto">
                <div className="mb-6">
                  <Download className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Sylonow Vendor App
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Welcome! You can now download the Sylonow Vendor App.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleDownload}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Vendor App
                  </Button>
                  
                  <div className="text-sm text-gray-500">
                    <p>Version 1.0.0</p>
                    <p>Compatible with Android</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default VendorApp;