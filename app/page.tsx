import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import PathwayCard from "@/components/pathway-card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?key=b5r6w" alt="quality.sh logo" width={40} height={40} className="rounded" />
            <span className="text-xl font-bold tracking-tight text-white">quality.sh</span>
          </div>
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

      {/* Hero Section with Cards */}
      <section className="relative w-full h-screen">
        <Image src="/placeholder.svg?key=4eunv" alt="Hero image" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="container relative z-10 h-full flex flex-col">
          {/* Hero Content */}
          <div className="flex-grow flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">quality.sh</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Professional consulting services for system architecture, quality engineering, and technical leadership.
              </p>
            </div>
          </div>

          {/* Article Cards */}
          <div className="pb-16">
            <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <PathwayCard
                icon={<BookOpen className="h-6 w-6" />}
                title="Building Scalable Systems: Principles and Practices"
                description="Learn the fundamental principles behind designing and implementing systems that can scale effectively as your business grows."
                ctaText="Read more"
                href="/blog/building-scalable-systems"
                backgroundImage="/placeholder.svg?key=4eunv"
              />
              
              {/* Article 2 */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-white">
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">April 28, 2025</p>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    Measuring Code Quality: Beyond Lines of Code
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Discover meaningful metrics that actually reflect the quality of your codebase and how to implement
                    them in your development workflow.
                  </p>
                  <Link
                    href="/blog/measuring-code-quality"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-white">
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">April 15, 2025</p>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    The Art of Technical Leadership: Balancing Vision and Execution
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Explore the key skills and mindsets that effective technical leaders cultivate to drive innovation
                    while ensuring reliable delivery.
                  </p>
                  <Link
                    href="/blog/technical-leadership"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?key=wfbdi"
                alt="quality.sh logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold tracking-tight">quality.sh</span>
            </div>
            <p className="text-sm text-white/50">© 2025 quality.sh. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
