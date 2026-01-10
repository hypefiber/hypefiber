import { motion } from 'framer-motion';
import { Check, Tv, Play, Film, Phone, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import smartTv from '@/assets/smart-tv.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';

const TV = () => {
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
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Independent Cable TV Service Help</p>
              <h1 className="display-heading text-foreground mb-6">
                GET<br />
                INDEPENDENT<br />
                <span className="text-primary neon-text-glow">CABLE TV</span><br />
                <span className="text-primary neon-text-glow">ASSISTANCE</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-6">
                We help you understand TV service options and streaming alternatives. 
                Get practical guidance on navigating cable TV provider processes.
              </p>

              {/* Main CTA */}
              <motion.a
                href="tel:8884187872"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow mb-6"
              >
                <Phone className="w-5 h-5" />
                Call for Cable TV Service Guidance
              </motion.a>

              {/* Disclaimer */}
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-foreground space-y-2">
                    <p><strong>Important Disclaimer:</strong></p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>We are NOT a cable TV service provider</li>
                      <li>We are NOT affiliated, authorized, or endorsed by any cable/TV company</li>
                      <li>We do NOT sell official TV services</li>
                      <li>We do NOT provide guaranteed technical support</li>
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
            >
              <img
                src={smartTv}
                alt="Premium TV experience"
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
              At hypefiber.com, we help users understand TV service options and 
              provide guidance on navigating cable TV providers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Tv, title: 'Explain Options', desc: 'We help you understand different channel packages and TV service types' },
              { icon: Play, title: 'Streaming Guidance', desc: 'Get information on streaming apps and alternatives to traditional cable' },
              { icon: Film, title: 'Navigate Providers', desc: 'Learn how to work with cable TV providers in your area' },
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

      {/* Streaming Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={streamingDevices}
                alt="Multi-device streaming"
                className="w-full rounded-3xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sub-heading text-foreground mb-6">
                UNDERSTAND<br />
                <span className="text-primary">STREAMING</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We provide guidance on understanding streaming services and how they compare 
                to traditional cable TV options.
              </p>
              <ul className="space-y-3">
                {['Learn about streaming platforms', 'Understand device compatibility', 'Compare cable vs streaming', 'Navigate service provider options'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We DON'T Do */}
      <section className="py-20 bg-card">
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
                'We are NOT a cable TV service provider',
                'We are NOT affiliated with any cable/TV company',
                'We do NOT sell official TV services',
                'We do NOT provide guaranteed technical support',
                'We are NOT authorized by any TV provider',
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
            
            <div className="mt-8 p-6 bg-background rounded-2xl text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All mentions of service providers are for informational purposes only. 
                We provide independent guidance to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-heading text-foreground mb-6">
              NEED INDEPENDENT<br />
              <span className="text-primary">CABLE TV HELP?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get independent cable TV assistance from third-party advisors. 
              No brand affiliation. Not a service provider.
            </p>
            <motion.a
              href="tel:8884187872"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
            >
              <Phone className="w-5 h-5" />
              Call for Cable TV Service Guidance
            </motion.a>
            <p className="text-xs text-muted-foreground mt-4">
              Not a TV provider • No brand affiliation
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TV;
