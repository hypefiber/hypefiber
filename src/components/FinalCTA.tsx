import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import smartTv from '@/assets/smart-tv.jpg';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Take Action</p>
              <h2 className="display-heading text-foreground">
                GET GUIDANCE<br />
                FROM OUR<br />
                <span className="text-primary neon-text-glow">EXPERTS</span>
                <br />
                TODAY.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Our independent team is ready to assist you in finding the right 
              cable, internet, and streaming solutions for your needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="tel:8884187872"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
              >
                <Phone className="w-5 h-5" />
                Call Now: (888) 418-7872
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src={smartTv}
                alt="Premium entertainment experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl pulse-glow"
            >
              <p className="text-4xl font-bold">$49</p>
              <p className="text-sm opacity-80">/month starting</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
