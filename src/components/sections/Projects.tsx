"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sentryx",
    description: "Sentryx is an AI-powered cryptocurrency sentiment platform that tracks real-time price data and analyzes market sentiment using SentryxAI a fine tuned model built on CryptoBERT. Designed for clarity and speed, it filters crypto relevant news, scores sentiment, and visualizes trends for tokens like BTC, ETH, and SOL. Built with FastAPI, React, and SQLite, the platform offers automated scraping, intelligent scoring, and a sleek interface optimized for traders seeking insight beyond price movement.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "SQLite",
      "Chakra UI"
    ],
    date: "2025",
    link: "https://github.com/wqschain/Sentryx",
    glow: true,
    video: "/images/projects/Sentryx2.2-Demo1.5.mp4"
  },
  {
    title: "Scrynt",
    description: "Scrynt is an advanced stock market analysis platform that delivers real-time screening, live news integration, proprietary scoring, and sector-level insights across 5,000+ U.S. public companies. Designed for institutional grade analytics, it empowers users to evaluate stocks through a data rich, customizable dashboard that combines value, growth, momentum, and risk metrics. With a proprietary Scrynt Score, dynamic filters, and correlation-based sector clustering, Scrynt bridges high-level financial analysis with an intuitive user experience making it equally powerful for both professional investors and data driven retail traders.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "FastAPI",
      "Python",
      "Pandas",
      "Playwright"
    ],
    date: "2024",
    link: "https://github.com/wqschain/Scrynt",
    glow: true,
    video: "/images/projects/Scrynt-demo1.1.mp4"
  },
  {
    title: "Portfolio",
    description: "A modern, minimalist portfolio website featuring fluid animations, interactive elements, and responsive design. Built with Next.js 15 and React, it showcases smooth page transitions, magnetic hover effects, and dynamic content rendering while maintaining optimal performance.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "Shadcn/UI",
      "Vercel"
    ],
    date: "2024",
    link: "https://github.com/wqschain/Portfolio",
    glow: true
  }
];

export function Projects() {
  const handleTagMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const tag = e.currentTarget;
    const rect = tag.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxMove = 10;

    const moveX = (x - centerX) / centerX * maxMove;
    const moveY = (y - centerY) / centerY * maxMove;

    tag.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  const handleTagMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const tag = e.currentTarget;
    tag.style.transform = '';
  };

  return (
    <section className="py-16 pl-8 md:pl-16 lg:pl-24 pr-4 md:pr-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-24"
      >
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group max-w-[85vw]"
            >
              {project.link ? (
                <Link 
                  href={project.link}
                  target="_blank"
                  className="block"
                >
                  <ProjectContent project={project} handleTagMouseMove={handleTagMouseMove} handleTagMouseLeave={handleTagMouseLeave} />
                </Link>
              ) : (
                <div className="block">
                  <ProjectContent project={project} handleTagMouseMove={handleTagMouseMove} handleTagMouseLeave={handleTagMouseLeave} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

type ProjectContentProps = {
  project: (typeof projects)[0];
  handleTagMouseMove: (e: React.MouseEvent<HTMLSpanElement>) => void;
  handleTagMouseLeave: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

function ProjectContent({ project, handleTagMouseMove, handleTagMouseLeave }: ProjectContentProps) {
  return (
    <article className="space-y-12">
      <div className="flex items-center gap-3">
        <h3 
          className={`
            text-2xl font-medium 
            transition-all duration-300 ease-out
            ${project.glow 
              ? 'text-chrome-100 group-hover:text-glow-white group-hover:drop-shadow-glow group-hover:scale-[1.02]' 
              : 'text-chrome-100 group-hover:text-silver-light'
            }
          `}
        >
          {project.title}
        </h3>
        <span className="text-sm text-chrome-500">• {project.date}</span>
        {project.link && <ArrowUpRight className="w-5 h-5 text-chrome-500 group-hover:text-silver-light transition-colors" />}
      </div>
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="space-y-8 xl:w-[45%]">
          <p className="text-chrome-400 leading-relaxed text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="skill-pill px-4 py-2 text-base text-gray-400 bg-black/30 backdrop-blur-sm rounded-full border border-gray-800/50 hover:border-gray-700 transition-all duration-200"
                onMouseMove={handleTagMouseMove}
                onMouseLeave={handleTagMouseLeave}
              >
                <span className="skill-text relative z-10">{tag}</span>
              </span>
            ))}
          </div>
        </div>
        {project.video && (
          <div className="xl:w-[50%] w-full rounded-xl overflow-hidden border border-chrome-800/50 bg-chrome-900/50 shadow-2xl">
            <video 
              className="w-full h-auto"
              autoPlay 
              loop 
              muted 
              playsInline
              poster="/placeholder-project.jpg"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </article>
  );
} 