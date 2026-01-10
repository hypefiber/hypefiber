import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import heroFamily from '@/assets/hero-family.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';
import internetRouter from '@/assets/internet-router.jpg';

const cards = [
  {
    title: 'UNDERSTAND YOUR OPTIONS.',
    description: 'We help you understand internet/broadband service options available in your area.',
    image: heroFamily,
    size: 'large',
  },
  {
    title: 'NAVIGATE PROVIDERS.',
    description: 'Get guidance on how to work with service providers and understand their processes.',
    image: streamingDevices,
    size: 'medium',
  },
  {
    title: 'PRACTICAL GUIDANCE.',
    description: 'Learn about connectivity issues and get practical advice on addressing them.',
    image: internetRouter,
    size: 'medium',
  },
];

const AsymmetricCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Large Card */}
          <motion.a
            href="tel:8884187872"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:row-span-2 block"
          >
            <div className="group h-full bg-card rounded-3xl overflow-hidden hover-lift cursor-pointer">
              <div className="aspect-[3/4] lg:h-full relative overflow-hidden">
                <img
                  src={cards[0].image}
                  alt={cards[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground mb-2">
                        {cards[0].title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cards[0].description}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="arrow-button flex-shrink-0"
                    >
                      <Phone className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Medium Cards */}
          {cards.slice(1).map((card, index) => (
            <a
              key={card.title}
              href="tel:8884187872"
              className="group bg-card rounded-3xl overflow-hidden hover-lift cursor-pointer block md:col-span-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="arrow-button flex-shrink-0"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </a>
          ))})

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-primary rounded-3xl p-8 flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-2xl text-primary-foreground mb-4">
              OVER 10 YEARS OF EXPERIENCE
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Trusted by thousands of customers across the region. Our commitment to quality service remains unwavering.
            </p>
            <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">
              Trusted by Global Brands
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AsymmetricCards;
