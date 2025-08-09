"use client";

import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import OurStory from "@/components/OurStory";
import ProductSection from "@/components/ProductSection";
import ServicesSection from "@/components/ServiceSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <NavBar />
      <HeroSection />

      {/* Slanted Background Behind AboutUs */}
      <div className="relative">
        {/* Slanted background layer */}
        <div className="absolute -top-[10rem] left-1/2 -translate-x-1/2 w-[160vw] h-[110vh] max-lg:h-[170vh] max-sm:h-[200vh] bg-[#f3f1f0] -z-10 rotate-[-5deg] max-lg:rotate-0" />
        <AboutUs />
      </div>

      <ServicesSection />
      <ProductSection />
      <OurStory />
      <Footer />

      {showScrollToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </main>
  );
}
