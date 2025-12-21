import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BeliefsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our vision, values, and AI-driven mindset shape everything we build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Belief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[20px] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="w-14 h-14 bg-[#1E63E9]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#1E63E9]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-4" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Our Core Belief</h3>
            <p className="text-[#5F6B7A] mb-6" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              At Genexlyf, we believe technology should elevate people and businesses, not complicate them. By combining intelligent software, AI-powered automation, and thoughtful design, we transform complex challenges into scalable, real-world solutions that create lasting impact.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#1E63E9] font-medium hover:gap-3 transition-all group">
              <span>Explore Our Values</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0D4BEF] to-[#1F8CFF] rounded-[20px] p-8 shadow-[0_12px_30px_rgba(13,75,239,0.25)] hover:shadow-[0_16px_40px_rgba(13,75,239,0.35)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>The Future We're Building</h3>
            <p className="text-white/90 mb-6" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              We envision a world where AI, automation, and digital products work seamlessly with human intelligence. From enterprises to emerging businesses, we help organizations scale smarter, move faster, and build sustainable growth through next-generation technology.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
              <span>View Our Vision</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
