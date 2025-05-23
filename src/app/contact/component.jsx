'use client';

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, XCircle, Copy, Check, Mail, Phone, X } from "lucide-react";
import { motion } from "framer-motion";
import MotionDiv from "../MotionDiv";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Defer rendering until component mounts to avoid hydration mismatches
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const loaderVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (!formData.message.trim()) return 'Message is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error?.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const copyToClipboard = (text, type) => {
    // Ensure clipboard API is only called after mount
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }
  };

  const dismissMessage = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  // Show loading spinner until the component is fully loaded
  if (!isLoaded) {
    return (
      <motion.div
        className="min-h-screen bg-background flex items-center justify-center"
        variants={loaderVariants}
        initial="hidden"
        animate="visible"
      >
        <Loader2 className="h-12 w-12 text-primary animate-spin" />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col animate-gradient-bg">
      {/* Header Section */}
      <MotionDiv
        className="py-12 sm:py-16 text-center bg-card shadow-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-black mb-4 px-4"
        >
          Contact Us
        </motion.h1>
        <div className="hidden sm:block w-24 h-1 bg-black mx-auto mb-2"></div>
        <div className="block sm:hidden w-16 h-1 bg-black mx-auto mb-2"></div>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
        >
          We're here to help. Reach out via form, email, or phone.
        </motion.p>
      </MotionDiv>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <MotionDiv
          className="w-full max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info Section */}
          <MotionDiv
            className="p-6 sm:p-8 bg-card rounded-xl shadow-lg transition-all duration-300"
            variants={cardVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-foreground mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-8"
            >
              Our team is ready to assist you. Expect a response within 24 hours.
            </motion.p>
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="flex items-center gap-4 group"
                variants={itemVariants}
              >
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <motion.button
                    onClick={() => copyToClipboard('support@example.com', 'email')}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative group"
                    title="Copy email"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    support@example.com
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    )}
                    {copiedEmail && (
                      <motion.span
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Copied!
                      </motion.span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                variants={itemVariants}
              >
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="text-sm text-muted-foreground block">Phone</span>
                  <motion.button
                    onClick={() => copyToClipboard('+1 (555) 123-4567', 'phone')}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative group"
                    title="Copy phone number"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    +1 (555) 123-4567
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    )}
                    {copiedPhone && (
                      <motion.span
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Copied!
                      </motion.span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </MotionDiv>

          {/* Form Section */}
          <MotionDiv
            className="p-6 sm:p-8 bg-card rounded-xl shadow-lg"
            variants={cardVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div className="relative" variants={itemVariants}>
                <Input
                  name="name"
                  type="text"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="peer w-full h-16 text-lg pt-8 pb-3 px-5 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/50 transition-all duration-300 placeholder-transparent disabled:bg-muted disabled:cursor-not-allowed hover:border-primary/50"
                />
                <label className="absolute left-5 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all duration-300">
                  Your Name
                </label>
              </motion.div>
              <motion.div className="relative" variants={itemVariants}>
                <Input
                  name="email"
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="peer w-full h-16 text-lg pt-8 pb-3 px-5 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/50 transition-all duration-300 placeholder-transparent disabled:bg-muted disabled:cursor-not-allowed hover:border-primary/50"
                />
                <label className="absolute left-5 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all duration-300">
                  Your Email
                </label>
              </motion.div>
              <motion.div className="relative" variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  rows={10}
                  required
                  disabled={status === 'sending'}
                  className="peer w-full text-lg pt-8 pb-3 px-5 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/50 transition-all duration-300 placeholder-transparent disabled:bg-muted disabled:cursor-not-allowed hover:border-primary/50"
                />
                <label className="absolute left-5 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all duration-300">
                  Your Message
                </label>
              </motion.div>
              <MotionDiv
                variants={buttonVariants}
                className="flex justify-center"
              >
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.97 }}
                  className="group relative px-8 py-3 bg-neutral-900 border-2 border-white text-white rounded-full flex items-center gap-2 overflow-hidden transition-all duration-300 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">Send Message</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200 relative z-10 group-hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </>
                  )}
                </motion.button>
              </MotionDiv>
              {status === 'success' && (
                <motion.div
                  className="flex items-center gap-2 text-sm p-4 bg-secondary rounded-lg"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p className="text-primary flex-1">Message sent successfully!</p>
                  <motion.button
                    onClick={dismissMessage}
                    className="text-muted-foreground hover:text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="flex items-center gap-2 text-sm p-4 bg-destructive/20 rounded-lg"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <XCircle className="h-5 w-5 text-destructive" />
                  <p className="text-destructive flex-1">{errorMessage}</p>
                  <motion.button
                    onClick={dismissMessage}
                    className="text-muted-foreground hover:text-destructive"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              )}
            </form>
          </MotionDiv>
        </MotionDiv>
        {status === 'sending' && (
          <motion.div
            className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center"
            variants={loaderVariants}
            initial="hidden"
            animate="visible"
          >
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
          </motion.div>
        )}
      </main>

      {/* Footer Section */}
      <MotionDiv
        className="py-6 text-center bg-card shadow-sm"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground">
          We aim to respond to all inquiries within 24 hours. Thank you for reaching out!
        </p>
      </MotionDiv>
    </div>
  );
}