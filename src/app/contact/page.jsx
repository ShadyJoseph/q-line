'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = dynamic(() => import('./component'), {
  ssr: false, // Disable server-side rendering
  loading: () => (
    <motion.div
      className="min-h-screen bg-background flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <Loader2 className="h-12 w-12 text-primary animate-spin" />
    </motion.div>
  ),
});

export default function Contact() {
  return <ContactPage />;
}