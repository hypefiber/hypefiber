import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeatureStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={ref} className="py-32 md:py-48 bg-card relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <motion.div
          style={{ opacity, y }}
          className="text-center"
        >
          <h2 className="display-heading max-w-5xl mx-auto">
            <span className="text-foreground">BUILT FOR </span>
            <span className="text-primary neon-text-glow">SPEED</span>
            <span className="text-foreground">.</span>
            <br />
            <span className="text-muted-foreground">DESIGNED FOR </span>
            <span className="text-secondary">RELIABILITY</span>
            <span className="text-muted-foreground">.</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-48 bg-primary mx-auto mt-12 origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureStatement;
