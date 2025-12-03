import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Building, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";

const projects = [
  {
    title: "Campus Automation Pilot",
    client: "Educational Institution",
    description: "Streamlined scheduling and facility management for educational institutions using AI-driven insights and automation.",
    results: ["40% reduction in scheduling conflicts", "Improved resource utilization", "Real-time facility tracking"],
    status: "Completed",
    category: "Education",
  },
  {
    title: "AI Learning Analytics",
    client: "EdTech Partner",
    description: "Intelligent tool predicting student engagement patterns and optimizing learning paths through machine learning.",
    results: ["25% improvement in predictions", "Personalized recommendations", "Engagement dashboards"],
    status: "Pilot Phase",
    category: "AI/ML",
  },
  {
    title: "Enterprise Workflow Automation",
    client: "Manufacturing Enterprise",
    description: "Custom AI platform reducing operational bottlenecks and streamlining business processes.",
    results: ["40% faster processing", "Automated reporting", "Integrated systems"],
    status: "In Progress",
    category: "Enterprise",
  },
  {
    title: "Smart Campus Dashboard",
    client: "University System",
    description: "Real-time analytics platform for administrators providing insights on campus operations and student activities.",
    results: ["Centralized monitoring", "Predictive maintenance", "Resource optimization"],
    status: "Completed",
    category: "Education",
  },
  {
    title: "EduAI Assistant",
    client: "School Network",
    description: "Conversational AI for student support and administrative automation, handling queries and task management.",
    results: ["24/7 support availability", "Reduced admin workload", "Improved response times"],
    status: "Pilot Phase",
    category: "AI/ML",
  },
  {
    title: "Process Intelligence Engine",
    client: "Logistics Company",
    description: "Automation toolkit for enterprise operations with intelligent process mining and optimization.",
    results: ["30% efficiency gains", "Automated workflows", "Real-time insights"],
    status: "Early Deployment",
    category: "Enterprise",
  },
];

export default function Portfolio() {
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
              Our Trail of Innovation
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From prototypes to pilots, see how we're transforming challenges into scalable impact.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Trail of Impact"
            title="Featured Projects"
            description="Projects that showcase our AI and automation capabilities."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Building className="w-4 h-4" />
                    {project.client}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Portfolio */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Portfolio Expanding</h3>
            <p className="text-muted-foreground">
              We're building momentum through targeted projects that showcase our AI and automation capabilities. 
              Our portfolio evolves as we deliver transformative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
