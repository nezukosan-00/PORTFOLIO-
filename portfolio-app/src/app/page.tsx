"use client";

import { useState } from "react";
import LaunchScreen from "@/components/sections/LaunchScreen";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

export default function Home() {
  const [isLaunchComplete, setIsLaunchComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      <LaunchScreen onComplete={() => setIsLaunchComplete(true)} />

      <main
        className="relative min-h-screen"
        style={{
          visibility: isLaunchComplete ? "visible" : "hidden",
          opacity: isLaunchComplete ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
