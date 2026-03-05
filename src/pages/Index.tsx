import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <TechStackCarousel />
        <AboutSection />
        <PortfolioSection />
        <ContactSection isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
