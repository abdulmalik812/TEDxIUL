import './FAQ.css';

export default function FAQ() {
  const handleToggleFaq = (e) => {
    const btn = e.currentTarget;
    const ans = btn.nextElementSibling;
    const open = ans.classList.contains('open');
    document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));
    if (!open) {
      ans.classList.add('open');
      btn.classList.add('open');
    }
  };

  return (
    <section id="faq">
      <p className="section-label fade-in">Got Questions?</p>
      <h2 className="section-title fade-in">FREQUENTLY <span className="accent">ASKED</span></h2>
      <div className="faq-list">
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            Who can attend TEDxIntegralUniversity? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            The event is open to students, faculty, professionals, and anyone passionate about ideas.
            Tickets are available on this website.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            How can I purchase tickets? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            Click the "Get Ticket" button and follow the instructions. Pricing and availability will be
            announced soon.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            Are there prerequisites to attend? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            None! Just bring an open mind and curiosity for new ideas.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            Will talks be available online after the event? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            Yes — recordings will be made available on our YouTube channel after the event.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            When and where will TEDxIntegralUniversity 2026 take place? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            The event will be held at Integral University, Dasauli, Kursi Road, Lucknow, Uttar Pradesh –
            226026. Exact date in September 2026 coming soon!
          </div>
        </div>
      </div>
    </section>
  );
}