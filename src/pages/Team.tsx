import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, Code, Settings, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const founders = [
  {
    name: "Dinesh",
    role: "Founder & Chief Technology Officer (CTO)",
    description: "Dinesh leads the technology vision at Genexlyf. With a strong background in software engineering, cloud infrastructure, automation, and AI-driven systems, he focuses on building scalable architectures and intelligent platforms that solve real-world problems.",
    focuses: [
      "System architecture & design",
      "Product engineering",
      "AI & automation strategy",
      "Security, scalability, and performance",
    ],
    focusLabel: "He is deeply involved in:",
    quote: "Technology should simplify life, not complicate it.",
  },
  {
    name: "Merlin",
    role: "Founder & Chief Operating Officer (COO)",
    description: "Merlin drives operations, strategy, and execution at Genexlyf. She ensures ideas move smoothly from concept to delivery while keeping clients, processes, and priorities aligned.",
    focuses: [
      "Operations & delivery management",
      "Client collaboration",
      "Process optimization",
      "Business strategy & growth",
    ],
    focusLabel: "She focuses on:",
    quote: "Great execution turns good ideas into real impact.",
  },
];

const leanTeamBenefits = [
  "Faster decisions",
  "Clear ownership",
  "Direct collaboration",
  "Zero communication noise",
];

const howWeWork = [
  "Founders work directly with clients",
  "No hand-offs, no layers",
  "Decisions are fast and informed",
  "Quality is non-negotiable",
];

const futureTeam = [
  "Engineers who love problem-solving",
  "AI and automation specialists",
  "Product-minded thinkers",
];

export default function Team() {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              The Minds Behind Genexlyf
            </h1>
            <p className="text-lg md:text-xl text-[#C7D2E0] leading-relaxed">
              Genexlyf is a founder-led hybrid IT venture built by people who believe technology should be practical, intelligent, and impactful. We may be a small team today, but we bring deep focus, accountability, and hands-on execution to everything we build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4 border border-cyan-500/30">
                  <Sparkles className="w-4 h-4" />
                  Team Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why a Lean Team Works
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#C7D2E0] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We believe small, focused teams build better products.
                </p>
                <ul className="space-y-2 text-[#C7D2E0] mb-6 list-none" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  {leanTeamBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#C7D2E0] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Every solution at Genexlyf is designed, reviewed, and guided by the founders themselves.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <AnimatedCard key={founder.name} delay={index * 0.1} className="p-8 lg:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <span className="text-3xl font-bold text-cyan-400">{founder.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{founder.name}</h3>
                      <p className="text-cyan-400 font-semibold">{founder.role}</p>
                    </div>
                    <p className="text-[#C7D2E0] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                      {founder.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-white font-semibold mb-3">{founder.focusLabel}</p>
                      <ul className="space-y-2">
                        {founder.focuses.map((focus, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#C7D2E0]">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border-l-4 border-cyan-400">
                      <p className="text-white font-medium italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                        "{founder.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work As A Team */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="How We Work As A Team"
            title="Founder-Led Execution"
            description="This approach allows us to deliver high-quality solutions with clarity and trust."
          />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-[#C7D2E0] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                At Genexlyf:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {howWeWork.map((principle, index) => (
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

      {/* Growing With Purpose */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4 border border-cyan-500/30">
                  <Users className="w-4 h-4" />
                  Growing With Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Future Team
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#C7D2E0] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We're building Genexlyf thoughtfully.
                </p>
                <p className="text-[#C7D2E0] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  As we grow, we plan to bring in:
                </p>
                <ul className="space-y-2 text-[#C7D2E0] mb-6 list-none" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  {futureTeam.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#C7D2E0] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Not just employees — builders.
                </p>
                <p className="text-[#C7D2E0] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  (Want to be part of the journey?)
                </p>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/careers">
                    Careers at Genexlyf (Coming Soon)
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24" style={{
        background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
                Want to Work With Us?
              </h2>
              <p className="text-lg text-[#C7D2E0] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Whether you're a client, collaborator, or future team member — we'd love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Talk to Us
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  asChild
                  className="hover:scale-105 active:scale-95 transition-all"
                >
                  <Link to="/portfolio">
                    Explore Our Work
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
