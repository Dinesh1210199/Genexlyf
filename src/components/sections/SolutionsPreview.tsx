import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, School, Building2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const solutions = [
  {
    icon: School,
    title: "Education & Campus",
    description: "Streamline operations, enhance learning experiences, and automate administrative workflows.",
    color: "bg-primary",
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description: "Optimize processes, boost efficiency, and scale operations through AI-powered tools.",
    color: "bg-secondary",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Operations",
    description: "Turn data into actionable insights with predictive analytics and decision-making platforms.",
    color: "bg-primary",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Intelligence in Action"
          title="Smart Solutions for Real Challenges"
          description="Tailored AI and automation solutions designed for specific challenges in education and enterprise environments."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card rounded-3xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  See Use Case
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
