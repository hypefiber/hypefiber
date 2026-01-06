import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cityNetwork from '@/assets/city-network.jpg';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '(888) 418-7872', desc: '24/7 Support Available' },
    { icon: Mail, title: 'Email', value: 'support@hypefiber.com', desc: 'Response within 24hrs' },
    { icon: MapPin, title: 'Address', value: '123 Digital Avenue', desc: 'Tech City, TC 12345' },
    { icon: Clock, title: 'Hours', value: '24/7 Support', desc: 'Always available' },
  ];

  const supportOptions = [
    { icon: MessageCircle, title: 'Live Chat', desc: 'Get instant help from our support team', cta: 'Start Chat' },
    { icon: Headphones, title: 'Phone Support', desc: 'Talk to a real person 24/7', cta: 'Call Now' },
    { icon: FileText, title: 'Knowledge Base', desc: 'Find answers in our help center', cta: 'Browse Articles' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Get In Touch</p>
            <h1 className="display-heading text-foreground mb-6">
              LET'S<br />
              <span className="text-primary neon-text-glow">TALK</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Have questions about our service assistance? We're here to help. 
              Reach out and our independent assistance team will get back to you promptly.
            </p>
          </motion.div>

          {/* Independence Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-primary/10 border border-primary/30 p-4 rounded-xl inline-block max-w-2xl mx-auto"
          >
            <p className="text-sm text-foreground">
              <strong>Disclosure:</strong> Hype Fiber is an independent third-party service assistance startup. We are not affiliated with any cable, internet, or streaming provider. Our phone line is operated by Hype Fiber only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-2xl text-center hover:bg-primary group transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-background transition-colors">
                  <info.icon className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary-foreground">{info.title}</h3>
                <p className="text-primary font-medium group-hover:text-primary-foreground">{info.value}</p>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="sub-heading text-foreground">
              HOW CAN WE <span className="text-primary">HELP?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background rounded-3xl text-center group hover:border-primary border border-transparent transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <option.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.desc}</p>
                <button className="px-6 py-3 bg-muted text-foreground font-semibold rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {option.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Phone Greeting Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-6 bg-primary/5 border border-primary/20 rounded-2xl max-w-3xl mx-auto"
          >
            <h3 className="font-display font-bold text-foreground mb-3">Phone Support Information</h3>
            <p className="text-muted-foreground text-sm">
              When you call (888) 418-7872, our greeting states: <span className="italic text-foreground">"Thank you for calling HYPEFIBER, an independent service assistance platform."</span> Our team does not represent any cable, internet, or streaming service provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img
                src={cityNetwork}
                alt="Our network"
                className="w-full rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-3xl"
            >
              <h2 className="sub-heading text-foreground mb-8">
                SEND US A <span className="text-primary">MESSAGE</span>
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Technical Support</option>
                    <option>Billing</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform neon-glow flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="sub-heading text-foreground">
              FIND <span className="text-primary">US</span>
            </h2>
          </motion.div>

          <div className="aspect-video rounded-3xl overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground font-display font-bold text-xl">123 Fiber Street</p>
                <p className="text-muted-foreground">Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
