"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const ROTATING_WORDS = [
  { text: 'charts', color: 'from-[#31A9FF] to-[#31A9FF]/70' },
  { text: 'trends', color: 'from-[#F2C94C] to-[#F2C94C]/70' },
  { text: 'solutions', color: 'from-[#27AE60] to-[#27AE60]/70' },
  { text: 'insight', color: 'from-[#BB6BD9] to-[#BB6BD9]/70' }
];

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [sigHover, setSigHover] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hey, I'm Waqas Rana"],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      onComplete: () => {
        // Hide the cursor of the first typed instance
        const cursor = typedRef.current?.nextElementSibling as HTMLElement;
        if (cursor) cursor.style.display = 'none';
        
        // Start typing the tagline
        new Typed(taglineRef.current, {
          strings: ["I write code that talks in"],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          onComplete: () => {
            // Short delay before showing rotating words
            setTimeout(() => {
              setIsTypingDone(true);
              // Hide the cursor of the second typed instance
              const cursor = taglineRef.current?.nextElementSibling as HTMLElement;
              if (cursor) cursor.style.opacity = '0';
            }, 400);
          }
        });
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      typed.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Rotate words effect
  useEffect(() => {
    if (!isTypingDone) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTypingDone]);

  const handleUoMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
    e.currentTarget.setAttribute('data-glow', 'true');
  };

  const handleUoMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.setAttribute('data-glow', 'false');
  };

  // Handle skill hover effects
  const handleSkillMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const skill = e.currentTarget;
    const rect = skill.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxMove = 10;

    const moveX = (x - centerX) / centerX * maxMove;
    const moveY = (y - centerY) / centerY * maxMove;

    skill.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  const handleSkillMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const skill = e.currentTarget;
    skill.style.transform = '';
  };

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div 
          className="w-[100vw] h-[100vh] fixed inset-0"
          style={{
            maskImage: `radial-gradient(circle 8vw at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 8vw at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
            background: `
              repeating-linear-gradient(
                to right,
                transparent,
                transparent 14px,
                rgba(229, 229, 229, 0.15) 15px,
                rgba(229, 229, 229, 0.15) 16px,
                transparent 17px
              ),
              repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 14px,
                rgba(229, 229, 229, 0.15) 15px,
                rgba(229, 229, 229, 0.15) 16px,
                transparent 17px
              )
            `
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="min-h-[70vh] flex flex-col items-center pt-28 px-4">
          <div className="text-center space-y-6">
            {/* Profile Image */}
            <div className="relative mx-auto w-20 h-20 mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur opacity-25"></div>
              <div className="relative">
                <Image
                  src="/images/profile/waqasrpfp.png"
                  alt="Waqas Rana"
                  width={80}
                  height={80}
                  className="rounded-full shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Name and Tagline */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <span ref={typedRef}></span>
              </h1>
              <p className="text-base text-gray-400 flex items-center justify-center">
                <span ref={taglineRef}></span>
                <span className={`inline-flex items-center transition-opacity duration-300 w-[90px] ${isTypingDone ? 'opacity-100' : 'opacity-0'}`}>
                  {ROTATING_WORDS.map((word, index) => (
                    <span
                      key={word.text}
                      className={`absolute inline-flex items-center transition-all duration-500 ease-in-out ml-1
                        ${index === currentWordIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                      <span className={`bg-gradient-to-r ${word.color} bg-clip-text text-transparent animate-gradient font-semibold`}>
                        {word.text}
                      </span>
                      <span className="text-gray-400">.</span>
                    </span>
                  ))}
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mt-6 mb-2">
              {/* X (Twitter) */}
              <Link href="https://x.com/wqschain" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" 
                className="transform hover:scale-110 transition-transform duration-200 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#a1a1a1] rounded-md opacity-0 group-hover:opacity-20 blur-[2px] transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* GitHub */}
              <Link href="https://github.com/wqschain" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                className="transform hover:scale-110 transition-transform duration-200 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#a1a1a1] rounded-md opacity-0 group-hover:opacity-20 blur-[2px] transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/waqasr1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                className="transform hover:scale-110 transition-transform duration-200 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#a1a1a1] rounded-md opacity-0 group-hover:opacity-20 blur-[2px] transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              {/* Email */}
              <Link href="mailto:wwaqasrana.04@gmail.com" aria-label="Email" 
                className="transform hover:scale-110 transition-transform duration-200 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#a1a1a1] rounded-md opacity-0 group-hover:opacity-20 blur-[2px] transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* About Me Section */}
            <div className="w-full flex justify-center mt-8">
              <div className="max-w-[48ch] w-full text-center text-gray-300 text-sm md:text-base leading-relaxed px-4">
                <p>
                  I'm a third-year Computer Science student at the{' '}
                  <span className="inline-flex items-center gap-[0.3em]">
                    <span
                      className="uo-gradient-glow"
                      data-text="University"
                      onMouseMove={handleUoMouseMove}
                      onMouseLeave={handleUoMouseLeave}
                    >
                      University
                    </span>
                    <span
                      className="uo-gradient-glow"
                      data-text="of"
                      onMouseMove={handleUoMouseMove}
                      onMouseLeave={handleUoMouseLeave}
                    >
                      of
                    </span>
                    <span
                      className="uo-gradient-glow"
                      data-text="Western"
                      onMouseMove={handleUoMouseMove}
                      onMouseLeave={handleUoMouseLeave}
                    >
                      Western
                    </span>
                    <span
                      className="uo-gradient-glow"
                      data-text="Ontario"
                      onMouseMove={handleUoMouseMove}
                      onMouseLeave={handleUoMouseLeave}
                    >
                      Ontario
                    </span>
                  </span> with a focus on building systems that are as functional as they are thoughtful. My work blends backend logic, technical insight, and minimalistic design from web apps to experimental tech projects.
                </p>
                <p className="mt-4">
                  I enjoy solving problems, streamlining complexity, and delivering clear, reliable software that makes an impact.
                </p>
                <p className="mt-4">
                  If you'd like to connect, collaborate, or just chat, feel free to reach out via the links above.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full max-w-[48ch] mx-auto mt-12 relative">
              {/* Grid clear zone */}
              <div 
                className="absolute -inset-8 backdrop-blur-[1px]"
                style={{
                  background: `radial-gradient(
                    circle at center,
                    rgba(0, 0, 0, 0.9) 0%,
                    rgba(0, 0, 0, 0.85) 40%,
                    rgba(0, 0, 0, 0) 100%
                  )`,
                  zIndex: -1
                }}
              />
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  // Languages
                  "Java",
                  "Python",
                  "TypeScript",
                  "JavaScript",
                  "C",
                  "HTML/CSS",
                  // Frameworks & Libraries
                  "React",
                  "Node.js",
                  "Next.js",
                  "Flask",
                  "pandas",
                  "NumPy",
                  "Matplotlib",
                  // Databases
                  "SQL",
                  "MongoDB",
                  "PostgreSQL",
                  // Cloud & Tools
                  "Git",
                  "AWS",
                  "Google Cloud Platform",
                  "Docker",
                  // IDEs
                  "VS Code",
                  "IntelliJ",
                  "PyCharm"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-sm text-gray-400 hover:text-white transition-all duration-200 border border-gray-800/50 hover:border-gray-700"
                    onMouseMove={handleSkillMouseMove}
                    onMouseLeave={handleSkillMouseLeave}
                  >
                    <span className="skill-text relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Signature - bottom right */}
      <div
        className="fixed bottom-4 right-4 z-50 hidden sm:block pointer-events-none select-none"
        style={{ width: 120, height: 40 }}
      >
        <div
          className="w-full h-full pointer-events-auto"
          onMouseEnter={() => setSigHover(true)}
          onMouseLeave={() => setSigHover(false)}
        >
          <Image
            src="/images/profile/signature.png"
            alt="Waqas Rana Signature"
            width={120}
            height={40}
            className="w-full h-full opacity-90"
            style={{
              filter: `
                drop-shadow(0 0 8px rgba(255,255,255,0.7))
                drop-shadow(0 0 20px rgba(255,255,255,0.4))
              `
            }}
            priority
          />
          {sigHover && (
            <div
              className="absolute inset-0 w-full h-full pointer-events-none animate-chrome-gradient"
              style={{
                background:
                  "linear-gradient(120deg, #e0e0e0 0%, #b0b0b0 30%, #f8f8f8 60%, #b0b0b0 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                mixBlendMode: "lighten",
                zIndex: 10,
                maskImage: "url(/images/profile/signature.png)",
                WebkitMaskImage: "url(/images/profile/signature.png)",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "cover",
                WebkitMaskSize: "cover",
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
} 