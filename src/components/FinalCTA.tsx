import { motion } from 'framer-motion';
import { ArrowRight, Phone, AlertCircle } from 'lucide-react';
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
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Get Independent Help</p>
              <h2 className="display-heading text-foreground">
                TALK TO A<br />
                THIRD-PARTY<br />
                <span className="text-primary neon-text-glow">ADVISOR</span>
                <br />
                TODAY.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Our independent team helps you understand internet/broadband service options 
              and navigate provider processes. We provide practical guidance only.
            </p>

            <div className="space-y-4">
              <motion.a
                href="tel:8884187872"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
              >
                <Phone className="w-5 h-5" />
                Call for Independent Service Guidance
              </motion.a>

              <div className="flex items-start gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl max-w-md">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground">
                  <strong>Disclaimer:</strong> Not an ISP. No brand affiliation. Independent guidance only.
                </p>
              </div>
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
                alt="Service guidance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
