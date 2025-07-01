import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GiftBoxAnimation from './components/GiftBoxAnimation';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userPresence } from './lib/userPresence';
import { visitorTracker } from './lib/visitorTracker';
import ScrollToTop from './components/ScrollToTop';
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import BlogEditor from "./pages/admin/BlogEditor";
import NotFound from "./pages/NotFound";
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import GDPR from './pages/GDPR';
import Status from './pages/Status';
import HelpCenter from './pages/HelpCenter';

const queryClient = new QueryClient();

const App = () => {
  const [showContent, setShowContent] = useState(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    const isHomePage = window.location.pathname === '/';
    
    // Show content immediately if:
    // 1. Not on home page AND has seen animation before
    // 2. Not on home page AND accessing directly
    return !isHomePage && (hasSeenAnimation || !document.referrer);
  });

  useEffect(() => {
    console.log('App mounted - initializing tracking');
    
    const initializeTracking = async () => {
      try {
        // Track user presence
        await userPresence.startTracking();
        console.log('User tracking initialized successfully');

        // Track unique visitor
        await visitorTracker.trackVisit();
        console.log('Visitor tracking initialized successfully');
      } catch (error) {
        console.error('Failed to initialize tracking:', error);
      }
    };

    initializeTracking();

    return () => {
      console.log('App unmounting - cleaning up user tracking');
      userPresence.stopTracking().catch(error => {
        console.error('Failed to stop user tracking:', error);
      });
    };
  }, []);

  return (
    <>
      <GiftBoxAnimation onAnimationComplete={() => setShowContent(true)} />
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2 // Reduced delay for better UX
            }}
            className="min-h-screen bg-background"
          >
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/admin/blogs/:id" element={<BlogEditor />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/gdpr" element={<GDPR />} />
                    {/* Help Center Routes */}
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/status" element={<Status />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
               
                </BrowserRouter>
              </TooltipProvider>
            </QueryClientProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
