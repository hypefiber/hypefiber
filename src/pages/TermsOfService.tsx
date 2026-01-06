import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
              TERMS OF<br />
              <span className="text-primary neon-text-glow">SERVICE</span>
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
              <strong>Important Disclosure:</strong> Hype Fiber is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Hype Fiber services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                HYPEFIBER provides independent assistance and guidance for residential and commercial internet, television, and telecommunications services. Our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>High-speed fiber internet connectivity up to 1 Gbps</li>
                <li>Digital television with 200+ channels</li>
                <li>Streaming and on-demand content</li>
                <li>WiFi router and equipment rental</li>
                <li>Technical support and customer service</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Subscriber Responsibilities</h2>
              <p className="text-muted-foreground mb-4">As a subscriber, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate account information</li>
                <li>Pay all charges by the due date</li>
                <li>Use services for lawful purposes only</li>
                <li>Not redistribute or resell services without authorization</li>
                <li>Maintain security of your account credentials</li>
                <li>Return equipment upon service termination</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Billing and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Services are billed monthly in advance. Payment is due upon receipt of invoice. Late payments may result in:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Late fees of $10 or 1.5% of balance, whichever is greater</li>
                <li>Service suspension after 30 days past due</li>
                <li>Collection agency referral after 60 days past due</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Service Level Agreement</h2>
              <p className="text-muted-foreground">
                We strive to provide 99.9% network uptime. In the event of service outages exceeding 24 consecutive hours, customers may request a pro-rated credit for the affected period. Scheduled maintenance windows are excluded from uptime calculations.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-4">Prohibited activities include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Illegal file sharing or copyright infringement</li>
                <li>Hacking, phishing, or malware distribution</li>
                <li>Spam or unsolicited bulk messaging</li>
                <li>Excessive bandwidth usage impacting other users</li>
                <li>Hosting commercial servers without business plan</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                HYPEFIBER's liability is limited to the amount paid for services during the affected billing period. We are not liable for indirect, incidental, or consequential damages arising from service use or interruption.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate service with 30 days written notice. Early termination fees may apply for promotional contracts. Upon termination, all equipment must be returned within 14 days to avoid equipment charges.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service:<br />
                <span className="text-primary">legal@hypefiber.com</span><br />
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

export default TermsOfService;
