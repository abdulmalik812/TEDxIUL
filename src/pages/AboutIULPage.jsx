import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function AboutIULPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">About</div>
        <h1>Integral <span className="accent">University</span></h1>
        <p className="page-hero-sub">
          A premier institution committed to academic excellence, research, and holistic development — right in the heart of Lucknow.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="about-page-content">
          <h2>About <span className="accent">IUL</span></h2>
          <p>
            Integral University, Lucknow, is a premier educational institution committed to academic excellence,
            research, innovation, and holistic development. Established under the Uttar Pradesh State Legislature,
            the university has grown into one of North India's most respected seats of learning.
          </p>
          <p>
            With a vibrant and diverse student community spanning thousands of enrolled students across disciplines,
            the university provides an environment that nurtures creativity, critical thinking, leadership, and
            entrepreneurship. Through its dedication to quality education and societal impact, Integral University
            continues to empower future leaders who are prepared to address global challenges and contribute
            meaningfully to society.
          </p>

          <div className="about-highlight-box">
            <p>
              "Integral University — where knowledge meets purpose, and where every discipline is a stepping stone
              toward a better world."
            </p>
          </div>

          <h2>Campus &amp; <span className="accent">Facilities</span></h2>
          <p>
            Spread across a lush 120-acre campus in Dasauli, Lucknow, Integral University offers world-class
            infrastructure including modern lecture halls, research laboratories, a central library, sports
            facilities, and dedicated innovation hubs. The campus is designed to foster both academic rigour
            and co-curricular excellence.
          </p>

          <h2>Location &amp; <span className="accent">Access</span></h2>
          <p>
            The university is located at Dasauli, Kursi Road, Lucknow – 226026, Uttar Pradesh. It is well
            connected by road and is approximately 30 km from Lucknow's Chaudhary Charan Singh International
            Airport and easily accessible from major railway stations.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
            <a
              href="https://www.iul.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Visit IUL Website
            </a>
            <Link to="/venue" className="btn-primary">Venue &amp; Directions</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
