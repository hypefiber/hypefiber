import { motion } from 'framer-motion';
import { ArrowUpRight, AlertCircle } from 'lucide-react';
import cityNetwork from '@/assets/city-network.jpg';

const reasons = [
  {
    number: '01',
    title: 'Independent Guidance',
    desc: 'We provide unbiased information without selling services from any specific provider.',
  },
  {
    number: '02',
    title: 'Help You Understand',
    desc: 'We explain service options, plans, and provider processes in plain language.',
  },
  {
    number: '03',
    title: 'No Affiliation',
    desc: 'We are not affiliated with any ISP, cable, or telecom company.',
  },
  {
    number: '04',
    title: 'Practical Support',
    desc: 'Get practical guidance on connectivity issues and navigating providers.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={cityNetwork}
                alt="Service guidance"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-3xl border-2 border-primary shadow-lg max-w-xs"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm mb-1">Not an ISP</p>
                  <p className="text-xs text-muted-foreground">Independent guidance only</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Why Us</p>
            <h2 className="sub-heading text-foreground mb-12">
              WHY CHOOSE<br />
              <span className="text-primary neon-text-glow">INDEPENDENT</span><br />
              <span className="text-primary neon-text-glow">GUIDANCE?</span>
            </h2>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-6 p-4 -ml-4 rounded-2xl hover:bg-card transition-colors cursor-pointer"
                >
                  <span className="text-5xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">
                    {reason.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {reason.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-muted-foreground">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
