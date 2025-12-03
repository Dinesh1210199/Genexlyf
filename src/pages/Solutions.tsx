import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, School, Building2, BarChart3, Users, Workflow, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";

const solutions = [
  {
    icon: School,
    title: "Campus Management",
    description: "Intelligent automation for scheduling, facilities, and student engagement systems.",
    benefits: ["Automated scheduling", "Facility optimization", "Student tracking", "Resource allocation"],
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Learning Enhancement",
    description: "AI tools that personalize education and optimize institutional workflows.",
    benefits: ["Personalized learning paths", "Performance analytics", "Engagement tracking", "Adaptive assessments"],
    color: "bg-secondary",
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description: "Optimize processes, boost efficiency, and scale operations through AI-powered tools.",
    benefits: ["Process automation", "Workflow optimization", "Cost reduction", "Scalable systems"],
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Operations",
    description: "Turn data into actionable insights with predictive analytics and decision-making platforms.",
    benefits: ["Predictive analytics", "Real-time dashboards", "Smart alerts", "Decision support"],
    color: "bg-secondary",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Scalable AI solutions for operational efficiency and strategic decision-making.",
    benefits: ["End-to-end automation", "Integration ready", "Custom workflows", "Compliance support"],
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "Intelligent Analytics",
    description: "Advanced analytics that transform raw data into strategic business intelligence.",
    benefits: ["Data visualization", "Trend analysis", "Forecasting", "Custom reports"],
    color: "bg-secondary",
  },
];

export default function Solutions() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Intelligence That Solves Real Challenges
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We transform complex problems into actionable AI-driven solutions for education and enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Find Your Solution</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Intelligence in Action"
            title="Tailored Solutions by Industry"
            description="Our solutions connect real-world challenges to innovative AI and automation outcomes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl border border-border overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className={`${solution.color} p-6`}>
                  <solution.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to="/contact">
                        See Use Case
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <Link to="/contact">Get Demo</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
