import { motion } from 'framer-motion';
import { Eye, Ear, Hand, Brain } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Accessibility = () => {
  const features = [
    { icon: Eye, title: 'Visual Accessibility', desc: 'Screen reader compatibility, high contrast modes, and scalable text options' },
    { icon: Ear, title: 'Hearing Accessibility', desc: 'Closed captioning on all TV content and visual alerts' },
    { icon: Hand, title: 'Motor Accessibility', desc: 'Voice-controlled remote options and simplified navigation' },
    { icon: Brain, title: 'Cognitive Accessibility', desc: 'Simplified interfaces and clear, consistent navigation patterns' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Commitment</p>
            <h1 className="display-heading text-foreground mb-6">
              ACCESSIBILITY<br />
              <span className="text-primary neon-text-glow">STATEMENT</span>
            </h1>
            <p className="text-muted-foreground">Our commitment to inclusive digital experiences</p>
          </motion.div>

          {/* Accessibility Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {features.map((feature, i) => (
              <div key={feature.title} className="bg-card p-6 rounded-2xl border border-border hover:border-primary transition-colors">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground">
                HYPEFIBER is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conformance Status</h2>
              <p className="text-muted-foreground mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Perceivable: Content is presented in ways users can perceive</li>
                <li>Operable: Interface components and navigation are operable</li>
                <li>Understandable: Information and operation are understandable</li>
                <li>Robust: Content is robust enough for various assistive technologies</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">TV Accessibility Features</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Closed captioning on all channels and on-demand content</li>
                <li>Audio description (SAP) for select programming</li>
                <li>Voice-activated remote control options</li>
                <li>High-contrast program guide</li>
                <li>Text-to-speech functionality</li>
                <li>Adjustable playback speeds</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Internet Accessibility</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Compatible with all major screen readers</li>
                <li>Keyboard-navigable customer portal</li>
                <li>ARIA labels on all interactive elements</li>
                <li>Alternative text for all images</li>
                <li>Consistent and predictable navigation</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Requesting Assistance</h2>
              <p className="text-muted-foreground mb-4">
                We welcome your feedback on the accessibility of our services. Please contact us if you encounter accessibility barriers:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Email:</strong> <span className="text-primary">accessibility@hypefiber.com</span></li>
                <li><strong className="text-foreground">Phone:</strong> (888) 418-7872 (TTY available)</li>
                <li><strong className="text-foreground">Relay Service:</strong> Dial 711 for assistance</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Continuous Improvement</h2>
              <p className="text-muted-foreground">
                We conduct regular accessibility audits and user testing with assistive technologies. Our team receives ongoing training on accessibility best practices. We are committed to making continuous improvements to ensure our services are accessible to all.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accessibility;
