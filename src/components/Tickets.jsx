import './Tickets.css';

const ticketTiers = [
  {
    name: 'General',
    price: '₹799',
    description: 'Full auditorium access with back seating',
    features: [
      'Full auditorium access',
      'All talks',
      'Back seating',
      'Refreshments',
      'Key Rings',
    ],
    featured: false,
  },
  {
    name: 'Gold',
    price: '₹1,699',
    description: 'Premium experience with middle seating',
    features: [
      'Full auditorium access',
      'All talks',
      'Middle seating',
      'Diary & Pen',
      'Meal + Refreshment',
    ],
    featured: true,
    tag: 'Most Popular',
  },
  {
    name: 'Platinum',
    price: '₹2,099',
    description: 'Front-row VIP experience with speaker access',
    features: [
      'Full auditorium access',
      'All talks',
      'Front-row seating',
      'TEDx Kit',
      'Meal + Refreshment',
      'Meet & Greet with speakers',
    ],
    featured: false,
  },
  {
    name: 'Faculty',
    price: '₹2,599',
    description: 'VIP seating with full premium benefits',
    features: [
      'Full auditorium access',
      'All talks',
      'VIP seating',
      'TEDx Kit',
      'Meal + Refreshment',
      'Meet & Greet with speakers',
    ],
    featured: false,
    tag: 'Faculty',
  },
];

export default function Tickets() {
  return (
    <section id="tickets">
      <p className="section-label fade-in">Secure Your Spot</p>
      <h2 className="section-title fade-in">EVENT <span className="accent">TICKETS</span></h2>
      <p className="tickets-sub fade-in">Choose the pass that fits your experience</p>
      <div className="tickets-grid">
        {ticketTiers.map((ticket) => (
          <div key={ticket.name} className={`ticket-card ${ticket.featured ? 'featured' : ''}`}>
            {ticket.tag && <div className="ticket-ribbon">{ticket.tag}</div>}
            <div className="ticket-header">
              <div className="ticket-type">{ticket.name}</div>
              <div className="ticket-price">{ticket.price}</div>
              <div className="ticket-period">Per Person</div>
              <p className="ticket-description">{ticket.description}</p>
            </div>
            <div className="ticket-divider"></div>
            <ul className="ticket-features">
              {ticket.features.map((feature) => (
                <li key={feature}><span className="tick">✓</span> {feature}</li>
              ))}
            </ul>
            <a href="/register" className={ticket.featured ? 'btn-primary ticket-btn' : 'btn-outline ticket-btn'}>
              Get {ticket.name} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}