"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import PromptInputBox from "./PromptInputBox";
import IntegrationIcons from "./IntegrationIcons";

import { Clover } from 'lucide-react';
import Link from "next/link";

export default function HeroSection() {
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const navigate = useRouter();
  const [currentPrompt, setCurrentPrompt] = useState('');

  // const dynamicWords = [
  //   "scalable backends",
  //   "event-driven systems",
  //   "automation tools",
  //   "SaaS applications"
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleGenerateClick = () => {
    setShowPopup(true);
  };

  const handleFeelingLucky = () => {
    setCurrentPrompt("Build me a lead generation funnel that captures prospects from social media, qualifies them through...")
    localStorage.setItem('userPrompt', currentPrompt);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store user data
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userCompany', formData.company);
    localStorage.setItem('userPrompt', currentPrompt);

    // Navigate to results page
    navigate.push(`/results?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&prompt=${encodeURIComponent(currentPrompt)}`);

    setShowPopup(false);
    setFormData({ name: '', email: '', company: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center" data-testid="hero-section">




      {/* Main Headline with Dynamic Text */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-testid="main-headline"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          All-in-one AI <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            With Human Touch
          </span>

          {/* <motion.span
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            key={currentWordIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="dynamic-word"
          > */}
          {/* {dynamicWords[currentWordIndex]} */}
          {/* </motion.span> */}
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.div
        className="mb-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        data-testid="subheadline"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Give us a simple prompt and instantly see your <span className="text-white font-medium"> AI-powered video and website prototype crafted fast by AI,</span> perfected with a human touch.

        </p>
      </motion.div>


      {/* Open Source Badge */}

      <div className="flex gap-4 mb-10 justify-center items-center flex-wrap">
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-amber-500 rounded-full text-sm border border-accent-green/20">
            Sales
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm border border-accent-green/20">
            Marketing
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-yellow-500 rounded-full text-sm border border-accent-green/20">
            Nurture
          </span>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-opensource"
        >
          <span className="inline-flex items-center px-4 py-2 bg-accent-green/10 text-pink-500 rounded-full text-sm border border-accent-green/20">
            Closing
          </span>
        </motion.div>
      </div>


      {/* AI Prompt Input Box */}
      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <PromptInputBox onPromptChange={setCurrentPrompt} />
      </motion.div>

      {/* Generate Now Button */}
      <motion.div
        className="mb-12 flex gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        data-testid="generate-button-section"
      >
        <button
          onClick={handleFeelingLucky}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-12 py-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:shadow-glow transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          data-testid="button-generate-now"
        >
          <Clover height={20} />

          I am feeling lucky

          {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg> */}
        </button>


        <button
          onClick={handleGenerateClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:shadow-glow transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          data-testid="button-generate-now"
        >
          Generate Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>

      </motion.div>

      {/* Integration Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <IntegrationIcons />
      </motion.div>

      {/* Popup Form */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="popup-overlay"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleClosePopup}
            />

            {/* Form */}
            <motion.div
              className="relative bg-gray-900 border border-gray-700 rounded-3xl p-8 w-full max-w-md shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              data-testid="popup-form"
            >
              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                data-testid="button-close-popup"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>

              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Started with WeoneAI</h3>
                <p className="text-gray-400">Enter your details to begin generating amazing applications</p>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your Company"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    data-testid="input-email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] mt-6"
                  data-testid="button-submit-form"
                >
                  Automate Business Now
                </button>
              {/* </form> */}

              <div className="flex flex-col items-center mt-4">
                <label className="flex items-center text-xs text-gray-500">
                  <input
                    type="checkbox"
                    defaultChecked
                    required
                    className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  I agree to the <Link href="/" className="underline mx-1"> terms of service </Link> and <Link href="/" className="underline mx-1"> privacy policy </Link>.
                </label>
              </div>

              </form>
              

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
