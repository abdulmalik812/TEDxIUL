import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function RegisterPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Attend</div>
        <h1>Register <span className="accent">Now</span></h1>
        <p className="page-hero-sub">
          Secure your seat at TEDxIntegralUniversity 2026 — September 26, Lucknow.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="placeholder-page">
          <div className="placeholder-icon">🎫</div>
          <h2>Registration Opens Soon</h2>
          <p>
            We're finalising the details. Registration for TEDxIntegralUniversity 2026
            will open shortly — stay tuned for the announcement!
          </p>
          <a href="#contact" className="btn-primary">Get Notified</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
