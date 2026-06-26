import { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarGradient: string;
}

interface Stat {
  id: number;
  label: string;
  target: number;
  suffix: string;
  decimals: number;
}

export default function SocialProof() {
  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const slideInterval = useRef<any>(null);
  const { ref: revealRef, hasRevealed } = useScrollReveal();

  const testimonials: Testimonial[] = [
    {
      id: 0,
      quote: "NeuroFlow AI completely re-imagined how we deploy neural networks. We went from manual orchestration pipelines to single-click deployments. The routing latencies are virtually non-existent.",
      author: "Elena Rostova",
      role: "VP of AI Infrastructure",
      company: "Cognitive Labs",
      avatarGradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 1,
      quote: "The direct DOM pricing mechanics and the bento scaling grids are a developer's dream. We reduced compute idle times by 60% within the first month. An absolute masterpiece of engineering.",
      author: "Marcus Vance",
      role: "Head of Platform",
      company: "Synthetix",
      avatarGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      quote: "We were skeptical about the sub-millisecond route claims, but testing proved them right. Scaling 100x was seamless. NeuroFlow's enterprise cluster management is unmatched.",
      author: "Sarah Chen",
      role: "Chief Architect",
      company: "Aether Dynamics",
      avatarGradient: "from-pink-500 to-orange-500"
    }
  ];

  const startSlideShow = () => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // slide every 6s
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const handlePrevSlide = () => {
    stopSlideShow();
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startSlideShow();
  };

  const handleNextSlide = () => {
    stopSlideShow();
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
    startSlideShow();
  };

  const handleDotClick = (idx: number) => {
    stopSlideShow();
    setActiveSlide(idx);
    startSlideShow();
  };

  // Stats Count-Up Logic
  const statsList: Stat[] = [
    { id: 0, label: "Total Synaptic Operations", target: 4.8, suffix: "B+", decimals: 1 },
    { id: 1, label: "Average Inference Latency", target: 0.82, suffix: "ms", decimals: 2 },
    { id: 2, label: "Global Edge Clusters", target: 1240, suffix: "+", decimals: 0 },
    { id: 3, label: "Operational Uptime SLA", target: 99.999, suffix: "%", decimals: 3 }
  ];

  const [displayVals, setDisplayVals] = useState<number[]>([0, 0, 0, 0]);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const animStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animStarted.current) {
          animStarted.current = true;
          
          const duration = 1500; // 1.5 seconds animation
          const frameDuration = 1000 / 60; // 60 FPS
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const counterTimer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setDisplayVals(
              statsList.map((stat) => {
                const currentVal = stat.target * easeProgress;
                return parseFloat(currentVal.toFixed(stat.decimals));
              })
            );

            if (frame === totalFrames) {
              clearInterval(counterTimer);
              setDisplayVals(statsList.map((stat) => stat.target));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 }
    );

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[50vw] h-[50vw] rounded-full bg-purple-600/12 blur-[150px] top-[10%] left-[50%] -translate-x-1/2"></div>
        <div className="absolute w-[30vw] h-[30vw] rounded-full bg-indigo-600/10 blur-[100px] bottom-[5%] left-[-5%]"></div>
        <div className="absolute w-[25vw] h-[25vw] rounded-full bg-pink-600/8 blur-[100px] top-[20%] right-[-5%]"></div>
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(rgba(168,85,247,0.5) 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
      </div>

      <div 
        ref={revealRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* PART 1: Company Logo Ticker */}
        <div className="text-center mb-24 select-none">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-8">
            Powering AI Clusters for Forward-Thinking Enterprises
          </span>
          
          {/* Logo Ticker Container */}
          <div className="relative w-full overflow-hidden mask-radial py-2">
            <div className="flex gap-16 items-center w-max animate-ticker whitespace-nowrap">
              {/* Render logos twice for infinite scrolling loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center shrink-0">
                  {/* Stripe logo template */}
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">STRIPE</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">LINEAR</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">VERCEL</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">OPENAI</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">PINECONE</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">REPLICATE</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">RETOOL</span>
                  <span className="text-lg font-bold font-display text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default">SCALE AI</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 2: Custom Testimonials Carousel */}
        <div className="mb-28 text-center max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold text-indigo-400 tracking-[0.3em] uppercase mb-4">Enterprise Feedback</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-16 tracking-tight">
            Loved by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 font-extrabold">Infrastructure</span> Developers
          </h3>

          <div className="relative glass-panel rounded-2xl p-8 sm:p-12 border border-white/5 shadow-2xl select-none">
            {/* Carousel Inner Container */}
            <div className="relative overflow-hidden min-h-[140px] flex items-center justify-center">
              {testimonials.map((test, index) => (
                <div
                  key={test.id}
                  className={`w-full transition-all duration-500 ease-in-out absolute flex flex-col items-center ${
                    activeSlide === index 
                      ? 'opacity-100 translate-x-0 relative pointer-events-auto' 
                      : 'opacity-0 translate-x-12 absolute pointer-events-none'
                  }`}
                >
                  <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium mb-8 max-w-2xl text-center">
                    "{test.quote}"
                  </blockquote>
                  
                  {/* Author Meta */}
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${test.avatarGradient} flex items-center justify-center font-display font-bold text-white shadow-lg`}>
                      {test.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <cite className="font-display font-semibold text-white text-sm not-italic block">{test.author}</cite>
                      <span className="text-[11px] text-gray-500 font-mono">{test.role} at {test.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left/Right Controls */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hidden sm:block"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer hidden sm:block"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx ? 'w-6 bg-indigo-500' : 'bg-white/10 hover:bg-white/25'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </div>

        {/* PART 3: Statistics Counters */}
        <div 
          ref={statsContainerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5 select-none"
        >
          {statsList.map((stat, index) => (
            <div key={stat.id} className="flex flex-col text-center lg:text-left">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-500 block mb-2">
                {stat.label}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                {displayVals[index]}
                <span className="text-indigo-400">{stat.suffix}</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
