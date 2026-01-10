import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wifi, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '@/assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Internet', href: '/internet' },
    { name: 'TV & Streaming', href: '/tv' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoSvg} alt="HYPEFIBER Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors line-reveal"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:8884187872"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:scale-105 transition-transform neon-glow"
            >
              <Phone className="w-4 h-4" />
              Talk to an Advisor
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:8884187872"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full mt-4"
              >
                <Phone className="w-4 h-4" />
                Talk to an Advisor
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
