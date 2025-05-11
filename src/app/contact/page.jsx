'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, Copy, Check, Mail, Phone, X } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const dismissMessage = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col animate-gradient-bg">
      {/* Header Section */}
      <header className="py-12 sm:py-16 text-center bg-card shadow-sm">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4 px-4">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
          We're here to help. Reach out via form, email, or phone.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Contact Info Section */}
          <div className="p-6 sm:p-8 bg-card rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Our team is ready to assist you. Expect a response within 24 hours.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <button
                    onClick={() => copyToClipboard('support@example.com', 'email')}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative group"
                    title="Copy email"
                  >
                    support@example.com
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    )}
                    {copiedEmail && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full animate-pulse">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="text-sm text-muted-foreground block">Phone</span>
                  <button
                    onClick={() => copyToClipboard('+1 (555) 123-4567', 'phone')}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative group"
                    title="Copy phone number"
                  >
                    +1 (555) 123-4567
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    )}
                    {copiedPhone && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full animate-pulse">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8 bg-card rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
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
              </div>
              <div className="relative">
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
              </div>
              <div className="relative">
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
              </div>
              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-lg transition-all duration-300 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm p-4 bg-secondary rounded-lg animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p className="text-primary flex-1">Message sent successfully!</p>
                  <button onClick={dismissMessage} className="text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm p-4 bg-destructive/20 rounded-lg animate-fade-in">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <p className="text-destructive flex-1">{errorMessage}</p>
                  <button onClick={dismissMessage} className="text-muted-foreground hover:text-destructive">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        {status === 'sending' && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="py-6 text-center bg-card shadow-sm">
        <p className="text-sm text-muted-foreground">
          We aim to respond to all inquiries within 24 hours. Thank you for reaching out!
        </p>
      </footer>
    </div>
  );
}