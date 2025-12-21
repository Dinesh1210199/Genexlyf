import { motion } from "framer-motion";
import { Brain, Users, Zap, Shield, TrendingUp, Heart } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "We design every solution with intelligence at its core—leveraging AI, automation, and data to create smarter, faster, and more adaptive systems.",
  },
  {
    icon: Users,
    title: "Client-Centric Collaboration",
    description: "We work as an extension of your team, deeply understanding your goals before building solutions that fit your business—not the other way around.",
  },
  {
    icon: Zap,
    title: "Rapid Build & Deploy",
    description: "From idea to implementation, we move fast. Our agile process helps launch reliable solutions quickly without compromising quality.",
  },
  {
    icon: Shield,
    title: "Scalable & Secure Architecture",
    description: "Our systems are built to grow with you—secure, cloud-ready, and designed to handle evolving business demands.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Business Impact",
    description: "We focus on outcomes, not just outputs. Every solution is designed to deliver visible improvements in efficiency, growth, and performance.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    description: "We don't just deliver and disappear. We grow with our clients, providing continuous support, optimization, and innovation.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24" style={{
      background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
    }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4 border border-cyan-500/30">
              Why Genexlyf
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
              Why We Stand Apart
            </h2>
            <p className="text-lg text-[#C7D2E0] mb-8" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              At Genexlyf, we combine deep technical expertise with a collaborative, human-first approach to deliver software, services, and products that truly move businesses forward.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <reason.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>{reason.title}</h4>
                    <p className="text-sm text-[#C7D2E0]" style={{ lineHeight: '1.5', fontFamily: 'Inter, sans-serif' }}>{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl" />
              
              {/* Animated rings */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-8 border-2 border-cyan-500/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.05, 1, 1.05] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-16 border-2 border-cyan-400/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-24 border-2 border-cyan-500/25 rounded-full"
              />
              
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-48 h-48 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.95, 1, 0.95]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/Logo.ico.png" 
                    alt="Genexlyf Logo" 
                    className="w-full h-full object-contain"
                    style={{ 
                      backgroundColor: 'transparent',
                      background: 'transparent'
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-cyan-500/30"
              >
                <span className="text-sm font-medium text-cyan-400">AI-First</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-gradient-to-r from-[#1E63E9] to-[#22C1FF] px-4 py-2 rounded-full shadow-md"
              >
                <span className="text-sm font-medium text-white">Scalable • Secure • Future-Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
