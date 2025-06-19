"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function Navigation() {
  const pathname = usePathname();
  const activeBackgroundRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    
    const activeButton = navRef.current.querySelector(`[data-active="true"]`);
    if (activeButton && activeBackgroundRef.current) {
      const rect = activeButton.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      activeBackgroundRef.current.style.width = `${rect.width}px`;
      activeBackgroundRef.current.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }
  }, [pathname]);

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul ref={navRef} className="flex items-center gap-4 bg-black/20 p-1 rounded-full relative">
        <div
          ref={activeBackgroundRef}
          className="absolute h-[calc(100%-8px)] bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{ top: '4px' }}
        />
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                data-active={isActive}
                className={`
                  nav-button
                  relative z-10
                  inline-block
                  px-6 py-2 
                  rounded-full 
                  text-sm font-medium 
                  transition-colors duration-300
                  ${isActive 
                    ? "text-black" 
                    : "text-white hover:text-white/80"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 