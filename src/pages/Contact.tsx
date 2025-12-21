import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#E0F2FE] leading-relaxed mb-4">
              Let's Build Something Meaningful
            </p>
            <p className="text-lg text-[#E0F2FE] leading-relaxed">
              Have an idea, a problem to solve, or just curious about what we're building at Genexlyf?
            </p>
            <p className="text-lg text-[#E0F2FE] leading-relaxed mt-2">
              We're always open to conversations — no pressure, no salesy talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#5F6B7A] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Genexlyf is a growing hybrid IT venture building software, services, and AI-powered products. Whether you're a startup, institution, or enterprise, we'd love to understand your needs and see how we can help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D4BEF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0D4BEF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📧 Email</h4>
                    <a href="mailto:hello@genexlyf.com" className="text-[#1E63E9] hover:text-[#22C1FF] transition-colors">
                      hello@genexlyf.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F8CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1F8CFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📱 Phone / WhatsApp</h4>
                    <a href="https://wa.me/918637656625" className="text-[#1E63E9] hover:text-[#22C1FF] transition-colors">
                      +91-8637656625
                    </a>
                    <p className="text-sm text-[#475569] mt-1">Quick chats, faster clarity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D4BEF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0D4BEF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📍 Location</h4>
                    <p className="text-[#475569]">India</p>
                    <p className="text-sm text-[#475569] mt-1">Working with clients globally 🌍</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F8CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1F8CFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>⏱ Response Time</h4>
                    <p className="text-[#475569]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl border border-border p-8"
            >
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Start a Conversation</h3>
              <p className="text-[#5F6B7A] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell us a little about what you're looking to build or improve. The more context you share, the better we can help.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization (optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Organization (optional)"
                      className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (optional)"
                      className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your idea, challenge, or requirement. We'll take it from there."
                    rows={5}
                    className="focus:ring-2 focus:ring-[#1E63E9]/50 focus:border-[#1E63E9]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#1E63E9] to-[#22C1FF] text-white font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  🚀 Send Message
                </Button>
                <p className="text-xs text-[#475569] text-center mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  🔐 We respect your privacy. Your information will only be used to respond to your enquiry — no spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                  What Happens Next?
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0D4BEF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#0D4BEF]">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">We review your message</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1F8CFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#1F8CFF]">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">One of our people gets back to you</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#22C1FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#22C1FF]">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">We discuss next steps (call / demo / idea validation)</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
