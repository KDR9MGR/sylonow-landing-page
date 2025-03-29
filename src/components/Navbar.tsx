
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-10 flex items-center justify-between backdrop-blur-md bg-white/60 sticky top-0 z-50">
      <div className="font-display text-2xl font-bold gradient-text">
        Sylonow
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <a href="#home" className="hover:text-sylonow-purple transition-colors">Home</a>
        <a href="#about" className="hover:text-sylonow-purple transition-colors">About</a>
        <a href="#contact" className="hover:text-sylonow-purple transition-colors">Contact</a>
      </div>
      <div>
        <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all">
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
