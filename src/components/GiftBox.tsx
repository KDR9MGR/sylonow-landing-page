
import React, { useState, useEffect } from 'react';
import { Gift, Stars } from 'lucide-react';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gift-box relative w-64 h-64 mx-auto my-8 animate-gift-box-appear cursor-pointer" onClick={() => setIsOpen(true)}>
      {/* Gift lid */}
      <div 
        className={`gift-box-lid absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-sylonow-purple to-purple-400 rounded-t-lg z-20 ${isOpen ? 'animate-lid-open' : ''}`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-4 bg-gradient-to-r from-sylonow-gold to-yellow-300 rounded-full"></div>
      </div>
      
      {/* Box body */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-r from-sylonow-purple to-purple-400 rounded-b-lg z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-r from-sylonow-gold to-yellow-300"></div>
      </div>
      
      {/* Gift content */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 z-0 ${isOpen ? 'opacity-100 translate-y-[-30px] delay-500' : 'opacity-0'}`}>
        <div className="text-2xl font-bold text-white mb-2">
          <span className="block font-display">Early Access</span>
          <span className="text-sylonow-gold">20% OFF</span>
        </div>
        <div className="text-sm text-white">Limited time offer</div>
      </div>

      {/* Sparkles */}
      {isOpen && (
        <>
          <Stars className="absolute -top-4 -right-4 text-sylonow-gold animate-sparkle" size={20} />
          <Stars className="absolute -top-6 left-4 text-sylonow-gold animate-sparkle delay-100" size={15} />
          <Stars className="absolute top-2 -left-4 text-sylonow-gold animate-sparkle delay-200" size={18} />
        </>
      )}
    </div>
  );
};

export default GiftBox;
