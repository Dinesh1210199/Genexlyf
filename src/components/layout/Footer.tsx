import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Genexlyf", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "AI & Intelligent Automation", href: "/services" },
    { name: "Custom Software Development", href: "/services" },
    { name: "Digital Products & Platforms", href: "/services" },
    { name: "IT Consulting & Strategy", href: "/services" },
    { name: "Campus & Enterprise Solutions", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0B0F14] via-[#121826] to-[#141A22] text-white border-t border-cyan-500/20" style={{
      backgroundImage: "radial-gradient(ellipse at bottom, rgba(6, 182, 212, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)"
    }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <p className="text-[#C7D2E0] mb-6 max-w-sm" style={{ lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
              Building the next life of technology through intelligent software, AI-powered automation, and scalable digital products. We work closely with businesses to create solutions that drive growth, efficiency, and long-term impact.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center justify-center transition-all border border-cyan-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center justify-center transition-all border border-cyan-500/30"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center justify-center transition-all border border-cyan-500/30"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#C7D2E0] hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">What We Do</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#C7D2E0] hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#22C1FF] mt-0.5" />
                <a href="mailto:hello@genexlyf.com" className="text-[#C7D2E0] hover:text-cyan-400 transition-colors">
                  📧 hello@genexlyf.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <a href="https://wa.me/918637656625" className="text-[#C7D2E0] hover:text-cyan-400 transition-colors">
                  📱 +91-8637656625
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-[#C7D2E0]">📍 India (Serving Globally)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img 
                  src="/favicon.ico" 
                  alt="Genexlyf Logo" 
                  className="w-8 h-8 object-contain"
                  style={{ 
                    backgroundColor: 'transparent',
                    background: 'transparent',
                    maxWidth: 'none',
                    maxHeight: 'none'
                  }}
                />
              </Link>
              <div>
                <p className="text-[#8FA3BF] text-sm">
                  © 2025 Genexlyf. All rights reserved.
                </p>
                <p className="text-[#8FA3BF] text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Building technology for the next generation of life.
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-[#8FA3BF] hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-[#8FA3BF] hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
