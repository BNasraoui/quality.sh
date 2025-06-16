import PathwayCard from "@/components/pathway-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Zap, Boxes, Flame, Target, Beaker, BookOpen, Calendar } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      articleNumber: "01",
      title: "Your Developers Should Be QAs",
      description: `The traditional QA model is broken. Here's why your developers need to own quality from day one, and how to make the transition without losing your mind.`,
      releaseDate: "Friday, January 17, 2025",
      href: "/blog/your-devs-should-be-testers",
      icons: [
        { active: true, icon: <Zap size={16} />, toolTip: "Ideas" },
        { active: false, icon: <Boxes size={16} />, toolTip: "Infrastructure" },
        { active: true, icon: <Flame size={16} />, toolTip: "Hot Topic" },
        { active: true, icon: <Target size={16} />, toolTip: "Management" },
        { active: true, icon: <Beaker size={16} />, toolTip: "Testing" },
      ],
    },
    {
      articleNumber: "02",
      title: "The Coming Software Quality Crisis",
      description: `Quality isn't just about testing—it's about architecture. Learn the fundamental principles behind designing systems that don't fall over when they grow.`,
      releaseDate: "Friday, January 24, 2025",
      href: "/blog/building-scalable-systems",
      icons: [
        { active: true, icon: <Zap size={16} />, toolTip: "Ideas" },
        { active: true, icon: <Boxes size={16} />, toolTip: "Infrastructure" },
        { active: false, icon: <Flame size={16} />, toolTip: "Hot Topic" },
        { active: true, icon: <Target size={16} />, toolTip: "Management" },
        { active: false, icon: <Beaker size={16} />, toolTip: "Testing" },
      ],
    },
    {
      articleNumber: "03",
      title: "Writing Tests To Make Your Engineering Team Smarter",
      description: `Most testing strategies are cargo cult programming. Here's how to build a testing approach that catches real bugs without slowing down your team.`,
      releaseDate: "Friday, January 31, 2025",
      href: "/blog/testing-strategies",
      icons: [
        { active: true, icon: <Zap size={16} />, toolTip: "Ideas" },
        { active: false, icon: <Boxes size={16} />, toolTip: "Infrastructure" },
        { active: false, icon: <Flame size={16} />, toolTip: "Hot Topic" },
        { active: true, icon: <Target size={16} />, toolTip: "Management" },
        { active: true, icon: <Beaker size={16} />, toolTip: "Testing" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header/>
      <section className="relative w-full flex-grow bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10">
        <main className="container relative z-20 py-12">
                  <div className="max-w-6xl mx-auto">
            <div className="mb-12 pt-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-zrnic text-white">Blog</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl text-white">
                Thoughts on software quality, engineering culture, and building systems that actually work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={article.articleNumber} className="space-y-4">
                  <PathwayCard
                    icon={<BookOpen className="h-4 w-4" />}
                    title={article.title}
                    description={article.description}
                    ctaText="Read article"
                    href={article.href}
                    articleNumber={article.articleNumber}
                    totalArticles="42"
                    comingSoon={true}
                    icons={article.icons}
                  />
                  <div className="flex items-center gap-2 text-sm text-white/70 px-2">
                    <Calendar size={16} />
                    <span>Releases {article.releaseDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}