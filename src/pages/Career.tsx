import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerHeader from '@/components/career/CareerHeader';
import CareerForm from '@/components/career/CareerForm';
import AvailableRoles from '@/components/career/AvailableRoles';

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Team - Talent Accelerator Program | Sylonow</title>
        <meta name="description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta name="keywords" content="career opportunities, talent program, Sylonow careers, tech jobs, celebration industry, AI technology jobs" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sylonow.com/career" />
        <meta property="og:title" content="Join Our Team - Talent Accelerator Program | Sylonow" />
        <meta property="og:description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta property="og:image" content="/career-og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sylonow.com/career" />
        <meta name="twitter:title" content="Join Our Team - Talent Accelerator Program | Sylonow" />
        <meta name="twitter:description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta name="twitter:image" content="/career-twitter-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sylonow.com/career" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-20 flex-grow">
          <CareerHeader />
          <div className="max-w-3xl mx-auto">
            <CareerForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Career;
