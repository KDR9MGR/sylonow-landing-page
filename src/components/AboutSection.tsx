
import React from 'react';
import { Calendar, MapPin, Users, Briefcase, Globe } from 'lucide-react';

const AboutSection = () => {
  const companyDetails = [
    { icon: <Calendar className="h-5 w-5" />, label: 'Launch Date', value: 'May 2025' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Headquarters', value: 'Bengaluru, Karnataka, India' },
    { icon: <Users className="h-5 w-5" />, label: 'Founders', value: 'Sangamesh, Srikanth, Gagan' },
    { icon: <Briefcase className="h-5 w-5" />, label: 'Industry', value: 'Celebration & Surprise Services' },
    { icon: <Briefcase className="h-5 w-5" />, label: 'Business Model', value: 'B2C & B2B – Platform-based' },
    { icon: <Globe className="h-5 w-5" />, label: 'Service Areas', value: 'Launching in Bengaluru, expanding across India' },
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-10 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">About Sylonow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {companyDetails.map((detail, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-2 bg-purple-100 rounded-full text-sylonow-purple">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Sylonow is revolutionizing how we celebrate special moments by connecting customers with specialized celebration 
            and surprise service providers through our innovative platform.
          </p>
          <p className="text-gray-600">
            From personalized gifts to elaborate surprise events, we're building a one-stop solution 
            for all your celebration needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
