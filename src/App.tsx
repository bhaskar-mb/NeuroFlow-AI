import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-gray-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Structural Elements using semantic HTML5 tags */}
      <Navbar />
      
      <main id="main-content">
        <Hero />
        
        {/* Premium Gradient Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent relative z-10"></div>
        
        <Features />
        <Pricing />
        <SocialProof />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
