'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 md:py-8 px-3 md:px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {currentYear} Matteo Kuberek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
