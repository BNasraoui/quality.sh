import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-30">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo width={180} height={180} className="rounded" />
          </div>
          <nav className="flex items-center gap-8">
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
          <button className="md:hidden text-white">
            <span className="sr-only">Toggle menu</span>
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
  );
}