import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Brain, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const impacts = [
  {
    icon: Zap,
    title: "Idea to Execution",
    description: "From concept to working solutions through rapid prototyping and agile delivery.",
  },
  {
    icon: Brain,
    title: "AI-First Solutions",
    description: "Designing intelligent systems with automation and data-driven thinking at the core.",
  },
  {
    icon: Users,
    title: "Client-Centric Builds",
    description: "Every project starts with understanding people, processes, and real-world needs.",
  },
  {
    icon: Handshake,
    title: "Growing Collaborations",
    description: "Working with early partners, institutions, and businesses on next-gen solutions.",
  },
];

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
    }}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-foreground/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 text-sm font-medium rounded-full mb-4 border border-cyan-500/30">
            Our Early Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
            Impact in Progress
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            As a growing startup, we focus on building strong foundations, meaningful outcomes, and scalable solutions that create real value from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <impact.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
                {impact.title}
              </h3>
              <p className="text-white/80 text-sm" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero"
            size="lg" 
            className="hover:scale-105 active:scale-95 transition-all"
            asChild
          >
            <Link to="/impact">
              Explore Our Journey
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
