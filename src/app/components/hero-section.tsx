'use client';

import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Trading Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-3 tracking-tight leading-none mt-8">
            <span className="bg-gradient-to-r from-orange-300/90 via-amber-400/80 to-orange-300/70 bg-clip-text text-transparent">
              MATTEO
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400/80 via-orange-300/90 to-amber-400/70 bg-clip-text text-transparent">
              KUBEREK
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500/30" />
            <p className="text-xl md:text-2xl text-gray-300 font-rajdhani font-semibold tracking-widest uppercase">
              Day Trader
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500/30" />
          </div>
        </div>
        
        <div className="mt-12 space-y-6">
          {/* Trading Stats Style */}
          <div className="max-w-2xl mx-auto bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="text-orange-400/60 text-xs font-rajdhani tracking-wider mb-1">DAILY RETURNS</div>
                <div className="text-white font-orbitron font-bold text-lg">4-5 FIGS</div>
              </div>
              <div className="border-l border-r border-gray-800">
                <div className="text-orange-400/60 text-xs font-rajdhani tracking-wider mb-1">STRATEGY</div>
                <div className="text-white font-orbitron font-bold text-lg">PROP FIRMS</div>
              </div>
              <div>
                <div className="text-orange-400/60 text-xs font-rajdhani tracking-wider mb-1">EXPERIENCE</div>
                <div className="text-white font-orbitron font-bold text-lg">SELF-TAUGHT</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-rajdhani">
              Sharing knowledge and insights with the trading community
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.instagram.com/matteokuberek/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-orange-600/70 to-amber-600/60 hover:from-orange-600/90 hover:to-amber-600/80 border border-orange-500/20 hover:border-orange-500/40 rounded-lg font-rajdhani font-bold tracking-wider text-white hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 min-w-[200px] uppercase"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Instagram
            </span>
          </a>
          
          <a
            href="https://www.tiktok.com/@matteokuberek"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-amber-600/60 to-orange-600/70 hover:from-amber-600/80 hover:to-orange-600/90 border border-amber-500/20 hover:border-amber-500/40 rounded-lg font-rajdhani font-bold tracking-wider text-white hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 min-w-[200px] uppercase"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
              </svg>
              TikTok
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
