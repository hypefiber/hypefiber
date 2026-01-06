import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Shield, Zap, Tv, Wifi, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroFamily from '@/assets/hero-family.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';

const bundles = [
  {
    name: 'Starter Bundle',
    subtitle: 'Internet + Essential TV',
    price: 79,
    originalPrice: 88,
    features: ['100 Mbps Internet', '80+ TV Channels', 'Free WiFi Router', 'Cloud DVR 50hrs', '24/7 Support'],
  },
  {
    name: 'Family Bundle',
    subtitle: 'Internet + Premium TV',
    price: 129,
    originalPrice: 148,
    popular: true,
    features: ['500 Mbps Internet', '150+ TV Channels', 'Premium WiFi 6 Router', 'Cloud DVR 200hrs', 'HBO & Showtime', 'Priority Support'],
  },
  {
    name: 'Ultimate Bundle',
    subtitle: 'Gig Internet + Ultimate TV',
    price: 179,
    originalPrice: 198,
    features: ['1 Gbps Internet', '200+ TV Channels', 'Mesh WiFi System', 'Unlimited Cloud DVR', 'All Premium Channels', 'Dedicated Support', 'Static IP Included'],
  },
];

const Bundles = () => {
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
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Bundle Assistance</p>
              <h1 className="display-heading text-foreground mb-6">
                GUIDANCE<br />
                ON<br />
                <span className="text-primary neon-text-glow">BUNDLES</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                We help you understand bundled options and find the right combination 
                of services for your needs. All arrangements are with providers directly.
              </p>

              {/* Disclosure */}
              <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-xs text-foreground">
                  <strong>Important:</strong> Pricing and bundling varies by provider and location.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroFamily}
                alt="Family enjoying entertainment"
                className="w-full rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <p className="text-sm opacity-80">Varies by provider</p>
                <p className="text-lg font-bold">Check availability</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bundle Benefits Strip */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: 'Fast Setup' },
              { icon: Shield, label: 'No Hidden Fees' },
              { icon: Tv, label: '200+ Channels' },
              { icon: Wifi, label: 'Free Equipment' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              EXPLORE<br />
              <span className="text-primary">BUNDLE OPTIONS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We guide you through available bundle options. Pricing varies by provider and location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {bundles.map((bundle, i) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl ${bundle.popular ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
              >
                {bundle.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" /> Best Value
                  </span>
                )}
                
                <h3 className="font-display font-bold text-2xl mb-1">{bundle.name}</h3>
                <p className={`text-sm mb-4 ${bundle.popular ? 'opacity-80' : 'text-muted-foreground'}`}>{bundle.subtitle}</p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold">${bundle.price}</span>
                  <span className={bundle.popular ? 'opacity-80' : 'text-muted-foreground'}>/mo*</span>
                  <span className={`text-sm line-through ${bundle.popular ? 'opacity-60' : 'text-muted-foreground'}`}>${bundle.originalPrice}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${bundle.popular ? '' : 'text-primary'}`} />
                      <span className={`text-sm ${bundle.popular ? '' : 'text-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:8884187872" className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  bundle.popular 
                    ? 'bg-background text-foreground hover:bg-foreground hover:text-background' 
                    : 'bg-primary text-primary-foreground hover:scale-105'
                }`}>
                  <Phone className="w-5 h-5" />
                  Call Now: (888) 418-7872
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            *Prices and features vary by provider and location. Contact us for availability.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={streamingDevices}
                alt="All devices included"
                className="w-full rounded-3xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sub-heading text-foreground mb-8">
                EVERYTHING<br />
                <span className="text-primary">INCLUDED</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: 'Premium WiFi Equipment', desc: 'WiFi 6 router or mesh system based on your plan' },
                  { title: 'Professional Installation', desc: 'Free expert setup at your convenience' },
                  { title: 'Streaming Apps', desc: 'Watch on any device with our mobile app' },
                  { title: 'Cloud DVR', desc: 'Record your favorite shows and watch anytime' },
                  { title: '24/7 Support', desc: 'Real humans ready to help, day or night' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Bundle */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              WHY <span className="text-primary">BUNDLE?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Save Money', desc: 'Up to $20/month savings vs separate services' },
              { title: 'One Bill', desc: 'Simplified billing with one easy monthly payment' },
              { title: 'One Support', desc: 'Single point of contact for all your needs' },
              { title: 'Better Value', desc: 'Premium features included at no extra cost' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-heading text-foreground mb-6">
              READY TO <span className="text-primary">BUNDLE?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of happy customers enjoying the best internet and TV experience. 
              No contracts, no hidden fees.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/coverage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
              >
                Check Availability
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bundles;
