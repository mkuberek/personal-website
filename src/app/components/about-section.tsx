'use client';

import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-3 md:px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-black mb-8 md:mb-12 text-center bg-gradient-to-r from-orange-300/80 via-amber-300/70 to-orange-400/60 bg-clip-text text-transparent tracking-wider uppercase">
          Trading Profile
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-rajdhani font-bold mb-3 text-white tracking-wide uppercase">Day Trading</h3>
            <p className="text-gray-400 leading-relaxed">
              Spending mornings analyzing charts and executing strategic trades. Consistently generating 4-5 figure daily returns through disciplined risk management and proven strategies.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/30 to-orange-400/25 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-rajdhani font-bold mb-3 text-white tracking-wide uppercase">Prop Firms</h3>
            <p className="text-gray-400 leading-relaxed">
              Leveraging multiple proprietary trading firms simultaneously to maximize opportunities and scale trading operations effectively.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400/35 via-amber-400/25 to-orange-300/20 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-rajdhani font-bold mb-3 text-white tracking-wide uppercase">Self-Taught</h3>
            <p className="text-gray-400 leading-relaxed">
              Built trading expertise from the ground up through dedication, research, and real-world experience. No formal education—just results.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-amber-300/25 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-rajdhani font-bold mb-3 text-white tracking-wide uppercase">Community</h3>
            <p className="text-gray-400 leading-relaxed">
              Sharing trading insights, strategies, and daily experiences with a growing community on Instagram and TikTok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
