import { motion } from "framer-motion";
import { Check, Sparkles, Users, Zap, Shield, TrendingUp, Heart } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Innovation-First Mindset",
    description: "We challenge conventional approaches with cutting-edge AI solutions.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Technology that empowers people, not replaces them.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From concept to working solution in record time.",
  },
  {
    icon: Shield,
    title: "Scalable Architecture",
    description: "Solutions that grow with your organization.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Data-driven results you can see and track.",
  },
  {
    icon: Heart,
    title: "Partnership Approach",
    description: "We succeed when you succeed. Long-term collaboration.",
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
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why We Stand Tall
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Uproot Innovations, we combine deep technical expertise with a genuine passion 
              for transforming how organizations operate. Here's what sets us apart.
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
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
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
                <div className="w-32 h-32 bg-hero-gradient rounded-3xl shadow-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">U</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-card px-4 py-2 rounded-full shadow-md border border-border"
              >
                <span className="text-sm font-medium text-foreground">AI-First</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-secondary px-4 py-2 rounded-full shadow-md"
              >
                <span className="text-sm font-medium text-secondary-foreground">Scalable</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
