import { Link } from 'react-router-dom';
import Venue from '../components/Venue';
import Footer from '../components/Footer';
import './pages.css';

const TRANSPORT = [
  {
    id: 'airport',
    icon: '✈️',
    mode: 'By Air',
    name: 'Chaudhary Charan Singh International Airport',
    desc: 'Lucknow\'s international airport connects the city to major domestic and international destinations. Integral University is approximately 30 km from the airport.',
    detail: '~45 min by taxi / cab • Cabs available at exit',
  },
  {
    id: 'train',
    icon: '🚆',
    mode: 'By Train',
    name: 'Lucknow Charbagh Railway Station',
    desc: 'The main railway hub of Lucknow, well-connected to Delhi, Mumbai, Kolkata, and all major Indian cities. The university is about 20 km from the station.',
    detail: '~35 min by auto/cab • City buses also available',
  },
  {
    id: 'bus',
    icon: '🚌',
    mode: 'By Bus',
    name: 'Alambagh / Kaiserbagh Bus Terminal',
    desc: 'Multiple state and private bus services connect Lucknow to cities across UP and neighbouring states. Both terminals have good connectivity to Kursi Road.',
    detail: '~30 min by auto/cab • City bus route available',
  },
];

export default function VenuePage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Venue</div>
        <h1>Venue &amp; <span className="accent">Directions</span></h1>
        <p className="page-hero-sub">
          Integral University, Kursi Road, Lucknow — September 26, 2026.
        </p>
      </div>

      {/* Reuse the existing Venue section component */}
      <Venue />

      <div className="page-wrap" style={{ paddingTop: '0' }}>
        <Link to="/" className="page-back-link">Home</Link>

        {/* Transport info cards */}
        <div className="transport-section">
          <div className="transport-section-title">Getting Here</div>
          <div className="transport-grid">
            {TRANSPORT.map((t) => (
              <div key={t.id} className="transport-card">
                <div className="transport-card-icon">{t.icon}</div>
                <div className="transport-card-body">
                  <div className="transport-card-mode">{t.mode}</div>
                  <div className="transport-card-name">{t.name}</div>
                  <div className="transport-card-desc">{t.desc}</div>
                  <div className="transport-card-detail">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
