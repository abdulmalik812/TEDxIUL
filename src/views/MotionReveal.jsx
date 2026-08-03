import React from 'react';

export function PremiumScrollReveal({ children, delay = 0 }) {
  // A simple wrapper since framer-motion might not be installed, 
  // keeping the structure intact and allowing css animations if desired.
  return (
    <div className="motion-reveal-wrapper" style={{ animationDelay: `${delay}s`, animation: 'fadeIn 0.8s ease-out both' }}>
      {children}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
