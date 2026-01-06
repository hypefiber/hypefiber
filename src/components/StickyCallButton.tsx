import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const StickyCallButton = () => {
  return (
    <motion.a
      href="tel:8884187872"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-2xl neon-glow hover:shadow-primary/50 transition-all"
      style={{ boxShadow: '0 10px 40px rgba(0, 255, 255, 0.3)' }}
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span className="hidden sm:inline">Call Now: (888) 418-7872</span>
      <span className="sm:hidden">Call Now</span>
    </motion.a>
  );
};

export default StickyCallButton;
