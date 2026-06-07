"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchScreenProps {
  onComplete: () => void;
}

export default function LaunchScreen({ onComplete }: LaunchScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Faster startup animation so the site feels responsive.
    const duration = 1400;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(Math.round((currentStep / steps) * 100), 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 400);
        }, 250);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 100, 40, ${p.opacity})`;
        ctx.fill();

        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#272121" }}
        >
          {/* Background GIF */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/those-that-inspire.gif')",
              opacity: 0.4,
            }}
          />

          {/* Dark Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: "rgba(39, 33, 33, 0.7)" }}
          />

          {/* Scanline Effect */}
          <div
            className="absolute inset-0 z-20 pointer-events-none opacity-10"
            style={{
              background: "linear-gradient(rgba(255,255,255,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
              backgroundSize: "100% 2px, 3px 100%",
            }}
          />

          {/* Particles Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-30 pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-40 flex flex-col items-center w-full max-w-md px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-widest mb-12"
              style={{ fontFamily: "var(--font-heading)", color: "#F6E9E9" }}
            >
              STU<span style={{ color: "#E16428" }}>DIO</span>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-full">
              <div className="flex justify-between text-sm mb-2" style={{ color: "rgba(246, 233, 233, 0.6)", fontFamily: "var(--font-body)" }}>
                <span>INITIALIZING</span>
                <span>{progress}%</span>
              </div>
              <div
                className="h-1 w-full rounded-full overflow-hidden"
                style={{ background: "rgba(246, 233, 233, 0.1)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #E16428, #F6E9E9)",
                    width: `${progress}%`,
                  }}
                  layout
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
