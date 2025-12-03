import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const testimonials = [
  {
    quote: "Uproot's AI solutions transformed how we manage our campus operations. The efficiency gains have been remarkable.",
    author: "Dr. Sarah Chen",
    role: "Dean of Technology",
    organization: "Metro University",
  },
  {
    quote: "Their human-centered approach to automation made the transition seamless. Our team adopted the new systems quickly.",
    author: "Rajesh Kumar",
    role: "Operations Director",
    organization: "TechCorp Industries",
  },
  {
    quote: "The Uproot team truly understands education. They delivered solutions that work for students and administrators alike.",
    author: "Maria González",
    role: "Principal",
    organization: "Innovation Academy",
  },
];

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Voices of Trust"
          title="What Our Partners Say"
          description="Hear from those who've experienced the impact of our AI and automation solutions."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
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

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/testimonials">
              Read All Testimonials
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
