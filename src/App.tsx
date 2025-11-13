import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}