"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: "GitHub", href: "https://github.com/digvijayforreal", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: "Instagram", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: "Email", href: "mailto:hello@studio.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  return (
    <section id="contact" className="relative min-h-screen section-padding flex items-center bg-[#272121] overflow-hidden">
      {/* Decorative SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px]">
          <path d="M1200 0L0 0 0 120 1200 120z" className="fill-[#1f1a1a]"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold section-title mb-4">Get In Touch</h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
                <div className="relative">
                  <input type="text" id="name" required className="block w-full px-0 py-3 text-base text-[#F6E9E9] bg-transparent border-0 border-b-2 border-[#555] appearance-none focus:outline-none focus:ring-0 focus:border-[#E16428] peer" placeholder=" " />
                  <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E16428] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" required className="block w-full px-0 py-3 text-base text-[#F6E9E9] bg-transparent border-0 border-b-2 border-[#555] appearance-none focus:outline-none focus:ring-0 focus:border-[#E16428] peer" placeholder=" " />
                  <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E16428] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
                <div className="relative">
                  <textarea id="message" rows={4} required className="block w-full px-0 py-3 text-base text-[#F6E9E9] bg-transparent border-0 border-b-2 border-[#555] appearance-none focus:outline-none focus:ring-0 focus:border-[#E16428] peer resize-none" placeholder=" " />
                  <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E16428] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="btn-primary w-full justify-center py-4 mt-4 disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden relative"
                >
                  <span className={`transition-transform duration-300 ${isSubmitting || isSuccess ? '-translate-y-10 opacity-0 absolute' : 'translate-y-0 opacity-100'}`}>
                    Send Message
                  </span>
                  
                  {isSubmitting && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 border-2 border-[#F6E9E9] border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                  )}

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-2 text-[#F6E9E9]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Message Sent!
                    </motion.div>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "#F6E9E9" }}>Let's Connect</h3>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Whether you have a specific project in mind, or just want to explore possibilities, we're ready to collaborate. Drop us a line and we'll get back to you promptly.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#F6E9E9] hover:text-[#E16428] hover:glow-orange hover:-translate-y-1 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Background Dots */}
      <div className="absolute top-[30%] left-[5%] w-4 h-4 rounded-full bg-[#E16428] opacity-40 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[20%] right-[10%] w-6 h-6 rounded-full bg-[#F6E9E9] opacity-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
    </section>
  );
}
