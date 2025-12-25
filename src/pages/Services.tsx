import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Code2, Settings, Zap, Sparkles, CheckCircle2, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "We design and build tailor-made software solutions aligned with your business goals.",
    whatWeDo: [
      "Web & mobile application development",
      "Enterprise-grade systems",
      "API & system integrations",
      "Cloud-native & scalable architectures",
    ],
    whyItMatters: "Software built specifically for your workflow improves efficiency, security, and growth potential.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description: "We use AI and automation to eliminate repetitive tasks, optimize processes, and enable smarter decision-making.",
    whatWeDo: [
      "Workflow automation",
      "AI-powered data processing",
      "Intelligent dashboards & insights",
      "Predictive and rule-based systems",
    ],
    whyItMatters: "Automation saves time. AI adds intelligence. Together, they transform operations.",
  },
  {
    icon: Settings,
    title: "Technology Services & IT Consulting",
    description: "We help businesses make the right technology decisions and implement them effectively.",
    whatWeDo: [
      "IT strategy & architecture planning",
      "System modernization",
      "Cloud & infrastructure guidance",
      "Process optimization",
    ],
    whyItMatters: "Right tech choices today prevent expensive fixes tomorrow.",
  },
  {
    icon: Brain,
    title: "Digital Products & Platforms",
    description: "We build and evolve in-house platforms and products designed to solve real-world problems.",
    whatWeDo: [
      "AI-driven platforms",
      "Campus & enterprise solutions",
      "Automation engines",
      "Scalable SaaS-ready products",
    ],
    whyItMatters: "Products allow businesses to scale faster with repeatable, proven solutions.",
  },
  {
    icon: GraduationCap,
    title: "Campus & Enterprise Solutions",
    description: "Specialized solutions designed for institutions and enterprises to manage operations efficiently.",
    whatWeDo: [
      "Campus management systems",
      "Workflow & operations automation",
      "Reporting & analytics",
      "System integrations",
    ],
    whyItMatters: "Structured environments need reliable, intelligent systems to scale smoothly.",
  },
];

const howWeDeliver = [
  "Understand your problem deeply",
  "Design practical, future-ready solutions",
  "Build fast, iterate smart",
  "Deliver with transparency",
  "Support and evolve continuously",
];

const whyChooseGenexlyf = [
  "Hybrid IT approach (software + services + products)",
  "AI-first mindset",
  "Founder-led execution",
  "Scalable and secure solutions",
  "Focus on real business impact",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{
        background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Technology That Works the Way You Do
            </h1>
            <p className="text-lg md:text-xl text-[#C7D2E0] leading-relaxed">
              At Genexlyf, we offer a flexible mix of software development, AI-powered services, and digital products. We work closely with our clients to understand their challenges and deliver solutions that are practical, scalable, and built for long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Service Pillars"
            title="What We Offer"
            description="We operate as a hybrid IT partner, covering the full lifecycle — from idea to implementation and beyond."
          />

          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-[#C7D2E0] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-white font-semibold mb-3">What we do:</p>
                      <ul className="space-y-2">
                        {service.whatWeDo.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[#C7D2E0]">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <p className="text-white font-semibold mb-1">Why it matters:</p>
                      <p className="text-[#C7D2E0]" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                        {service.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
      }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="How We Deliver"
            title="Our Working Model"
            description="We don't just deliver projects — we build long-term partnerships."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {howWeDeliver.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-xl p-4 shadow-sm border border-cyan-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Genexlyf */}
      <section className="py-24" style={{
        background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Why Choose Genexlyf
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
                Our Advantage
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
                {whyChooseGenexlyf.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-cyan-500/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-cyan-500/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-cyan-300 text-left font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build the Right Solution Together
              </h2>
              <p className="text-lg text-[#C7D2E0] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Have an idea, challenge, or requirement?<br />
                We'll help you turn it into a working, scalable solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Talk to Us
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/products">
                    Explore Our Platforms
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
