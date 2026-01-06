import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart, ArrowRight, Briefcase, Target, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroFamily from '@/assets/hero-family.jpg';
import cityNetwork from '@/assets/city-network.jpg';

const About = () => {
  const values = [
    { icon: Users, title: 'Customer Guidance', desc: 'We provide unbiased assistance to help customers make informed decisions.' },
    { icon: Award, title: 'Independence', desc: 'We are neutral and not affiliated with any service provider.' },
    { icon: Clock, title: 'Availability', desc: '24/7 support because service questions don\'t follow schedules.' },
    { icon: Heart, title: 'Integrity', desc: 'Our recommendations are always in your best interest, not ours.' },
  ];

  const milestones = [
    { year: '2026', title: 'Founded', desc: 'Hype Fiber launched as an independent service assistance startup' },
    { year: '2026', title: 'Mission Start', desc: 'Began providing unbiased guidance across multiple service providers' },
    { year: '2026', title: 'Expansion', desc: 'Growing team dedicated to customer service assistance' },
    { year: '2026', title: 'Commitment', desc: 'Dedicated to transparent, independent service support' },
    { year: '2026+', title: 'Future Vision', desc: 'Expanding assistance services to more customers nationwide' },
  ];

  const leadership = [
    { name: 'Hype Fiber Team', role: 'Support Specialists', desc: 'Dedicated to independent service guidance' },
    { name: 'Operations Team', role: 'Assistance Coordinators', desc: 'Ensuring smooth customer support experience' },
    { name: 'Customer Success', role: 'Support Leaders', desc: 'Focused on customer satisfaction and guidance' },
    { name: 'Support Network', role: 'Assistance Providers', desc: 'Available 24/7 for customer inquiries' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ About Us</p>
              <h1 className="display-heading text-foreground mb-6">
                WE ARE<br />
                <span className="text-primary neon-text-glow">HYPE FIBER</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                An independent third-party service assistance startup launched in 2026, 
                dedicated to providing unbiased guidance across cable, internet, and streaming services.
              </p>

              {/* Independence Badge */}
              <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl inline-block">
                <p className="text-sm text-foreground">
                  <strong>✓ Completely Independent</strong><br />
                  Not affiliated with any service provider
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={heroFamily}
                alt="Happy customers"
                className="w-full rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-3xl"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide independent, unbiased guidance and assistance to help customers navigate cable, internet, and streaming service options. We empower informed decision-making without affiliation or financial incentives from any provider.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-3xl"
            >
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted independent service assistance platform, known for transparency, integrity, and genuinely helpful guidance that prioritizes customer interests above all else.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2026', label: 'Year Founded' },
              { value: '24/7', label: 'Support Hours' },
              { value: '∞', label: 'Provider Partnerships' },
              { value: '100%', label: 'Independent' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-primary neon-text-glow">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story with Timeline */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              OUR <span className="text-primary">JOURNEY</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-display font-bold text-3xl text-primary mb-2">{milestone.year}</h3>
                    <h4 className="font-display font-semibold text-xl text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              OUR <span className="text-primary">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              OUR <span className="text-primary">LEADERSHIP</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background rounded-2xl text-center group hover:bg-primary transition-colors"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-background group-hover:to-muted transition-colors">
                  <span className="text-2xl font-bold text-primary-foreground group-hover:text-primary">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary-foreground">{leader.name}</h3>
                <p className="text-primary text-sm group-hover:text-primary-foreground/80">{leader.role}</p>
                <p className="text-muted-foreground text-xs mt-2 group-hover:text-primary-foreground/60">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={cityNetwork}
                alt="Join our team"
                className="w-full rounded-3xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-12 h-12 text-primary mb-6" />
              <h2 className="sub-heading text-foreground mb-6">
                JOIN OUR<br />
                <span className="text-primary">TEAM</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented, passionate people to join our mission of helping people find the right services. Explore open positions and grow your career with HYPEFIBER.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full neon-glow"
              >
                View Careers
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
