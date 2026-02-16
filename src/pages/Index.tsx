import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />
      <TechStackCarousel />
      <AboutSection />
      <PortfolioSection />
      <ContactSection isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
      <Footer />
    </main>
  );
};

export default Index;
