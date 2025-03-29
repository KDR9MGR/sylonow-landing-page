
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit this to a backend
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when we launch!",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Get Early Access</h2>
        <p className="text-gray-600 text-center mb-6">
          Join our waitlist to get exclusive early access to the Sylonow platform when we launch.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Name"
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              required
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 transition-all"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
