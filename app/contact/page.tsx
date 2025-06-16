import { Article } from "@/components/article";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, MessageSquare, Users, Globe, Coffee } from "lucide-react";

export default function ContactPage() {
  const contactData = {
    articleNumber: "∞",
    totalArticles: "42",
    title: "Get In Touch",
    body: `
## Let's Talk Quality

Need help with quality? I'm always happy to chat and offer a consultation for teams looking to improve their quality processes.

### What I Can Help With

- **Quality Architecture** - Designing quality into your systems from the ground up
- **Team Transformation** - Evolving traditional Quality Assurance processes into something more streamlined and modern or building new ones from the ground up  
- **TestOps** - Building a test automation strategy that to help your engineers get the feedback they faster.
- **AI Integration** - Leveraging and implementing AI into your products and processes without sacrificing quality

### Ways to Connect

**Email**: [Ben.Nasraoui@gmail.com](mailto:ben.nasraoui@gmail.com)

**LinkedIn**: I am fairly accessible on [LinkedIn](https://www.linkedin.com/in/ben-nasraoui/)

### Response Time

I typically respond within 24 hours. For anything urgent, your best bet is to send me a message on LinkedIn.

---

*Quality isn't just about testing—it's about building systems that work reliably at scale. Let's build something great together.*
    `,
    icons: [
      { active: true, icon: <Mail size={16} />, toolTip: "Email" },
      { active: true, icon: <MessageSquare size={16} />, toolTip: "Discussion" },
      { active: true, icon: <Users size={16} />, toolTip: "Team Building" },
      { active: true, icon: <Globe size={16} />, toolTip: "Willing to help Globally" },
      { active: true, icon: <Coffee size={16} />, toolTip: "Consulting" },
    ],
  };

  return (
    <div className="min-h-screen bg-blog-background flex flex-col">
      <Header textColor="text-black" />
      <main className="flex-grow container py-12">
        <div className="max-w-2xl mx-auto">
          <Article
            articleNumber={contactData.articleNumber}
            totalArticles={contactData.totalArticles}
            title={contactData.title}
            icons={contactData.icons}
            body={contactData.body}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
} 