"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


export default function Footer() {
  const [showPromptGuide, setShowPromptGuide] = useState(false);
  const [open, setOpen] = useState(false)

  return (
    <footer className="z-10 border-t border-gray-800 bg-dark-secondary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button onClick={() => setOpen(true)} className="flex cursor-pointer items-center space-x-2 px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green/90 transition-colors font-medium">
            <span>▶️</span>
            <span>Watch demo</span>
          </button>
          <button
            onClick={() => setShowPromptGuide(true)}
            className="flex cursor-pointer items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            <span>💡</span>
            <span>How to prompt WeoneAI</span>
          </button>
        </div>




        {/* Modal */}
        {showPromptGuide && (
          <div className="flex items-center justify-center">
            {/* Background Overlay */}
            <div
              className="bg-black/70 backdrop-blur-sm"
              onClick={() => setShowPromptGuide(false)}
            />

            {/* Modal Box */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full mx-4 mb-5 p-8 animate-fadeIn">

              {/* Header */}
              <div id="guidelines" className="flex justify-between items-center mb-6 border-b pb-3">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  How to Prompt WeoneAI
                </h2>
                <button
                  onClick={() => setShowPromptGuide(false)}
                  className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                >
                  ✖
                </button>
              </div>

              {/* Guidelines */}
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <p>
                  “Think of your prompt as telling us what business you run and what you want most right now.
                  The clearer you are, the better your AI + human-crafted system will be.”
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-green">✔</span>
                    <span>Keep it short — 1–2 sentences are enough.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-green">✔</span>
                    <span>Be specific — say your industry and goal.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-green">✔</span>
                    <span>Focus on outcome — leads, customers, bookings, sales.</span>
                  </li>
                </ul>
              </div>

              {/* Sample Prompts */}
              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-semibold border-b pb-2 text-gray-800 dark:text-white">
                  Sample Prompts
                </h3>

                <div>
                  <p className="font-semibold">🏡 Real Estate</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“I’m a real estate broker — I want more buyer leads and faster closings.”</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“Help me turn open house sign-ups into booked appointments.”</p>
                </div>

                <div>
                  <p className="font-semibold">💻 IT / SaaS</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“I run an IT services company — I want to automate follow-ups and get more demos booked.”</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“Show me how to qualify SaaS leads automatically and send only sales-ready deals to my team.”</p>
                </div>

                <div>
                  <p className="font-semibold">🌍 General Business</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“I want to grow my business with more leads and less manual work.”</p>
                  <p className="italic text-gray-600 dark:text-gray-400">“Help me automate my sales funnel so I can focus on closing deals.”</p>
                </div>
              </div>

              {/* Closing Line */}
              <div className="mt-8 border-t pt-4 text-center">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  “Start with your business type + your biggest goal.
                  We’ll handle the rest — from attracting leads to closing customers.”
                </p>
              </div>
            </div>

          </div>
        )}




        {/* Footer Links */}
        <div className="flex justify-center space-x-8 text-sm">
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
        </div>

        <div className="mt-10 text-gray-400 flex justify-center">
          <div>© {new Date().getFullYear()} weoneAI. All rights reserved.</div>
        </div>
      </div>


      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-full p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden">
          <DialogHeader className="p-8 pb-0">
            <DialogTitle className="text-3xl font-bold font-no text-card-foreground text-center">
              See Our AI + Human Automation in Action
            </DialogTitle>
            <p className="text-muted-foreground mt-3 text-center text-lg">
              Watch how IT business owners are transforming their operations
            </p>
          </DialogHeader>
          <div className="p-8 pt-4">
            <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl">
              <video controls autoPlay className="w-full h-full object-cover" poster="/demo-thumbnail.jpg">
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </footer>
  );
}





