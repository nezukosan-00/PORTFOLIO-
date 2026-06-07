"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "projects", "services", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          padding: isScrolled ? "0.5rem 0" : "1rem 0",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between transition-all duration-500"
          style={{
            maxWidth: "1400px",
            padding: "0 clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleClick("#hero")}
            className="relative group"
            id="nav-logo"
          >
            <span
              className="text-2xl font-bold tracking-wider"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#F6E9E9",
              }}
            >
              STU
              <span style={{ color: "#E16428" }}>DIO</span>
            </span>
            <span
              className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, #E16428, transparent)",
              }}
            />
          </button>

          {/* Desktop Links */}
          <div
            className="hidden md:flex items-center gap-1 px-2 py-1.5"
            style={{
              background: isScrolled
                ? "rgba(54, 51, 51, 0.6)"
                : "rgba(54, 51, 51, 0.3)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(246, 233, 233, 0.06)",
              borderRadius: "50px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleClick(link.href)}
                className="relative px-5 py-2 text-sm font-medium transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-heading)",
                  color:
                    activeSection === link.href.slice(1)
                      ? "#F6E9E9"
                      : "rgba(246, 233, 233, 0.6)",
                  borderRadius: "50px",
                }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0"
                    style={{
                      background: "rgba(225, 100, 40, 0.15)",
                      border: "1px solid rgba(225, 100, 40, 0.3)",
                      borderRadius: "50px",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleClick("#contact")}
            className="hidden md:block btn-primary"
            id="nav-cta"
            style={{
              padding: "0.625rem 1.5rem",
              fontSize: "0.875rem",
              borderRadius: "50px",
            }}
          >
            Let&apos;s Talk
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            style={{
              background: "rgba(54, 51, 51, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              border: "1px solid rgba(246, 233, 233, 0.06)",
            }}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 7 : 0,
                }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: "#F6E9E9" }}
              />
              <motion.span
                animate={{
                  opacity: isMobileOpen ? 0 : 1,
                  x: isMobileOpen ? 10 : 0,
                }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: "#F6E9E9" }}
              />
              <motion.span
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -7 : 0,
                }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: "#F6E9E9" }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 md:hidden"
            id="mobile-menu"
            style={{
              background: "rgba(39, 33, 33, 0.95)",
              backdropFilter: "blur(30px)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => handleClick(link.href)}
                className="text-3xl font-bold transition-colors"
                style={{
                  fontFamily: "var(--font-heading)",
                  color:
                    activeSection === link.href.slice(1)
                      ? "#E16428"
                      : "#F6E9E9",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleClick("#contact")}
              className="btn-primary mt-4"
              style={{ borderRadius: "50px" }}
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
