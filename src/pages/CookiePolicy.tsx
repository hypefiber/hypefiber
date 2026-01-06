import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const cookieTypes = [
    { 
      name: 'Essential Cookies', 
      purpose: 'Required for website functionality', 
      duration: 'Session',
      canDisable: false 
    },
    { 
      name: 'Analytics Cookies', 
      purpose: 'Help us understand how visitors use our site', 
      duration: '2 years',
      canDisable: true 
    },
    { 
      name: 'Preference Cookies', 
      purpose: 'Remember your settings and preferences', 
      duration: '1 year',
      canDisable: true 
    },
    { 
      name: 'Marketing Cookies', 
      purpose: 'Used to deliver relevant advertisements', 
      duration: '90 days',
      canDisable: true 
    },
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
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Legal</p>
            <h1 className="display-heading text-foreground mb-6">
              COOKIE<br />
              <span className="text-primary neon-text-glow">POLICY</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 6, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border flex items-start gap-4">
              <Cookie className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Type</th>
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Purpose</th>
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Duration</th>
                      <th className="text-left py-3 text-foreground font-semibold">Can Disable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTypes.map((cookie) => (
                      <tr key={cookie.name} className="border-b border-border/50">
                        <td className="py-4 pr-4 text-foreground">{cookie.name}</td>
                        <td className="py-4 pr-4 text-muted-foreground">{cookie.purpose}</td>
                        <td className="py-4 pr-4 text-muted-foreground">{cookie.duration}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            cookie.canDisable 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {cookie.canDisable ? 'Yes' : 'Required'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Essential Cookies</h2>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the website to function properly. They include cookies that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Enable you to log into your account</li>
                <li>Remember items in your shopping cart</li>
                <li>Process secure payments</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These cookies cannot be disabled as they are essential for the site to work.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Analytics Cookies</h2>
              <p className="text-muted-foreground">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our site by collecting information about pages visited, time spent on site, and any error messages encountered. We use Google Analytics and similar tools for this purpose.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Marketing Cookies</h2>
              <p className="text-muted-foreground">
                These cookies track your browsing activity to help us deliver targeted advertising that is relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">How to Manage Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through settings</li>
                <li><strong className="text-foreground">Cookie Consent Tool:</strong> Use our cookie consent banner to manage your preferences</li>
                <li><strong className="text-foreground">Opt-Out Tools:</strong> Use industry opt-out tools like the Digital Advertising Alliance opt-out page</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Note: Disabling certain cookies may affect website functionality and your user experience.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                Some cookies are placed by third-party services on our website, such as Google Analytics, Facebook Pixel, and advertising networks. These third parties have their own privacy policies governing their use of cookies.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at:<br />
                <span className="text-primary">privacy@hypefiber.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
