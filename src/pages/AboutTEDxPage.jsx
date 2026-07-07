import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function AboutTEDxPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">About</div>
        <h1>About <span className="accent">TEDx</span></h1>
        <p className="page-hero-sub">
          Local, independently organized events that bring the TED experience to communities worldwide.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="about-page-content">
          <h2>What is <span className="accent">TEDx?</span></h2>
          <p>
            In the spirit of discovering and spreading ideas, TED has created a program called TEDx:
            local, self-organized events that bring people together to share a TED-like experience.
            At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
            connection in communities around the world.
          </p>
          <p>
            These local, self-organized events are branded TEDx, where <strong>x = independently
            organized TED event</strong>. The TED Conference provides general guidance for the TEDx
            program, but individual TEDx events are self-organized subject to certain rules and
            regulations.
          </p>

          <div className="about-highlight-box">
            <p>
              "TEDx events are where great conversations spark — built around the power of ideas worth
              spreading, adapted for every community."
            </p>
          </div>

          <h2>The TEDx <span className="accent">Format</span></h2>
          <p>
            TEDx events typically include a mix of live and pre-recorded TED Talks, usually lasting
            no more than 18 minutes each. Speakers are drawn from the local community and represent
            a wide range of disciplines — science, technology, art, social change, entrepreneurship,
            and more.
          </p>
          <p>
            Organizers apply for a license from TED and agree to adhere to a set of rules designed
            to maintain the quality and integrity of the TEDx brand. This includes ensuring talks are
            non-commercial and ideas-focused, and that events are open to the public in some capacity.
          </p>

          <h2>Why TEDx <span className="accent">Matters</span></h2>
          <p>
            Since the first TEDx event in 2009, thousands of events have been held in more than 150
            countries. They have collectively introduced hundreds of thousands of new ideas and perspectives
            to communities that might otherwise not have access to TED's global stage.
          </p>
          <p>
            TEDx events empower local organizers to shine a spotlight on the thinkers, doers, and dreamers
            in their own backyards — amplifying ideas that might otherwise go unheard on a global scale.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
            <a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Explore the TEDx Program
            </a>
            <Link to="/about/tedxiul" className="btn-primary">
              About TEDxIntegralUniversity
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
