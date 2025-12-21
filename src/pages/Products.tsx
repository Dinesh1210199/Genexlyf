import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Zap, School, Sparkles, CheckCircle2, Building2, Shield, Users, Cog } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";

const products = [
  {
    icon: Mail,
    name: "Genexlyf Mail & Tenant Intelligence Platform",
    status: "In Active Development",
    statusEmoji: "🚧",
    description: "A secure, multi-tenant platform designed to help organizations manage users, control access, and gain intelligence from email data—without compromising privacy or compliance.",
    keyCapabilities: [
      "Multi-Tenant Architecture - Manage multiple organizations, departments, or clients from a single platform.",
      "RBAC (Role-Based Access Control) - Granular permissions to control what each user can view or manage.",
      "Controlled Mail Access - View and manage email data based on role and authorization—aligned with enterprise architecture and compliance needs.",
      "Email Archiving & Backup - Securely archive emails for compliance, auditing, and long-term access.",
      "Mail Data Export & Downloads - Download email datasets in structured formats for analysis, backup, or reporting.",
      "AI-Powered Insights (Planned) - Email forecasting, usage trends, and intelligent insights using AI models.",
    ],
    useCases: [
      "Enterprises managing internal email governance",
      "IT admins and security teams",
      "Compliance and audit-driven organizations",
      "Multi-client service providers",
    ],
  },
  {
    icon: Zap,
    name: "Genexlyf AutoFlow Engine",
    status: "Coming Soon",
    description: "A core automation engine to streamline workflows, integrate systems, and reduce manual operational effort.",
    highlights: [
      "Workflow automation",
      "System integrations",
      "Rule-based & AI-assisted processes",
      "Scalable for enterprise operations",
    ],
  },
  {
    icon: School,
    name: "Genexlyf CampusFlow",
    status: "Planned / In Development",
    statusEmoji: "📋",
    description: "An intelligent platform designed for educational institutions and structured organizations to manage operations, engagement, and analytics efficiently.",
    highlights: [
      "Administrative automation",
      "Scheduling & operations management",
      "Data-driven insights",
      "Secure, role-based access",
    ],
  },
];

const architecturePrinciples = [
  "Multi-tenant & scalable by design",
  "Secure, role-based access (RBAC)",
  "Cloud-ready architectures",
  "AI-first but compliance-aware",
  "Modular and extensible",
];

const roadmapItems = [
  "Advanced AI-driven analytics",
  "Predictive insights & forecasting",
  "Deeper system integrations",
  "Enhanced security & compliance features",
];

const whoProductsAreFor = [
  "Enterprises & growing organizations",
  "IT & security teams",
  "Institutions & service providers",
  "Businesses seeking automation and intelligence",
];

export default function Products() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#E0F2FE] text-sm font-medium mb-6 border border-[#38BDF8]/30">
              <Sparkles className="w-4 h-4 text-[#22D3EE]" />
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Platforms Built for the Next Generation of Digital Operations
            </h1>
            <p className="text-lg md:text-xl text-[#E0F2FE] leading-relaxed">
              At Genexlyf, our products are designed to solve real operational and enterprise challenges. We build intelligent platforms that combine automation, security, AI, and scalability—ready to grow with modern organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
                  <Sparkles className="w-4 h-4" />
                  Product Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  Why We Build Products
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#5F6B7A] mb-4 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  We build products to:
                </p>
                <ul className="space-y-2 text-[#5F6B7A] mb-6 list-none" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduce operational complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improve visibility and control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enable secure, scalable digital workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Support long-term growth with minimal overhead</span>
                  </li>
                </ul>
                <p className="text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                  Each product is crafted with enterprise architecture, AI-readiness, and real-world usability in mind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <AnimatedCard key={product.name} delay={index * 0.1} className="p-8 lg:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-[#0D4BEF]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-8 h-8 text-[#0D4BEF]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">{product.name}</h3>
                      <Badge className="bg-[#EAF2FF] text-[#1E63E9] border-none">
                        {product.statusEmoji} {product.status}
                      </Badge>
                    </div>
                    <p className="text-[#5F6B7A] mb-6 leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                      {product.description}
                    </p>
                    
                    {product.keyCapabilities && (
                      <div className="mb-6">
                        <h4 className="text-[#0F172A] font-semibold mb-4">🔹 Key Capabilities</h4>
                        <ul className="space-y-3">
                          {product.keyCapabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#475569]">
                              <div className="w-1.5 h-1.5 bg-[#0D4BEF] rounded-full mt-2 flex-shrink-0" />
                              <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.highlights && (
                      <div className="mb-6">
                        <h4 className="text-[#0F172A] font-semibold mb-4">Highlights:</h4>
                        <ul className="space-y-2">
                          {product.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#475569]">
                              <div className="w-1.5 h-1.5 bg-[#0D4BEF] rounded-full mt-2 flex-shrink-0" />
                              <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.useCases && (
                      <div className="bg-[#EAF2FF] rounded-lg p-4">
                        <h4 className="text-[#0F172A] font-semibold mb-3">🔹 Use Cases</h4>
                        <ul className="space-y-2">
                          {product.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#475569]">
                              <div className="w-1.5 h-1.5 bg-[#1E63E9] rounded-full mt-2 flex-shrink-0" />
                              <span style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Product Architecture Principles */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="🧩 Product Architecture Principles"
            title="How Our Products Are Built"
            description="All Genexlyf products follow these core principles:"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {architecturePrinciples.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0D4BEF] mt-0.5 flex-shrink-0" />
                  <p className="text-[#0F172A] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="🛣 Product Roadmap (Safe for Startup)"
            title="What's Coming Next"
            description="(Roadmap evolves based on real customer needs.)"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#EAF2FF] rounded-xl p-4"
                >
                  <div className="w-1.5 h-1.5 bg-[#1E63E9] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#0F172A] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Our Products Are For */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#E0F2FE] text-sm font-medium mb-6 border border-[#38BDF8]/30">
                <Users className="w-4 h-4 text-[#22D3EE]" />
                🤝 Who Our Products Are For
              </span>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {whoProductsAreFor.map((target, index) => (
                  <motion.div
                    key={target}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                    <p className="text-[#E0F2FE] text-left font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {target}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Interested in Early Access or Collaboration?
              </h2>
              <p className="text-lg text-[#5F6B7A] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                We're actively building and evolving our platforms.<br />
                If you'd like to explore early access, partnerships, or custom extensions:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    👉 Talk to Us
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">
                    👉 Request a Demo
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
