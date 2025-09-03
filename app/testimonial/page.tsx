import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Zap } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Image from "next/image"

const testimonials = [
    {
        name: "Rajesh Kumar",
        company: "TechFlow Solutions",
        location: "Mumbai, India",
        image: "https://st4.depositphotos.com/34939642/39232/v/450/depositphotos_392322342-stock-illustration-businessman-avatar-icon-vector-illustration.jpg",
        rating: 5,
        quote:
            "The automation system transformed our entire workflow. We've reduced manual tasks by 85% and increased productivity threefold. Our team can now focus on strategic initiatives rather than repetitive processes.",
        results: "85% reduction in manual tasks",
    },
    {
        name: "Sarah Mitchell",
        company: "Global Logistics Corp",
        location: "London, UK",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/216/non_2x/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
        rating: 5,
        quote:
            "Implementing their automation solution was the best decision we made this year. Our order processing time went from 2 hours to 15 minutes, and customer satisfaction scores increased by 40%.",
        results: "40% increase in customer satisfaction",
    },
    {
        name: "Priya Sharma",
        company: "Digital Marketing Hub",
        location: "Bangalore, India",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/216/non_2x/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
        rating: 5,
        quote:
            "The ROI was incredible - we recovered our investment in just 3 months. The automated reporting system saves us 20 hours per week and provides insights we never had before.",
        results: "3-month ROI recovery",
    },
    {
        name: "Marcus Weber",
        company: "Manufacturing Excellence",
        location: "Berlin, Germany",
        image: "https://st4.depositphotos.com/34939642/39232/v/450/depositphotos_392322342-stock-illustration-businessman-avatar-icon-vector-illustration.jpg",
        rating: 5,
        quote:
            "Outstanding results! Our production efficiency improved by 60% and error rates dropped to nearly zero. The system pays for itself through reduced operational costs.",
        results: "60% efficiency improvement",
    },
    {
        name: "Anita Desai",
        company: "FinTech Innovations",
        location: "Delhi, India",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/216/non_2x/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
        rating: 5,
        quote:
            "The automation platform revolutionized our financial processes. Transaction processing is now 10x faster, and compliance reporting that took days now happens in minutes.",
        results: "10x faster processing",
    },
    {
        name: "James Thompson",
        company: "E-commerce Solutions",
        location: "New York, USA",
        image: "https://st4.depositphotos.com/34939642/39232/v/450/depositphotos_392322342-stock-illustration-businessman-avatar-icon-vector-illustration.jpg",
        rating: 5,
        quote:
            "Game-changing technology! Our inventory management is now fully automated, reducing stockouts by 90% and improving cash flow significantly. Highly recommended!",
        results: "90% reduction in stockouts",
    },
]

export default function TestimonialsPage() {
    return (
        <>


            <div className="min-h-screen bg-slate-950">
                <Navigation />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />

                    <div className="relative max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Zap className="w-4 h-4" />
                            Trusted by 10,000+ Businesses Worldwide
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Client Success Stories
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 text-balance max-w-3xl mx-auto leading-relaxed">
                            Discover how businesses across the globe have transformed their operations with our cutting-edge automation
                            solutions
                        </p>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 via-slate-800 to-slate-900/80 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                                    <CardContent className="relative p-8 z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                                                ))}
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                <Quote className="w-4 h-4 text-blue-400" />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-slate-100 leading-relaxed text-pretty font-medium text-base">
                                                &quot;{testimonial.quote}&quot;
                                            </p>
                                        </div>

                                        <div className="relative mb-6">
                                            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-lg">
                                                <Zap className="w-3 h-3" />
                                                {testimonial.results}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                                            <div className="relative">
                                                <Image
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30 shadow-lg"
                                                />
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-100 text-lg">{testimonial.name}</h3>
                                                <p className="text-sm text-slate-400 font-medium">{testimonial.company}</p>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                                    <p className="text-xs text-blue-400 font-medium">{testimonial.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Quote Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <Quote className="w-16 h-16 text-purple-400 mx-auto mb-8 opacity-60" />
                        <blockquote className="text-3xl md:text-4xl font-bold text-balance text-slate-100 mb-8 leading-tight">
                            &quot;This automation platform didn&apos;t just improve our business - it completely revolutionized how we operate.
                            The results speak for themselves.&quot;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <Image
                                src="https://st4.depositphotos.com/34939642/39232/v/450/depositphotos_392322342-stock-illustration-businessman-avatar-icon-vector-illustration.jpg"
                                alt="Featured client"
                                className="w-15 h-15 rounded-full border-2 border-blue-500"
                            />
                            <div className="text-left">
                                <p className="font-semibold text-lg text-slate-100">Vikram Patel</p>
                                <p className="text-slate-400">CEO, Innovation Enterprises</p>
                                <p className="text-blue-400 text-sm">Chennai, India</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 via-slate-950 to-purple-500/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-slate-100">
                            Ready to Join Our Success Stories?
                        </h2>
                        <p className="text-xl text-slate-300 text-balance mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transform your business operations and achieve remarkable results like our clients. Start your automation
                            journey today.
                        </p>

                        <Link href="https://cal.com/weoneai/30min"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Automate Your Business Now
                        </Link>

                        <p className="text-sm text-slate-400 mt-10">Join 10,000+ businesses already automating their success</p>
                    </div>
                </section>


                {/* Footer */}
                <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 text-xs text-slate-400">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>© {new Date().getFullYear()} weoneAI. All rights reserved.</div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-slate-200">Privacy</a>
                            <a href="#" className="hover:text-slate-200">Terms</a>
                            <a href="#" className="hover:text-slate-200">Contact</a>
                        </div>
                    </div>
                </footer>


            </div>
        </>
    )
}
