"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, MessageSquare, Clock, Zap, Shield, Users, ArrowRight } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/Navigation"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-950">

      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>Ready to Transform Your Business?</span>
            </div>
            <h1 className="text-5xl font-bold text-balance mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-400 text-pretty max-w-2xl mx-auto">
              Get in touch with our AI experts and discover how our chatbot solutions can revolutionize your customer
              engagement and lead nurturing process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-800 bg-gray-900 hover:border-indigo-500/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quick Response</h3>
                    <p className="text-sm text-gray-400">Within 2 hours</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Get rapid responses to your inquiries with our dedicated support team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-800 bg-gray-900 hover:border-pink-500/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Shield className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Enterprise Security</h3>
                    <p className="text-sm text-gray-400">SOC 2 Compliant</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">Your data is protected with enterprise-grade security measures.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-800 bg-gray-900 hover:border-indigo-500/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <Users className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Expert Team</h3>
                    <p className="text-sm text-gray-400">AI Specialists</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">Work directly with our team of AI and automation experts.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card className="border-2 border-gray-800 bg-gray-900">
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl text-white">Start Your AI Journey</CardTitle>
                  <CardDescription className="text-base text-gray-400">
                    Tell us about your project and we&apos;ll create a custom solution that drives results for your business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Business Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-white">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiry-type" className="text-sm font-medium text-white">
                        What can we help you with? *
                      </label>
                      <Select onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Schedule a Demo</SelectItem>
                          <SelectItem value="pricing">Get Pricing Information</SelectItem>
                          <SelectItem value="integration">Discuss Integration</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your business goals, current challenges, and how you envision AI helping your team..."
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Phone className="h-5 w-5 text-indigo-400" />
                    <span>Direct Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <Mail className="h-5 w-5 text-indigo-400" />
                      <div>
                        <p className="font-medium text-sm text-white">Email</p>
                        <p className="text-sm text-gray-400">hello@aichatbotpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <Phone className="h-5 w-5 text-pink-400" />
                      <div>
                        <p className="font-medium text-sm text-white">Phone</p>
                        <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-indigo-400" />
                      <div>
                        <p className="font-medium text-sm text-white">Office</p>
                        <p className="text-sm text-gray-400">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Clock className="h-5 w-5 text-pink-400" />
                    <span>Response Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-sm font-medium text-white">Sales Inquiries</span>
                    <span className="text-sm text-indigo-400 font-medium">2 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-sm font-medium text-white">Technical Support</span>
                    <span className="text-sm text-pink-400 font-medium">4 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-sm font-medium text-white">General Questions</span>
                    <span className="text-sm text-indigo-400 font-medium">24 hours</span>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>

      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 text-xs text-slate-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} weoneAI. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-200">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-200">Terms</Link>
            <Link href="/contact" className="hover:text-slate-200">Contact</Link>
          </div>
        </div>
      </footer>


    </div>
  )
}
