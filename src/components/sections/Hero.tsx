"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
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

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border border-chrome-300/20">
          <Image
            src="/images/profile/waqasrpfp.png"
            alt="wqs"
            width={128}
            height={128}
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 mb-8"
      >
        <h1 className="text-4xl font-semibold tracking-tight">
          Hey, I&apos;m Waqas Rana
        </h1>
        <p className="text-xl text-chrome-400">
          I write code that talks in <span className="text-[#00FF00]">trends</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-6 mb-12"
      >
        <Link 
          href="https://x.com/wqschain" 
          target="_blank"
          className="text-chrome-400 hover:text-silver-light transition-colors"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
        <Link 
          href="https://github.com/wqschain" 
          target="_blank"
          className="text-chrome-400 hover:text-silver-light transition-colors"
        >
          <Github size={22} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/waqasr1/" 
          target="_blank"
          className="text-chrome-400 hover:text-silver-light transition-colors"
        >
          <Linkedin size={22} />
        </Link>
        <Link 
          href="mailto:wwaqasrana.04@gmail.com"
          className="text-chrome-400 hover:text-silver-light transition-colors"
        >
          <Mail size={22} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto space-y-6 text-center"
      >
        <p className="text-chrome-400 leading-relaxed">
          I&apos;m a third-year Computer Science student at the University of Western Ontario with a focus on building systems that are as functional as they are thoughtful. My work blends backend logic, technical insight, and minimalistic design from web apps to experimental tech projects.
        </p>
        <p className="text-chrome-400 leading-relaxed">
          I enjoy solving problems, streamlining complexity, and delivering clear, reliable software that makes an impact.
        </p>
        <p className="text-chrome-400 leading-relaxed">
          If you&apos;d like to connect, collaborate, or just chat, feel free to reach out via the links above.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 w-full max-w-2xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/5 rounded-full text-sm text-chrome-300 hover:text-white transition-colors border border-chrome-300/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 