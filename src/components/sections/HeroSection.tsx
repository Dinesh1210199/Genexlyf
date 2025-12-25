import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24" style={{
      background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
    }}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-teal-500/8 rounded-full blur-3xl"
        />
        
        {/* Animated grid pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 193, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 193, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Enhanced Floating particles - More variety */}
        {[...Array(30)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 3;
          const randomDuration = Math.random() * 4 + 3;
          const particleSize = Math.random() * 3 + 1;
          const colors = ['cyan-400', 'blue-400', 'teal-400'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute bg-${color}/50 rounded-full blur-sm`}
              style={{
                width: `${particleSize}px`,
                height: `${particleSize}px`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                boxShadow: `0 0 ${particleSize * 2}px rgba(34, 193, 255, 0.5)`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -200, -400],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.5, 2, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeOut",
              }}
            />
          );
        })}
        
        {/* Animated connecting lines - using divs for better performance */}
        {[...Array(6)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const length = Math.random() * 200 + 100;
          const angle = Math.random() * 360;
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute origin-top-left"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${length}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(34, 193, 255, 0.3), transparent)',
                transform: `rotate(${angle}deg)`,
                opacity: 0.15,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
        
        {/* Geometric shapes */}
        {[...Array(6)].map((_, i) => {
          const shapes = ['circle', 'square', 'triangle'];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          const size = Math.random() * 60 + 20;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <motion.div
              key={`shape-${i}`}
              className={`absolute border border-cyan-500/20`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                borderRadius: shape === 'circle' ? '50%' : shape === 'triangle' ? '0' : '8px',
                clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          );
        })}
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-tight mb-6 px-2"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}
          >
            Build the Generation's Next Life Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#C7D2E0] max-w-2xl mx-auto mb-10 leading-relaxed"
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
