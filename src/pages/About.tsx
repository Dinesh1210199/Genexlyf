import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Compass, Users, Code2, Zap, Brain, CheckCircle2, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const founders = [
  {
    name: "Dinesh",
    role: "Founder & Chief Technology Officer (CTO)",
    description: "Dinesh leads the technology vision at Genexlyf, with a strong background in software engineering, cloud platforms, automation, and AI-driven systems. He focuses on building scalable architectures and innovative solutions that align technology with real business needs.",
  },
  {
    name: "Merlin Mercy",
    role: "Founder & Chief Operating Officer (COO)",
    description: "Merlin drives operations, strategy, and execution at Genexlyf. With a keen focus on process, collaboration, and delivery, she ensures that ideas translate into reliable, impactful solutions while keeping clients and teams aligned.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web, mobile, and enterprise-grade applications built for performance and scale.",
  },
  {
    icon: Zap,
    title: "Technology Services & Automation",
    description: "AI-powered automation, workflow optimization, and IT consulting to streamline operations.",
  },
  {
    icon: Brain,
    title: "Digital Products & Platforms",
    description: "In-house platforms and tools designed to solve domain-specific challenges and enable smarter decision-making.",
  },
];

const whyGenexlyf = [
  "AI-first and automation-driven mindset",
  "Hybrid IT model (software, services, products)",
  "Founder-led execution and accountability",
  "Human-centered design philosophy",
  "Built for scalability, security, and growth",
];

export default function About() {
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
              About Genexlyf
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Generation Next Life Technology
            </h1>
            <p className="text-lg md:text-xl text-[#E0F2FE] leading-relaxed">
              Genexlyf is a next-generation hybrid IT venture focused on building intelligent software, scalable services, and future-ready digital products. We blend AI, automation, and modern engineering to help businesses grow smarter, faster, and stronger in an ever-evolving digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
                How It Started
              </h2>
              <div className="space-y-4 text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                <p className="text-lg">
                  Genexlyf was founded with a simple but powerful idea:
                </p>
                <p className="text-lg font-medium text-[#0A0A0A]">
                  👉 Technology should not just solve problems — it should improve lives and enable growth.
                </p>
                <p className="text-lg">
                  What started as a vision to build meaningful, intelligent systems has grown into a venture that collaborates closely with businesses to design solutions tailored to real-world challenges. From early concepts to scalable platforms, our journey is driven by curiosity, execution, and impact.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0D4BEF]/10 to-[#1F8CFF]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto mb-4 border-4 border-[#0D4BEF]/30 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-[#0D4BEF]" />
                  </motion.div>
                  <p className="text-lg font-semibold text-[#0A0A0A]">Since 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedCard>
              <div className="w-14 h-14 bg-[#0D4BEF]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0D4BEF]" />
              </div>
              <span className="inline-block text-sm font-medium text-[#1E63E9] mb-2">Our Mission</span>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">What We Aim to Do</h3>
              <p className="text-[#5F6B7A] leading-relaxed mb-4" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Our mission is to empower organizations through AI-driven software, automation, and digital products that simplify complexity and unlock long-term value.
              </p>
              <p className="text-[#5F6B7A] font-medium mb-2">We aim to:</p>
              <ul className="space-y-2 text-[#5F6B7A]" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                <li>• Build technology that adapts and evolves</li>
                <li>• Create solutions that are practical, scalable, and human-focused</li>
                <li>• Help businesses stay future-ready, not just tech-enabled</li>
              </ul>
            </AnimatedCard>
            <AnimatedCard delay={0.1}>
              <div className="w-14 h-14 bg-[#1F8CFF]/20 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-[#1F8CFF]" />
              </div>
              <span className="inline-block text-sm font-medium text-[#1E63E9] mb-2">Our Vision</span>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">Where We're Headed</h3>
              <p className="text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                We envision a future where AI and automation seamlessly work alongside human intelligence, enabling businesses to operate efficiently, innovate continuously, and grow sustainably.
              </p>
              <p className="text-[#5F6B7A] leading-relaxed mt-4" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Genexlyf exists to shape the next life of technology — intelligent, responsible, and impactful.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="⚙️ What We Do (Hybrid IT Positioning)"
            title="Our Capabilities"
            description="At Genexlyf, we operate across three core pillars:"
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <AnimatedCard key={capability.title} delay={index * 0.1}>
                  <div className="w-14 h-14 bg-[#0D4BEF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <capability.icon className="w-7 h-7 text-[#0D4BEF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{capability.title}</h3>
                  <p className="text-[#475569] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                    {capability.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="🤝 How We Work"
            title="Our Approach"
            description="We believe the best technology is built through collaboration."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "We listen before we build",
                "We prototype fast and iterate smarter",
                "We focus on outcomes, not just delivery",
                "We grow alongside our clients as long-term partners",
              ].map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0D4BEF] mt-0.5 flex-shrink-0" />
                  <p className="text-[#0F172A] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="👨‍💻 Founders Section"
            title="Meet the Founders"
            description="The minds behind Genexlyf's vision and execution."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <AnimatedCard key={founder.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0D4BEF]/20 to-[#1F8CFF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-[#0D4BEF]">{founder.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">{founder.name}</h3>
                  <p className="text-[#1E63E9] font-semibold text-sm mb-4">{founder.role}</p>
                  <p className="text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                    {founder.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Genexlyf */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#E0F2FE] text-sm font-medium mb-6 border border-[#38BDF8]/30">
                <Sparkles className="w-4 h-4 text-[#22D3EE]" />
                 Why Genexlyf
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
                What Sets Us Apart
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
                {whyGenexlyf.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                    <p className="text-[#E0F2FE] text-left font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Let's Build Together
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
