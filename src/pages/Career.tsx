import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerHeader from '@/components/career/CareerHeader';
import CareerForm from '@/components/career/CareerForm';
import AvailableRoles from '@/components/career/AvailableRoles';
import { Star, CheckCircle2, AlertCircle, Users, Rocket, Gift } from 'lucide-react';

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
          <div className="max-w-3xl mx-auto mb-20">
            <CareerForm />
          </div>

          {/* New Career Information Section */}
          <div className="max-w-4xl mx-auto space-y-12 px-4 md:px-6">
            {/* Main Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Star className="text-pink-500 h-8 w-8" />
                Are You Ready to Build Something Extraordinary?
                <Star className="text-pink-500 h-8 w-8" />
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Sylonow isn't just another company—it's a revolution in the world of surprises, celebrations, and creativity! We're looking for 25 highly passionate individuals who are ready to learn, implement, execute, and turn dreams into reality.
              </p>
            </div>

            {/* No Requirements Section */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📚 No Qualification, No Degree, No Experience Required!</h3>
              <p className="text-gray-700">This opportunity is not about your resume—it's about your passion, creativity, and drive to do something extraordinary.</p>
            </div>

            {/* The Twist Section */}
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">💡 Here's the twist!</h3>
              <p className="text-gray-700 mb-4">We aren't offering money in the beginning. Instead, we're offering something far more valuable: A CHANCE TO PROVE YOURSELF.</p>
              <div className="space-y-2 text-lg font-medium text-gray-900">
                <p className="italic">This isn't a job.</p>
                <p className="italic">This isn't an internship.</p>
                <p className="text-pink-600">This is your chance to be a part of something revolutionary.</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">What's in it for You?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Work with a real-world startup from the ground up.",
                  "Get industry-level experience in your field.",
                  "Earn a certificate that proves your contribution.",
                  "After 6 months, start earning based on your performance.",
                  "Direct entry to Sylonow after completing education with salary.",
                  "Big rewards after one year from the company side!"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not For Everyone Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="text-pink-500 h-6 w-6" />
                This is NOT for everyone.
              </h3>
              <p className="text-gray-700">This is for the dreamers, the doers, the risk-takers, and the creators.</p>
              <div className="space-y-2">
                <p className="text-red-600 font-medium">If you want an easy Pay-check, this is NOT for you.</p>
                <p className="text-green-600 font-medium">If you want to build something meaningful, we welcome you.</p>
              </div>
            </div>

            {/* Available Roles Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Available Roles in Sylonow's Talent Accelerator Program</h3>
              <p className="text-center text-gray-700">We are offering opportunities in multiple roles! Choose where your passion fits best:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Role */}
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-6 rounded-xl text-white">
                  <h4 className="font-bold text-xl mb-3">🔹 Main role</h4>
                  <p className="font-medium">Company All-Rounder</p>
                  <p className="text-sm mt-2 text-pink-100">(Limited to 1 Role)</p>
                </div>

                {/* Technical Team */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Technical Team</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• UI & UX designer</li>
                    <li>• Software engineer</li>
                    <li>• Backend developer</li>
                  </ul>
                </div>

                {/* Management Team */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Management Team</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vendor Management</li>
                    <li>• Delivery Managers</li>
                    <li>• Sales & Marketing Managers</li>
                    <li>• Content Team Manager</li>
                    <li>• Graphic Designing Head</li>
                    <li>• Social Media Head</li>
                  </ul>
                </div>

                {/* Research & Development */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Research & Development</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Application Research</li>
                    <li>• New Features & Review</li>
                    <li>• E-commerce Specialist</li>
                  </ul>
                </div>

                {/* Creative & Digital */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Creative & Digital</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Graphic Designing</li>
                    <li>• Social Media Management</li>
                    <li>• Content Creation</li>
                  </ul>
                </div>

                {/* Marketing & Advertisement */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Marketing & Advertisement</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Musicians</li>
                    <li>• Artists</li>
                    <li>• Models</li>
                    <li>• Actors</li>
                  </ul>
                </div>

                {/* Other Roles */}
                <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 md:col-span-2 lg:col-span-3">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">🔹 Other Roles</h4>
                  <ul className="space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li>• Customer Assistance & Problem Solving</li>
                    <li>• Kannada Content Writer and Typist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Career;
