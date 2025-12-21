import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Code2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description: "Smart systems that automate workflows, optimize operations, and unlock data-driven decisions using AI and machine learning.",
  },
  {
    icon: GraduationCap,
    title: "EdTech & Smart Campus Solutions",
    description: "Digital platforms and automation tools for educational institutions—enhancing learning, administration, and student engagement.",
  },
  {
    icon: Code2,
    title: "Product Engineering & Development",
    description: "End-to-end product development—from idea and prototyping to scalable, secure, and high-performance digital platforms.",
  },
  {
    icon: Settings,
    title: "IT Consulting & Digital Strategy",
    description: "Technology consulting, cloud architecture, and system optimization to help organizations modernize and scale efficiently.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24" style={{
      background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
    }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="What We Do"
          title="Our Core Technology Pillars"
          description="We design, build, and scale intelligent digital solutions using AI, automation, and modern engineering—helping businesses move faster, smarter, and future-ready."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.title} 
              delay={index * 0.1}
              className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/30">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>{service.title}</h3>
              <p className="text-[#C7D2E0] text-sm" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="hover:scale-105 active:scale-95 transition-all"
            asChild
          >
            <Link to="/services">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
