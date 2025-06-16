"use client"; // Required for useState and event handlers

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { cn } from "@/lib/utils"; // Import cn utility

interface HeaderProps {
  textColor?: string; // e.g., "text-primary hover:text-primary/80"
}

export default function Header({ textColor }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close mobile menu if window is resized to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultDesktopHomeColor = "text-white hover:text-white/80";
  const defaultDesktopLinkColor = "text-white/80 hover:text-white";
  const defaultMobileLinkColor = "text-white hover:text-white/70";

  return (
    <header className="w-full bg-black md:bg-transparent static md:absolute top-0 left-0 right-0 z-30">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo width={180} height={180} className="rounded" textColor={textColor} />
          </Link>
        </div>
        {/* Desktop Navigation - hidden on small screens, visible from md upwards */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={cn("text-sm font-medium transition-colors", textColor ? textColor : defaultDesktopHomeColor)}>
            Home
          </Link>
          <Link href="/blog" className={cn("text-sm font-medium transition-colors", textColor ? textColor : defaultDesktopLinkColor)}>
            Blog
          </Link>
          <Link href="/contact" className={cn("text-sm font-medium transition-colors", textColor ? textColor : defaultDesktopLinkColor)}>
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button - visible only on small screens */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu - shown below header when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-sm absolute top-16 left-0 right-0 z-20">
          <nav className="container flex flex-col items-center gap-4 py-4">
            <Link href="/" className={cn("text-lg font-medium transition-colors", textColor ? textColor : defaultMobileLinkColor)} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/blog" className={cn("text-lg font-medium transition-colors", textColor ? textColor : defaultMobileLinkColor)} onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className={cn("text-lg font-medium transition-colors", textColor ? textColor : defaultMobileLinkColor)} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}