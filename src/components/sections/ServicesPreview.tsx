import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Code2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Intelligent systems that streamline operations and boost efficiency through machine learning.",
  },
  {
    icon: GraduationCap,
    title: "Campus Innovation",
    description: "Smart solutions for educational institutions to enhance learning and administration.",
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description: "Rapid prototyping and development of scalable digital products and platforms.",
  },
  {
    icon: Settings,
    title: "IT Strategy",
    description: "Digital transformation consulting and infrastructure optimization services.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="What We Do"
          title="Branches of Innovation"
          description="We focus on strategic areas where AI and automation drive the most value—particularly in education technology and enterprise systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
