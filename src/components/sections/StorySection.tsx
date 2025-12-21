import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EAF2FF] text-[#1E63E9] text-sm font-medium rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-6 leading-tight" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
              Generation Next Life Technology
            </h2>
            <p className="text-lg text-[#5F6B7A] mb-6" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
              Genexlyf is a hybrid IT venture delivering intelligent software, services, and digital products. We work closely with our clients to understand their real needs and transform them into AI-powered, scalable solutions that simplify work, enhance lives, and drive meaningful business growth.
            </p>
            <p className="text-lg text-[#5F6B7A] mb-8" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
              From automation and data intelligence to enterprise software and innovative platforms, our journey is driven by continuous evolution. We design technology that adapts, learns, and grows—helping organizations stay agile, competitive, and ready for the next phase of digital transformation.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#1E63E9] to-[#22C1FF] text-white font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              asChild
            >
              <Link to="/about">
                Explore Our Vision
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#F7FAFF] rounded-[20px] p-8 md:p-12 shadow-[0_20px_40px_rgba(30,99,233,0.15)]">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1E63E9] to-[#22C1FF] rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A] mb-3" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
                  AI-Driven. Human-Focused.
                </h3>
                <p className="text-lg text-[#5F6B7A] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Building the Next Life of Technology
                </p>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#1E63E9] to-transparent mx-auto mb-4"></div>
                <p className="text-sm text-[#5F6B7A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Since 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
