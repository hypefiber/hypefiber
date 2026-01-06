import { motion } from 'framer-motion';
import { Wifi, Zap, Shield, Cloud, Smartphone, Tv } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fiber-Optic Technology',
    desc: 'Light-speed data transmission for unparalleled performance',
  },
  {
    icon: Wifi,
    title: 'WiFi 6E Ready',
    desc: 'Next-gen wireless with 6GHz band support for faster speeds',
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    desc: 'Enterprise-grade protection for your entire network',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    desc: 'Seamless backup and sync across all your devices',
  },
  {
    icon: Smartphone,
    title: 'Smart Home Ready',
    desc: 'Connect 100+ devices without performance drops',
  },
  {
    icon: Tv,
    title: '8K Streaming Ready',
    desc: 'Future-proof bandwidth for next-gen content',
  },
];

const TechShowcase = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Technology</p>
          <h2 className="sub-heading text-foreground">
            POWERED BY<br />
            <span className="text-primary neon-text-glow">INNOVATION</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card p-8 rounded-3xl border border-border hover:border-primary transition-all overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
