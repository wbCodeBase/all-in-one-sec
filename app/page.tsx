import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="bg-dark-primary font-inter text-white overflow-x-hidden min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary bg-[length:400%_400%] animate-gradient"></div>
        <div className="absolute inset-0 opacity-20">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-yellow rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent-yellow rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-accent-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
