"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const marqueeProjects = [...projects, ...projects];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#1a1616] overflow-hidden"
      style={{ minHeight: "140vh" }}
    >
      <div className="sticky top-0 h-screen pt-24">
        <div className="absolute top-12 left-0 w-full z-10 px-[5%] md:px-[10%]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A selection of our most impactful work
          </motion.p>
        </div>

        <div className="relative h-full flex items-center pt-36 overflow-hidden">
          <div
            className="marquee-track flex gap-8 md:gap-16 pr-[10vw]"
            style={{ animationDuration: "24s" }}
          >
            {marqueeProjects.map((project, index) => (
              <div key={`marquee-${index}`}>
                <ProjectCard {...project} index={index % projects.length} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-md h-1 bg-[#363333] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#E16428]"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <div className="h-[120px]" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border border-[rgba(225,100,40,0.2)] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[20%] w-24 h-24 rotate-45 border border-[rgba(246,233,233,0.1)] animate-[float-slow_12s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
