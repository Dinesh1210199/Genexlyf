import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

const blogPosts = [
  {
    title: "AI Automation: Streamlining Campus Operations in 2025",
    excerpt: "Discover how AI-driven automation is revolutionizing how educational institutions manage their daily operations and improve efficiency.",
    category: "AI Automation",
    author: "Kaviya",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "The Future of EdTech: Human-Centered Intelligence",
    excerpt: "Exploring how technology can enhance rather than replace the human elements of education.",
    category: "EdTech",
    author: "Leela",
    date: "Nov 25, 2024",
    readTime: "7 min read",
    featured: true,
  },
  {
    title: "Building Scalable AI: Lessons from Our Pilots",
    excerpt: "Key insights and best practices learned from implementing AI solutions at scale.",
    category: "Engineering",
    author: "Dinesh",
    date: "Nov 18, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Campus AI: From Prototype to Production",
    excerpt: "A step-by-step journey of taking campus automation from concept to real-world implementation.",
    category: "Case Study",
    author: "Team Uproot",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "Why Root-Level Innovation Wins",
    excerpt: "Understanding why addressing fundamental challenges leads to more sustainable solutions.",
    category: "Strategy",
    author: "Kaviya",
    date: "Nov 5, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "Automation Trends Shaping Education Tomorrow",
    excerpt: "A look at emerging technologies and how they'll transform the education sector.",
    category: "Trends",
    author: "Leela",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Innovation Journal
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Forward-thinking insights on AI, automation, and education transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Featured"
            title="Latest Insights"
            description="Stay ahead with our evolving insights on AI-powered solutions."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl border border-border overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="bg-hero-gradient h-48 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-foreground/20">
                    {post.title[0]}
                  </span>
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Posts */}
          <h3 className="text-2xl font-bold text-foreground mb-8">All Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-all group"
              >
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on AI and innovation.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
