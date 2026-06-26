import { useEffect, useRef } from 'react';
import { useMouseSpotlight } from '../hooks/useMouseSpotlight';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  popular: boolean;
  features: string[];
}

export default function Pricing() {
  const spotlightContainerRef = useMouseSpotlight();
  const { ref: revealRef, hasRevealed } = useScrollReveal();

  // Price conversion and billing cycle database
  const pricingMatrix = {
    USD: { symbol: '$', rate: 1, starter: 29, pro: 99, enterprise: 299 },
    EUR: { symbol: '€', rate: 0.92, starter: 27, pro: 91, enterprise: 275 },
    INR: { symbol: '₹', rate: 83.5, starter: 2400, pro: 8200, enterprise: 25000 }
  };

  // State refs (to prevent React state updates and re-renders)
  const billingCycleRef = useRef<'monthly' | 'annual'>('monthly');
  const currencyRef = useRef<'USD' | 'EUR' | 'INR'>('USD');

  const updatePricingDOM = () => {
    const cycle = billingCycleRef.current;
    const currency = currencyRef.current;
    const data = pricingMatrix[currency];

    // Helper to calculate price (Annual gets a 20% discount on total 12-month bundle)
    // Formula: monthly_price * 12 * 0.8 (annual billing) or monthly_price (monthly billing)
    const calculatePrice = (baseVal: number) => {
      if (cycle === 'annual') {
        const annualDiscounted = Math.round(baseVal * 12 * 0.8);
        return annualDiscounted;
      }
      return baseVal;
    };

    const applyPopAnimation = (el: HTMLElement) => {
      el.style.animation = 'none';
      void el.offsetHeight; // trigger reflow
      el.style.animation = 'price-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    };

    // Update Starter
    const starterPrice = document.getElementById('price-starter');
    const starterPeriod = document.getElementById('period-starter');
    if (starterPrice && starterPeriod) {
      starterPrice.textContent = `${data.symbol}${calculatePrice(data.starter).toLocaleString()}`;
      starterPeriod.textContent = cycle === 'annual' ? '/yr' : '/mo';
      applyPopAnimation(starterPrice);
    }

    // Update Pro
    const proPrice = document.getElementById('price-pro');
    const proPeriod = document.getElementById('period-pro');
    if (proPrice && proPeriod) {
      proPrice.textContent = `${data.symbol}${calculatePrice(data.pro).toLocaleString()}`;
      proPeriod.textContent = cycle === 'annual' ? '/yr' : '/mo';
      applyPopAnimation(proPrice);
    }

    // Update Enterprise
    const entPrice = document.getElementById('price-enterprise');
    const entPeriod = document.getElementById('period-enterprise');
    if (entPrice && entPeriod) {
      entPrice.textContent = `${data.symbol}${calculatePrice(data.enterprise).toLocaleString()}`;
      entPeriod.textContent = cycle === 'annual' ? '/yr' : '/mo';
      applyPopAnimation(entPrice);
    }
  };

  // Synchronise pricing display on mount
  useEffect(() => {
    updatePricingDOM();
  }, []);

  // Update classes directly in the DOM to reflect selection without state-triggered re-renders
  const handleCurrencyClick = (currency: 'USD' | 'EUR' | 'INR') => {
    currencyRef.current = currency;
    
    // Select currency switcher buttons
    const usdBtn = document.getElementById('currency-btn-USD');
    const eurBtn = document.getElementById('currency-btn-EUR');
    const inrBtn = document.getElementById('currency-btn-INR');

    // List of active classes
    const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/20'];
    // List of inactive classes
    const inactiveClasses = ['text-gray-400', 'hover:text-gray-200'];

    const btnMap = { USD: usdBtn, EUR: eurBtn, INR: inrBtn };

    Object.keys(btnMap).forEach((key) => {
      const btn = btnMap[key as 'USD' | 'EUR' | 'INR'];
      if (!btn) return;
      if (key === currency) {
        btn.classList.add(...activeClasses);
        btn.classList.remove(...inactiveClasses);
      } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
      }
    });

    updatePricingDOM();
  };

  const handleBillingToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    billingCycleRef.current = e.target.checked ? 'annual' : 'monthly';
    
    // Update toggle visual text states
    const monthlyLabel = document.getElementById('billing-monthly-label');
    const annualLabel = document.getElementById('billing-annual-label');

    if (monthlyLabel && annualLabel) {
      if (billingCycleRef.current === 'annual') {
        annualLabel.classList.add('text-indigo-400', 'font-semibold');
        annualLabel.classList.remove('text-gray-400');
        monthlyLabel.classList.add('text-gray-400');
        monthlyLabel.classList.remove('text-indigo-400', 'font-semibold');
      } else {
        monthlyLabel.classList.add('text-indigo-400', 'font-semibold');
        monthlyLabel.classList.remove('text-gray-400');
        annualLabel.classList.add('text-gray-400');
        annualLabel.classList.remove('text-indigo-400', 'font-semibold');
      }
    }

    updatePricingDOM();
  };

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Node',
      description: 'Ideal for early-stage testing and developers running initial model deployments.',
      popular: false,
      features: [
        '10,000 Neural Routing Ops',
        '2 Cluster Edge Nodes',
        'Standard Latency (1.5ms)',
        'Community Support',
        'API Access'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Cluster',
      description: 'Designed for production workloads and fast-growing software applications.',
      popular: true,
      features: [
        '1,000,000 Neural Routing Ops',
        '10 Cluster Edge Nodes',
        'Sub-millisecond Latency (0.8ms)',
        'Preemptive Capacity Scaling',
        '24/7 Priority SLA Support',
        'Advanced Analytics Dashboard'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Core',
      description: 'Dedicated infrastructure with customized scale configurations and model fine-tuning.',
      popular: false,
      features: [
        'Unlimited Synaptic Operations',
        'Dedicated Cluster Cores',
        'Custom Fine-Tuning Pipelines',
        'Under-the-hood Synaptic Weight Tuning',
        '99.99% Latency Guarantee SLA',
        'Personal Technical Account Manager'
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-28 px-6 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[45vw] h-[45vw] rounded-full bg-indigo-600/15 blur-[140px] bottom-[-15%] right-[-10%]"></div>
        <div className="absolute w-[35vw] h-[35vw] rounded-full bg-pink-600/10 blur-[120px] top-[10%] left-[-5%]"></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 60%)' }}></div>
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(rgba(168,85,247,0.5) 1px, transparent 1px)', backgroundSize: '36px 36px' }}></div>
      </div>

      <div 
        ref={revealRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-indigo-400 tracking-[0.3em] uppercase mb-4">Flexible Billing</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-5 tracking-tight">
            Pricing Built for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Production</span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl font-light">
            Deploy immediately. Scale on-demand. Choose the allocation that matches your production load.
          </p>

          {/* Pricing Controls: Currency and billing cycle toggles */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Currency Switcher */}
            <div className="flex bg-[#0a0a0f] p-1 rounded-lg border border-white/5 select-none" role="group" aria-label="Currency Selector">
              <button
                id="currency-btn-USD"
                onClick={() => handleCurrencyClick('USD')}
                className="px-4 py-1.5 rounded-md text-xs font-medium bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 cursor-pointer"
              >
                USD
              </button>
              <button
                id="currency-btn-EUR"
                onClick={() => handleCurrencyClick('EUR')}
                className="px-4 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-gray-200 transition-all duration-200 cursor-pointer"
              >
                EUR
              </button>
              <button
                id="currency-btn-INR"
                onClick={() => handleCurrencyClick('INR')}
                className="px-4 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-gray-200 transition-all duration-200 cursor-pointer"
              >
                INR
              </button>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-3 select-none">
              <span id="billing-monthly-label" className="text-sm font-semibold text-indigo-400 transition-colors duration-200">Monthly</span>
              
              <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  className="sr-only peer"
                  onChange={handleBillingToggle}
                />
                <div className="w-11 h-6 bg-white/5 rounded-full peer peer-focus:ring-2 peer-focus:ring-indigo-500/50 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 peer-checked:after:bg-white peer-checked:after:border-transparent"></div>
              </label>

              <span id="billing-annual-label" className="text-sm font-medium text-gray-400 transition-colors duration-200 flex items-center gap-1.5">
                Annual
                <span className="text-[10px] bg-green-500/10 text-green-400 font-semibold px-2 py-0.5 rounded-full border border-green-500/20">Save 20%</span>
              </span>
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div 
          ref={spotlightContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <article
              key={plan.id}
              style={{
                animationDelay: plan.id === 'starter' ? '0s' : plan.id === 'enterprise' ? '2.5s' : '0s'
              }}
              className={`spotlight-card relative rounded-2xl glass-panel p-8 border transition-all duration-300 flex flex-col justify-between hover:translate-y-[-8px] hover:shadow-[0_0_40px_rgba(99,102,241,0.18)] ${
                plan.popular 
                  ? 'border-indigo-500/40 bg-[#0e0c15]/80 shadow-[0_0_60px_rgba(99,102,241,0.25),0_0_140px_rgba(168,85,247,0.12)] md:scale-[1.05] z-10 pro-border-glow' 
                  : 'border-white/5 hover:border-white/10 animate-float-slow'
              }`}
            >
              {/* Plan Name & Desc */}
              <div className="text-left w-full">
                {plan.popular && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[9px] font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                    Most Popular
                  </span>
                )}
                <h4 className="font-display font-bold text-xl text-white mb-2">{plan.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">{plan.description}</p>
                
                {/* Dynamically updated Price Text Nodes */}
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-6">
                  <span 
                    id={`price-${plan.id}`} 
                    className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight"
                  >
                    --
                  </span>
                  <span 
                    id={`period-${plan.id}`} 
                    className="text-xs font-mono text-gray-500"
                  >
                    /mo
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8" aria-label={`Features for ${plan.name}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-300">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:brightness-110'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {plan.id === 'enterprise' ? 'Contact Solutions' : 'Start Free Trial'}
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
