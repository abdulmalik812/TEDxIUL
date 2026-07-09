import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        ©2026 <span style={{ color: 'var(--red)' }}>TEDx</span>IntegralUniversity · This independent TEDx event is operated under license from TED. All Rights Reserved.
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