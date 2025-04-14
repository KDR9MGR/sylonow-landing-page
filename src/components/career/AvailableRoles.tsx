import React from 'react';
import { motion } from 'framer-motion';

const AvailableRoles = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          🌟 Are You Ready to Build Something Extraordinary? 🌟
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Sylonow isn't just another company—it's a revolution in the world of surprises, celebrations, and creativity! We're looking for <span className="font-semibold text-pink-600">25 highly passionate individuals</span> who are ready to learn, implement, execute, and turn dreams into reality.
        </p>
      </motion.div>

      {/* Qualification Section */}
      <motion.div {...fadeInUp} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          📚 No Qualification, No Degree, No Experience Required!
        </h3>
        <p className="text-gray-700">
          This opportunity is not about your resume—it's about your passion, creativity, and drive to do something extraordinary.
        </p>
      </motion.div>

      {/* The Twist Section */}
      <motion.div {...fadeInUp} className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          💡 But here's the twist!
        </h3>
        <p className="text-gray-700 mb-4">
          We aren't offering money in the beginning. Instead, we're offering something far more valuable: <span className="font-semibold text-pink-600">A CHANCE TO PROVE YOURSELF</span>.
        </p>
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-gray-900">This isn't a job.</p>
          <p className="text-lg font-medium text-gray-900">This isn't an internship.</p>
          <p className="text-lg font-medium text-pink-600">This is your chance to be a part of something revolutionary.</p>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div {...fadeInUp} className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">What's in it for You?</h3>
        <div className="space-y-4">
          {[
            'Work with a real-world startup from the ground up.',
            'Get industry-level experience in your field.',
            'Earn a certificate that proves your contribution.',
            'After 6 months, start earning based on your performance.',
            'If you support us in our initial stage while studying, you get a direct entry to Sylonow after completing your education with salary.',
            'Big rewards after one year from the company side—this could be cash, gifts, or even something bigger!'
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-pink-500 flex-shrink-0">✅</span>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Not For Everyone Section */}
      <motion.div {...fadeInUp} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6">This is NOT for everyone.</h3>
        <div className="space-y-4">
          <p>This is for the dreamers, the doers, the risk-takers, and the creators.</p>
          <p className="text-red-300">If you want an easy Pay-check, this is NOT for you.</p>
          <p className="text-green-300">If you want to build something meaningful, we welcome you.</p>
        </div>
      </motion.div>

      {/* Available Roles Section */}
      <motion.div {...fadeInUp} className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Available Roles in Sylonow's Talent Accelerator Program
        </h3>
        <p className="text-gray-700 mb-6">We are offering opportunities in multiple roles! Choose where your passion fits best:</p>
        
        <div className="space-y-8">
          {/* Main Role */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Main role (Limited to 1 Role)</h4>
            <p className="text-gray-700">Company All - Rounder</p>
          </div>

          {/* Technical Team */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Technical team</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>• UI & UX designer</li>
              <li>• Software engineer</li>
              <li>• Backend developer</li>
            </ul>
          </div>

          {/* Management Team */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Management Team</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>• Vendor Management</li>
              <li>• Delivery Managers</li>
              <li>• Sales & Marketing Managers</li>
              <li>• Content Team Manager</li>
              <li>• Graphic Designing Head</li>
              <li>• Social Media Head</li>
            </ul>
          </div>

          {/* R&D */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Research & Development</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>• Application Research</li>
              <li>• New Features & Review Existing Status</li>
              <li>• E-commerce Specialist</li>
            </ul>
          </div>

          {/* Creative & Digital */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Creative & Digital</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>• Graphic Designing – Posters, Video Editing, Logo Design, Photo Editing, Motion Graphics, Templates</li>
              <li>• Social Media – Uploads & Analytics, Captions & Engagement</li>
              <li>• Content Creation – Story Writing, Story Narration, Videography, Influencing, Photography</li>
            </ul>
          </div>

          {/* Marketing & Advertisement */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Marketing & Advertisement</h4>
            <p className="text-gray-700">Musicians, Artists, Models, Actors and all comes under Advertisement</p>
          </div>

          {/* Other Roles */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🔹 Other Roles</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>• Customer Assistance & Problem Solving</li>
              <li>• Kannada Content Writer and Typist</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AvailableRoles;
