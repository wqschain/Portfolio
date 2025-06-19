"use client";

import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Docker",
  "Git",
];

export function Skills() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-xl font-medium tracking-tight text-silver-light">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-chrome-800 text-chrome-400 text-sm rounded-full hover:bg-chrome-700 hover:text-silver-light transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 