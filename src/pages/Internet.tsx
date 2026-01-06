import { motion } from 'framer-motion';
import { Check, Wifi, Zap, Shield, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import internetRouter from '@/assets/internet-router.jpg';

const plans = [
  {
    name: 'Basic',
    speed: '100 Mbps',
    price: 49,
    features: ['Unlimited Data', 'Free Installation', 'WiFi Router Included', '24/7 Support'],
  },
  {
    name: 'Pro',
    speed: '500 Mbps',
    price: 79,
    popular: true,
    features: ['Unlimited Data', 'Free Installation', 'Premium WiFi 6 Router', '24/7 Priority Support', 'Free Speed Upgrades'],
  },
  {
    name: 'Ultra',
    speed: '1 Gbps',
    price: 99,
    features: ['Unlimited Data', 'Free Installation', 'Mesh WiFi System', 'Dedicated Support Line', 'Gaming Priority Mode', 'Static IP Option'],
  },
];

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
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Internet Guidance</p>
              <h1 className="display-heading text-foreground mb-6">
                ASSISTANCE<br />
                WITH<br />
                <span className="text-primary neon-text-glow">INTERNET</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                We guide you through available internet options and help you find the right plan 
                for your needs. All provider arrangements are handled directly with the provider.
              </p>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-xs text-foreground">
                  <strong>Note:</strong> Hype Fiber does not provide internet services directly. 
                  We provide guidance and assistance only.
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
                src={internetRouter}
                alt="High-speed router"
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
              { icon: Zap, title: 'Speed Guidance', desc: 'We help you understand different speed options and what you need' },
              { icon: Shield, title: 'Provider Comparison', desc: 'Compare available providers and plans in your area' },
              { icon: Wifi, title: 'Setup Assistance', desc: 'We guide you through setup and optimize your connection' },
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

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              WE GUIDE YOU<br />
              <span className="text-primary">THROUGH OPTIONS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Contact us to discuss your internet needs. We'll provide guidance on available options from providers in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                    Popular
                  </span>
                )}
                
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'opacity-80' : 'text-muted-foreground'}`}>{plan.speed}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.popular ? 'opacity-80' : 'text-muted-foreground'}>/mo*</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? '' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.popular ? '' : 'text-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:8884187872" className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  plan.popular 
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
            *Pricing varies by provider and location. Contact us for available options in your area.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internet;
