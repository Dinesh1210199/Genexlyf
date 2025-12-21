import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Zap, School, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const projects = [
  {
    icon: Mail,
    title: "Tenant & Email Intelligence Platform",
    category: "Enterprise Platform | AI & Security",
    status: "In Development",
    description: "A multi-tenant platform with RBAC, controlled email access, secure email archiving, data export, and planned AI-based email forecasting. Built with enterprise architecture, compliance awareness, and scalability at its core.",
    highlights: [
      "Multi-tenant design",
      "Role-based access control",
      "Secure email data handling",
      "AI-ready analytics layer",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Workflow Engine",
    category: "Automation | Internal Platform",
    status: "Prototype / Active Build",
    description: "An internal automation engine designed to streamline workflows, integrate systems, and reduce manual operations across business functions.",
    highlights: [
      "Workflow orchestration",
      "Rule-based automation",
      "System integrations",
      "Scalable core architecture",
    ],
  },
  {
    icon: School,
    title: "Campus & Institutional Management Solution",
    category: "Education | Operations",
    status: "Planned / Early Development",
    description: "A platform focused on simplifying administrative workflows, improving visibility, and enabling data-driven decisions for institutions.",
    highlights: [
      "Operational automation",
      "Role-based access",
      "Reporting & analytics",
      "Secure and modular design",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    category: "Software Development | Client Work",
    status: "Delivered / Ongoing",
    description: "Custom-built applications and systems developed for specific client needs, including internal tools, dashboards, and workflow solutions.",
    highlights: [
      "Tailor-made architectures",
      "Secure, scalable systems",
      "Client-centric design",
      "Long-term maintainability",
    ],
  },
];

const portfolioValues = [
  "A real problem worth solving",
  "A strong technical foundation",
  "Close collaboration with stakeholders",
  "AI-ready and automation-friendly design",
];

const caseStudyStructure = {
  problem: "Manual processes, poor visibility, scalability issues",
  solution: "Custom software + automation + AI-ready architecture",
  outcome: "Improved efficiency, better control, and a scalable foundation",
};

const earlyStageFocus = [
  "Strong architecture",
  "Clean execution",
  "Meaningful outcomes",
  "Long-term partnerships",
];

export default function Portfolio() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#E0F2FE] text-sm font-medium mb-6 border border-[#38BDF8]/30">
              <Sparkles className="w-4 h-4 text-[#22D3EE]" />
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              What We're Building & Delivering
            </h1>
            <p className="text-lg md:text-xl text-[#E0F2FE] leading-relaxed">
              At Genexlyf, our portfolio reflects our journey — from early-stage solutions and internal platforms to custom-built systems for real-world problems. As a growing startup, we focus on quality, architecture, and long-term impact over volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
                  <Sparkles className="w-4 h-4" />
                  Portfolio Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  Our Approach to Work
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#5F6B7A] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We don't chase quantity.
                </p>
                <p className="text-lg text-[#5F6B7A] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We build thoughtfully designed solutions that are scalable, secure, and future-ready.
                </p>
                <p className="text-[#5F6B7A] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Every project you see here represents:
                </p>
                <ul className="space-y-2 text-[#5F6B7A] mb-6 list-none" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  {portfolioValues.map((value) => (
                    <li key={value} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Featured Work"
            title="Selected Projects & Platforms"
          />

          <div className="space-y-12 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.1} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0D4BEF]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-8 h-8 text-[#0D4BEF]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-[#0F172A]">🔹 {project.title}</h3>
                      <Badge className="bg-[#EAF2FF] text-[#1E63E9] border-none">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#1E63E9] font-medium mb-4">{project.category}</p>
                    <p className="text-[#5F6B7A] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                      {project.description}
                    </p>
                    <div>
                      <p className="text-[#0F172A] font-semibold mb-3">Highlights:</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#475569]">
                            <div className="w-1.5 h-1.5 bg-[#0D4BEF] rounded-full mt-2 flex-shrink-0" />
                            <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Style */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="🔍 Case Study Style"
            title="How We Typically Work"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard delay={0}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0D4BEF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❓</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">Problem</h3>
                  <p className="text-[#5F6B7A] text-sm" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                    {caseStudyStructure.problem}
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#1F8CFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">Solution</h3>
                  <p className="text-[#5F6B7A] text-sm" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                    {caseStudyStructure.solution}
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22C1FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">Outcome</h3>
                  <p className="text-[#5F6B7A] text-sm" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                    {caseStudyStructure.outcome}
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Early-Stage Honesty */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
                  <Sparkles className="w-4 h-4" />
                  Growing with Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  Early-Stage Honesty
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#5F6B7A] mb-6 leading-relaxed font-semibold" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We're early in our journey — and we're proud of it.
                </p>
                <p className="text-[#5F6B7A] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Instead of showcasing inflated numbers, we focus on:
                </p>
                <ul className="space-y-2 text-[#5F6B7A] mb-6 list-none" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  {earlyStageFocus.map((focus) => (
                    <li key={focus} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Our portfolio will continue to evolve as we grow alongside our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
                Want to Build Something With Us?
              </h2>
              <p className="text-lg text-[#E0F2FE] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                If you have an idea, a challenge, or a system you want to improve — let's explore it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    👉 Talk to Us
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-[#0D4BEF] hover:bg-[#E0F2FE] hover:text-[#0D4BEF] font-semibold border-2 border-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/products">
                    👉 Explore Our Products
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
