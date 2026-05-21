import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSlider from './components/FeaturesSlider';
import Neighborhoods from './components/Neighborhoods';
import MortgageCalculator from './components/MortgageCalculator';
import AboutSection from './components/AboutSection';
import MapSection from './components/MapSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={topRef} className="w-full">
      <Navbar />
      <Hero />
      <FeaturesSlider />
      <Neighborhoods />
      <div className="bg-gray-50">
        <MortgageCalculator />
      </div>
      <AboutSection />
      <div className="bg-white">
        <MapSection />
      </div>
      <Testimonials />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
