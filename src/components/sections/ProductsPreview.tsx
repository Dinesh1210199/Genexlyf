import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, BookOpen, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Layers,
    name: "CampusFlow AI",
    description: "Intelligent campus management platform automating scheduling, facilities, and student engagement.",
    status: "Coming Soon",
  },
  {
    icon: BookOpen,
    name: "EduSmart Suite",
    description: "AI-driven learning tools for personalized education and institutional efficiency.",
    status: "In Development",
  },
  {
    icon: Cog,
    name: "AutoRoot Engine",
    description: "Core automation platform powering enterprise workflows and operational intelligence.",
    status: "Coming Soon",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Built at the Roots"
          title="Platforms for Tomorrow"
          description="Evolving platforms designed from the ground up for seamless integration and growth."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
