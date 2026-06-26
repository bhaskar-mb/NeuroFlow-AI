import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const { ref: revealRef, hasRevealed } = useScrollReveal();

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-indigo-600/15 blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[30vw] h-[30vw] rounded-full bg-pink-600/10 blur-[120px] bottom-0 right-0"></div>
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div 
        ref={revealRef}
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
          hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Glowing gradient border wrapper */}
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40 shadow-[0_0_80px_rgba(99,102,241,0.2),0_0_200px_rgba(168,85,247,0.1)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_90px_rgba(99,102,241,0.3),0_0_220px_rgba(168,85,247,0.15)]">
          
          {/* Inner card */}
          <div className="relative rounded-3xl bg-[#080810]/90 backdrop-blur-xl p-8 sm:p-16 text-center overflow-hidden">

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.6] pointer-events-none rounded-3xl"></div>
            
            {/* Decorative Corner Glows */}
            <div className="absolute w-52 h-52 rounded-full bg-indigo-500/15 blur-[60px] -top-10 -left-10 pointer-events-none"></div>
            <div className="absolute w-52 h-52 rounded-full bg-pink-500/12 blur-[60px] -bottom-10 -right-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-5">
                Start Instantly
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-6 tracking-tight">
                Ready to{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 font-extrabold">
                  Orchestrate AI at Neural Velocity?
                </span>
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
                Join thousands of engineering teams deploying AI globally.
              </p>

              {/* Trial form or CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center shrink-0"
                >
                  Start Free Trial
                </button>
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl text-sm font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center shrink-0"
                >
                  Book Enterprise Demo
                </button>
              </div>

              {/* Small note */}
              <span className="text-[10px] text-gray-500 font-mono mt-5 block">
                No credit card required. Includes $200 in free inference credits.
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
