import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GiftBoxAnimation from './components/GiftBoxAnimation';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <GiftBoxAnimation onAnimationComplete={() => setShowContent(true)} />
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="min-h-screen bg-background"
          >
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/career" element={<Career />} />
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
