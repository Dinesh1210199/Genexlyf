import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BeliefsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our philosophy and vision guide every innovation we create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Belief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Belief</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We transform challenges into scalable opportunities through intelligent, human-centered automation. 
              Technology must unlock human potential through practical AI and adaptive systems that empower 
              rather than replace.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>Discover Our Beliefs</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-hero-gradient rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">The Road Ahead</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              We envision leading AI integration for campuses and enterprises, unlocking limitless potential. 
              A world where automation empowers educators and innovators to scale without limits, 
              creating sustainable growth for all.
            </p>
            <Button variant="heroOutline" size="sm" asChild>
              <Link to="/about">
                View Mission
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
