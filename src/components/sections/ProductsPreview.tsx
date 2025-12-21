import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, BookOpen, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Layers,
    name: "Genexlyf CampusFlow",
    description: "An intelligent campus and institutional management platform that automates operations, enhances engagement, and delivers data-driven insights for smarter decision-making.",
    status: "Coming Soon",
  },
  {
    icon: BookOpen,
    name: "Genexlyf EduSmart",
    description: "An AI-powered education and learning suite designed to personalize learning experiences, improve institutional efficiency, and support digital-first education ecosystems.",
    status: "In Development",
  },
  {
    icon: Cog,
    name: "Genexlyf AutoRoot",
    description: "A core automation and workflow engine that streamlines enterprise operations, integrates systems, and provides intelligent insights for scalable growth.",
    status: "Coming Soon",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Built for the Next Generation"
          title="Platforms for the Next Life of Technology"
          description="Scalable, AI-enabled platforms designed to integrate seamlessly, automate intelligently, and grow alongside modern businesses."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[20px] border border-[#EAF0FF] overflow-hidden group hover:shadow-[0_16px_40px_rgba(30,99,233,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1E63E9]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E63E9]/20 transition-colors">
                    <product.icon className="w-6 h-6 text-[#1E63E9]" strokeWidth={1.5} />
                  </div>
                  <Badge 
                    className={`text-xs ${
                      product.status === "Coming Soon" 
                        ? "bg-[#EAF2FF] text-[#1E63E9]" 
                        : "bg-gradient-to-r from-[#1E63E9] to-[#22C1FF] text-white"
                    }`}
                  >
                    {product.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>{product.name}</h3>
                <p className="text-[#475569] text-sm mb-4" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>{product.description}</p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-[#1E63E9] text-sm font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-[#1E63E9] text-[#1E63E9] hover:bg-[#1E63E9] hover:text-white font-semibold hover:scale-105 active:scale-95 transition-all"
            asChild
          >
            <Link to="/products">
              Explore All Platforms
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
