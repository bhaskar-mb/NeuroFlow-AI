import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030303]/75 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2.5 focus:outline-none group cursor-pointer"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-colors duration-200">
            NeuroFlow <span className="text-indigo-400">AI</span>
          </span>
        </button>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150 relative py-2 cursor-pointer group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('pricing')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none cursor-pointer"
          >
            <span className="relative px-5 py-2 transition-all ease-in-out duration-150 bg-[#0a0a0f] rounded-[7px] group-hover:bg-opacity-0">
              Start Free Trial
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-[#030303]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-colors duration-150 py-1 cursor-pointer"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full text-center py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-150 mt-2 cursor-pointer"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
