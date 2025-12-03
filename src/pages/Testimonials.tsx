import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";

const testimonials = [
  {
    quote: "Uproot's AI solutions transformed how we manage our campus operations. The efficiency gains have been remarkable, and the team's expertise made implementation seamless.",
    author: "Dr. Sarah Chen",
    role: "Dean of Technology",
    organization: "Metro University",
    rating: 5,
  },
  {
    quote: "Their human-centered approach to automation made the transition seamless. Our team adopted the new systems quickly and productivity soared.",
    author: "Rajesh Kumar",
    role: "Operations Director",
    organization: "TechCorp Industries",
    rating: 5,
  },
  {
    quote: "The Uproot team truly understands education. They delivered solutions that work for students and administrators alike, with minimal disruption.",
    author: "Maria González",
    role: "Principal",
    organization: "Innovation Academy",
    rating: 5,
  },
  {
    quote: "We saw immediate results from their AI automation platform. The 40% efficiency gain exceeded our expectations and the ROI was clear within months.",
    author: "James Wilson",
    role: "CTO",
    organization: "Enterprise Solutions Ltd",
    rating: 5,
  },
  {
    quote: "Working with Uproot felt like having a technology partner who genuinely cared about our success. Their iterative approach ensured we got exactly what we needed.",
    author: "Priya Sharma",
    role: "IT Director",
    organization: "National School Network",
    rating: 5,
  },
  {
    quote: "The predictive analytics platform has revolutionized how we make decisions. We now have visibility into patterns we never could have identified before.",
    author: "Michael Torres",
    role: "VP of Operations",
    organization: "Global Logistics Inc",
    rating: 5,
  },
];

export default function Testimonials() {
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
              Voices of Trust
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Hear from those who've experienced the impact of our AI and automation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Client Stories"
            title="What Our Partners Say"
            description="Trusted partners and clients share their stories of transformation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow relative"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Share Your Story</h3>
            <p className="text-muted-foreground mb-6">
              Have you worked with Uproot Innovations? We'd love to hear about your experience.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Submit Your Testimonial
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
