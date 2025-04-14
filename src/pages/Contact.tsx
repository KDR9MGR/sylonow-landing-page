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
import { Mail, Phone, MapPin, Send, Clock, PartyPopper } from 'lucide-react';
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
        .from('contact_form_submission')
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
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: 'Email', 
      value: 'info@sylonow.com',
      link: 'mailto:info@sylonow.com'
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: 'Phone', 
      value: '+91 9741338102',
      link: 'tel:+919741338102'
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: 'Address', 
      value: 'Bengaluru, Karnataka, India',
      link: 'https://maps.google.com/?q=Bengaluru,Karnataka,India'
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      label: 'Business Hours', 
      value: 'Mon - Fri, 9:00 AM - 6:00 PM IST'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat tracking-tight text-gray-900">
              Get In <span className="text-pink-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-poppins">
              Have questions about Sylonow? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:sticky md:top-24"
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-8 font-montserrat text-gray-900">Contact Information</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink-600 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-900 font-medium hover:text-pink-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Need Quick Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Check out our help center for instant answers to common questions.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border-gray-200"
                    onClick={() => window.location.href = '/help'}
                  >
                    Visit Help Center
                  </Button>
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
                  className="bg-white rounded-2xl p-12 shadow-sm text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mx-auto w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center mb-6"
                  >
                    <PartyPopper className="h-10 w-10 text-pink-600" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold mb-3 font-montserrat text-gray-900">Message Sent!</h2>
                  <p className="text-gray-600 mb-8">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-8 font-montserrat text-gray-900">Send Us A Message</h2>
                  
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
                                <FormLabel className="text-gray-700">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500" />
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
                                <FormLabel className="text-gray-700">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500" />
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
                              <FormLabel className="text-gray-700">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
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
                              <FormLabel className="text-gray-700">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Your message"
                                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 min-h-[150px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-pink-600 hover:bg-pink-700 text-white transition-all py-6 text-lg font-medium rounded-xl"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Send Message <Send className="h-5 w-5 ml-1" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
