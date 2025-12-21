import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const solutions = [
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description: "We design and build scalable, secure, and high-performance software tailored to your business needs—from web and mobile apps to enterprise-grade platforms.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation & Services",
    description: "Streamline operations, reduce manual effort, and improve efficiency with AI-powered automation, workflow optimization, and managed IT services.",
  },
  {
    icon: Brain,
    title: "AI-Powered Products & Insights",
    description: "Turn data into decisions using AI models, analytics, and intelligent systems that adapt, learn, and drive smarter outcomes.",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24" style={{
      background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
    }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Intelligence in Action"
          title="Smart Technology for Real-World Growth"
          description="AI-driven software, services, and digital products designed to solve real business problems and elevate modern organizations."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-[20px] p-8 h-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E63E9] to-[#22C1FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>{solution.title}</h3>
                <p className="text-[#C7D2E0] mb-6" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>{solution.description}</p>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 hover:gap-3 transition-all group/link"
                >
                  View Use Cases
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:scale-105 active:scale-95 transition-all"
            asChild
          >
            <Link to="/solutions">
              Explore All Solutions
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
