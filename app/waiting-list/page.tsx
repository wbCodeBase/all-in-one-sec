"use client"

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ChevronRight, Building2, Server, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function WaitlistPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [industry, setIndustry] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLDivElement | null>(null);

    const handleScrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const validateEmail = (val: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(val);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!name.trim()) return setError("Please enter your name.");
        if (!validateEmail(email)) return setError("Please enter a valid email.");
        if (!industry) return setError("Please select your industry.");
        // You can replace this with your real submit logic / API call
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen w-full bg-slate-950 text-slate-100 relative overflow-hidden">
            {/* Soft animated gradient background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(56,189,248,0.12),transparent),radial-gradient(900px_500px_at_100%_20%,rgba(168,85,247,0.10),transparent),radial-gradient(700px_400px_at_50%_120%,rgba(34,197,94,0.10),transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03),transparent)] [mask-image:radial-gradient(1000px_400px_at_50%_-10%,black,transparent)]" />
                {/* grid lines */}
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
            </div>

            {/* Navbar */}
            <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-2">

                    <span className="text-3xl font-semibold">Weone<span className="text-green-500">AI</span></span>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    {/* <a href="#why" className="text-sm/6 opacity-80 hover:opacity-100 transition">Why us</a>
          <a href="#industries" className="text-sm/6 opacity-80 hover:opacity-100 transition">Industries</a> */}
                    <Button onClick={handleScrollToForm} className="rounded-2xl cursor-pointer">Join Waitlist</Button>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pt-6 pb-20">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-5xl font-bold tracking-tight"
                        >
                            AI Funnels Built for IT & Real Estate — Expanding Into More Industries Every Day
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl"
                        >
                            We currently specialize in IT and Real Estate automation, but we’re building new use cases and funnels across industries. Join our waitlist to become a test user and get early access.
                        </motion.p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button size="lg" onClick={handleScrollToForm} className="rounded-2xl cursor-pointer text-base">
                                Join Waitlist
                                <ChevronRight className="ml-1 h-5 w-5" />
                            </Button>
                            {/* <a href="#industries" className="rounded-2xl px-5 py-3 text-base bg-white/5 hover:bg-white/10 transition">
                See industries
              </a> */}
                        </div>
                        <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-2"><Check className="h-4 w-4" />No spam</div>
                            <div className="flex items-center gap-2"><Check className="h-4 w-4" />Cancel anytime</div>
                            <div className="flex items-center gap-2"><Check className="h-4 w-4" />Early access perks</div>
                        </div>
                    </div>

                    {/* Highlight cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Card className="rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-slate-300">Industry Focus</div>
                                    <Server className="h-5 w-5 opacity-70" />
                                </div>
                                <h3 className="mt-3 font-semibold text-white">IT & SaaS</h3>
                                <p className="mt-2 text-sm text-slate-400">Lead capture bots, product-qualified funneling, demo booking automations.</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-slate-300">Industry Focus</div>
                                    <Building2 className="h-5 w-5 opacity-70" />
                                </div>
                                <h3 className="mt-3 text-white font-semibold">Real Estate</h3>
                                <p className="mt-2 text-sm text-slate-400">Property funnels, qualification flows, instant callbacks & showing schedulers.</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl col-span-full bg-gradient-to-r from-white/10 to-white/5 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <div>
                                        <div className="text-sm text-slate-300">Roadmap</div>
                                        <p className="text-sm text-slate-400">Healthcare • Education • Finance • Hospitality • Local Services</p>
                                    </div>
                                    {/* <Button onClick={handleScrollToForm} className="rounded-2xl">Become a test user</Button> */}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section id="why" className="mx-auto max-w-7xl px-6 pb-10">
                <div className="grid md:grid-cols-3 gap-4">
                    {["Conversion-first designs", "Human-in-the-loop when needed", "Integrates with your stack"].map((title, i) => (
                        <Card key={i} className="rounded-2xl bg-white/5 border-white/10">
                            <CardContent className="p-6">
                                <h4 className="font-semibold">{title}</h4>
                                <p className="mt-2 text-sm text-slate-400">
                                    {i === 0 && "Crafted funnels, not chat toys. Capture, qualify, and route with intent-awareness."}
                                    {i === 1 && "Escalations and approvals flow to your team with context when automation isn't enough."}
                                    {i === 2 && "Hook into CRM, calendars, WhatsApp/SMS, email, and web—no heavy lift required."}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Industries pill bar */}
            <section id="industries" className="mx-auto max-w-7xl px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                    {["IT & SaaS", "Real Estate", "Healthcare", "Education", "Finance", "Hospitality", "Local Services", "E‑commerce", "Legal"].map((chip) => (
                        <span key={chip} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">
                            {chip}
                        </span>
                    ))}
                </div>
            </section>

            {/* Waitlist Form */}
            <section ref={formRef} className="mx-auto max-w-4xl px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
                >
                    {submitted ? (
                        <div className="flex flex-col items-center text-center py-10">
                            <div className="h-14 w-14 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Check className="h-7 w-7" />
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold">You're on the list!</h3>
                            <p className="mt-2 max-w-xl text-slate-300">
                                Thanks {name.split(" ")[0]}. We'll email <span className="font-medium text-white">{email}</span> with early access details and a short onboarding questionnaire.
                            </p>
                            <div className="mt-6 text-sm text-slate-400">Want to move faster? Hit reply to that email and tell us your top use case.</div>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                            <div className="sm:col-span-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">Join the waitlist</h3>
                                <p className="mt-1 text-sm text-slate-400">Become a test user and get early access as we expand into new industries.</p>
                            </div>

                            <div className="sm:col-span-1">
                                <Label htmlFor="name">Full name</Label>
                                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Johnson" className="mt-2 rounded-2xl" />
                            </div>

                            <div className="sm:col-span-1">
                                <Label htmlFor="email">Work email</Label>
                                <div className="mt-2 flex gap-2">
                                    <div className="relative flex-1">
                                        <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@company.com"
                                            className="pl-9 rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <Label>Industry</Label>
                                <div className="mt-2">
                                    <Select value={industry} onValueChange={setIndustry}>
                                        <SelectTrigger className="rounded-2xl">
                                            <SelectValue placeholder="Select industry" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="it">IT / SaaS</SelectItem>
                                            <SelectItem value="real-estate">Real Estate</SelectItem>
                                            <SelectItem value="healthcare">Healthcare</SelectItem>
                                            <SelectItem value="education">Education</SelectItem>
                                            <SelectItem value="finance">Finance</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" placeholder="Company name" required className="mt-2 rounded-2xl" />
                            </div>

                            <div className="sm:col-span-2 flex items-center gap-2 text-sm text-slate-300">
                                <input id="consent" type="checkbox" required className="h-4 w-4 rounded border-white/20 bg-transparent" />
                                <label htmlFor="consent" className="opacity-80">
                                    I agree to receive early-access emails and product updates.
                                </label>
                            </div>

                            {error && (
                                <div className="sm:col-span-2 text-rose-300 text-sm">{error}</div>
                            )}

                            <div className="sm:col-span-2 flex flex-wrap gap-3">
                                <Button type="submit" size="lg" className="cursor-pointer rounded-2xl bg-white/5 hover:bg-white/10 ">
                                    Join Waitlist
                                    <ChevronRight className="ml-1 h-5 w-5" />
                                </Button>
                                {/* <a href="#top" className="px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition text-base">Learn more</a> */}
                            </div>
                        </form>
                    )}
                </motion.div>
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
        </main>
    );
}