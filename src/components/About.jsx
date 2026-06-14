import './About.css';

export default function About() {
  return (
    <section id="about">
      <div>
        <p className="section-label fade-in">About the Event</p>
        <h2 className="about-heading fade-in">Where Ideas <em>Tessellate</em> Into Impact</h2>
        <p className="about-body fade-in">
          TEDxIntegralUniversity is an independently organized TED event bringing together
          thinkers, innovators, and storytellers to share ideas worth spreading.
        </p>
        <p className="about-body fade-in">
          Our theme <strong>"TESSELLATION"</strong> — From Individual Ideas to Collective
          Impact — celebrates how distinct perspectives, when placed together, form a pattern larger and more beautiful
          than any single piece alone. Like tiles in a mosaic, every voice matters.
        </p>
        <a href="#speakers" className="btn-primary fade-in" style={{ marginTop: '20px', display: 'inline-block' }}>
          Meet Our Speakers
        </a>
      </div>
      <div className="fade-in">
        <div className="about-img-box">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(107,63,160,0.4)" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>Image Coming Soon</span>
        </div>
      </div>
    </section>
  );
}