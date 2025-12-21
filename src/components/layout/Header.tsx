import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Team", href: "/team" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-gradient-to-br from-[#0B0F14] via-[#0F1419] to-[#141A22] backdrop-blur-md shadow-lg shadow-cyan-500/10 py-3 border-cyan-500/20"
          : "bg-gradient-to-br from-[#0B0F14] via-[#0F1419] to-[#141A22] py-5 border-cyan-500/20"
      )}
      style={{
        backgroundImage: isScrolled
          ? "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0B0F14 0%, #0F1419 50%, #141A22 100%)"
          : "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0B0F14 0%, #0F1419 50%, #141A22 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/Logo.ico.png" 
              alt="Genexlyf Logo" 
              className="w-23 h-20 object-contain transition-opacity group-hover:opacity-90"
              style={{ 
                backgroundColor: 'transparent',
                background: 'transparent'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  location.pathname === item.href
                    ? "text-cyan-400 font-semibold"
                    : "text-white/90 hover:text-cyan-400 active:text-cyan-400 active:font-semibold active:scale-95"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" className="active:scale-95 active:opacity-80" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-br from-[#0B0F14] via-[#0F1419] to-[#141A22] border-t border-cyan-500/20"
            style={{
              backgroundImage: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0B0F14 0%, #0F1419 50%, #141A22 100%)"
            }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-all",
                      location.pathname === item.href
                        ? "text-cyan-400 font-semibold"
                        : "text-white/90 hover:text-cyan-400 active:text-cyan-400 active:font-semibold active:scale-95"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="hero" size="lg" className="mt-4 active:scale-95 active:opacity-80" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
