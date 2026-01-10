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
    question: 'What services does HYPEFIBER provide?',
    answer: 'We provide independent third-party guidance on internet/broadband services, cable TV options, and connectivity issues. We help you understand service options and navigate provider processes. We are NOT an ISP or service provider.',
  },
  {
    question: 'Are you affiliated with any internet or TV providers?',
    answer: 'No. We are NOT affiliated, authorized, or endorsed by any telecom, cable, or ISP company. We provide independent guidance only. All provider mentions are for informational purposes.',
  },
  {
    question: 'Do you sell internet or TV services?',
    answer: 'No. We do NOT sell official ISP or TV services. We are not a service provider. We help you understand your options and guide you through the process of working with providers directly.',
  },
  {
    question: 'Can you guarantee technical fixes?',
    answer: 'No. We do NOT provide guaranteed technical fixes. We offer practical guidance on connectivity issues and help you understand how to address them, but we cannot guarantee results as we are not the service provider.',
  },
  {
    question: 'How can I get help from HYPEFIBER?',
    answer: 'Call us at (888) 418-7872 to speak with a third-party advisor. We provide independent service guidance to help you understand internet/broadband options and navigate provider processes.',
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
              COMMON<br />
              <span className="text-primary neon-text-glow">QUESTIONS</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Find answers to frequently asked questions about our independent guidance services. Need more help? Call our third-party advisors.
            </p>
            
            <a
              href="tel:8884187872"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Talk to a Third-Party Advisor
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
