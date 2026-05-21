import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.tsx';
import FeaturesSlider from './components/FeaturesSlider.tsx';
import Neighborhoods from './components/Neighborhoods';
import MortgageCalculator from './components/MortgageCalculator.tsx';
import AboutSection from './components/AboutSection';
import MapSection from './components/MapSection.tsx';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer.tsx';

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
