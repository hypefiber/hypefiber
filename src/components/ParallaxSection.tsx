import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import cityNetwork from '@/assets/city-network.jpg';

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Fixed Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={cityNetwork}
          alt="Connected city network"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Who We Are</p>
              
              <h2 className="sub-heading text-foreground mb-6">
                CREATIVITY<br />
                <span className="text-primary neon-text-glow">MEETS STRATEGY</span>.
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                With a team of passionate engineers, marketers, and innovators, 
                we specialize in delivering cutting-edge internet solutions that 
                elevate your digital experience.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">89%</p>
                  <p className="text-sm text-muted-foreground">Coverage Area</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>

              <motion.a
                href="tel:8884187872"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
              >
                Call Now: (888) 418-7872
                <Phone className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute right-8 top-1/3 hidden lg:block"
      >
        <div className="glass-card p-6 rounded-2xl max-w-xs">
          <p className="text-sm text-muted-foreground mb-2">Network Coverage</p>
          <p className="text-4xl font-bold text-foreground">500K+</p>
          <p className="text-sm text-muted-foreground">Homes Connected</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="absolute right-20 bottom-1/4 hidden lg:block"
      >
        <div className="glass-card p-6 rounded-2xl max-w-xs">
          <p className="text-sm text-muted-foreground mb-2">Average Speed</p>
          <p className="text-4xl font-bold text-primary">940Mbps</p>
          <p className="text-sm text-muted-foreground">Download Speed</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
