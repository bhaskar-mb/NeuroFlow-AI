import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [clusters, setClusters] = useState(0);
  const [ops, setOps] = useState(0.0);
  const [latency, setLatency] = useState(5.00);
  const [uptime, setUptime] = useState(95.00);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Animate stats over 1.8 seconds using smooth cubic ease-out
    const duration = 1800;
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setClusters(Math.round(1240 * ease));
      setOps(parseFloat((4.8 * ease).toFixed(1)));
      setLatency(parseFloat((5.00 - (5.00 - 0.82) * ease).toFixed(2)));
      setUptime(parseFloat((95.00 + (99.99 - 95.00) * ease).toFixed(2)));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setClusters(1240);
        setOps(4.8);
        setLatency(0.82);
        setUptime(99.99);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#030303]">
      
      {/* Background Grids and Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Large top-left indigo orb */}
        <div className="absolute w-[55vw] h-[55vw] rounded-full bg-indigo-600/25 blur-[130px] top-[-15vw] left-[-5vw] animate-pulse-slow"></div>
        {/* Large bottom-right pink/purple orb */}
        <div className="absolute w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[130px] bottom-[-10vw] right-[-5vw] animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>
        {/* Center accent orb */}
        <div className="absolute w-[30vw] h-[30vw] rounded-full bg-pink-600/10 blur-[100px] top-[30%] left-[50%] -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '-7s' }}></div>

        {/* 3D Perspective Grid Background - brighter */}
        <div className="absolute inset-0 perspective-grid opacity-[0.9] top-[-10%]">
          <div className="w-[300vw] h-[300vh] absolute -top-[50%] -left-[100%] perspective-grid-surface animate-grid-move"></div>
        </div>

        {/* Subtle center radial glow to lift the center of the page */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)' }}></div>

        {/* Vignette radial overlay - softer sides */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 via-transparent to-[#030303]/80"></div>

        {/* Light Sweeps and Glowing Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="light-sweep-line top-[20%] left-0 opacity-[0.4]"></div>
          <div className="light-sweep-line top-[55%] left-0 opacity-[0.3]" style={{ animationDelay: '-5s', animationDuration: '22s' }}></div>
          <div className="light-sweep-line top-[80%] left-0 opacity-[0.4]" style={{ animationDelay: '-11s', animationDuration: '14s' }}></div>
        </div>

        {/* Animated Neural Network Background layer */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[25%] left-[20%] animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-[3px] h-[3px] bg-indigo-500 rounded-full top-[45%] left-[15%] animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute w-[2px] h-[2px] bg-purple-500 rounded-full top-[35%] right-[20%] animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          <div className="absolute w-[3px] h-[3px] bg-pink-500 rounded-full top-[60%] right-[15%] animate-ping" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
          
          <div className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent top-[30%] left-[10%] rotate-[30deg]"></div>
          <div className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-[50%] right-[10%] -rotate-[45deg]"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top pill badge - upgraded */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 text-xs font-semibold tracking-wide mb-8 transition-all duration-700 ease-out transform shadow-[0_0_20px_rgba(99,102,241,0.15)] ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen AI Core: Version 2.4 Now Live
        </div>

        {/* Headline - bigger and bolder */}
        <h1 
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 max-w-5xl leading-[0.9] transition-all duration-700 delay-100 ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Orchestrate AI at{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 [text-shadow:none]">
            Neural Velocity
          </span>
        </h1>

        {/* Subtitle - bigger */}
        <p 
          className={`text-gray-400 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed font-light transition-all duration-700 delay-200 ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Deploy, scale, and optimize LLMs globally in milliseconds — with the infrastructure trusted by 1,200+ engineering teams.
        </p>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 mb-20 transition-all duration-700 delay-300 ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 transform hover:-translate-y-1 cursor-pointer text-center"
          >
            Deploy New Cluster →
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl text-sm font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 transform hover:-translate-y-1 cursor-pointer text-center"
          >
            Explore Features
          </a>
        </div>

        {/* Trust stats bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 mb-16 transition-all duration-700 delay-[350ms] ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {[
            { value: `${clusters.toLocaleString()}+`, label: 'Global Clusters' },
            { value: `${ops.toFixed(1)}B+`, label: 'Synaptic Ops / Day' },
            { value: `${latency.toFixed(2)}ms`, label: 'Avg Latency' },
            { value: `${uptime.toFixed(2)}%`, label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{stat.value}</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* AI Dashboard Mockup */}
        <div 
          className={`w-full max-w-4xl transition-all duration-1000 delay-400 ease-out transform ${
            mounted ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'
          }`}
        >
          <div className="relative glass-panel rounded-2xl p-4 sm:p-6 border border-indigo-500/20 shadow-[0_0_80px_rgba(99,102,241,0.25),0_0_200px_rgba(168,85,247,0.1)] select-none">
            
            {/* Mockup Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                <span className="text-xs text-gray-500 font-mono ml-3">clusters/neuro-prod-us-east.yaml</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
                <span className="text-xs text-gray-400 font-mono">1.2ms</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              
              {/* Left Column: Metrics list */}
              <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="bg-[#0b0a11]/80 rounded-xl p-4 border border-white/5 flex flex-col text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Inference Latency</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-display text-white">0.82ms</span>
                    <span className="text-[10px] text-green-400 font-mono">-14.2%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[82%]"></div>
                  </div>
                </div>

                <div className="bg-[#0b0a11]/80 rounded-xl p-4 border border-white/5 flex flex-col text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Active Agent Node Weight</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-display text-white">12.8 TFLOPS</span>
                    <span className="text-[10px] text-indigo-400 font-mono">+8.4%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[67%]"></div>
                  </div>
                </div>

                <div className="bg-[#0b0a11]/80 rounded-xl p-4 border border-white/5 flex flex-col text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Memory Compression Ratio</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-display text-white">88.4%</span>
                    <span className="text-[10px] text-pink-400 font-mono">Stable</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-full w-[88%]"></div>
                  </div>
                </div>
              </div>

              {/* Right Columns: Animated Node Graph */}
              <div className="lg:col-span-2 relative bg-[#050508] rounded-xl border border-white/5 p-4 flex flex-col justify-between min-h-[250px] overflow-hidden">
                <div className="flex justify-between items-center z-10">
                  <span className="text-xs text-gray-400 font-mono">Synaptic Neural Routing Graph</span>
                  <span className="text-[10px] text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Optimizing Paths...</span>
                </div>

                {/* Simulated Neural Network Map (SVG Animated) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-full max-h-[230px]" viewBox="0 0 500 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/>
                        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2"/>
                      </linearGradient>
                      <linearGradient id="gradient-line-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1"/>
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>

                    {/* Connection Lines with Dash Animations */}
                    <path d="M 50 115 L 150 65 L 280 145 L 380 65 L 450 115" stroke="url(#gradient-line-1)" strokeWidth="2.5" strokeDasharray="10 6" className="animate-[stroke_15s_linear_infinite]" style={{ strokeDashoffset: 100 }} />
                    <path d="M 50 115 L 150 165 L 280 65 L 380 165 L 450 115" stroke="url(#gradient-line-2)" strokeWidth="2" strokeDasharray="8 5" className="animate-[stroke_20s_linear_infinite]" style={{ strokeDashoffset: -100 }} />
                    <path d="M 150 65 L 280 65" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 150 165 L 280 145" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 280 65 L 380 65" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M 280 145 L 380 165" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />

                    {/* Nodes (Glowing Points) */}
                    <g>
                      <circle cx="50" cy="115" r="5" fill="#6366f1" />
                      <circle cx="50" cy="115" r="12" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2" className="animate-ping" />
                    </g>
                    
                    <g>
                      <circle cx="150" cy="65" r="4" fill="#a855f7" />
                      <circle cx="150" cy="65" r="10" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.2" className="animate-ping" style={{ animationDelay: '1s' }} />
                    </g>

                    <circle cx="150" cy="165" r="4" fill="#6366f1" />

                    <g>
                      <circle cx="280" cy="65" r="5" fill="#ec4899" />
                      <circle cx="280" cy="65" r="12" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.2" className="animate-ping" style={{ animationDelay: '2s' }} />
                    </g>

                    <circle cx="280" cy="145" r="4.5" fill="#a855f7" />

                    <g>
                      <circle cx="380" cy="65" r="4" fill="#6366f1" />
                      <circle cx="380" cy="65" r="10" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.2" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                    </g>

                    <circle cx="380" cy="165" r="4" fill="#ec4899" />

                    <g>
                      <circle cx="450" cy="115" r="6" fill="#a855f7" />
                      <circle cx="450" cy="115" r="15" stroke="#a855f7" strokeWidth="2.5" strokeOpacity="0.2" className="animate-ping" style={{ animationDelay: '1.5s' }} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating statistics cards */}
            <div className="absolute -top-10 -left-12 hidden md:block w-48 animate-float-slow bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-0.5 rounded-xl backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="bg-[#0b0a13] p-3 rounded-[10px] text-left">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">Active Nodes</span>
                <span className="text-xl font-bold font-display text-white">2,840</span>
                <span className="text-[9px] font-mono text-green-400 block mt-1">+14.2% spikes</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-12 hidden md:block w-52 animate-float-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-0.5 rounded-xl backdrop-blur-xl border border-white/10 shadow-2xl" style={{ animationDelay: '-3s' }}>
              <div className="bg-[#0b0a13] p-3 rounded-[10px] text-left">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">Inference Cost</span>
                <span className="text-xl font-bold font-display text-white">$0.000045<span className="text-xs text-gray-400">/k</span></span>
                <span className="text-[9px] font-mono text-indigo-400 block mt-1">98.2% cost reduction</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
