import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sitemap = [
    {
      title: "Product",
      links: [
        { label: "Synaptic Routing", href: "#features" },
        { label: "Predictive Capacity", href: "#features" },
        { label: "Consensus Syncing", href: "#features" },
        { label: "Pricing Clusters", href: "#pricing" }
      ]
    },
    {
      title: "Developers",
      links: [
        { label: "API Reference", href: "#" },
        { label: "Cluster Guides", href: "#" },
        { label: "Status Page", href: "#" },
        { label: "GitHub Core", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Research Hub", href: "#" },
        { label: "Press Kit", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security Schema", href: "#" },
        { label: "SLA Commitments", href: "#" }
      ]
    }
  ];

  const { ref: revealRef, hasRevealed } = useScrollReveal();

  return (
    <footer ref={revealRef} className={`bg-[#030303] text-gray-400 py-20 px-6 relative z-10 select-none overflow-hidden transition-opacity duration-1000 ${hasRevealed ? 'opacity-100' : 'opacity-0'}`}>
      {/* Premium Gradient Border Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      {/* Rich Atmospheric Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[40vw] h-[40vw] rounded-full bg-indigo-600/5 blur-[120px] -bottom-[20%] -left-[10%]"></div>
        <div className="absolute w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[100px] -top-[20%] -right-[10%]"></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Logo & Pitch */}
          <div className="col-span-2 flex flex-col items-start gap-4">
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
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm text-left">
              High-performance, zero-overhead neural network routing infrastructure. Optimize model delivery pipelines globally with under-the-hood microsecond scheduling.
            </p>
          </div>

          {/* Sitemaps */}
          {sitemap.map((col, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <span className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
                {col.title}
              </span>
              <ul className="space-y-2.5" aria-label={`${col.title} sitemap`}>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Footer Bottom Metadata & Social Shortcuts */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="text-xs text-gray-600 font-mono">
              &copy; {currentYear} NeuroFlow AI, Inc. All rights reserved.
            </span>
            <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5 justify-center sm:justify-start">
              Built with <span className="text-pink-500 animate-pulse">❤️</span> by <span className="text-gray-300 font-semibold">NeuroFlow Team</span>
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            
            {/* GitHub */}
            <a
              href="#"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-gray-500 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-gray-500 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
              aria-label="X Account"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="#"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-gray-500 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
              aria-label="Discord Server"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
