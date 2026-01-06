import { motion } from 'framer-motion';
import { CheckCircle, Clock, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
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
              REFUND<br />
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
              <strong>Important Disclosure:</strong> Hype Fiber is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We are not an Internet Service Provider (ISP). We provide guidance and assistance services only, separate from provider billing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Refund Window</h2>
                  <p className="text-muted-foreground">
                    Refund requests may be submitted within 7 to 15 days of service purchase. The refund window may vary depending on the type of assistance provided. Please review the refund eligibility section below to understand whether your service qualifies for a refund.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Refund Eligibility</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pre-Assistance Requests</h3>
                    <p className="text-muted-foreground text-sm">
                      If you request a refund before our team has provided any guidance or assistance, you are generally eligible for a full refund. Such requests should be submitted within 7 days of initial purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Post-Assistance Requests</h3>
                    <p className="text-muted-foreground text-sm">
                      If assistance has already been delivered (including consultations, guidance, or technical support), refund eligibility may be limited. Requests submitted after assistance has been provided may receive a partial refund or credit toward future services, depending on the circumstances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Type Matters</h3>
                    <p className="text-muted-foreground text-sm">
                      Different service types have different refund terms. Consultation services, setup guidance, provider comparison assistance, and account support services may have varying refund eligibility windows (7-15 days).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">How to Request a Refund</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Contact our support team at <span className="text-primary">support@hypefiber.com</span> or <span className="text-primary">(888) 418-7872</span></li>
                <li>Provide your account number and original purchase date</li>
                <li>Explain the reason for your refund request</li>
                <li>Our team will review your eligibility and respond within 5-7 business days</li>
                <li>If approved, refunds are typically processed within 7-10 business days</li>
              </ol>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Non-Refundable Circumstances</h2>
              <p className="text-muted-foreground mb-4">Refunds may not be available in the following situations:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Request submitted more than 15 days after purchase</li>
                <li>Extensive assistance has been provided and benefits realized</li>
                <li>Customer requested cancellation after service delivery</li>
                <li>Refund request conflicts with applicable terms agreed upon at purchase</li>
                <li>Service was used as intended without defect or unsatisfactory delivery</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                Once your refund is approved, we process it back to your original payment method:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Credit Cards:</strong> 7-10 business days</li>
                <li><strong className="text-foreground">Debit Cards:</strong> 7-10 business days</li>
                <li><strong className="text-foreground">Bank Transfer (ACH):</strong> 5-7 business days</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Processing times are provided by financial institutions and may vary.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Questions About Your Refund?</h2>
                  <p className="text-muted-foreground mb-4">
                    We're here to assist you. Contact our support team:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="text-primary font-semibold">Email:</span> support@hypefiber.com</p>
                    <p><span className="text-primary font-semibold">Phone:</span> (888) 418-7872 (24/7)</p>
                    <p><span className="text-primary font-semibold">Web Support:</span> Start a chat on our website</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Policy Changes</h2>
              <p className="text-muted-foreground">
                This Refund Policy may be updated at any time without notice. Changes are effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Additional Information</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Important Note:</strong> Hype Fiber is an independent service assistance platform. We do not provide internet, cable, or streaming services directly. We provide guidance and support in choosing and configuring services through third-party providers. Service provider billing is separate and independent from our assistance fees.
              </p>
              <p className="text-muted-foreground">
                Refunds apply to Hype Fiber assistance services only and do not affect any existing agreements or billing with service providers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
