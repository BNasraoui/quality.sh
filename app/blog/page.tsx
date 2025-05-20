import { Article } from "@/components/article";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Zap, Boxes, Flame, Target, Beaker } from "lucide-react";

export default function BlogPage() {
  const articleData = {
    articleNumber: "01",
    totalArticles: "42",
    title: "Your Devs Should Learn To Test",
    body: `
## Welcome to Markdown!

This content is rendered from a **Markdown string**.

It supports features like:

*   Lists (like this one)
*   *Italic* and **bold** text
*   \`Inline code snippets\`

### Code Blocks

\`\`\`typescript
function greet(name) {
  console.log(\`Hello, \${name}!\`);\n}\n\ngreet(\"World\");\n\`\`\`

> Blockquotes are also supported, offering a way to emphasize text segments from other sources or for special callouts.

Enjoy writing your content in Markdown!
    `,
    href: "/blog/your-devs-should-be-testers",
    icons: [
      { active: true, icon: <Zap size={16} />, toolTip: "Ideas" },
      { active: false, icon: <Boxes size={16} />, toolTip: "Infrastructure" },
      { active: false, icon: <Flame size={16} />, toolTip: "Hot Topic" },
      { active: true, icon: <Target size={16} />, toolTip: "Management" },
      { active: true, icon: <Beaker size={16} />, toolTip: "Testing" },
    ],
  };

  return (
    <div className="min-h-screen bg-blog-background flex flex-col">
      <Header textColor="text-black" />
      <main className="flex-grow container py-12">
        <div className="max-w-2xl mx-auto">
          <Article
            articleNumber={articleData.articleNumber}
            totalArticles={articleData.totalArticles}
            title={articleData.title}
            icons={articleData.icons}
            body={articleData.body}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}