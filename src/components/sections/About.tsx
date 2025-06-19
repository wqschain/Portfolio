"use client";

import { motion } from "framer-motion";

export function About() {
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Next.js",
    "TailwindCSS",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "Software Engineering",
    "Machine Learning",
  ];

  return (
    <section className="py-10 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-semibold">About</h2>
        <div>
          <p className="text-chrome-400 text-lg leading-relaxed">
            I&apos;m a developer passionate about building innovative solutions and creating impactful experiences through technology. With a strong foundation in modern web development and a keen eye for detail, I strive to create elegant solutions to complex problems.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-chrome-300 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-medium">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {coursework.map((course) => (
              <span
                key={course}
                className="px-4 py-2 bg-white/5 rounded-lg text-sm text-chrome-300 hover:text-white transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 