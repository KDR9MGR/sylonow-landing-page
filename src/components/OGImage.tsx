import React from 'react';

const OGImage = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-[#121212] to-[#2a1a5e] flex items-center justify-center p-16">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Sylonow Logo" 
          className="h-24 object-contain"
        />
        
        {/* Title */}
        <h1 className="text-6xl font-bold text-center text-white">
          Make Every Moment
          <span className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold bg-clip-text text-transparent block mt-4">
            Special
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-2xl text-gray-300 text-center max-w-3xl">
          Transform celebrations with personalized surprise services
        </p>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sylonow-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sylonow-gold/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default OGImage; 