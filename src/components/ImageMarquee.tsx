import { motion } from 'framer-motion';
import internetRouter from '@/assets/internet-router.jpg';
import streamingDevices from '@/assets/streaming-devices.jpg';
import smartTv from '@/assets/smart-tv.jpg';
import cityNetwork from '@/assets/city-network.jpg';
import gamingLifestyle from '@/assets/gaming-lifestyle.jpg';
import heroFamily from '@/assets/hero-family.jpg';

const images = [
  { src: internetRouter, alt: 'High-speed router' },
  { src: streamingDevices, alt: 'Streaming devices' },
  { src: smartTv, alt: 'Smart TV entertainment' },
  { src: cityNetwork, alt: 'City network' },
  { src: gamingLifestyle, alt: 'Gaming lifestyle' },
  { src: heroFamily, alt: 'Family entertainment' },
];

const ImageMarquee = () => {
  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Gallery</p>
          <h2 className="sub-heading text-foreground">
            EXPERIENCE THE<br />
            <span className="text-primary neon-text-glow">HYPEFIBER LIFESTYLE</span>
          </h2>
        </motion.div>
      </div>

      {/* First Row - Moving Right */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-right">
          {[...images, ...images].map((image, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-left">
          {[...images.reverse(), ...images].map((image, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
