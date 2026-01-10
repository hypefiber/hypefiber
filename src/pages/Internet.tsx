import { motion } from 'framer-motion';
import { Check, Wifi, Zap, Shield, Phone, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import internetRouter from '@/assets/internet-router.jpg';

const Internet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Independent Internet Service Guidance</p>
              <h1 className="display-heading text-foreground mb-6">
                GET<br />
                INDEPENDENT<br />
                <span className="text-primary neon-text-glow">INTERNET</span><br />
                <span className="text-primary neon-text-glow">GUIDANCE</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-6">
                We help you understand internet/broadband service options and navigate service provider processes. 
                We provide practical guidance on connectivity issues.
              </p>

              {/* Main CTA */}
              <motion.a
                href="tel:8884187872"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow mb-6"
              >
                <Phone className="w-5 h-5" />
                Call for Independent Service Guidance
              </motion.a>

              {/* Disclaimer */}
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-foreground space-y-2">
                    <p><strong>Important Disclaimer:</strong></p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>We are NOT an internet service provider (ISP)</li>
                      <li>We are NOT affiliated, authorized, or endorsed by any telecom/cable company</li>
                      <li>We do NOT sell official ISP services</li>
                      <li>We do NOT provide guaranteed technical fixes</li>
                      <li>All provider mentions are for informational purposes only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src={internetRouter}
                alt="High-speed router"
                className="w-full rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="sub-heading text-foreground mb-6">
              WHAT WE <span className="text-primary">DO</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At hypefiber.com, we help users understand internet/broadband service options 
              and navigate service provider processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Understand Options', desc: 'We explain different internet speed tiers and what they mean for your usage' },
              { icon: Shield, title: 'Navigate Processes', desc: 'Get guidance on how to work with service providers in your area' },
              { icon: Wifi, title: 'Practical Guidance', desc: 'Learn about connectivity issues and how to address them' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background rounded-2xl"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We DON'T Do */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="sub-heading text-foreground mb-6">
              WHAT WE <span className="text-red-500">DON'T DO</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              To avoid confusion, here's what we are NOT:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'We are NOT an internet service provider (ISP)',
                'We are NOT affiliated with any telecom/cable company',
                'We do NOT sell official ISP services',
                'We do NOT provide guaranteed technical fixes',
                'We are NOT authorized by any provider',
                'We do NOT represent any specific brand',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-card rounded-2xl text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All mentions of service providers are for informational purposes only. 
                We provide independent guidance to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-heading text-foreground mb-6">
              NEED INDEPENDENT<br />
              <span className="text-primary">INTERNET GUIDANCE?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Talk to a third-party internet advisor for independent service guidance. 
              No brand affiliation. Not an ISP.
            </p>
            <motion.a
              href="tel:8884187872"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
            >
              <Phone className="w-5 h-5" />
              Call for Independent Service Guidance
            </motion.a>
            <p className="text-xs text-muted-foreground mt-4">
              Not an ISP • No brand affiliation
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internet;
