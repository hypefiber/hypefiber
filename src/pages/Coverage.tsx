import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Zap, ArrowRight, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cityNetwork from '@/assets/city-network.jpg';

const Coverage = () => {
  const areas = [
    { name: 'Downtown Metro', status: 'available' },
    { name: 'North District', status: 'available' },
    { name: 'South Valley', status: 'available' },
    { name: 'East Ridge', status: 'available' },
    { name: 'West End', status: 'available' },
    { name: 'Harbor Area', status: 'available' },
    { name: 'University District', status: 'available' },
    { name: 'Tech Park', status: 'available' },
    { name: 'Suburban Heights', status: 'coming' },
    { name: 'Lake District', status: 'coming' },
  ];

  const expansionPlans = [
    { quarter: 'Q1 2026', areas: ['Suburban Heights', 'Riverside'] },
    { quarter: 'Q2 2026', areas: ['Lake District', 'Mountain View'] },
    { quarter: 'Q3 2026', areas: ['Coastal Towns', 'Valley Region'] },
    { quarter: 'Q4 2026', areas: ['Rural Expansion', 'Industrial Zone'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Coverage Map</p>
            <h1 className="display-heading text-foreground mb-6">
              CHECK<br />
              <span className="text-primary neon-text-glow">AVAILABILITY</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our service assistance network is expanding rapidly. Check if HYPEFIBER can help you in your area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Address Check - Featured */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your address..."
              className="flex-1 px-6 py-4 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Check Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={cityNetwork}
                alt="Network coverage"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-3xl" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-3xl font-bold text-primary">125+</p>
                  <p className="text-sm text-muted-foreground">Cities Covered</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-3xl font-bold text-primary">500K+</p>
                  <p className="text-sm text-muted-foreground">Homes Connected</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sub-heading text-foreground mb-8">
                SERVICE<br />
                <span className="text-primary">AREAS</span>
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, i) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg"
                  >
                    {area.status === 'available' ? (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-foreground">{area.name}</p>
                      <p className={`text-xs ${area.status === 'available' ? 'text-primary' : 'text-muted-foreground'}`}>
                        {area.status === 'available' ? 'Available' : 'Coming Soon'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expansion Timeline */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              EXPANSION<br />
              <span className="text-primary">ROADMAP</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              We're constantly growing. See where we're heading next.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {expansionPlans.map((plan, i) => (
              <motion.div
                key={plan.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-background rounded-2xl"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{plan.quarter}</h3>
                <ul className="space-y-2">
                  {plan.areas.map((area) => (
                    <li key={area} className="text-muted-foreground text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Service */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-heading text-foreground mb-6">
              NOT IN YOUR <span className="text-primary">AREA YET?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Request service in your area. The more requests we get, the faster we expand to your neighborhood.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:8884187872"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coverage;
