import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceStrip from '@/components/ServiceStrip';
import FeatureStatement from '@/components/FeatureStatement';
import AsymmetricCards from '@/components/AsymmetricCards';
import TechShowcase from '@/components/TechShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import ImageMarquee from '@/components/ImageMarquee';
import ParallaxSection from '@/components/ParallaxSection';
import Testimonials from '@/components/Testimonials';
import StatsSection from '@/components/StatsSection';
import HomeFAQ from '@/components/HomeFAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceStrip />
      <FeatureStatement />
      <AsymmetricCards />
      <TechShowcase />
      <WhyChooseUs />
      <ImageMarquee />
      <ParallaxSection />
      <Testimonials />
      <StatsSection />
      <HomeFAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
