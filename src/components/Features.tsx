import { useState } from 'react';
import { useMouseSpotlight } from '../hooks/useMouseSpotlight';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeatureItem {
  id: number;
  title: string;
  badge: string;
  description: string;
  accent: string;
  visual: React.ReactNode;
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const spotlightContainerRef = useMouseSpotlight();
  const { ref: revealRef, hasRevealed } = useScrollReveal();

  const features: FeatureItem[] = [
    {
      id: 0,
      badge: "Inference Engine",
      title: "Synaptic Routing Core",
      description: "Direct user queries dynamically across an optimized cluster of LLMs. Achieves sub-millisecond selection times and up to 60% savings on average computation costs.",
      accent: "from-indigo-500 to-purple-600",
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-[11px] text-gray-400 bg-black/60 rounded-xl p-4 border border-white/5 overflow-hidden">
          <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2 mb-2">
            <span className="text-indigo-400">root@neuroflow:~$ run router</span>
            <span className="text-gray-600">active</span>
          </div>
          <div className="space-y-1.5 text-left select-none">
            <div className="text-gray-500">// Intercepting prompt packet (2.4KB)...</div>
            <div><span className="text-purple-400">Incoming request:</span> "Analyze genomic mutations in..."</div>
            <div><span className="text-indigo-400">Evaluating weights:</span> latency=0.2, capability=1.0</div>
            <div className="text-green-400 font-semibold animate-pulse">✓ Route resolved to: Cluster-East-L40S [Weight 0.98]</div>
            <div><span className="text-gray-500">Execution time: 0.12ms | Token efficiency: 99.4%</span></div>
          </div>
          <div className="flex items-center gap-2 mt-4 pt-2 border-t border-white/5 text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span>Cluster 4 status: OPTIMAL</span>
          </div>
        </div>
      )
    },
    {
      id: 1,
      badge: "Global Consensus",
      title: "Consensus Syncing",
      description: "Synchronize local parameters across edge clusters globally. Never experience model drift or desynchronized weight allocations again.",
      accent: "from-purple-500 to-pink-500",
      visual: (
        <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 relative overflow-hidden min-h-[160px]">
          {/* Synchronized nodes */}
          <div className="flex justify-around items-center w-full max-w-[200px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4V9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 20V15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 9A9 9 0 0 0 5.64 5.64L4 9M4 15A9 9 0 0 0 18.36 18.36L20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[9px] font-mono text-gray-500 mt-2">Node {i+1}</span>
                <span className="h-2 w-2 rounded-full bg-green-400 absolute -top-1 -right-1 animate-ping"></span>
                <span className="h-2 w-2 rounded-full bg-green-500 absolute -top-1 -right-1"></span>
              </div>
            ))}
          </div>
          {/* Dynamic line connecting nodes */}
          <div className="absolute h-0.5 bg-gradient-to-r from-purple-500/10 via-purple-500 to-purple-500/10 left-1/4 right-1/4 top-1/2 -translate-y-4 -z-10 animate-pulse"></div>
        </div>
      )
    },
    {
      id: 2,
      badge: "Predictive Analytics",
      title: "Load Balancer",
      description: "Analyze user traffic trends to spin clusters up and down preemptively. Eliminate cold-start latency before the spikes hit.",
      accent: "from-pink-500 to-indigo-500",
      visual: (
        <div className="w-full h-full flex flex-col justify-between bg-black/40 rounded-xl p-4 border border-white/5 min-h-[160px]">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-mono">Load Predictor</span>
            <span className="text-pink-400 font-mono font-semibold">98.4% Acc.</span>
          </div>
          {/* Simple animated histogram */}
          <div className="flex items-end justify-between h-20 px-2 mt-4 select-none">
            {[35, 45, 20, 60, 80, 50, 95, 75, 40, 65, 85].map((height, idx) => (
              <div 
                key={idx} 
                className="w-2.5 rounded-t bg-gradient-to-t from-pink-500/10 to-pink-500 transition-all duration-500" 
                style={{ 
                  height: `${height}%`,
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${idx * 0.1}s`
                }}
              ></div>
            ))}
          </div>
          <span className="text-[9px] text-gray-500 font-mono text-left mt-2">Next Predicted Spike: T-minus 12 mins</span>
        </div>
      )
    },
    {
      id: 3,
      badge: "Elastic Compute",
      title: "Scale Engine",
      description: "Scale to millions of users instantly. NeuroFlow handles partitioning, routing, database migration, and edge server scaling out-of-the-box.",
      accent: "from-indigo-600 to-pink-500",
      visual: (
        <div className="w-full h-full flex flex-col justify-between bg-black/60 rounded-xl p-4 border border-white/5 overflow-hidden">
          <div className="flex justify-between items-center pb-2 border-b border-white/5 text-[10px] text-gray-500 font-mono">
            <span>Server Replication Stack</span>
            <span className="text-indigo-400">Scale: 100x</span>
          </div>
          <div className="flex flex-col gap-2 mt-3 select-none">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-2 rounded-lg bg-[#0e0c15] border border-white/5 transition-all duration-300 hover:border-indigo-500/20"
                style={{ 
                  transform: `translateY(${-i * 2}px)`, 
                  opacity: 1 - i * 0.15 
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-mono text-xs text-gray-300">Cluster_West_Replica_{i+1}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">CPU: {(20 + i*15)}%</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="relative py-28 px-6 bg-[#030303] overflow-hidden">
      
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[50vw] h-[50vw] rounded-full bg-purple-600/15 blur-[140px] top-[-20%] right-[-10%]"></div>
        <div className="absolute w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[120px] bottom-[-10%] left-[-5%]"></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,85,247,0.08) 0%, transparent 60%)' }}></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      <div 
        ref={revealRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-indigo-400 tracking-[0.3em] uppercase mb-4">Enterprise Capabilities</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-5 tracking-tight">
            Engineered to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Outperform</span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl font-light">
            NeuroFlow AI abstracts core AI engineering hurdles — deploy models to production in under 5 minutes.
          </p>
        </div>

        {/* Desktop: Bento Grid Layout */}
        <div 
          ref={spotlightContainerRef}
          className="hidden md:grid grid-cols-6 gap-6"
        >
          {features.map((feature, index) => {
            const isLarge = index === 0 || index === 3;
            const isActive = activeIndex === index;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`spotlight-card group rounded-2xl glass-panel p-6 border transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] cursor-pointer ${
                  isLarge ? 'col-span-4 min-h-[340px]' : 'col-span-2 min-h-[340px]'
                } ${isActive 
                    ? 'shadow-[0_0_40px_rgba(99,102,241,0.2),0_0_80px_rgba(168,85,247,0.1)] border-indigo-500/30 bg-indigo-500/[0.04]' 
                    : 'border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]'}`}
              >
                {/* Card Top Label & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 px-2 py-0.5 rounded">
                    {feature.badge}
                  </span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accent} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                {/* Card Main Graphics/Visual */}
                <div className="mb-6 flex-1 flex items-center justify-center">
                  {feature.visual}
                </div>

                {/* Card Texts */}
                <div className="text-left">
                  <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="md:hidden flex flex-col gap-4">
          {features.map((feature, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={feature.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-indigo-500/30 bg-[#0b0a13]/80 shadow-[0_0_20px_rgba(99,102,241,0.1)]' 
                    : 'border-white/5 bg-[#07070b]/60'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${feature.accent}`}></div>
                    <span className="font-display font-semibold text-white text-base">
                      {feature.title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-indigo-400' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[380px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-1 text-left flex flex-col gap-5">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex justify-center max-w-sm mx-auto w-full py-2">
                      {feature.visual}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
