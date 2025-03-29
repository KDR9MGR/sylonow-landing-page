
import React from 'react';
import Navbar from '@/components/Navbar';
import GiftBox from '@/components/GiftBox';
import CountdownTimer from '@/components/CountdownTimer';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="py-16 px-6 md:px-10 bg-[url('data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTAwIDYwMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCA0MTVMMjUgNDE3LjJDNTAgNDE5LjMgMTAwIDQyMy43IDE1MCA0MTcuN0MyMDAgNDExLjcgMjUwIDM5NS4zIDMwMCAzOTAuN0MzNTAgMzg2IDQwMCAzOTMgNDUwIDQwNC4zQzUwMCA0MTUuNyA1NTAgNDMxLjMgNjAwIDQyNEM2NTAgNDE2LjcgNzAwIDM4Ni4zIDc1MCAzODUuOEM4MDAgMzg1LjMgODUwIDQxNC43IDg3NSA0MjkuM0w5MDAgNDQ0TDkwMCA2MDFMODc1IDYwMUM4NTAgNjAxIDgwMCA2MDEgNzUwIDYwMUM3MDAgNjAxIDY1MCA2MDEgNjAwIDYwMUM1NTAgNjAxIDUwMCA2MDEgNDUwIDYwMUM0MDAgNjAxIDM1MCA2MDEgMzAwIDYwMUMyNTAgNjAxIDIwMCA2MDEgMTUwIDYwMUMxMDAgNjAxIDUwIDYwMSAyNSA2MDFMMCA2MDFaIiBmaWxsPSIjZjNlOGZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvcGF0aD48L3N2Zz4=')] bg-cover min-h-[85vh] flex flex-col justify-center items-center text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in [animation-delay:200ms]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block mb-2">Making Celebrations</span>
            <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Sylonow is revolutionizing the way you celebrate special moments with our innovative platform launching in May 2025.
          </p>
          
          <div className="relative animate-float">
            <GiftBox />
          </div>
          
          <div className="mt-4 animate-fade-in [animation-delay:1000ms]">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Launching in
            </h2>
            <CountdownTimer />
          </div>
          
          <div className="mt-6 animate-fade-in [animation-delay:1500ms]">
            <a href="#contact">
              <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all px-8 py-6 text-lg">
                <Gift className="mr-2 h-5 w-5" /> Get Early Access
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
