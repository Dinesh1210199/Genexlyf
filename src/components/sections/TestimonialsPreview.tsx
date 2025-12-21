import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Voices of Trust"
          title="Client Stories Coming Soon"
          description="We're currently working with early partners. Real stories and case studies will be published soon."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-[20px] border border-[#EAF0FF] p-12 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <div className="w-16 h-16 bg-[#1E63E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-[#1E63E9]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-4" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>
              Coming Soon
            </h3>
            <p className="text-[#475569] text-lg" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              We're building meaningful partnerships and creating real impact. Client stories and testimonials will be shared here as we grow together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
