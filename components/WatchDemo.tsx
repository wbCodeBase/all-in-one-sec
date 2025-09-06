"use client"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

export default function WatchDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-orange-500 bg-clip-text text-transparent">
              Still not convinced?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Here's how other IT business owners are scaling faster with our AI + Human Automation solution.
            </p>

            <Button
              onClick={() => setOpen(true)}
              size="lg"
              className="px-12 py-6 text-xl bg-green-500 hover:bg-green-600 font-semibold cursor-pointer text-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-6xl w-full p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden">
            <DialogHeader className="p-8 pb-0">
              <DialogTitle className="text-3xl font-bold text-card-foreground text-center">
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
      </section>

      <footer className="bg-black">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">© {new Date().getFullYear()} weoneAI. All rights reserved.</div>

            <div className="flex items-center space-x-8 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
