import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import './pages.css';

export default function FAQPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Help</div>
        <h1>Got <span className="accent">Questions?</span></h1>
        <p className="page-hero-sub">
          Everything you need to know before joining the TEDxIntegralUniversity experience.
        </p>
      </div>

      <div className="page-wrap" style={{ paddingTop: '0' }}>
        <Link to="/" className="page-back-link">Home</Link>
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
