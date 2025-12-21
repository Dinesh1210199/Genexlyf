import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{
      background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-blue-500/10 rounded-full blur-3xl"
        />
        {/* Decorative dots */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 193, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-8 border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              AI-Powered Innovation for Tomorrow
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FFFFFF] leading-tight mb-6"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}
          >
            Build the Generation's Next Life Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#C7D2E0] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build intelligent software, AI-driven automation, and future-ready digital products that help businesses evolve, scale, and lead the next generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="xl" 
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all border-0"
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button 
              size="xl" 
              className="bg-transparent text-cyan-300 border border-cyan-500/50 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-200 active:scale-95 transition-all"
              asChild
            >
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
