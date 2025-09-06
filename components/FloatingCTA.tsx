"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      data-testid="floating-cta"
    >
      <Link href="testimonial" className="group flex items-center space-x-3 px-6 py-4 bg-accent-yellow text-dark-primary rounded-full shadow-2xl hover:shadow-accent-yellow/25 transition-all duration-300 font-medium hover:scale-105">
        <span>⚡</span>
        <span className="hidden md:inline">Not convinced?</span>
        <span className="text-sm opacity-80">See why businesses choose WeoneAI</span>
      </Link>
    </motion.div>
  );
}