import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const topRef = useRef(null);
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("div", { ref: topRef, className: "w-full", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(FeaturesSlider, {}), _jsx(Neighborhoods, {}), _jsx("div", { className: "bg-gray-50", children: _jsx(MortgageCalculator, {}) }), _jsx(AboutSection, {}), _jsx("div", { className: "bg-white", children: _jsx(MapSection, {}) }), _jsx(Testimonials, {}), _jsx(Footer, { scrollToTop: scrollToTop })] }));
}
export default App;
