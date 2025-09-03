
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, Scale, Shield, AlertCircle } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950">


      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4 text-white">Terms of Service</h1>
            <p className="text-xl text-gray-400 text-pretty">
              Please read these terms carefully before using our AI chatbot services.
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
              <Card className="mb-8 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <FileText className="h-5 w-5 text-indigo-400" />
                    <span>Agreement Overview</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    By accessing and using AI ChatBot Pro services, you agree to be bound by these Terms of Service and
                    all applicable laws and regulations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="service-agreement" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-indigo-400" />
                      <span>Service Agreement</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>
                      AI ChatBot Pro provides artificial intelligence-powered chatbot solutions for marketing automation
                      and lead nurturing. Our services include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Custom AI chatbot development and deployment</li>
                      <li>Marketing automation tools and integrations</li>
                      <li>Lead nurturing and customer engagement solutions</li>
                      <li>Analytics and performance reporting</li>
                      <li>Technical support and maintenance</li>
                    </ul>
                    <p>
                      Services are provided on a subscription basis with different tiers available. All features and
                      limitations are clearly outlined in your chosen plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="user-responsibilities"
                  className="border border-gray-800 bg-gray-900 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-pink-400" />
                      <span>User Responsibilities</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information during registration</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use the service in compliance with all applicable laws</li>
                      <li>Not attempt to reverse engineer or compromise our systems</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not use the service for illegal, harmful, or unethical purposes</li>
                    </ul>
                    <p>
                      You are responsible for all activities that occur under your account and must notify us
                      immediately of any unauthorized use.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data-usage" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span>Data Usage and Ownership</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>
                      You retain ownership of all data you provide to our service. We use your data solely to provide
                      and improve our services as outlined in our Privacy Policy.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Customer conversation data is processed to improve AI responses</li>
                      <li>Analytics data helps optimize chatbot performance</li>
                      <li>We do not sell or share your data with third parties without consent</li>
                      <li>Data is encrypted and stored securely with industry-standard protocols</li>
                    </ul>
                    <p>
                      You may request data export or deletion at any time in accordance with applicable data protection
                      laws.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-terms" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-pink-400" />
                      <span>Payment Terms</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>
                      Subscription fees are billed in advance on a monthly or annual basis, depending on your chosen
                      plan.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All fees are non-refundable except as required by law</li>
                      <li>Automatic renewal unless cancelled before the next billing cycle</li>
                      <li>Price changes will be communicated 30 days in advance</li>
                      <li>Failed payments may result in service suspension</li>
                      <li>Enterprise plans may have custom payment terms</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="limitations" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-indigo-400" />
                      <span>Limitations and Disclaimers</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>While we strive to provide reliable service, AI technology has inherent limitations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>AI responses may not always be accurate or appropriate</li>
                      <li>Service availability is not guaranteed 100% of the time</li>
                      <li>We are not liable for business decisions based on AI recommendations</li>
                      <li>Maximum liability is limited to the amount paid for services</li>
                    </ul>
                    <p>
                      Users should review and approve AI-generated content before publication or use in critical
                      business processes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="termination" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-pink-400" />
                      <span>Termination</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>Either party may terminate this agreement with appropriate notice:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You may cancel your subscription at any time</li>
                      <li>We may terminate for breach of terms with 30 days notice</li>
                      <li>Immediate termination for illegal use or security violations</li>
                      <li>Data export available for 30 days after termination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* <Card className="mt-8 border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <p className="text-gray-400">
                      Have questions about our terms? We're here to help clarify any concerns.
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600"
                    >
                      <Link href="/contact">Contact Our Legal Team</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card> */}
            </div>

            {/* <div className="space-y-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#service-agreement" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Service Agreement
                  </a>
                  <a href="#user-responsibilities" className="block text-sm text-gray-400 hover:text-pink-400">
                    User Responsibilities
                  </a>
                  <a href="#data-usage" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Data Usage
                  </a>
                  <a href="#payment-terms" className="block text-sm text-gray-400 hover:text-pink-400">
                    Payment Terms
                  </a>
                  <a href="#limitations" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Limitations
                  </a>
                  <a href="#termination" className="block text-sm text-gray-400 hover:text-pink-400">
                    Termination
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Related Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/privacy" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Privacy Policy
                  </Link>
                  <Link href="/contact" className="block text-sm text-gray-400 hover:text-pink-400">
                    Contact Us
                  </Link>
                </CardContent>
              </Card>
            </div> */}
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
