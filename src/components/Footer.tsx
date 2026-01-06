import { Link } from 'react-router-dom';
import { Wifi, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import RefundPolicy from '@/pages/RefundPolicy';
import logoFooterSvg from '@/assets/logo-footer.svg';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Internet Plans', href: '/internet' },
      { name: 'TV Packages', href: '/tv' },
      { name: 'Streaming', href: '/tv' },
      { name: 'Bundles', href: '/bundles' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Coverage', href: '/coverage' },
      { name: 'Careers', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Help Center', href: '/contact' },
      { name: 'My Account', href: '/' },
      { name: 'Speed Test', href: '/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Accessibility', href: '/accessibility' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoFooterSvg} alt="HYPEFIBER Footer Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              HYPEFIBER is an independent third-party service assistance startup. 
              We provide guidance and support to help you navigate cable, internet, and streaming services.
              All trademarks belong to their respective owners.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4 uppercase text-sm">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 HYPEFIBER. All rights reserved. | Owned by Hype Network | Call Now: (888) 418-7872
          </p>
          <p className="text-sm text-muted-foreground">
            Independent Service Assistance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
