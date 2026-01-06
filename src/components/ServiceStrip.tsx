import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import internetRouter from '@/assets/internet-router.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';
import smartTv from '@/assets/smart-tv.jpg';
import gamingLifestyle from '@/assets/gaming-lifestyle.jpg';

const services = [
  {
    title: 'High-Speed Internet',
    description: 'Fiber-powered speeds up to 1 Gbps',
    image: internetRouter,
  },
  {
    title: 'Premium TV',
    description: '200+ HD & 4K channels',
    image: smartTv,
  },
  {
    title: 'Streaming',
    description: 'All your favorite apps included',
    image: streamingDevices,
  },
  {
    title: 'Gaming',
    description: 'Ultra-low latency connection',
    image: gamingLifestyle,
  },
];

const ServiceStrip = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">+ What We Do</p>
          <h2 className="sub-heading text-foreground">
            DESIGNING FOR SEAMLESS AND<br />
            <span className="text-muted-foreground">ENJOYABLE INTERACTIONS.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href="tel:8884187872"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card hover-lift cursor-pointer block"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="arrow-button"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStrip;
