import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Code2, Settings, Zap, Cloud } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Intelligent systems that streamline operations and boost efficiency through machine learning and predictive analytics.",
    features: ["Process Automation", "Predictive Analytics", "Smart Decision Support", "Workflow Optimization"],
  },
  {
    icon: GraduationCap,
    title: "Campus Innovation Solutions",
    description: "Smart solutions for educational institutions to enhance learning experiences and administrative efficiency.",
    features: ["Student Engagement Tools", "Administrative Automation", "Learning Analytics", "Facility Management"],
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description: "Rapid prototyping and development of scalable digital products and platforms tailored to your needs.",
    features: ["Rapid Prototyping", "Full-Stack Development", "API Integration", "Mobile Solutions"],
  },
  {
    icon: Settings,
    title: "IT Strategy & Consulting",
    description: "Digital transformation consulting and infrastructure optimization to future-proof your organization.",
    features: ["Digital Roadmaps", "Infrastructure Audit", "Tech Stack Advisory", "Change Management"],
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamless integration of AI solutions with your existing systems and workflows.",
    features: ["System Integration", "Data Migration", "API Development", "Legacy Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern enterprises.",
    features: ["Cloud Architecture", "DevOps Implementation", "Security Hardening", "Performance Optimization"],
  },
];

export default function Services() {
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
              Empowering Innovation Through Smart Services
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We explore AI-powered automation and campus solutions that evolve with your needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Custom Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Branches of Innovation"
            title="Our Services"
            description="We focus on strategic areas where AI and automation drive the most value—particularly in education technology and enterprise systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1} className="h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/contact">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Evolving Note */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground">
              Our service categories evolve continuously, reflecting our commitment to exploring new frontiers 
              and adapting to client needs. Each branch represents a future-ready solution designed for clarity, 
              scalability, and real impact.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
