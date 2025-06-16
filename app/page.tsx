"use client"
import { BookOpen, Zap, Boxes, Flame, Target, Beaker, Mail } from "lucide-react"
import Link from "next/link"
import PathwayCard from "@/components/pathway-card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import AnimatedHeadline from "@/components/animated-headline"

export default function LandingPage() {
  const headlinePhrases = [
    "",
    "saved software",
    "is the future",
    "rules",
    "is a botnet",
    "is a cult",
    "are challenging",
    "pwned me",
    "is run by ASIO",
    "rejected my PR",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header/>

      <section className="relative w-full flex-grow bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10">
        <div className="container relative z-20 min-h-screen flex flex-col pt-16 pb-16">
          {/* Hero Content */}
          <div className="flex-grow flex items-center">
            <div className="max-w-2xl text-white">
              <AnimatedHeadline 
                baseText="quality.sh"
                phrases={headlinePhrases}
                className="text-5xl md:text-7xl font-bold mb-6 font-zrnic"
                interval={2500}
              />
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Software quality is a solvable problem, but it's not easy.
              </p>

              <Link
                href="/contact"
                className="block w-full max-w-xs text-white px-4 py-2 font-mono text-center hover:bg-gray-800 transition-colors mb-12 md:mb-8"
              >
                Let's Build Better Software →
              </Link>
            </div>
          </div>

          {/* Article Cards */}
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <PathwayCard
                icon={<Flame className="h-4 w-4" />}
                title="Your Developers Should Be QAs"
                description="Discover techniques and strategies for optimizing your application's performance and delivering a better user experience."
                ctaText="Read more"
                href="/blog/performance-optimization"
                articleNumber="01"
                comingSoon={true}
                icons={[
                  { active: false, icon: <Zap size={16} /> },
                  { active: true, icon: <Boxes size={16} /> },
                  { active: true, icon: <Flame size={16} /> },
                  { active: false, icon: <Target size={16} /> },
                  { active: true, icon: <Beaker size={16} /> },
                ]}
              />

              <PathwayCard
                icon={<BookOpen className="h-6 w-6" />}
                title="The Coming Software Quality Crisis"
                description="Learn the fundamental principles behind designing and implementing systems that can scale effectively as your business grows."
                ctaText="Read more"
                href="/blog/building-scalable-systems"
                articleNumber="02"
                comingSoon={true}
                icons={[
                  { active: true, icon: <Zap size={16} /> },
                  { active: true, icon: <Boxes size={16} /> },
                  { active: false, icon: <Flame size={16} /> },
                  { active: true, icon: <Target size={16} /> },
                  { active: false, icon: <Beaker size={16} /> },
                ]}
              />
              <PathwayCard
                icon={<Beaker className="h-4 w-4" />}
                title="Writing Tests To Make Your Engineering Team Smarter"
                description="Explore effective testing methodologies to ensure your software is reliable, maintainable, and meets quality standards."
                ctaText="Read more"
                href="/blog/testing-strategies"
                articleNumber="3"
                comingSoon={true}
                icons={[
                  { active: true, icon: <Zap size={16} /> },
                  { active: false, icon: <Boxes size={16} /> },
                  { active: false, icon: <Flame size={16} /> },
                  { active: true, icon: <Target size={16} /> },
                  { active: true, icon: <Beaker size={16} /> },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}