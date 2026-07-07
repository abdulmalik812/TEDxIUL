import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function TeamPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">People</div>
        <h1>Our <span className="accent">Team</span></h1>
        <p className="page-hero-sub">
          The passionate organizers behind TEDxIntegralUniversity 2026.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="placeholder-page">
          <div className="placeholder-icon">🧩</div>
          <h2>Team Profiles Coming Soon</h2>
          <p>
            We're putting together profiles of the incredible team making
            TEDxIntegralUniversity 2026 happen. Check back soon!
          </p>
          <Link to="/register" className="btn-primary">Register for the Event</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
