import { Link } from 'react-router-dom';
import Venue from '../components/Venue';
import Footer from '../components/Footer';
import './pages.css';

// Asset imports — real photos from src/assets
import imgAirport from '../assets/CCS.png';
import imgTrain from '../assets/Charbagh.png';
import imgBus from '../assets/Alambagh.png';
import imgMetro from '../assets/Metro.png';
import imgCampus from '../assets/IULawn.jpg';

/* ─────────────────────────────────────────────
   Travel card data (5 modes including personal)
───────────────────────────────────────────── */
const TRANSPORT = [
  {
    id: 'air',
    icon: '✈',
    mode: 'By Air',
    name: 'Chaudhary Charan Singh International Airport',
    img: imgAirport,
    imgAlt: 'Chaudhary Charan Singh International Airport, Lucknow',
    desc: 'Lucknow\'s primary aviation hub connecting the city to major domestic and international destinations. Integral University is located approximately 40 km from the airport. Local taxis and app-based cab services are readily accessible directly outside the arrival terminal exits.',
    metric: '40–50 min via cab',
    metricLabel: 'Estimated Travel Time',
    mapsUrl: 'https://maps.app.goo.gl/anQJEG7edWxXiytA7', // ← paste your Google Maps directions URL here
  },
  {
    id: 'train',
    icon: '🚆',
    mode: 'By Train',
    name: 'Lucknow Charbagh Railway Station',
    img: imgTrain,
    imgAlt: 'Lucknow Charbagh Railway Station — historic red-and-white architecture',
    desc: 'Lucknow\'s central rail hub, operating frequent services to all major Indian metropolitan areas. The campus is situated roughly 20–25 km from the station. Attendees can utilise local city buses, auto-rickshaws, or on-demand cab services stationed outside the terminal to travel directly toward Kursi Road.',
    metric: '35–45 min via auto or taxi',
    metricLabel: 'Estimated Travel Time',
    mapsUrl: 'https://maps.app.goo.gl/EouEwg4dVg6R5cBj8', // ← paste your Google Maps directions URL here
  },
  {
    id: 'bus',
    icon: '🚌',
    mode: 'By Bus',
    name: 'Bus Terminals',
    img: imgBus,
    imgAlt: 'Alambagh Bus Terminal, Lucknow',
    desc: 'The Alambagh, Awadh and Kaiserbagh bus terminals act as the main gateways for state-run and private interstate buses connecting Lucknow to surrounding regions across Uttar Pradesh and neighbouring states. From either terminal, local city buses and auto-rickshaws connect directly to the Kursi Road route.',
    metric: '30–40 min via local transit',
    metricLabel: 'Estimated Travel Time',
    mapsUrl: 'https://maps.app.goo.gl/WgU8zEVpxGddFJUx5', // ← paste your Google Maps directions URL here
  },
  {
    id: 'metro',
    icon: '🚇',
    mode: 'By Metro',
    name: 'Metro Stations',
    img: imgMetro,
    imgAlt: 'Metro Stations, Lucknow',
    desc: 'The Metro connects different localities across Lucknow. From the metro stations, local public city buses and auto-rickshaws connect directly to the Kursi Road route. The closest metro stations to the campus are IT College Metro Station and Munshi Pulia Metro Station.',
    metric: '20–30 min via local transit',
    metricLabel: 'Estimated Travel Time',
    mapsUrl: 'https://maps.app.goo.gl/HxMqmgEhwbsaa1YX9', // ← paste your Google Maps directions URL here
  },
  {
    id: 'taxi',
    icon: '🚗',
    mode: 'By Taxi / Personal Vehicle',
    name: 'Via GPS Navigation — Integral University, Lucknow',
    img: imgCampus,
    imgAlt: 'Integral University campus lawns and driveway',
    desc: 'Taxis, auto-rickshaws, and app-based ride-hailing options are widely available throughout Lucknow. On-campus parking will be available for attendees in personal vehicles in the designated zones.',
    metric: 'Search "Integral University, Lucknow"',
    metricLabel: 'Navigation Tip',
    mapsUrl: 'https://maps.app.goo.gl/z1CwZ4JQ4aJxVazMA', // ← paste your Google Maps directions URL here
  },
];

/* ─────────────────────────────────────────────
   Local tips
───────────────────────────────────────────── */
const LOCAL_TIPS = [
  {
    icon: '⏰',
    title: 'Plan Your Arrival',
    body: 'We recommend arriving at the campus 30–45 minutes before the official event start time to clear registration desks and secure seating.',
  },
  {
    icon: '🌤',
    title: 'Check the Weather',
    body: 'Late September in Lucknow is typically warm with occasional late-monsoon humidity. Dress in comfortable, smart-casual attire.',
  },
  {
    icon: '🪪',
    title: 'Required Documentation',
    body: 'Please keep a digital or printed copy of your registration confirmation and a valid photo identification card accessible at the entry gates.',
  },
];

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
export default function VenuePage() {
  return (
    <div className="page-root">

      {/* ── HERO ── */}
      <div className="page-hero">
        <div className="page-hero-label">Venue</div>
        <h1>Venue &amp; <span className="accent">Location</span></h1>
        <p className="page-hero-sub">
          Learn more about where TEDxIntegralUniversity is hosted and how to reach the campus.
        </p>
      </div>

      {/* ── EXISTING VENUE CARD (map + panel) ── */}
      <Venue />

      {/* ── ABOUT THE VENUE ── */}
      <section className="venue-about-section">
        <div className="venue-about-wrap">
          <div className="venue-section-eyebrow">
            <span className="venue-section-dot" />
            <span className="venue-section-label">About the Venue</span>
            <span className="venue-section-rule" />
          </div>
          <h2 className="venue-section-heading">About the <span className="accent">Venue</span></h2>
          <div className="venue-about-body">
            <p>
              Integral University serves as a premier centre for higher education, academic research,
              and technological innovation in Lucknow. Spanning a vibrant, green 120–125 acre
              multidisciplinary campus, the institution provides an ecosystem designed to foster
              creative thinking, cross-disciplinary collaboration, and community-driven initiatives.
            </p>
            <p>
              The campus is fully equipped with modern educational infrastructure, including advanced
              auditoriums, lecture halls, and collaborative spaces optimised for knowledge sharing.
              This makes it an ideal setting for TEDxIntegralUniversity 2026, where diverse ideas
              meet an engaged, intellectual community.
            </p>
            <p>
              Our venue brings together students, professionals, and visionaries within an environment
              that champions learning and sustainable progress — reflecting the core spirit of TEDx.
            </p>
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ── */}
      <section className="venue-travel-section">
        <div className="venue-travel-wrap">
          <div className="venue-section-eyebrow">
            <span className="venue-section-dot" />
            <span className="venue-section-label">Getting Here</span>
            <span className="venue-section-rule" />
          </div>
          <h2 className="venue-section-heading">Getting <span className="accent">Here</span></h2>

          <div className="venue-travel-grid">
            {TRANSPORT.map((t) => (
              <div key={t.id} className="venue-travel-card" id={`travel-card-${t.id}`}>
                <div className="venue-travel-card-img-wrap">
                  <img src={t.img} alt={t.imgAlt} className="venue-travel-card-img" />
                  <div className="venue-travel-card-img-overlay" />
                  <div className="venue-travel-card-mode-badge">
                    <span className="venue-travel-card-icon">{t.icon}</span>
                    <span>{t.mode}</span>
                  </div>
                </div>
                <div className="venue-travel-card-body">
                  <h3 className="venue-travel-card-name">{t.name}</h3>
                  <p className="venue-travel-card-desc">{t.desc}</p>
                  <div className="venue-travel-card-metric">
                    <span className="venue-travel-card-metric-label">{t.metricLabel}</span>
                    <span className="venue-travel-card-metric-value">{t.metric}</span>
                  </div>
                  {t.mapsUrl && (
                    <a
                      href={t.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="venue-travel-card-maps-btn"
                      id={`maps-btn-${t.id}`}
                    >
                      <svg className="venue-travel-card-maps-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <circle cx="8" cy="6.5" r="2.5" />
                        <path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" strokeLinejoin="round" />
                      </svg>
                      <span>Get Directions</span>
                      <span className="venue-travel-card-maps-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAPS & DIRECTIONS ── */}
      <section className="venue-maps-section">
        <div className="venue-maps-wrap">
          <div className="venue-section-eyebrow">
            <span className="venue-section-dot" />
            <span className="venue-section-label">Maps &amp; Directions</span>
            <span className="venue-section-rule" />
          </div>
          <h2 className="venue-section-heading">Maps &amp; <span className="accent">Directions</span></h2>
          <p className="venue-maps-body">
            To help streamline your arrival, please refer to the interactive digital map embedded in
            the main venue overview section above. We highly recommend verifying your travel route in
            advance and factoring in local traffic conditions during peak morning hours to ensure a
            seamless commute. Once you reach the main university gates, directional signage will guide
            you directly to the event hall.
          </p>
          <a
            href="https://maps.app.goo.gl/NDekpBqJdoPY6Dq7A"
            target="_blank"
            rel="noopener noreferrer"
            className="venue-maps-cta"
            id="venue-open-maps-btn"
          >
            <span>Open in Google Maps</span>
            <span className="venue-maps-cta-arrow">→</span>
          </a>
        </div>
      </section>

      {/* ── LOCAL TIPS ── */}
      <section className="venue-tips-section">
        <div className="venue-tips-wrap">
          <div className="venue-section-eyebrow">
            <span className="venue-section-dot" />
            <span className="venue-section-label">Event Day</span>
            <span className="venue-section-rule" />
          </div>
          <h2 className="venue-section-heading">Local <span className="accent">Tips</span></h2>

          <div className="venue-tips-grid">
            {LOCAL_TIPS.map((tip, i) => (
              <div key={i} className="venue-tip-card" id={`tip-card-${i}`}>
                <div className="venue-tip-icon">{tip.icon}</div>
                <div className="venue-tip-body">
                  <div className="venue-tip-title">{tip.title}</div>
                  <p className="venue-tip-text">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className="page-wrap" style={{ paddingTop: '0', paddingBottom: '48px' }}>
        <Link to="/" className="page-back-link">Home</Link>
      </div>

      <Footer />
    </div>
  );
}
