import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Lock, Loader2, FileText, MessageSquare, Handshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Replace this URL with your Google Apps Script Web App URL after deployment
// Get it from: Deploy > Manage deployments > Copy the Web App URL
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz5nvU9ums5ob-BlkDEe0RZdcH3DgtrubveXtjHwDqAn0cdpEJX5WE1KqaE3q4r5hHk/exec';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Debug: Log the URL to console
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);
    console.log('Form Data:', formData);
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is empty or not set');
      toast({
        title: "Configuration Error",
        description: "Form submission URL is not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending request to:', GOOGLE_SCRIPT_URL);
      
      // Submit form data as JSON to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script public web apps
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Request sent (no-cors mode, cannot read response)');
      
      // Note: If you see a 401 error in console, the Web App deployment
      // needs to be set to "Anyone" can access (not "Only myself")
      // Go to: Deploy → Manage deployments → Edit → Set "Who has access" to "Anyone"
      
      // With no-cors mode, we can't read the response, but the request is sent
      // The Google Apps Script will handle the submission and send email
      // Add a small delay to ensure request is processed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly at hello@genexlyf.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Email</h4>
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
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Phone / WhatsApp</h4>
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
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Location</h4>
                    <p className="text-[#C7D2E0]">India</p>
                    <p className="text-sm text-[#C7D2E0] mt-1">Working with clients globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, Satoshi, Inter, sans-serif' }}>Response Time</h4>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-xs text-[#8FA3BF] text-center mt-3 flex items-center justify-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Lock className="w-3 h-3" />
                  We respect your privacy. Your information will only be used to respond to your enquiry — no spam, ever.
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
                    <FileText className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">We review your message</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <MessageSquare className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">One of our people gets back to you</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <Handshake className="w-8 h-8 text-cyan-400" />
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
