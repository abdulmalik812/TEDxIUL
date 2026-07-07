import { Link } from 'react-router-dom';
import Schedule from '../components/Schedule';
import Footer from '../components/Footer';
import './pages.css';

export default function SchedulePage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Event Day</div>
        <h1>The <span className="accent">Schedule</span></h1>
        <p className="page-hero-sub">
          September 26, 2026 — a full day of ideas, conversations, and connections at Integral University, Lucknow.
        </p>
      </div>

      <div className="page-wrap" style={{ paddingTop: '0' }}>
        <Link to="/" className="page-back-link">Home</Link>
        <Schedule />
      </div>

      <Footer />
    </div>
  );
}
