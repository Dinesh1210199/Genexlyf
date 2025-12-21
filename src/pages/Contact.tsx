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
      <section className="pt-32 pb-20" style={{
        background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)' }}>
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#C7D2E0] leading-relaxed mb-4">
              Let's Build Something Meaningful
            </p>
            <p className="text-lg text-[#C7D2E0] leading-relaxed">
              Have an idea, a problem to solve, or just curious about what we're building at Genexlyf?
            </p>
            <p className="text-lg text-[#C7D2E0] leading-relaxed mt-2">
              We're always open to conversations — no pressure, no salesy talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-12" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#C7D2E0] leading-relaxed" style={{ lineHeight: '1.65', fontFamily: 'Inter, sans-serif' }}>
                Genexlyf is a growing hybrid IT venture building software, services, and AI-powered products. Whether you're a startup, institution, or enterprise, we'd love to understand your needs and see how we can help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #0B0F14 0%, #121826 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📧 Email</h4>
                    <a href="mailto:hello@genexlyf.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      hello@genexlyf.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📱 Phone / WhatsApp</h4>
                    <a href="https://wa.me/918637656625" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +91-8637656625
                    </a>
                    <p className="text-sm text-[#C7D2E0] mt-1">Quick chats, faster clarity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>📍 Location</h4>
                    <p className="text-[#C7D2E0]">India</p>
                    <p className="text-sm text-[#C7D2E0] mt-1">Working with clients globally 🌍</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>⏱ Response Time</h4>
                    <p className="text-[#C7D2E0]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-3xl border border-cyan-500/20 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Start a Conversation</h3>
              <p className="text-[#C7D2E0] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell us a little about what you're looking to build or improve. The more context you share, the better we can help.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 bg-[#161E2E] border-cyan-500/20 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 bg-[#161E2E] border-cyan-500/20 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company / Organization (optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Organization (optional)"
                      className="focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 bg-[#161E2E] border-cyan-500/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (optional)"
                      className="focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 bg-[#161E2E] border-cyan-500/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
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
                  <Label htmlFor="message" className="text-white">Message *</Label>
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
                  variant="hero"
                  size="lg" 
                  className="w-full hover:scale-105 active:scale-95 transition-all"
                >
                  🚀 Send Message
                </Button>
                <p className="text-xs text-[#8FA3BF] text-center mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  🔐 We respect your privacy. Your information will only be used to respond to your enquiry — no spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24" style={{
        background: "linear-gradient(135deg, #121826 0%, #141A22 100%)"
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What Happens Next?
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <span className="text-2xl font-bold text-cyan-400">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">We review your message</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <span className="text-2xl font-bold text-cyan-400">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">One of our people gets back to you</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <span className="text-2xl font-bold text-cyan-400">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">We discuss next steps (call / demo / idea validation)</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
