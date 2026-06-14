import './Schedule.css';

export default function Schedule() {
  return (
    <section id="schedule">
      <p className="section-label fade-in">Event Schedule</p>
      <h2 className="section-title fade-in">THE <span className="accent">DAY</span></h2>
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Entry</div>
          <div className="tl-name">Welcome & Registration</div>
          <div className="tl-desc">Collect your pass and goodies. Meet fellow attendees and start connecting.</div>
          <span className="tl-tag">Entry</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Opening</div>
          <div className="tl-name">Opening Ceremony</div>
          <div className="tl-desc">Introduction to TEDxIntegralUniversity, the TESSELLATION theme, and the vision behind this edition.</div>
          <span className="tl-tag">Ceremony</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Talk Block 1</div>
          <div className="tl-name">Talk Block 1</div>
          <div className="tl-desc">Our first set of speakers share ideas on how individual action creates collective change.</div>
          <span className="tl-tag">Talks</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Break</div>
          <div className="tl-name">Tea Break & Networking</div>
          <div className="tl-desc">Refreshments and open conversation. Connect with speakers and attendees.</div>
          <span className="tl-tag">Break</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Talk Block 2</div>
          <div className="tl-name">Talk Block 2</div>
          <div className="tl-desc">More transformative ideas from our next set of speakers.</div>
          <span className="tl-tag">Talks</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Closing</div>
          <div className="tl-name">Closing Ceremony</div>
          <div className="tl-desc">Felicitation, thank you, and the collective mosaic we've built together.</div>
          <span className="tl-tag">Closing</span>
        </div>
      </div>
    </section>
  );
}