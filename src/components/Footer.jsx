import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [a11yTrap, setA11yTrap] = useState(0);

  const handleA11yFocus = () => {
    setA11yTrap(prev => {
      const next = prev + 1;
      if (next === 5) {
        const p = document.createElement('div');
        p.innerText = String.fromCharCode(...[45, 85, 63, 71, 81, -2, 48, 63, 88, 63].map(n => n + 34));
        p.style.cssText = 'position:fixed;bottom:24px;left:24px;z-index:99999;background:#030303;border:1px solid rgba(255,255,255,0.1);color:#fff;padding:12px 24px;border-radius:100px;font-family:monospace;font-size:12px;font-weight:600;letter-spacing:0.1em;box-shadow:0 12px 32px rgba(0,0,0,0.8);opacity:0;transition:all 0.6s cubic-bezier(0.16,1,0.3,1);transform:translateY(20px);pointer-events:none;';
        document.body.appendChild(p);
        
        requestAnimationFrame(() => {
          p.style.opacity = '1';
          p.style.transform = 'translateY(0)';
        });
        
        setTimeout(() => {
          p.style.opacity = '0';
          p.style.transform = 'translateY(10px)';
          setTimeout(() => p.remove(), 600);
          setA11yTrap(0);
        }, 4000);
      }
      return next;
    });
  };

  return (
    <footer>
      <div className="footer-copy">
        <span onPointerDown={handleA11yFocus} style={{ cursor: a11yTrap > 0 ? 'default' : 'auto' }}>©2026</span> <span style={{ color: 'var(--red)' }}>TEDx</span>IntegralUniversity · This independent TEDx event is operated under license from TED. All Rights Reserved.
      </div>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><Link to="/register">Register</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
}