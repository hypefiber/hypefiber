import { motion } from 'framer-motion';
import { Check, Tv, Play, Film, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import smartTv from '@/assets/smart-tv.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';

const packages = [
  {
    name: 'Essential TV',
    channels: '80+',
    price: 39,
    features: ['Local Channels', 'Sports Package', 'News Channels', 'Cloud DVR 50hrs'],
  },
  {
    name: 'Premium TV',
    channels: '150+',
    price: 69,
    popular: true,
    features: ['All Essential Channels', 'HBO & Showtime', 'Sports Plus', 'Cloud DVR 200hrs', '4K Channels'],
  },
  {
    name: 'Ultimate TV',
    channels: '200+',
    price: 99,
    features: ['All Premium Channels', 'All Movie Networks', 'International Channels', 'Unlimited Cloud DVR', '4K Ultra HD', 'Multi-room viewing'],
  },
];

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
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ TV & Streaming Guidance</p>
              <h1 className="display-heading text-foreground mb-6">
                ASSISTANCE<br />
                WITH<br />
                <span className="text-primary neon-text-glow">TV OPTIONS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                We help you explore TV and streaming options available to you. 
                All services are arranged directly with providers.
              </p>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-xs text-foreground">
                  <strong>Note:</strong> Hype Fiber provides guidance only. 
                  Services are provided by third-party providers.
                </p>
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

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Tv, title: 'Channel Guidance', desc: 'We explain different channel packages available' },
              { icon: Play, title: 'Streaming Help', desc: 'Information on streaming apps and availability' },
              { icon: Film, title: 'Feature Assistance', desc: 'We help you understand DVR and recording options' },
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
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
                STREAM<br />
                <span className="text-primary">ANYWHERE</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Watch live TV and on-demand content on up to 5 devices simultaneously. 
                Your entertainment follows you wherever you go.
              </p>
              <ul className="space-y-3">
                {['Watch on any device', 'Download for offline viewing', 'Create personalized profiles', 'Parental controls included'].map((item) => (
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

      {/* Pricing */}
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
              <span className="text-primary">YOUR OPTIONS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We can guide you through different TV and streaming packages available from providers in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl ${pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                    Popular
                  </span>
                )}
                
                <h3 className="font-display font-bold text-2xl mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'opacity-80' : 'text-muted-foreground'}`}>{pkg.channels} Channels</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold">${pkg.price}</span>
                  <span className={pkg.popular ? 'opacity-80' : 'text-muted-foreground'}>/mo*</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${pkg.popular ? '' : 'text-primary'}`} />
                      <span className={`text-sm ${pkg.popular ? '' : 'text-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:8884187872" className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  pkg.popular 
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
            *Pricing varies by provider and location. Contact us for available options.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TV;
