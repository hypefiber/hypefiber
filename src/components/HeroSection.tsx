import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Phone } from 'lucide-react';
import heroPerson from '@/assets/hero-person.jpg';
import BrandMarquee from './BrandMarquee';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        
        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="60" y1="0" x2="40" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.1" />
          <line x1="80" y1="0" x2="60" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative min-h-[120vh] pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative grid lg:grid-cols-12 gap-8 min-h-[80vh] items-center">
            
            {/* Center: Main Typography */}
            <div className="lg:col-span-8 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">Independent Service Assistance</span>
                </div>

                {/* Main Heading - Stacked Bold Typography */}
                <h1 className="display-heading leading-[0.85]">
                  <motion.span 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block text-foreground"
                  >
                    EXPERT
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="block text-primary neon-text-glow"
                  >
                    GUIDANCE
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block text-foreground"
                  >
                    FOR SERVICES
                  </motion.span>
                </h1>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    href="tel:8884187872"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: (888) 418-7872
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Hero Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-4 relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl">
                  <img
                    src={heroPerson}
                    alt="Person enjoying streaming"
                    className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Floating Speed Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute top-8 -left-8 glass-card p-4 rounded-2xl z-20"
                >
                  <p className="text-xs text-muted-foreground uppercase">Current Speed</p>
                  <p className="text-2xl font-bold text-primary neon-text-glow">945 Mbps</p>
                </motion.div>

                {/* Floating Star Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-4 right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-20"
                >
                  <Star className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Stats */}
        {/* Removed stats section */}
        <div className="lg:hidden" />
      </div>

      {/* Bottom Brand Marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <BrandMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
