
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock, Eye, Database, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950">

      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4 text-white">Privacy Policy</h1>
            <p className="text-xl text-gray-400 text-pretty">
              Your privacy is our priority. Learn how we collect, use, and protect your data.
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
              <Card className="mb-8 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Shield className="h-5 w-5 text-indigo-400" />
                    <span>Our Commitment to Privacy</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    At AI ChatBot Pro, we are committed to protecting your privacy and ensuring the security of your
                    personal information. This policy explains how we handle your data with transparency and care.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="data-collection" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-indigo-400" />
                      <span>Information We Collect</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>We collect information to provide and improve our AI chatbot services:</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-white">Account Information</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>Name, email address, and company details</li>
                          <li>Billing information and payment details</li>
                          <li>Account preferences and settings</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Usage Data</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>Chatbot interactions and conversation logs</li>
                          <li>Analytics data and performance metrics</li>
                          <li>Feature usage and system interactions</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Technical Information</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>IP addresses and device information</li>
                          <li>Browser type and operating system</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data-usage" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-pink-400" />
                      <span>How We Use Your Information</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>Your information is used exclusively to provide and enhance our services:</p>

                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Service Delivery:</strong> Operating and maintaining your AI chatbot
                      </li>
                      <li>
                        <strong>Personalization:</strong> Customizing responses and improving accuracy
                      </li>
                      <li>
                        <strong>Analytics:</strong> Providing insights and performance reports
                      </li>
                      <li>
                        <strong>Support:</strong> Responding to inquiries and technical issues
                      </li>
                      <li>
                        <strong>Security:</strong> Detecting and preventing fraudulent activities
                      </li>
                      <li>
                        <strong>Communication:</strong> Sending service updates and important notices
                      </li>
                      <li>
                        <strong>Improvement:</strong> Enhancing AI models and service features
                      </li>
                    </ul>

                    <p className="text-sm bg-gray-800 p-3 rounded-md">
                      <strong>Note:</strong> We never use your data for advertising purposes or sell it to third
                      parties.
                    </p>

                    <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-lg">
                      <p className="text-sm font-medium text-white mb-2">Communication Methods</p>
                      <p className="text-sm text-gray-400">
                        We will contact you on WhatsApp, Email, SMS, RCS and Phone calls to provide updates about our
                        services, respond to your inquiries, and deliver important notifications related to your
                        account.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data-sharing" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-indigo-400" />
                      <span>Data Sharing and Disclosure</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>We maintain strict controls over data sharing and only disclose information when necessary:</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-white">Service Providers</h4>
                        <p className="text-sm">
                          Trusted third-party vendors who help us operate our service (cloud hosting, payment
                          processing, analytics) under strict confidentiality agreements.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Legal Requirements</h4>
                        <p className="text-sm">
                          When required by law, court order, or to protect our rights and safety of our users.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Business Transfers</h4>
                        <p className="text-sm">
                          In the event of a merger, acquisition, or sale of assets, with advance notice to users.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm bg-gray-800 p-3 rounded-md">
                      <strong>We never:</strong> Sell personal data, share data for marketing purposes, or provide
                      access to unauthorized parties.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data-security" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-pink-400" />
                      <span>Data Security Measures</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>We implement comprehensive security measures to protect your data:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-white">Technical Safeguards</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>End-to-end encryption</li>
                          <li>Secure data centers</li>
                          <li>Regular security audits</li>
                          <li>Access controls and monitoring</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Operational Security</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Employee background checks</li>
                          <li>Security training programs</li>
                          <li>Incident response procedures</li>
                          <li>Regular backup and recovery</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md">
                      <h4 className="font-medium text-white mb-2">Compliance Standards</h4>
                      <p className="text-sm">
                        We comply with GDPR, CCPA, SOC 2 Type II, and other relevant data protection regulations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="user-rights" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-indigo-400" />
                      <span>Your Rights and Choices</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>You have full control over your personal information:</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-white">Access and Portability</h4>
                        <p className="text-sm">
                          Request a copy of all personal data we have about you in a machine-readable format.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Correction and Updates</h4>
                        <p className="text-sm">
                          Update or correct any inaccurate personal information in your account settings.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Deletion</h4>
                        <p className="text-sm">
                          Request deletion of your personal data, subject to legal and contractual obligations.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Opt-out</h4>
                        <p className="text-sm">
                          Unsubscribe from marketing communications and adjust privacy preferences.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm">
                      To exercise these rights, contact us at privacy@aichatbotpro.com or use the settings in your
                      account dashboard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cookies" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-pink-400" />
                      <span>Cookies and Tracking</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>We use cookies and similar technologies to enhance your experience:</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-white">Essential Cookies</h4>
                        <p className="text-sm">Required for basic functionality, security, and user authentication.</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Analytics Cookies</h4>
                        <p className="text-sm">
                          Help us understand how you use our service to improve performance and features.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-white">Preference Cookies</h4>
                        <p className="text-sm">Remember your settings and preferences for a personalized experience.</p>
                      </div>
                    </div>

                    <p className="text-sm">
                      You can manage cookie preferences in your browser settings or through our cookie consent banner.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="updates" className="border border-gray-800 bg-gray-900 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-white">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-indigo-400" />
                      <span>Policy Updates</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 space-y-4">
                    <p>We may update this privacy policy to reflect changes in our practices or legal requirements:</p>

                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Material changes will be communicated via email and in-app notifications</li>
                      <li>Minor updates will be posted on this page with an updated date</li>
                      <li>Continued use of our service constitutes acceptance of updates</li>
                      <li>You can always access the current version at aichatbotpro.com/privacy</li>
                    </ul>

                    <p className="text-sm">
                      We encourage you to review this policy periodically to stay informed about how we protect your
                      information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* <Card className="mt-8 border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold text-white">Questions About Privacy?</h3>
                    <p className="text-gray-400">
                      Our privacy team is here to help. Contact us for any questions or concerns about your data.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600"
                      >
                        <Link href="/contact">Contact Privacy Team</Link>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        <a href="mailto:privacy@aichatbotpro.com">privacy@aichatbotpro.com</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>

            {/* <div className="space-y-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#data-collection" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Information We Collect
                  </a>
                  <a href="#data-usage" className="block text-sm text-gray-400 hover:text-pink-400">
                    How We Use Data
                  </a>
                  <a href="#data-sharing" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Data Sharing
                  </a>
                  <a href="#data-security" className="block text-sm text-gray-400 hover:text-pink-400">
                    Security Measures
                  </a>
                  <a href="#user-rights" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Your Rights
                  </a>
                  <a href="#cookies" className="block text-sm text-gray-400 hover:text-pink-400">
                    Cookies & Tracking
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Privacy Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-indigo-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">No Data Sales</p>
                      <p className="text-xs text-gray-400">We never sell your personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Lock className="h-4 w-4 text-pink-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Encrypted Storage</p>
                      <p className="text-xs text-gray-400">All data encrypted at rest and in transit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-indigo-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Full Transparency</p>
                      <p className="text-xs text-gray-400">Clear data usage and sharing policies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Related Pages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/terms" className="block text-sm text-gray-400 hover:text-indigo-400">
                    Terms of Service
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
