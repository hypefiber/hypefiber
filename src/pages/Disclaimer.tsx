import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Disclaimer = () => {
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
              LEGAL<br />
              <span className="text-primary neon-text-glow">DISCLAIMER</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-semibold mb-3">
                  INDEPENDENCE DISCLOSURE
                </p>
                <p className="text-foreground text-sm mb-4">
                  Hype Fiber is an independent third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We do not sell services directly; we provide guidance and assistance only.
                </p>
                <p className="text-foreground">
                  Please read this disclaimer carefully before using our website or services. By using Hype Fiber services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">General Information</h2>
              <p className="text-muted-foreground">
                The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Speed and Performance Claims</h2>
              <p className="text-muted-foreground mb-4">
                Internet speeds advertised are maximum theoretical speeds. Actual speeds may vary based on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Network congestion and traffic</li>
                <li>Distance from network infrastructure</li>
                <li>Customer equipment and device capabilities</li>
                <li>Wired vs. wireless connections</li>
                <li>Website or server performance of content providers</li>
                <li>Number of devices connected simultaneously</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Speed tests may not reflect actual browsing or streaming speeds experienced during regular use.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pricing and Availability</h2>
              <p className="text-muted-foreground">
                Prices, packages, and services displayed on this website are subject to change without notice. Service availability varies by location. Promotional pricing may require minimum contract terms and may not be available in all areas. Additional fees may apply for equipment, installation, taxes, and regulatory fees not included in advertised prices.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Third-Party Content</h2>
              <p className="text-muted-foreground">
                Our services may include content from third-party providers. HYPEFIBER is not responsible for the content, accuracy, or opinions expressed by third parties. Channel lineups, streaming apps, and third-party services are subject to change based on licensing agreements and provider availability.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Service Interruptions</h2>
              <p className="text-muted-foreground">
                While we strive for 99.9% uptime, services may be interrupted due to maintenance, upgrades, weather events, power outages, or circumstances beyond our control. We are not liable for any loss or damage resulting from service interruptions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">External Links</h2>
              <p className="text-muted-foreground">
                This website may contain links to external websites. We have no control over the content and nature of these sites and are not responsible for their content or privacy practices.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall HYPEFIBER be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or this website. This limitation applies regardless of whether the damages arise from contract, negligence, strict liability, or any other legal theory.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about this disclaimer, contact us at:<br />
                <span className="text-primary">legal@hypefiber.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
