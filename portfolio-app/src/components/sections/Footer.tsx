"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1a1616] pt-12 pb-8 px-6 lg:px-16 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E16428] to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-1" style={{ color: "var(--text-secondary)" }}>
            &copy; {new Date().getFullYear()} STUDIO. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 italic" style={{ color: "var(--text-muted)" }}>
            Crafted with passion and precision.
          </p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#363333] border border-[rgba(225,100,40,0.3)] text-[#E16428] hover:bg-[#E16428] hover:text-[#F6E9E9] transition-colors duration-300 shadow-[0_0_15px_rgba(225,100,40,0.1)]"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </motion.button>
      </div>
    </footer>
  );
}
