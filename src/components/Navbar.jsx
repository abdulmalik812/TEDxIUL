import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a className="nav-brand" href="#">
        <svg className="nav-logo" viewBox="0 0 320 36" xmlns="http://www.w3.org/2000/svg">
          {/* TED */}
          <text
            x="0"
            y="28"
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="32"
            fontWeight="400"
            fill="#E62B1E"
            letterSpacing="2"
          >
            TED
          </text>
          {/* x (superscript) */}
          <text
            x="62"
            y="18"
            fontFamily="'DM Sans', sans-serif"
            fontSize="13"
            fontWeight="600"
            fill="#E62B1E"
          >
            x
          </text>
          {/* Integral University */}
          <text
            x="76"
            y="26"
            fontFamily="'DM Sans', sans-serif"
            fontSize="14"
            fontWeight="400"
            fill="#F5F0EA"
            letterSpacing="1.2"
          >
            Integral University
          </text>
        </svg>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="btn-ticket">
        Get Ticket
      </a>
    </nav>
  );
}