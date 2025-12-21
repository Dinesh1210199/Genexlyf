import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Brain, School, Package, Settings, Sparkles, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise & Business Solutions",
    description: "We help organizations streamline operations, improve visibility, and scale efficiently using intelligent systems.",
    whatWeSolve: [
      "Manual and inefficient workflows",
      "Disconnected systems and data silos",
      "Operational delays and overhead",
    ],
    ourApproach: [
      "Workflow automation",
      "System integration",
      "Custom dashboards & reporting",
      "Scalable enterprise architectures",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data-Driven Solutions",
    description: "We apply AI where it makes sense — to enhance decision-making, reduce effort, and unlock insights.",
    whatWeSolve: [
      "Lack of actionable data",
      "Slow decision-making",
      "Repetitive, rule-based tasks",
    ],
    ourApproach: [
      "Intelligent automation",
      "AI-powered analytics",
      "Rule engines & predictive systems",
      "Insight-driven dashboards",
    ],
  },
  {
    icon: School,
    title: "Campus & Institutional Solutions",
    description: "Purpose-built solutions for educational institutions and structured environments.",
    whatWeSolve: [
      "Manual administration",
      "Inefficient scheduling and operations",
      "Poor visibility across departments",
    ],
    ourApproach: [
      "Campus management platforms",
      "Automation for administration",
      "Engagement & analytics systems",
      "Secure, scalable infrastructure",
    ],
  },
  {
    icon: Package,
    title: "Digital Products & Platforms",
    description: "We build reusable, scalable platforms that address specific industry needs.",
    whatWeSolve: [
      "Repetitive custom development",
      "Scaling challenges",
      "Time-to-market delays",
    ],
    ourApproach: [
      "Modular platform design",
      "AI-enabled product features",
      "SaaS-ready architectures",
      "Continuous evolution & upgrades",
    ],
  },
  {
    icon: Settings,
    title: "IT Strategy & Modernization",
    description: "We help businesses rethink and modernize their technology stack.",
    whatWeSolve: [
      "Outdated systems",
      "Poor scalability",
      "Security and performance issues",
    ],
    ourApproach: [
      "Technology assessments",
      "Cloud & architecture planning",
      "System modernization",
      "Long-term IT roadmaps",
    ],
  },
];

const solutionFramework = [
  "Understand the real problem",
  "Design a practical solution",
  "Build with scalability in mind",
  "Integrate AI & automation where needed",
  "Deploy, measure, and evolve",
];

const whyGenexlyfSolutions = [
  "Hybrid IT model (software + services + products)",
  "AI-first but practical approach",
  "Founder-led involvement",
  "Scalable and secure by design",
  "Built for real adoption, not demos",
];

export default function Solutions() {
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
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Technology Built to Solve Real-World Problems
            </h1>
            <p className="text-lg md:text-xl text-[#C7D2E0] leading-relaxed">
              At Genexlyf, our solutions are designed around real business challenges, not buzzwords. By combining AI, automation, and modern software engineering, we help organizations simplify operations, make smarter decisions, and grow sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16" style={{
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
                How We Create Impact
              </h2>
              <p className="text-lg text-[#C7D2E0] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                We don't believe in one-size-fits-all tools.<br />
                Our solutions are customized, scalable, and future-ready, built by closely understanding how your business actually works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <AnimatedCard key={solution.title} delay={index * 0.1} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <solution.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-[#C7D2E0] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                      {solution.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-white font-semibold mb-3">What we solve:</p>
                        <ul className="space-y-2">
                          {solution.whatWeSolve.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[#C7D2E0]">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-3">Our approach:</p>
                        <ul className="space-y-2">
                          {solution.ourApproach.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[#C7D2E0]">
                              <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 flex-shrink-0" />
                              <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Solutions Work */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="How Our Solutions Work"
            title="Our Solution Framework"
            description="Solutions that grow with you — not against you."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {solutionFramework.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-xl p-5 shadow-sm border border-cyan-500/20"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1E63E9] to-[#22C1FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}️⃣</span>
                  </div>
                  <p className="text-white font-medium pt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Genexlyf Solutions */}
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
                Why Genexlyf Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
                What Makes Our Solutions Different
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
                {whyGenexlyfSolutions.map((point, index) => (
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

      {/* Solutions CTA */}
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
                Let's Solve the Right Problem Together
              </h2>
              <p className="text-lg text-[#C7D2E0] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Whether you're improving operations, launching a new platform, or exploring AI adoption — we're ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    👉 Talk to Us
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/products">
                    👉 Explore Our Platforms
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
