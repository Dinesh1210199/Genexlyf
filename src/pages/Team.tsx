import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Brain, Lightbulb, Code } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const founders = [
  {
    name: "Kaviya",
    role: "AI Strategy Lead",
    title: "Visionary Founder & AI Specialist",
    icon: Brain,
    description: "Driving AI innovation and strategic direction with deep expertise in machine learning and intelligent systems.",
    expertise: ["AI Strategy", "Machine Learning", "Business Development"],
  },
  {
    name: "Leela",
    role: "Head of Campus Innovation",
    title: "Education Tech Innovator",
    icon: Lightbulb,
    description: "Transforming educational institutions through innovative technology solutions and campus automation.",
    expertise: ["EdTech", "Campus Solutions", "Product Design"],
  },
  {
    name: "Dinesh",
    role: "Product Engineering Lead",
    title: "Engineering Architect",
    icon: Code,
    description: "Building scalable, robust platforms with expertise in full-stack development and system architecture.",
    expertise: ["System Architecture", "Full-Stack Dev", "DevOps"],
  },
];

export default function Team() {
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
              Meet the Minds Driving Innovation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our team is rooted in diverse expertise and a shared passion for AI-powered transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Leadership"
            title="Minds Behind the Movement"
            description="Led by founders with deep knowledge in AI, automation, and education technology."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl border border-border overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="bg-hero-gradient p-8 text-center">
                  <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <founder.icon className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground">{founder.name}</h3>
                  <p className="text-secondary font-medium">{founder.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-secondary font-medium mb-2">{founder.title}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{founder.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {founder.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Collective of Forward-Thinkers
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our leadership anchors a collaborative team of innovators, technologists, and strategists 
              committed to pushing boundaries. We inspire a culture of experimentation and human-centric design, 
              empowering each member to contribute boldly toward scalable, future-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Contact Team
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
