
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import CareerHeader from '@/components/career/CareerHeader';
import CareerForm from '@/components/career/CareerForm';
import AvailableRoles from '@/components/career/AvailableRoles';
import { roles } from '@/components/career/CareerData';

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
      <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-20">
          <CareerHeader />
          <CareerForm />
          <AvailableRoles roles={roles} />
        </div>
      </div>
    </>
  );
};

export default Career;
