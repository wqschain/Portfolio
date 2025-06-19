"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Link href="https://github.com/yourusername" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:your@email.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} wqs. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 