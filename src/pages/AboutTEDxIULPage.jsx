import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function AboutTEDxIULPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">About</div>
        <h1>About <span className="accent">TEDxIUL</span></h1>
        <p className="page-hero-sub">
          Ideas worth spreading from the heart of Integral University, Lucknow.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="about-page-content">
          <h2>Our <span className="accent">Story</span></h2>
          <p>
            TEDxIntegralUniversity is an independently organized TEDx event hosted at Integral University,
            Lucknow — one of North India's most vibrant and forward-thinking academic institutions.
            The event brings together visionary speakers, innovators, entrepreneurs, and changemakers
            to inspire meaningful conversations and impactful ideas.
          </p>
          <p>
            Conceived by students and faculty who believe deeply in the power of ideas, TEDxIntegralUniversity
            is a platform where local brilliance meets global ambition. Every voice here matters.
            Every idea is a step toward the future.
          </p>

          <div className="about-highlight-box">
            <p>
              "Like tiles in a mosaic, every voice matters — our theme <strong>TESSELLATION</strong> celebrates
              how distinct perspectives, when placed together, form a pattern larger and more beautiful than
              any single piece alone."
            </p>
          </div>

          <h2>Our <span className="accent">Theme</span></h2>
          <p>
            <strong>TESSELLATION</strong> — From Individual Ideas to Collective Impact. The theme captures how
            seemingly unrelated ideas, when brought together by curious minds, create something far greater than
            the sum of their parts. Just like a tessellation in mathematics — where shapes fit together without
            gaps or overlaps to cover a plane — great societies and innovations emerge when diverse perspectives
            are woven together seamlessly.
          </p>
          <p>
            This theme challenges each speaker, attendee, and idea to ask: How does my piece fit? What do we
            build together?
          </p>

          <h2>Our <span className="accent">Vision</span></h2>
          <p>
            To create a community of lifelong learners and change-driven thinkers in Lucknow and beyond — where
            the boundary between the audience and the speaker dissolves, and everyone leaves feeling more
            equipped to contribute to the world.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
            <Link to="/speakers" className="btn-primary">Meet the Speakers</Link>
            <Link to="/register" className="btn-outline">Register Now</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
