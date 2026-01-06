import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Legal</p>
            <h1 className="display-heading text-foreground mb-6">
              PRIVACY<br />
              <span className="text-primary neon-text-glow">POLICY</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          </motion.div>

          {/* Independence Disclosure */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-primary/10 border border-primary/30 p-6 rounded-2xl mb-8"
          >
            <p className="text-foreground text-sm">
              <strong>Important Disclosure:</strong> Hype Fiber is an independent third-party service assistance startup and does not request or store provider account passwords or sensitive credentials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At Hype Fiber, we collect minimal information necessary to provide guidance and assistance. The types of information we collect include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, billing address, and payment information</li>
                <li><strong className="text-foreground">Service Usage Data:</strong> Internet usage patterns, data consumption, and service preferences</li>
                <li><strong className="text-foreground">Device Information:</strong> Router information, connected devices, and network configuration</li>
                <li><strong className="text-foreground">Communication Data:</strong> Records of customer service interactions and support tickets</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our internet and TV services</li>
                <li>Process payments and send billing notifications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send service updates, promotional offers, and marketing communications</li>
                <li>Ensure network security and prevent fraud</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Service Providers:</strong> Third parties who assist in delivering our services</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. This includes encryption of data in transit and at rest, regular security audits, employee training, and strict access controls. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:<br />
                <span className="text-primary">privacy@hypefiber.com</span><br />
                HYPEFIBER<br />
                123 Fiber Street, Tech City, TC 12345
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
