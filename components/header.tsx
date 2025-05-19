"use client"; // Required for useState and event handlers

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Header() {
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

  return (
    <header className="w-full bg-black/80 md:bg-transparent static md:absolute top-0 left-0 right-0 z-30">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo width={180} height={180} className="rounded" />
        </div>
        {/* Desktop Navigation - hidden on small screens, visible from md upwards */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
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
        <div className="md:hidden bg-black/80 backdrop-blur-sm absolute top-16 left-0 right-0 z-20">
          <nav className="container flex flex-col items-center gap-4 py-4">
            <Link href="/" className="text-lg font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/blog" className="text-lg font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-lg font-medium text-white hover:text-white/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}