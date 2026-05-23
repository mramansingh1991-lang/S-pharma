import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ShoppingCart, Activity } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About Us",
    "Products",
    "Machinery",
    "Clients",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo className="w-10 h-10 mr-3" />
            <span className={`font-display font-black text-2xl tracking-tighter uppercase ${isScrolled ? "text-foreground" : "text-white"}`}>
              S-<span className="font-light text-primary">Pharma</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className={`text-[10px] font-semibold uppercase tracking-widest transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-gray-400"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ShoppingCart size={20} />
            </button>
            <a
              href="#contact"
              className={`px-4 py-2 font-bold text-[10px] uppercase tracking-widest border transition-all ${
                isScrolled
                  ? "border-border text-foreground hover:bg-accent"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Inquiry
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="px-3 py-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-center font-medium">
                  Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
