import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Lightbulb, Users, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

const openings = [
  {
    title: "AI Engineer",
    team: "Campus Automation",
    location: "Remote / India",
    type: "Full-time",
    description: "Build intelligent systems that transform campus operations using machine learning and AI.",
  },
  {
    title: "Product Designer",
    team: "EdTech Focus",
    location: "Remote / India",
    type: "Full-time",
    description: "Design intuitive interfaces for education technology products that enhance learning experiences.",
  },
  {
    title: "Solutions Architect",
    team: "Enterprise AI",
    location: "Remote / India",
    type: "Full-time",
    description: "Design and implement scalable AI solutions for enterprise clients across industries.",
  },
  {
    title: "Full-Stack Developer",
    team: "AI Platforms",
    location: "Remote / India",
    type: "Full-time",
    description: "Build robust platforms that power our AI and automation solutions end-to-end.",
  },
];

const values = [
  { icon: Heart, title: "Purpose-Driven", description: "Work on solutions that create real impact" },
  { icon: Lightbulb, title: "Innovation", description: "Bold experimentation is encouraged" },
  { icon: Users, title: "Collaboration", description: "Grow together with a supportive team" },
  { icon: Zap, title: "Growth", description: "Continuous learning and development" },
];

export default function Careers() {
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
              Grow With Us
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join our mission to build AI-powered innovation from the roots up.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#openings">View Openings</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Culture"
            title="What We Value"
            description="We're seeking curious minds who thrive on exploration and impact."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Join the Team"
            title="Open Positions"
            description="Build your career at the intersection of AI, automation, and education."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      <Badge variant="secondary">{job.team}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Match */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Don't See Your Role?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals. Send us your resume and let's explore possibilities together.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Send Your Resume
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
