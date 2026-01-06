import { motion } from 'framer-motion';
import { Plus, Minus, Phone } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqs = [
  {
    category: 'About Hype Fiber',
    questions: [
      { 
        q: 'What is Hype Fiber?', 
        a: 'Hype Fiber is an independent third-party service assistance startup, launched in 2026. We are not an Internet Service Provider (ISP). We provide guidance, support, and assistance to help you navigate and optimize cable, internet, and streaming services from various providers.' 
      },
      { 
        q: 'Are you affiliated with any cable or internet provider?', 
        a: 'No. We are completely independent and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We remain neutral and provide unbiased assistance across multiple providers.' 
      },
      { 
        q: 'Do you sell internet, cable, or streaming plans?', 
        a: 'No. We do not sell internet, cable, or streaming services directly. We are a service assistance platform only. We provide guidance and support; all services are provided by third-party providers.' 
      },
      { 
        q: 'Do you charge for your services?', 
        a: 'Yes. We charge a separate service fee for our assistance and guidance. This fee is separate and independent from any provider billing. You will receive an invoice directly from us for our services.' 
      },
    ],
  },
  {
    category: 'Our Services & Support',
    questions: [
      { 
        q: 'What types of assistance do you provide?', 
        a: 'We assist with service selection guidance, provider comparisons, account setup and configuration, technical support referral, plan optimization recommendations, and problem resolution coordination with service providers.' 
      },
      { 
        q: 'Do you need my provider account password?', 
        a: 'No. We never request or store your provider account passwords or sensitive login credentials. We work with information you provide and coordinate with providers on your behalf using authorized methods only.' 
      },
      { 
        q: 'Which providers do you support?', 
        a: 'We provide assistance across multiple cable, internet, and streaming service providers. Our guidance is provider-agnostic, meaning we focus on helping you find the best solution regardless of the provider, as we have no preference or affiliation.' 
      },
      { 
        q: 'How do I start getting assistance?', 
        a: 'Visit our Contact page or call (888) 418-7872 to speak with our support team. They will discuss your needs and explain our service offerings and fees.' 
      },
    ],
  },
  {
    category: 'Billing & Refunds',
    questions: [
      { 
        q: 'Will my provider still bill me?', 
        a: 'Yes. Provider billing remains completely independent and unchanged. Our assistance fee is separate from provider charges. You will continue receiving bills from your provider as usual, plus a separate invoice from Hype Fiber for our services.' 
      },
      { 
        q: 'Are your services refundable?', 
        a: 'Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on whether assistance has already been delivered. Please review our Refund Policy page for complete details.' 
      },
      { 
        q: 'What payment methods do you accept?', 
        a: 'We accept all major credit cards, debit cards, and bank transfers (ACH). We also offer automatic payment options for convenience.' 
      },
      { 
        q: 'How is my billing information protected?', 
        a: 'All billing information is encrypted and processed through secure payment gateways. We comply with industry security standards and never store complete card information on our servers.' 
      },
    ],
  },
  {
    category: 'Service Provider Relationship',
    questions: [
      { 
        q: 'Can you guarantee specific speeds or services from providers?', 
        a: 'No. We cannot guarantee specific speeds, service availability, or performance from third-party providers. Service quality and speed depend on provider infrastructure, network conditions, and your location. We assist with selections and optimization but cannot control provider performance.' 
      },
      { 
        q: 'What if I have an issue with my provider?', 
        a: 'If you experience issues with your provider, we can help coordinate with them on your behalf and provide troubleshooting support. However, disputes with providers regarding service quality, billing, or terms must be resolved directly with them.' 
      },
      { 
        q: 'Can you change my provider or switch my service?', 
        a: 'We can guide you through switching providers and assist with setup and configuration. However, all service terminations, switches, and contracts are managed directly between you and the providers involved.' 
      },
      { 
        q: 'Are you responsible for provider outages?', 
        a: 'No. We are not responsible for service outages, interruptions, or performance issues caused by providers. Provider outages and service quality are the responsibility of the service provider. We can help coordinate with them to report and resolve issues.' 
      },
    ],
  },
  {
    category: 'Data & Privacy',
    questions: [
      { 
        q: 'What data do you collect?', 
        a: 'We collect minimal essential information such as your name, contact details, service preferences, and communication history. We never collect or store provider account passwords, Social Security numbers, or unnecessary sensitive information.' 
      },
      { 
        q: 'Is my data shared with service providers?', 
        a: 'We may share necessary information with providers (such as your contact information) to facilitate service on your behalf, only with your consent. We do not share payment information or sensitive data without your explicit permission.' 
      },
      { 
        q: 'Is your website secure (HTTPS)?', 
        a: 'Yes. Our entire website uses HTTPS encryption to protect all data transmitted between your device and our servers. This ensures your personal information is encrypted in transit.' 
      },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

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
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ Help Center</p>
            <h1 className="display-heading text-foreground mb-6">
              FREQUENTLY<br />
              <span className="text-primary neon-text-glow">ASKED</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Find answers to common questions about Hype Fiber and our service assistance.
            </p>
          </motion.div>

          {/* Independence Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-primary/10 border border-primary/30 p-4 rounded-xl inline-block max-w-xl mx-auto"
          >
            <p className="text-sm text-foreground">
              <strong>Important:</strong> Hype Fiber is an independent third-party service assistance startup and is not affiliated with any cable, internet, or streaming provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, i) => {
                  const itemId = `${catIndex}-${i}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div
                      key={i}
                      className="bg-card rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full p-6 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-foreground pr-4">{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-muted-foreground">{faq.a}</p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-heading text-foreground mb-4">
              STILL HAVE <span className="text-primary">QUESTIONS?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help 24/7.
            </p>
            <a
              href="tel:8884187872"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform neon-glow"
            >
              <Phone className="w-5 h-5" />
              Call Now: (888) 418-7872
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
