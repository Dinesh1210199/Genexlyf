import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, BookOpen, Cog, Sparkles, Clock, Rocket } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";

const products = [
  {
    icon: Layers,
    name: "CampusFlow AI",
    tagline: "Intelligent Campus Management",
    description: "A comprehensive platform automating scheduling, facilities management, and student engagement with AI-driven insights.",
    features: [
      "Automated class scheduling",
      "Facility utilization tracking",
      "Student engagement analytics",
      "Resource optimization",
      "Real-time notifications",
    ],
    status: "Coming Soon",
    statusColor: "bg-secondary text-secondary-foreground",
  },
  {
    icon: BookOpen,
    name: "EduSmart Suite",
    tagline: "AI-Driven Learning Tools",
    description: "Personalized education platform with adaptive learning paths and institutional efficiency tools.",
    features: [
      "Personalized learning paths",
      "Performance predictions",
      "Adaptive assessments",
      "Teacher dashboards",
      "Parent communication",
    ],
    status: "In Development",
    statusColor: "bg-accent text-accent-foreground",
  },
  {
    icon: Cog,
    name: "AutoRoot Engine",
    tagline: "Enterprise Workflow Automation",
    description: "Core automation platform powering enterprise workflows with operational intelligence and scalability.",
    features: [
      "Workflow automation",
      "Integration hub",
      "Process analytics",
      "Custom triggers",
      "API ecosystem",
    ],
    status: "Coming Soon",
    statusColor: "bg-secondary text-secondary-foreground",
  },
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              Built at the Roots
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Platforms Built for Tomorrow
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Intelligent foundations that power AI automation and campus innovation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Early Access</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Platforms"
            title="Evolving Products"
            description="Platforms designed from the ground up for seamless integration and growth."
          />

          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl border border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <product.icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge className={product.statusColor}>
                        <Clock className="w-3 h-3 mr-1" />
                        {product.status}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-secondary font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                    <div className="flex gap-3">
                      <Button variant="default" size="lg" asChild>
                        <Link to="/contact">
                          Request Beta Access
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-8 lg:p-12 flex items-center">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                              <Rocket className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">More Platforms in Development</h3>
            <p className="text-muted-foreground mb-6">
              We're actively building new solutions to address emerging challenges in education and enterprise. 
              Stay connected to be the first to know about our upcoming releases.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Notified</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
