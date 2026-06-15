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
     <h2 className="faq-main-title fade-in">
  Got Questions?
</h2>

<p className="faq-subtitle fade-in">
  Everything you need to know before joining the TEDxIntegralUniversity experience.
</p>
      <div className="faq-list">
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            What is TEDx? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            TEDx events are independently organized events licensed by TED that bring communities together to share ideas worth spreading.
          </div>
        </div>
         <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            What is TEDxIntegralUniversity ? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            TEDxIntegralUniversity is the official TEDx event hosted at Integral University, bringing together innovators, leaders, and changemakers.
          </div>
        </div>
         <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
           What does the theme "Tessellation" mean? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            Tessellation represents how individual ideas, perspectives, and experiences come together to create meaningful collective impact.
          </div>
        </div>
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
            Why should I attend TEDxIntegralUniversity? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            You'll gain insights from inspiring speakers, connect with like-minded individuals, and experience ideas that can spark personal and professional growth.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            How can I register for the event? <span className="icon">+</span>
          </button>
          <div className="faq-a">
            Registration details and ticket information will be announced through the official TEDxIntegralUniversity website and social media channels.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
           Will there be a participation certificate?<span className="icon">+</span>
          </button>
          <div className="faq-a">
            Yes, attendees will receive a participation certificate after successfully attending the event.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-q" onClick={handleToggleFaq}>
            Who are the speakers at TEDxIntegralUniversity?<span className="icon">+</span>
          </button>
          <div className="faq-a">
           Speaker announcements will be made soon. Stay connected with our official platforms for updates.
          </div>
        </div>
        <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
    Is TEDx the same as TED?<span className="icon">+</span>
  </button>

  <div className="faq-a">
   No. TED is the global organization, while TEDx events are independently organized under a TED license.
  </div>
</div>
 <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
   Can I interact with speakers?<span className="icon">+</span>
  </button>
  <div className="faq-a">
  Depending on the event schedule, networking and interaction opportunities may be available.
</div>
      </div>
      <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
   What can I expect from the event?<span className="icon">+</span>
  </button>
  <div className="faq-a">
 Expect inspiring talks, engaging discussions, networking opportunities, and a day filled with innovative ideas.
</div>
      </div>
       <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
   Can students from other institutions attend?<span className="icon">+</span>
  </button>
  <div className="faq-a">
 Yes. The event welcomes students from Integral University as well as other institutions.
</div>
      </div>
       <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
   Will food and refreshments be provided?<span className="icon">+</span>
  </button>
  <div className="faq-a">
 Yes, refreshments and meals will be provided according to the ticket category and event schedule.
</div>
      </div>
       <div className="faq-item">
  <button className="faq-q" onClick={handleToggleFaq}>
  How can I stay updated about TEDxIntegralUniversity?<span className="icon">+</span>
  </button>
  <div className="faq-a">
 Follow our official website and social media channels for the latest announcements and updates.
</div>
      </div>
      </div>
    </section>
  );
}