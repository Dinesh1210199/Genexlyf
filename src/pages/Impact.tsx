import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";

const stats = [
  { value: 40, suffix: "%", label: "Reduction in campus operation costs", icon: TrendingUp },
  { value: 25, suffix: "%", label: "Improvement in engagement analytics accuracy", icon: Users },
  { value: 30, suffix: "%", label: "Faster processing times", icon: Clock },
  { value: 50, suffix: "+", label: "Projects delivered", icon: Award },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const impactStories = [
  {
    title: "Campus Operation Efficiency",
    description: "AI-driven campus automation increased resource utilization by 35% while reducing costs significantly.",
    metric: "35% increase in utilization",
  },
  {
    title: "Personalized Learning Outcomes",
    description: "Our learning tools improved student retention by 20% through adaptive, personalized education paths.",
    metric: "20% retention improvement",
  },
  {
    title: "Enterprise Automation Success",
    description: "Automation solutions reduced manual tasks by 50%, freeing teams for strategic work.",
    metric: "50% reduction in manual tasks",
  },
];

export default function Impact() {
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
              Transforming Vision into Measurable Impact
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our results showcase the real-world power of AI and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="What We've Transformed"
            title="Measurable Results"
            description="We measure success by the tangible transformations our solutions bring."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Success Stories"
            title="Impact in Action"
            description="Real transformations from our AI and automation implementations."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-secondary/20 text-secondary text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {story.metric}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Want the Full Impact Report?</h3>
            <p className="text-muted-foreground mb-6">
              Get detailed case studies and metrics from our implementations.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Request Full Report
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
