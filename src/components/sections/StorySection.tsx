import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export function StorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              <Leaf className="w-4 h-4" />
              Our Origins
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Uproot Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We started with a bold conviction: true innovation begins by uprooting outdated systems at their roots. 
              Founded by Kaviya, Leela, and Dinesh, we're actively exploring AI-powered automation and campus solutions 
              that empower education and enterprises to thrive.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our journey reflects continuous evolution—from prototyping intelligent systems to building scalable platforms 
              that enhance human potential. At Uproot, every step forward plants seeds for tomorrow's transformation.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn Our Story
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract growth visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-6 relative"
                  >
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                    <div className="absolute inset-2 border-4 border-secondary/30 rounded-full" />
                    <div className="absolute inset-4 border-4 border-primary/40 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-secondary rounded-full" />
                    </div>
                  </motion.div>
                  <p className="text-xl font-semibold text-foreground">Growing Together</p>
                  <p className="text-muted-foreground">Since 2024</p>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
