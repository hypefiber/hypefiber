import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Remote Professional',
    quote: 'Getting help from HYPEFIBER was the best decision for my home office. They guided me to the perfect internet plan for crystal clear video calls.',
    rating: 5,
    image: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Gaming Enthusiast',
    quote: 'The low latency is incredible for competitive gaming. I went from 60ms ping to under 10ms. My gaming experience has completely transformed.',
    rating: 5,
    image: 'DC',
  },
  {
    name: 'The Rodriguez Family',
    role: 'Family of 5',
    quote: 'With three kids streaming, two parents working from home, and smart devices everywhere - HYPEFIBER helped us find a connection that handles it all without breaking a sweat.',
    rating: 5,
    image: 'RF',
  },
  {
    name: 'Emma Thompson',
    role: 'Content Creator',
    quote: 'Uploading 4K videos used to take hours. Now it takes minutes. HYPEFIBER\'s guidance helped me find symmetric speeds that revolutionized my content workflow.',
    rating: 5,
    image: 'ET',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Testimonials</p>
          <h2 className="sub-heading text-foreground">
            TRUSTED BY<br />
            <span className="text-primary neon-text-glow">THOUSANDS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary neon-text-glow">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
