import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BeliefsSection() {
  return (
    <section className="py-16" style={{
      background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            What We Stand For
          </h2>
          <p className="text-base text-[#C7D2E0] max-w-2xl mx-auto">
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
            className="bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-[20px] p-8 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-cyan-500/20"
          >
            <motion.div 
              className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Target className="w-7 h-7 text-cyan-400 relative z-10 group-hover:text-cyan-300 transition-colors" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>Our Core Belief</h3>
            <p className="text-[#C7D2E0] mb-6" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              At Genexlyf, we believe technology should elevate people and businesses, not complicate them. By combining intelligent software, AI-powered automation, and thoughtful design, we transform complex challenges into scalable, real-world solutions that create lasting impact.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 hover:gap-3 transition-all group">
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
            className="bg-gradient-to-br from-[#1E63E9] via-[#22C1FF] to-[#2EE6D6] rounded-[20px] p-8 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <motion.div 
              className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: -360 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/30 to-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Compass className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>The Future We're Building</h3>
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
