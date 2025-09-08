"use client"

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// import Navigation from '@/components/Navigation';




function ResultsContent() {
  const searchParams = useSearchParams();
  const navigate = useRouter();
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(true);
  const [isGeneratingLanding, setIsGeneratingLanding] = useState(true);


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


  useEffect(() => {
    // Try to get from URL first, else fallback to localStorage
    const prompt = searchParams.get('prompt') || localStorage.getItem('userPrompt') || '';
    // const name = searchParams.get('name') || localStorage.getItem('userName') || '';
    const company = searchParams.get('company') || localStorage.getItem('userCompany') || '';
    // const email = searchParams.get('email') || localStorage.getItem('userEmail') || '';
    setUserPrompt(prompt);
    setUserCompany(company);
    // setUserEmail(email);
  }, [searchParams]);


  useEffect(() => {
    console.log("userCompany", userCompany);
  }, [userCompany])



  setTimeout(() => {
    setIsGeneratingVideo(false);
    setIsGeneratingLanding(false);
  }, 2000);


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


    <div className="min-h-screen bg-dark-primary text-white">
      {/* Header */}

      {/* <Navigation /> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Your AI-Generated Content</h1>
          <p className="text-gray-400">Based on your request: &apos;{userPrompt}&apos;</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Section - Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 rounded-2xl p-4 border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Sample Art Video</h2>
              {isGeneratingVideo && (
                <div className="flex items-center space-x-2 text-blue-400">
                  <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                  <span className="text-sm">Generating...</span>
                </div>
              )}
            </div>

            <div className="md:min-h-96 min-h-84 bg-gray-800/50 rounded-xl flex items-center justify-center">
              {isGeneratingVideo ? (
                <div className="text-center">
                  <div className="animate-pulse">
                    <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-4"></div>
                    <p className="text-gray-400">Creating your video content...</p>
                  </div>
                </div>
              ) : (


                <>
                  <div className="w-full h-full sm:p-4">
                    <div className="bg-black relative rounded-lg aspect-video flex items-center justify-center mb-4">

                      <video width="640" height="360" controls>
                        <source src="/videotemplate.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>



                      <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
                        {userCompany}
                      </div>

                    </div>



                  <div className='flex my-6 items-center justify-center'>
                    <Link className='bg-blue-500 hover:bg-blue-600 transition ease-in px-8 font-semibold py-3 rounded-lg' href="https://cal.com/weoneai/30min">Make it Better</Link>
                  </div>
                  </div>
                </>

              )}
            </div>




          </motion.div>

          {/* Right Section - Landing Page */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/50 rounded-2xl p-4 border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Sample Landing Page</h2>
              {isGeneratingLanding && (
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="animate-spin w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"></div>
                  <span className="text-sm">Generating...</span>
                </div>
              )}
            </div>

            <div className="bg-gray-800/50 rounded-xl overflow-hidden">
              {isGeneratingLanding ? (
                <div className="flex md:min-h-96 min-h-84 items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse">
                      <div className="w-32 h-40 bg-gray-700 rounded-lg mx-auto mb-4"></div>
                      <p className="text-gray-400">Designing your landing page...</p>
                    </div>
                  </div>
                </div>
              ) : (


                <>

                  <div className="w-full md:min-h-96 min-h-84 md:p-4">
                    {/* <div className="bg-white rounded-lg h-full overflow-auto"> */}
                      <div className="text-black text-sm">
                        <div className="bg-gray-100 p-2 rounded">
                          {/* <h3 className="font-bold text-lg mb-2">Landing Page Preview</h3> */}

                          {/* Iframe Preview Box */}
                          <div className="rounded relative overflow-hidden border border-gray-300 h-[500px]">
                            <iframe
                              src="https://landing-page-all.replit.app/"   // 👈 replace with your landing page route or full URL
                              title="Landing Page Preview"
                              className="w-full h-full"
                              frameBorder="0"
                            ></iframe>


                            <div className="absolute top-2 left-2 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md">
                              {userCompany}
                            </div>

                          </div>

                        </div>
                      </div>
                    {/* </div> */}
                  </div>

                  <div className='flex my-6 items-center justify-center'>
                    <Link className='bg-blue-500 hover:bg-blue-600 transition ease-in px-8 font-semibold py-3 rounded-lg' href="https://cal.com/weoneai/30min">Make it Better</Link>
                  </div>

                </>


              )}
            </div>
          </motion.div>
        </div>


        <section className="relative text-center py-12 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-3xl shadow-lg mt-6 md:m-20">
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
        </section>





      </div>
    </div>

  );




}



export default function Results() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  )
}

