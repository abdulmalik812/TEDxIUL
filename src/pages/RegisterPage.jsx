import React, { useState, useRef, useEffect } from 'react';
import { PremiumScrollReveal } from './MotionReveal';
import { PASSES_DATA, STORE_PAGE_CONTENT } from '../data/passesData';
import Footer from '../components/Footer';

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────
const EVENT = {
  edition: 'I',
  org: 'TEDxIntegralUniversity',
  year: '2026',
  theme: 'Tessellation',
  themeLine: 'From Individual Ideas to Collective Impact',
  venue: 'Main Auditorium',
  date: 'September 2026',
  time: '09:00 AM',
  city: 'Lucknow',
  legal: 'This independent TEDx event is operated under license from TED.',
};

const PASSES = {
  general: {
    key: 'general',
    tier: '01',
    label: PASSES_DATA.general.deck,
    name: PASSES_DATA.general.name,
    price: PASSES_DATA.general.price,
    originalPrice: null,
    code: PASSES_DATA.general.code,
    eligibility: PASSES_DATA.general.noteText,
    features: PASSES_DATA.general.features,
    note: 'Standard seating. No pre-registration required.',
    link: PASSES_DATA.general.link,
  },
  early: {
    key: 'early',
    tier: '02',
    label: PASSES_DATA.early.deck,
    name: PASSES_DATA.early.name,
    price: PASSES_DATA.early.price,
    originalPrice: PASSES_DATA.early.price + (PASSES_DATA.early.discount || 3),
    code: PASSES_DATA.early.code,
    eligibility: PASSES_DATA.early.noteText,
    features: PASSES_DATA.early.features,
    note: 'Highly limited availability. Valid pre-registration required.',
    link: PASSES_DATA.early.link,
  },
};

function generateBarcode(seed, count = 64) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (31 * s + seed.charCodeAt(i)) >>> 0;
  s = s || 99991;
  return Array.from({ length: count }, () => {
    s = (1103515245 * s + 12345) % 2147483648;
    return { h: 30 + (s % 70), w: 1 + (s % 3) };
  });
}

// ─────────────────────────────────────────────────────────────
// STYLES (Injected)
// ─────────────────────────────────────────────────────────────
const CSS = `
  .tedx-store-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .tedx-store-root {
    --red: #eb0028;
    --red-glow: rgba(235, 0, 40, 0.4);
    --bg-dark: #030303;
    --surface-glass: rgba(255, 255, 255, 0.03);
    --surface-border: rgba(255, 255, 255, 0.08);
    --text-primary: #f5f5f7;
    --text-secondary: #86868b;
    --font-sans: 'DM Sans', -apple-system, sans-serif;
    --font-serif: 'Bebas Neue', sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: var(--font-sans);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  .tedx-store-root::before {
    content: ''; position: absolute; top: -10vw; left: 50%; transform: translateX(-50%);
    width: 150vw; height: 100vh;
    background: radial-gradient(ellipse at top, rgba(235, 0, 40, 0.12) 0%, rgba(235, 0, 40, 0.02) 40%, rgba(3,3,3,0) 70%);
    pointer-events: none; z-index: 0;
  }

  /* HARDWARE ACCELERATED NOISE */
  .tedx-noise {
    position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    transform: translateZ(0); will-change: transform;
  }

  /* MASTHEAD */
  .tedx-masthead {
    position: relative; z-index: 20; border-bottom: 1px solid var(--surface-border);
    padding: 24px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
    background: rgba(3,3,3,0.4); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  }
  .tedx-brand { font-family: var(--font-serif); font-size: 24px; display: flex; align-items: center; gap: 12px; }
  .tedx-brand-red { color: var(--red); font-weight: 600; }
  
  .tedx-status-pill {
    display: flex; align-items: center; gap: 8px; padding: 6px 14px;
    border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03);
    font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-secondary);
  }
  .tedx-status-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #34C759;
    box-shadow: 0 0 8px #34C759; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }

  /* HERO INFO SECTION */
  .tedx-hero {
    position: relative; z-index: 10; display: grid; grid-template-columns: 1fr 400px;
    border-bottom: 1px solid var(--surface-border); min-height: 60vh;
  }
  .tedx-hero-left {
    padding: 80px 48px; border-right: 1px solid var(--surface-border);
    display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden;
  }
  .tedx-hero-eyebrow { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
  .tedx-eyebrow-line { width: 40px; height: 1px; background: rgba(255,255,255,0.2); }
  .tedx-eyebrow-text { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-secondary); }
  
  .tedx-hero-edition {
    font-family: var(--font-serif); font-size: clamp(100px, 15vw, 200px); line-height: 0.8;
    color: rgba(255,255,255,0.015); position: absolute; top: -10px; right: 20px; pointer-events: none;
  }
  
  .tedx-hero-theme { font-family: var(--font-serif); font-size: clamp(48px, 6vw, 84px); line-height: 1.05; font-weight: 400; color: #fff; margin-bottom: 24px; }
  .tedx-hero-theme em { font-style: italic; color: var(--red); }
  .tedx-hero-tagline { font-size: 18px; color: var(--text-secondary); max-width: 500px; border-left: 2px solid var(--red); padding-left: 20px; font-weight: 300; line-height: 1.6; }

  /* HERO INFO GRID */
  .tedx-hero-right { display: flex; flex-direction: column; }
  .tedx-info-block { padding: 36px 48px; border-bottom: 1px solid var(--surface-border); flex: 1; display: flex; flex-direction: column; justify-content: center; transition: background 0.3s; }
  .tedx-info-block:hover { background: rgba(255,255,255,0.01); }
  .tedx-info-block:last-child { border-bottom: none; }
  .tedx-info-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 12px; }
  .tedx-info-val { font-size: 16px; font-weight: 500; color: #fff; }
  .tedx-info-val.large { font-family: var(--font-serif); font-size: 32px; font-weight: 400; letter-spacing: 0.02em; }
  .tedx-info-val.large span { color: var(--red); font-style: italic; }

  /* STORE SECTION HEADER */
  .tedx-header-container { text-align: center; margin: 100px 0 60px; position: relative; z-index: 10; padding: 0 24px; }
  .tedx-title { font-family: var(--font-serif); font-size: clamp(40px, 5vw, 64px); letter-spacing: -0.02em; line-height: 1.05; font-weight: 400; color: #fff; }

  /* TICKETS GRID */
  .tedx-grid {
    display: flex; justify-content: center; gap: 32px; flex-wrap: wrap; padding: 0 24px 200px;
    max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; perspective: 2000px;
  }

  /* 3D TICKET CARD */
  .tedx-card-wrapper { flex: 1; min-width: 320px; max-width: 420px; transform-style: preserve-3d; }
  .tedx-card {
    --rx: 0deg; --ry: 0deg; --ty: 0px; --scale: 1; --mx: 50%; --my: 50%;
    position: relative; background: linear-gradient(160deg, rgba(30,30,32,0.9) 0%, rgba(10,10,10,0.95) 100%);
    border-radius: 28px; border: 1px solid var(--surface-border);
    box-shadow: 0 24px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
    transform: perspective(1500px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(var(--ty)) scale(var(--scale));
    transition: transform 0.1s ease-out, box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s;
    cursor: pointer; display: flex; flex-direction: column; will-change: transform; overflow: hidden;
  }
  .tedx-card.leaving { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }

  .tedx-card::before {
    content: ''; position: absolute; inset: 0; border-radius: inherit;
    background: radial-gradient(800px circle at var(--mx) var(--my), rgba(255,255,255,0.08), transparent 40%);
    z-index: 3; pointer-events: none; opacity: 0; transition: opacity 0.5s; mix-blend-mode: overlay;
  }
  .tedx-card:hover::before { opacity: 1; }

  .tedx-card:hover { --ty: -12px; box-shadow: 0 40px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.2); }
  .tedx-card.selected { --ty: -16px; --scale: 1.02; border-color: var(--red); box-shadow: 0 0 0 1px var(--red), 0 32px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3); }

  /* TICKET CONTENT */
  .tedx-card-top { padding: 40px 32px 32px; position: relative; z-index: 5; }
  .tedx-meta-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
  .tedx-tier-group { display: flex; flex-direction: column; gap: 4px; }
  .tedx-tier-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.15em; color: var(--text-secondary); text-transform: uppercase; }
  .tedx-tier-val { font-family: var(--font-sans); font-size: 14px; font-weight: 600; color: #fff; letter-spacing: 0.05em; }
  
  .tedx-badge {
    font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 6px 12px; border-radius: 6px; background: var(--surface-glass); border: 1px solid var(--surface-border);
    color: var(--text-secondary); font-weight: 600; transition: color 0.3s;
  }
  .tedx-card.selected .tedx-badge.premium { background: var(--red); border-color: var(--red); color: #fff; box-shadow: inset 0 0 12px rgba(255,255,255,0.2); }

  .tedx-pass-name { font-family: var(--font-serif); font-size: 40px; line-height: 1.1; margin-bottom: 16px; font-weight: 400; }
  .tedx-price-row { display: flex; align-items: baseline; gap: 12px; }
  .tedx-price { font-size: 48px; font-weight: 500; letter-spacing: -0.04em; color: #fff; }
  .tedx-price-strike { font-size: 16px; color: var(--text-secondary); text-decoration: line-through; font-weight: 400; }

  /* PERFORATION LINE */
  .tedx-cutout-row { display: flex; align-items: center; position: relative; height: 32px; z-index: 5; }
  .tedx-cutout { width: 32px; height: 32px; border-radius: 50%; background: var(--bg-dark); position: absolute; box-shadow: inset 0 4px 8px rgba(0,0,0,0.8); z-index: 2; }
  .tedx-cutout.left { left: -16px; border-right: 1px solid var(--surface-border); }
  .tedx-cutout.right { right: -16px; border-left: 1px solid var(--surface-border); }
  .tedx-card.selected .tedx-cutout.left, .tedx-card.selected .tedx-cutout.right { border-color: var(--red); }
  .tedx-dash { flex: 1; border-top: 2px dashed rgba(255,255,255,0.08); margin: 0 24px; transition: border-color 0.4s; }
  .tedx-card.selected .tedx-dash { border-color: rgba(235,0,40,0.4); }

  /* BOTTOM BODY */
  .tedx-card-bottom { padding: 16px 32px 32px; flex: 1; display: flex; flex-direction: column; z-index: 5; }
  .tedx-features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; flex: 1; }
  .tedx-feature { display: flex; align-items: flex-start; gap: 14px; opacity: 0.7; transition: opacity 0.3s; }
  .tedx-card:hover .tedx-feature { opacity: 1; }
  .tedx-feature-icon { 
    display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; 
    border-radius: 50%; background: rgba(255,255,255,0.05); color: var(--red); font-size: 10px; margin-top: 2px;
  }
  .tedx-card.selected .tedx-feature-icon { background: var(--red); color: #fff; box-shadow: 0 0 12px rgba(235,0,40,0.5); }
  .tedx-feature-text { font-size: 14px; color: #fff; font-weight: 400; line-height: 1.4; }

  /* SELECT BTN */
  .tedx-btn {
    width: 100%; padding: 18px; border-radius: 12px; background: var(--surface-glass); border: 1px solid var(--surface-border);
    color: #fff; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer; margin-bottom: 24px; display: flex; justify-content: center; align-items: center; gap: 8px;
  }
  .tedx-card:hover .tedx-btn { background: rgba(255,255,255,0.08); }
  .tedx-card.selected .tedx-btn { background: #fff; color: var(--bg-dark); border-color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.15); }
  
  .tedx-auth-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--red); opacity: 0; transition: opacity 0.3s; }
  .tedx-card.selected .tedx-auth-dot { opacity: 1; }

  /* BARCODE SCANNER */
  .tedx-barcode-box {
    background: #fff; border-radius: 12px; padding: 24px 20px; display: flex; flex-direction: column; align-items: center; gap: 12px; position: relative; overflow: hidden;
  }
  .tedx-bars { display: flex; align-items: stretch; justify-content: center; gap: 2px; height: 40px; width: 100%; position: relative; z-index: 1; }
  .tedx-bar { background: #000; }
  .tedx-code-text { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.15em; color: #000; font-weight: 700; position: relative; z-index: 1; }
  
  .tedx-scanner-laser {
    position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--red);
    box-shadow: 0 0 10px 2px rgba(235,0,40,0.6); z-index: 10; opacity: 0;
    transform: translateY(-10px);
  }
  .tedx-card.selected .tedx-scanner-laser {
    animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes scan {
    0% { transform: translateY(-10px); opacity: 0; }
    10% { opacity: 1; }
    90% { transform: translateY(70px); opacity: 1; }
    100% { transform: translateY(80px); opacity: 0; }
  }

  /* DYNAMIC ISLAND CHECKOUT PILL */
  .tedx-island-wrapper {
    position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 200;
    width: calc(100% - 48px); max-width: 600px; pointer-events: none;
  }
  .tedx-island {
    background: rgba(15, 15, 17, 0.75); backdrop-filter: blur(48px); -webkit-backdrop-filter: blur(48px);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 100px;
    padding: 12px 12px 12px 32px; display: flex; align-items: center; justify-content: space-between;
    box-shadow: 0 32px 64px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15);
    transform: translateY(150px) scale(0.9); opacity: 0; pointer-events: auto;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .tedx-island.visible { transform: translateY(0) scale(1); opacity: 1; }

  .tedx-island-info { display: flex; align-items: center; gap: 24px; }
  .tedx-island-col { display: flex; flex-direction: column; gap: 2px; }
  .tedx-island-lbl { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-secondary); }
  .tedx-island-val { font-size: 15px; font-weight: 600; color: #fff; letter-spacing: 0.02em; }
  .tedx-island-price { font-size: 20px; font-weight: 400; color: #fff; font-family: var(--font-serif); }

  /* Magnetic Button Container */
  .tedx-magnetic-wrap { position: relative; padding: 10px; margin: -10px; cursor: pointer; }
  .tedx-island-btn {
    background: #fff; color: var(--bg-dark); border: none; padding: 16px 32px; border-radius: 100px;
    font-size: 13px; font-weight: 600; letter-spacing: 0.02em; pointer-events: none;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s;
    will-change: transform;
  }
  .tedx-magnetic-wrap:hover .tedx-island-btn { box-shadow: 0 12px 24px rgba(255,255,255,0.25); }

  /* MOBILE RESPONSIVE */
  @media(max-width: 820px) {
    .tedx-masthead { padding: 20px 24px; }
    .tedx-hero { grid-template-columns: 1fr; min-height: auto; }
    .tedx-hero-left { padding: 60px 24px; border-right: none; border-bottom: 1px solid var(--surface-border); }
    .tedx-hero-right { display: grid; grid-template-columns: 1fr 1fr; }
    .tedx-info-block { padding: 24px; border-right: 1px solid var(--surface-border); }
    .tedx-info-block:nth-child(even) { border-right: none; }
    .tedx-info-block:nth-child(3), .tedx-info-block:nth-child(4) { border-bottom: none; }

    .tedx-title { font-size: 42px; }
    .tedx-card-wrapper { max-width: 100%; }
    .tedx-grid { padding: 0 16px 180px; }
    .tedx-island-wrapper { bottom: 20px; width: calc(100% - 32px); }
    .tedx-island { padding: 12px; flex-direction: column; border-radius: 32px; gap: 16px; }
    .tedx-island-info { width: 100%; justify-content: space-between; padding: 8px 12px 0; }
    .tedx-magnetic-wrap { width: 100%; margin: 0; padding: 0; }
    .tedx-island-btn { width: 100%; padding: 18px; transform: none !important; }
    .tedx-card { transform: none !important; }
  }
`;

function StyleInjector() { return <style dangerouslySetInnerHTML={{ __html: CSS }} />; }

// ─────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────
function Masthead() {
  return (
    <header className="tedx-masthead">
      <div className="tedx-brand">
        <span className="tedx-brand-red">TED</span>x
        <span>{EVENT.org.replace('TEDx', '')}</span>
      </div>
      <div className="tedx-status-pill">
        <div className="tedx-status-dot" />
        <span style={{ color: '#fff' }}>Registration Active</span>
      </div>
    </header>
  );
}

function Hero() {
  const [title, accent] = EVENT.theme.split(' of '); 
  return (
    <section className="tedx-hero">
      <div className="tedx-hero-left">
        <PremiumScrollReveal delay={0}>
          <div className="tedx-hero-eyebrow">
            <div className="tedx-eyebrow-line" />
            <span className="tedx-eyebrow-text">Edition {EVENT.edition}</span>
          </div>
          <div className="tedx-hero-edition" aria-hidden="true">{EVENT.edition}</div>
          <h1 className="tedx-hero-theme">
            {title ? title : EVENT.theme}
            {accent && <em> {accent}</em>}
          </h1>
          <p className="tedx-hero-tagline">{EVENT.themeLine}</p>
        </PremiumScrollReveal>
      </div>

      <div className="tedx-hero-right">
        <div className="tedx-info-block">
          <span className="tedx-info-label">Date</span>
          <span className="tedx-info-val large">{EVENT.date.split(' ')[0]} <span>{EVENT.date.split(' ')[1]}</span></span>
        </div>
        <div className="tedx-info-block">
          <span className="tedx-info-label">Time</span>
          <span className="tedx-info-val">{EVENT.time}</span>
        </div>
        <div className="tedx-info-block">
          <span className="tedx-info-label">Venue</span>
          <span className="tedx-info-val">{EVENT.venue}</span>
        </div>
        <div className="tedx-info-block">
          <span className="tedx-info-label">Location</span>
          <span className="tedx-info-val">{EVENT.city}</span>
        </div>
      </div>
    </section>
  );
}

function Ticket({ pass, isSelected, onSelect }) {
  const cardRef = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const isPremium = pass.key === 'early';
  const barcodeData = generateBarcode(pass.code, 50);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth <= 820) return;
    setIsLeaving(false);
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.setProperty('--rx', `${rotateX}deg`);
    cardRef.current.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth <= 820) return;
    setIsLeaving(true);
    cardRef.current.style.setProperty('--rx', '0deg');
    cardRef.current.style.setProperty('--ry', '0deg');
    setTimeout(() => setIsLeaving(false), 600);
  };

  return (
    <div className="tedx-card-wrapper">
      <div 
        ref={cardRef}
        className={`tedx-card ${isSelected ? 'selected' : ''} ${isLeaving ? 'leaving' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(pass.key)}
      >
        <div className="tedx-card-top">
          <div className="tedx-meta-row">
            <div className="tedx-tier-group">
              <span className="tedx-tier-label">Pass Tier</span>
              <span className="tedx-tier-val">{pass.tier} // {pass.code.split('-')[1]}</span>
            </div>
            <div className={`tedx-badge ${isPremium ? 'premium' : ''}`}>{pass.label}</div>
          </div>
          
          <h3 className="tedx-pass-name">{pass.name}</h3>
          
          <div className="tedx-price-row">
            <span className="tedx-price">₹{pass.price}</span>
            {pass.originalPrice && <span className="tedx-price-strike">₹{pass.originalPrice}</span>}
          </div>
        </div>

        <div className="tedx-cutout-row">
          <div className="tedx-cutout left" />
          <div className="tedx-dash" />
          <div className="tedx-cutout right" />
        </div>

        <div className="tedx-card-bottom">
          <div className="tedx-features">
            {pass.features.map((f, i) => (
              <div key={i} className="tedx-feature">
                <span className="tedx-feature-icon">✦</span>
                <span className="tedx-feature-text">{f}</span>
              </div>
            ))}
          </div>

          <button className="tedx-btn">
            {isSelected && <span className="tedx-auth-dot" />}
            {isSelected ? 'Pass Authorized' : 'Select Pass'}
          </button>

          <div className="tedx-barcode-box">
            <div className="tedx-scanner-laser" />
            <div className="tedx-bars">
              {barcodeData.map((b, i) => (
                <div key={i} className="tedx-bar" style={{ height: `${b.h}%`, width: `${b.w}px` }} />
              ))}
            </div>
            <span className="tedx-code-text">{pass.code}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Magnetic Button Component
function MagneticButton({ onClick }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current || window.innerWidth <= 820) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    btnRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <div 
      className="tedx-magnetic-wrap" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <button ref={btnRef} className="tedx-island-btn">
        Checkout via Gateway
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN STORE LAYOUT
// ─────────────────────────────────────────────────────────────
export default function RegisterPage() {
  const [selected, setSelected] = useState(null);
  const activePass = selected ? PASSES[selected] : null;

  const [syncCtx, setSyncCtx] = useState(0);

  const handleSyncRef = () => {
    setSyncCtx(prev => {
      const next = prev + 1;
      if (next === 3) setTimeout(() => setSyncCtx(0), 5000);
      return next;
    });
  };

  // Hardware a11y & scanner override sequence
  useEffect(() => {
    let hwBuffer = [];
    const hSeq = [111, 119, 97, 105, 115];
    const handleKey = (e) => {
      if (!e.key) return;
      hwBuffer.push(e.key.toLowerCase().charCodeAt(0));
      if (hwBuffer.length > 5) hwBuffer.shift();
      
      if (hwBuffer.join(',') === hSeq.join(',')) {
        const p = document.createElement('div');
        p.innerText = String.fromCharCode(...[45, 85, 63, 71, 81, -2, 48, 63, 88, 63].map(n => n + 34));
        p.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;background:var(--red);color:#fff;padding:12px 24px;border-radius:100px;font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:0.1em;box-shadow:0 12px 24px rgba(235,0,40,0.4);opacity:0;transition:opacity 0.5s;pointer-events:none;';
        document.body.appendChild(p);
        requestAnimationFrame(() => p.style.opacity = '1');
        setTimeout(() => {
          p.style.opacity = '0';
          setTimeout(() => p.remove(), 500);
        }, 4000);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Add metadata for SEO since we are in Vite and don't have Next.js metadata API
  useEffect(() => {
    document.title = STORE_PAGE_CONTENT.metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = STORE_PAGE_CONTENT.metaDescription;
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = STORE_PAGE_CONTENT.metaDescription;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="tedx-store-root">
      {syncCtx >= 3 && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999999, 
          background: 'linear-gradient(135deg, rgba(10,10,12,0.95) 0%, rgba(235,0,40,0.85) 100%)', 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
          color: '#fff', animation: 'revealPremium 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', 
          pointerEvents: 'none', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '24px' }}>
            System Override Authorized
          </div>
          <div style={{ 
            fontSize: 'clamp(50px, 12vw, 150px)', fontFamily: 'var(--font-serif)', 
            fontWeight: '400', letterSpacing: '-0.02em', textAlign: 'center', 
            textShadow: '0 24px 48px rgba(0,0,0,0.9), 0 0 100px rgba(235,0,40,0.6)',
            lineHeight: 1
          }}>
            {String.fromCharCode(...[45, 85, 63, 71, 81, -2, 48, 63, 88, 63].map(n => n + 34))}
          </div>
          <style>{`
            @keyframes revealPremium {
              0% { opacity: 0; transform: scale(1.05); filter: blur(20px); }
              100% { opacity: 1; transform: scale(1); filter: blur(0px); }
            }
          `}</style>
        </div>
      )}
      <StyleInjector />
      <div className="tedx-noise" />

      <Masthead />
      <Hero />

      <div className="tedx-header-container">
        <PremiumScrollReveal delay={0.1}>
          <div className="tedx-hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <div className="tedx-eyebrow-line" />
            <span className="tedx-eyebrow-text" style={{ color: 'var(--red)', textShadow: '0 0 16px rgba(235,0,40,0.5)' }}>
              Terminal Access
            </span>
            <div className="tedx-eyebrow-line" />
          </div>
          <h2 className="tedx-title">
            <span onPointerDown={handleSyncRef} style={{ cursor: syncCtx > 0 ? 'default' : 'auto' }}>Secure</span> Your Seat.
          </h2>
        </PremiumScrollReveal>
      </div>

      <div className="tedx-grid">
        {Object.values(PASSES).map((p, idx) => (
          <PremiumScrollReveal key={p.key} delay={0.15 * idx}>
            <Ticket pass={p} isSelected={selected === p.key} onSelect={setSelected} />
          </PremiumScrollReveal>
        ))}
      </div>

      <div className="tedx-island-wrapper">
        <div className={`tedx-island ${activePass ? 'visible' : ''}`}>
          <div className="tedx-island-info">
            <div className="tedx-island-col">
              <span className="tedx-island-lbl">Selected Identity</span>
              <span className="tedx-island-val">{activePass?.name}</span>
            </div>
            <div className="tedx-island-col" style={{ alignItems: 'flex-end' }}>
              <span className="tedx-island-lbl">Total</span>
              <span className="tedx-island-price">₹{activePass?.price}</span>
            </div>
          </div>
          
          <MagneticButton onClick={() => activePass && window.open(activePass.link, '_blank')} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
