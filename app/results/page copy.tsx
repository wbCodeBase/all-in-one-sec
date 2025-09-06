"use client"


// import { useSearchParams } from "next/navigation"
// import Link from "next/link";
// import { Suspense } from "react";
// import { motion } from 'framer-motion';



import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// import Navigation from '@/components/Navigation';


function EkFunction() {

  // const searchParams = useSearchParams();
  // const business = searchParams.get("business");


  const searchParams = useSearchParams();
  const navigate = useRouter();
  // const [isGeneratingVideo, setIsGeneratingVideo] = useState(true);
  // const [isGeneratingLanding, setIsGeneratingLanding] = useState(true);


  // Onboarding states
  const [businessType, setBusinessType] = useState("");
  const [goal, setGoal] = useState("");
  const [showOnboarding, setShowOnboarding] = useState(true);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("businessType") || "";
      const goalSto = localStorage.getItem("goal") || "";
      setBusinessType(stored);
      setGoal(goalSto);
    }
  }, []);



  const [userPrompt, setUserPrompt] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userName, setUserName] = useState('');


  useEffect(() => {
    // Try to get from URL first, else fallback to localStorage
    const prompt = searchParams.get('prompt') || localStorage.getItem('userPrompt') || '';
    const name = searchParams.get('name') || localStorage.getItem('userName') || '';
    const company = searchParams.get('company') || localStorage.getItem('userCompany') || '';
    // const email = searchParams.get('email') || localStorage.getItem('userEmail') || '';
    setUserPrompt(prompt);
    setUserCompany(company);
    setUserName(name);
    // setUserEmail(email);
  }, [searchParams]);


  useEffect(() => {
    console.log("userCompany", userCompany);
  }, [userCompany])



  // setTimeout(() => {
  //   setIsGeneratingVideo(false);
  //   setIsGeneratingLanding(false);
  // }, 2000);


  // Handle onboarding save
  const handleContinue = () => {

    if (businessType === "Other" && goal) {
      navigate.push("/waiting-list")
    }

    setShowOnboarding(false);
  };


  // 🔹 Onboarding UI
  if (showOnboarding) {
    return (

      <div className="min-h-screen bg-dark-primary flex items-center justify-center p-6">
        <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Tell us about your business</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">


            {/* Business Type */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">What is your business?</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="IT">IT</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Other">Other</option>
              </select>

              {/* Show input only if "Other" is selected */}
              {businessType === "Other" && (
                <input
                  type="text"
                  placeholder="Ex- Hotel, School, Healthcare, Retail & Finance..."
                  className="mt-3 w-full rounded-xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
                  onChange={(e) => localStorage.setItem("businessType", e.target.value)}
                />
              )}
            </div>








            {/* Goal */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">What is your goal?</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-xl p-3 bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Sales Growth">Sales Growth</option>
                <option value="Business Automation">Business Automation</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={!businessType || !goal}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }


  return (

    <>

      <Suspense
        fallback={<div className="flex items-center justify-center min-h-screen bg-[#F9F9F7]">Loading plan...</div>}
      >
        <div className="min-h-scree bg-black">

          <nav className="z-20 flex justify-between items-center p-6 lg:px-12" data-testid="navigation">
            <div className="flex items-center space-x-2" data-testid="brand-logo">
              <Link href="/" className="text-3xl font-semibold text-white">Weone<span className="text-blue-400">AI</span></Link>
            </div>

            <div className="flex items-center space-x-4" data-testid="auth-buttons">
              {/* <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-testid="button-login">Log in</button> */}
              <Link href="https://cal.com/weoneai/30min" className="px-4 py-2 bg-white text-dark-primary rounded-full cursor-pointer hover:bg-gray-100 transition-colors font-medium" data-testid="button-signup">Book Demo</Link>
            </div>
          </nav>

          {/* Header Section */}
          {/* <header className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/30 to-blue-900/20" />
            <div className="relative container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-balance py-6 mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Transform Your Digital Experience
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto text-pretty leading-relaxed">
                Discover powerful setups for your favorite apps with our comprehensive installation guides and video
                tutorials.
              </p>
            </div>
          </header> */}



          <p className="text-center text-xl md:text-2xl leadingrelaxed text-gray-200 max-w-5xl mx-auto mt-10 px-4">
            <span className="inline-block animate-shake mr-2">👋</span>
            Hello <span className="text-white font-bold">{userName}</span>,
            <br />
            <span className="text-gray-300">
              To generate more sales on autopilot, you need strong creatives, high-impact videos and a focused landing page. We’ll promote them on the right channels so your ideal customers see you, click and convert.
            </span>
          </p>




          {/* Section 1: Mobile Phone Mockups with Videos */}
          <section className="py-20 px-4">
            <div className="container mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
              >
                <h1 className="md:text-4xl text-3xl text-white font-bold mb-2">Your AI-Generated Content</h1>
                <p className="text-gray-400">Based on your request: &apos;{userPrompt}&apos;</p>
              </motion.div>

              <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 md: gap-y-8 md:gap-y-0 max-w-6xl mx-auto">

                {/* First Mobile Setup */}
                <div className="flex flex-col col-span-1 items-center group">



                  <div className='text-white mb-8 text-lg font-semibold'>Your First Draft Ad Creative</div>


                  <div className="relative w-80 h-[600px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                    {/* iPhone Outer Frame */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                      {/* Dynamic Island */}
                      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-10 border border-gray-600" /> */}


                      {/* Screen Content */}
                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                          <source
                            src="/videotemplate.mp4"
                            type="video/mp4"
                          />
                        </video>

                        <div className="absolute top-2 left-3 text-gray-400 px-4 py-2 font-semibold italic text-lg">
                          {userCompany}
                        </div>

                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  {/* <Link href="https://cal.com/weoneai/30min" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Make it Better
                  </Link> */}
                </div>

                {/* Second Mobile Setup */}
                <div className="flex flex-col col-span-2 items-center group">

                  {/* <div className='text-white mb-8 text-lg font-semibold'>Your Sample Landing Page</div> */}

                  <div className="w-full max-w-7xl mx-auto">
                    <div className="relative mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-3xl p-6 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500">
                      {/* Laptop Screen */}
                      <div className="relative bg-black rounded-2xl overflow-hidden shadow-inner border border-gray-600">
                        <div className="aspect-video">


                          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source
                              src="videotemplate.mp4"
                              type="video/mp4"
                            />
                          </video>

                          {/* <div className="absolute top-3 left-3  text-white/60 px-4 py-2 text-lg"> */}

                          <div className="absolute top-1 left-1 text-gray-500 px-4 py-2 font-semibold italic text-lg">
                            {userCompany}
                          </div>

                        </div>

                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-500/10 pointer-events-none rounded-2xl" />
                      </div>

                      {/* Laptop Camera */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full border border-gray-500" />
                    </div>

                    {/* Laptop Base */}
                    <div className="relative h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl mx-auto max-w-7xl border-x border-b border-gray-600">
                      {/* Trackpad */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-600 rounded-xl border border-gray-500" />
                    </div>

                    {/* Laptop Stand Shadow */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-96 h-6 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-sm" />
                  </div>



                </div>
              </div>
            </div>

                {/* <Link href="https://cal.com/weoneai/30min" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                  Make it Better
                </Link> */}

          </section>


          <section className="py-20 px-4">
            <div className="container mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
              >
                <h1 className="md:text-4xl text-3xl text-white font-bold mb-2">Your AI-Generated Content</h1>
                <p className="text-gray-400">Based on your request: &apos;{userPrompt}&apos;</p>
              </motion.div>

              <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 md:gap-12 max-w-6xl mx-auto">

                {/* First Mobile Setup */}
                <div className="flex flex-col col-span-1 items-center group">


                  <div className='text-white mb-8 text-lg font-semibold'>Your Sample Landing Page</div>


                  <div className="relative w-80 h-[600px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                    {/* iPhone Outer Frame */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                      {/* Dynamic Island */}
                      {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-10 border border-gray-600" /> */}


                      {/* Screen Content */}
                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden">

                        <iframe
                          src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                          title="Landing Page Preview"
                          className="w-full h-full"
                          frameBorder="0"
                        ></iframe>

                        <div className="absolute top-2 left-4 text-gray-400 px-4 py-2 font-semibold italic text-lg">
                          {userCompany}
                        </div>

                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                    </div>
                  </div>

                  <Link href="https://cal.com/weoneai/30min" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Make it Better
                  </Link>
                </div>

                {/* Second Mobile Setup */}
                <div className="flex flex-col col-span-2 items-center group">

                  {/* <div className='text-white mb-8 text-lg font-semibold'>Your Sample Landing Page</div> */}

                  <div className="w-full max-w-7xl mx-auto">
                    <div className="relative mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-3xl p-6 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500">
                      {/* Laptop Screen */}
                      <div className="relative bg-black rounded-2xl overflow-hidden shadow-inner border border-gray-600">
                        <div className="aspect-video">


                          <iframe
                            src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                            title="Landing Page Preview"
                            className="w-full h-full"
                            frameBorder="0"
                          ></iframe>

                          {/* <div className="absolute top-3 left-3  text-white/60 px-4 py-2 text-lg"> */}

                          <div className="absolute top-2 left-4 text-gray-500 px-4 py-2 font-semibold italic text-lg">
                            {userCompany}
                          </div>

                        </div>

                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-500/10 pointer-events-none rounded-2xl" />
                      </div>

                      {/* Laptop Camera */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full border border-gray-500" />
                    </div>

                    {/* Laptop Base */}
                    <div className="relative h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl mx-auto max-w-7xl border-x border-b border-gray-600">
                      {/* Trackpad */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-600 rounded-xl border border-gray-500" />
                    </div>

                    {/* Laptop Stand Shadow */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-96 h-6 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-sm" />
                  </div>


                  <Link href="https://cal.com/weoneai/30min" className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold cursor-pointer transform hover:scale-105">
                    Make it Better
                  </Link>
                </div>

              </div>
            </div>
          </section>

          {/* Section 2: Desktop with YouTube Video */}
          {/* <section className="py-14 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-10 text-white bg-clip-text">
                Your First Draft Ad Creative in Desktop
              </h2>


              <div className="relative w-84 h-[600px] mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 border-2 border-gray-800">
                <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] relative overflow-hidden border border-gray-700">
                  
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden">

                    <div className="absolute top-2 left-3 text-gray-500 px-4 py-2 font-semibold italic text-lg">
                      {userCompany}
                    </div>

                    {businessType === "IT" ?
                      <iframe
                        src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                        title="Landing Page Preview"
                        className="w-full h-full"
                        frameBorder="0"
                      ></iframe>

                      :
                      businessType === "Real Estate" ?

                        <iframe
                          src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                          title="Landing Page Preview"
                          className="w-full h-full"
                          frameBorder="0"
                        ></iframe>

                        : null}

                  </div>

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full" />
                </div>
              </div>




              <div className="mt-16 space-y-8">

                <Link href="https://cal.com/weoneai/30min" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 text-xl font-semibold cursor-pointer transform hover:scale-105">
                  Get Started Now
                </Link>
              </div>
            </div>
          </section> */}





          {/* Section  */}
          {/* <section className="py-14 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-10 text-white bg-clip-text">
                Your Sample Landing Page in Desktop
              </h2>

              <div className="w-full max-w-5xl mx-auto">
                <div className="relative mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-3xl p-6 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500">
                  
                  <div className="relative bg-black rounded-2xl overflow-hidden shadow-inner border border-gray-600">
                    <div className="aspect-video">


                      <iframe
                        src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                        title="Landing Page Preview"
                        className="w-full h-full"
                        frameBorder="0"
                      ></iframe>


                    </div>


                    <div className="absolute top-4 left-4 text-gray-500 px-4 py-2 font-semibold italic text-lg">
                      {userCompany}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-500/10 pointer-events-none rounded-2xl" />
                  </div>

                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full border border-gray-500" />
                </div>

                <div className="relative h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl mx-auto max-w-7xl border-x border-b border-gray-600">
                  
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-600 rounded-xl border border-gray-500" />
                </div>

                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-96 h-6 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-sm" />
              </div>


              <div className="mt-16 space-y-8">
                <Link href="https://cal.com/weoneai/30min" className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 text-xl font-semibold cursor-pointer transform hover:scale-105">
                  Get Started Now
                </Link>
              </div>
            </div>
          </section> */}




          <section className='flex justify-center items-center p-5'>

            <div className="text-center max-w-5xl mx-auto md:py-12 py-8 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-3xl shadow-lg m-6 md:m-20">
              {/* Headline */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
                  This is not perfect yet.
                  <br />
                  We’ll make it perfect with our{" "}
                  <span className="text-blue-500">Human Touch</span> and{" "}
                  <span className="text-blue-500">Creativity</span>.
                </h2>

                <p className="mt-6 text-lg md:text-xl text-gray-600">
                  To see the final version, book a call with us and experience the difference.
                </p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center mt-10"
              >
                <Link href="https://cal.com/weoneai/30min" className="bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  Automate your Business with AI Now
                </Link>
              </motion.div>

              {/* Decorative subtle background effect */}
              <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)]"></div>
            </div>

          </section>


        </div>


      </Suspense>

    </>

  )
}




export default function Results() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <EkFunction />
    </Suspense>
  )
}

