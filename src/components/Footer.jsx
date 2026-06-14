import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        ©2026 <span style={{ color: 'var(--red)' }}>TEDx</span> Integral University · All Rights Reserved · Independently organized TED event
      </div>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
}