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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
              Why Genexlyf
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
              Why We Stand Apart
            </h2>
            <p className="text-lg text-[#5F6B7A] mb-8" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
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
                  <div className="w-10 h-10 bg-[#1E63E9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-[#1E63E9]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>{reason.title}</h4>
                    <p className="text-sm text-[#475569]" style={{ lineHeight: '1.5', fontFamily: 'Inter, sans-serif' }}>{reason.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 rounded-3xl" />
              
              {/* Animated rings */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-8 border-2 border-primary/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.05, 1, 1.05] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-16 border-2 border-secondary/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-24 border-2 border-primary/15 rounded-full"
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
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200"
              >
                <span className="text-sm font-medium text-[#1E63E9]">AI-First</span>
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
