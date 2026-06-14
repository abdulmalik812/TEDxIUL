import './Tickets.css';

export default function Tickets() {
  return (
    <section id="tickets">
      <p className="section-label fade-in">Secure Your Spot</p>
      <h2 className="section-title fade-in">EVENT <span className="accent">TICKETS</span></h2>
      <p className="tickets-sub fade-in">Choose your pass and be part of something extraordinary</p>
      <div className="tickets-grid">
        <div className="ticket-card early-bird">
          <div className="ticket-ribbon">Limited Offer</div>
          <div className="ticket-header">
            <div className="ticket-type">Early Bird</div>
            <div className="ticket-price">₹499</div>
            <div className="ticket-period">Per Person</div>
          </div>
          <div className="ticket-divider"></div>
          <ul className="ticket-features">
            <li><span className="tick">✓</span> Full-day event access</li>
            <li><span className="tick">✓</span> Welcome kit & goodies</li>
            <li><span className="tick">✓</span> Lunch & refreshments</li>
            <li><span className="tick">✓</span> Certificate of participation</li>
            <li><span className="tick">✓</span> Networking session access</li>
            <li><span className="tick">✓</span> Priority seating</li>
          </ul>
          <a href="#contact" className="btn-primary ticket-btn">Get Early Bird →</a>
          <p className="ticket-note">Available until August 15, 2026</p>
        </div>
        <div className="ticket-card normal">
          <div className="ticket-header">
            <div className="ticket-type">Standard</div>
            <div className="ticket-price">₹799</div>
            <div className="ticket-period">Per Person</div>
          </div>
          <div className="ticket-divider"></div>
          <ul className="ticket-features">
            <li><span className="tick">✓</span> Full-day event access</li>
            <li><span className="tick">✓</span> Welcome kit & goodies</li>
            <li><span className="tick">✓</span> Lunch & refreshments</li>
            <li><span className="tick">✓</span> Certificate of participation</li>
            <li><span className="tick">✓</span> Networking session access</li>
            <li className="muted"><span className="tick dim">✗</span> Priority seating</li>
          </ul>
          <a href="#contact" className="btn-outline ticket-btn">Get Standard →</a>
          <p className="ticket-note">Available from August 16, 2026</p>
        </div>
      </div>
    </section>
  );
}