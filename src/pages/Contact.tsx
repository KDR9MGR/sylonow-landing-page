import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Gift, PartyPopper } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const giftBoxAnimation = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store the data in Supabase
      const { error } = await supabase
        .from('contact_form_submissions')
        .insert([{
          name: values.name,
          email: values.email,
          phone: values.phone || null,
          message: values.message
        }]);

      if (error) {
        console.error("Error storing contact form data:", error);
        throw new Error(error.message);
      }
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Show success animation
      setSubmitted(true);
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'info@sylonow.com' },
    
    { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: 'Bengaluru, Karnataka, India' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat tracking-tight">
              Get In <span className="text-sylonow-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-poppins">
              Have questions about Sylonow? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/10 h-full">
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="w-10 h-10 rounded-full bg-sylonow-purple/20 flex items-center justify-center text-sylonow-gold">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              variants={giftBoxAnimation}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {submitted ? (
                <motion.div 
                  className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/10 text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-sylonow-purple to-sylonow-gold flex items-center justify-center mb-6"
                  >
                    <PartyPopper className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold mb-3 font-montserrat">Message Sent!</h2>
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="bg-sylonow-purple/20 text-sylonow-gold px-6 py-3 rounded-lg font-medium hover:bg-sylonow-purple/30 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/10">
                  <h2 className="text-2xl font-bold mb-6 font-montserrat">Send Us A Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="bg-white/5 border-white/10 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-white/5 border-white/10 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  className="bg-white/5 border-white/10 text-white"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Your message"
                                  className="bg-white/5 border-white/10 text-white min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 transition-all py-6 font-medium"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Send Message <Send className="h-4 w-4 ml-1" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </div>
              )}
              
              {/* Decorative gift box elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-sylonow-gold/30 rounded-lg rotate-12 hidden md:block"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-sylonow-purple/30 rounded-lg -rotate-12 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
