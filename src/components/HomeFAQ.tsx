import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What speeds can I expect with guidance from HYPEFIBER?',
    answer: 'Our fiber network delivers speeds up to 1 Gbps for both download and upload. Most customers experience speeds very close to their plan maximum, with typical speeds of 940+ Mbps on our Ultra plan.',
  },
  {
    question: 'Is there a contract or commitment required?',
    answer: 'We offer both contract-free month-to-month plans and discounted annual contracts. With no-contract plans, you can cancel anytime without penalties. Annual plans offer savings of up to 20%.',
  },
  {
    question: 'What equipment is included?',
    answer: 'Every plan includes a high-performance WiFi 6 router at no extra cost. Our Ultra plan includes a whole-home mesh WiFi system for complete coverage. All equipment is professionally installed.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Standard installation is completed within 2-3 hours. Our technicians handle everything from running fiber to your home to setting up your WiFi network. Same-week installation is available in most areas.',
  },
  {
    question: 'Can I bundle internet with TV service?',
    answer: 'Absolutely! Our bundle packages combine high-speed internet with 200+ TV channels and save you up to 30% compared to purchasing separately. All bundles include cloud DVR and streaming apps.',
  },
];

const HomeFAQ = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">+ FAQ</p>
            <h2 className="sub-heading text-foreground mb-6">
              GOT<br />
              <span className="text-primary neon-text-glow">QUESTIONS?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Find answers to our most frequently asked questions. Can't find what you're looking for? Our support team is here 24/7.
            </p>
            
            <a
              href="tel:8884187872"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Call Now: (888) 418-7872
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-background rounded-2xl border border-border px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
