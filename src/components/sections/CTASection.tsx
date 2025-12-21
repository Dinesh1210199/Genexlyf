import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24" style={{
      background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-[#C7D2E0] mb-10 max-w-2xl mx-auto">
            Let's start a conversation about how AI and automation can drive your success. 
            We're here to help you grow smarter, faster, and stronger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Call
              </Link>
            </Button>
          </div>

          <p className="text-sm text-[#8FA3BF] mt-8">
            Typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
