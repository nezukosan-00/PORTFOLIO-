"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const headline = "Building Digital Experiences That Stand Out.";
  const words = headline.split(" ");

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-30"
          style={{ background: "#E16428", animation: "orbit 20s linear infinite" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] mix-blend-screen pointer-events-none opacity-20"
          style={{ background: "#F6E9E9", animation: "orbit 25s linear infinite reverse" }}
        />
      </motion.div>

      {/* Mouse Follow Glow */}
      {isMounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: "radial-gradient(circle, rgba(225, 100, 40, 0.15) 0%, rgba(0,0,0,0) 70%)",
            left: `calc(${mousePosition.x * 100}% + 50%)`,
            top: `calc(${mousePosition.y * 100}% + 50%)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.3em] last:mr-0"
                variants={wordVariants}
              >
                {word === "Experiences" || word === "Stand" || word === "Out." ? (
                  <span style={{ color: "var(--accent)" }}>{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl mb-10 text-gray-300"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            We craft premium digital solutions — from web apps to AI-powered platforms — that push boundaries and deliver results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button className="btn-primary w-full sm:w-auto" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </button>
            <button className="btn-outline w-full sm:w-auto" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Character Image */}
        <motion.div
          className="flex-1 w-full max-w-[600px] aspect-square relative perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              rotateX: mousePosition.y * -20,
              rotateY: mousePosition.x * 20,
            }}
          >
            <Image
              src="/assets/roblox.png"
              alt="Hero Character"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(225,100,40,0.3)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
