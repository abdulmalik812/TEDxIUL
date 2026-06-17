import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on route-change (anchor click)
  function handleLinkClick() {
    setOpen(false);
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className={open ? 'nav-open' : ''}>
        {/* Brand */}
        <a className="nav-brand" href="#">
          <svg className="nav-logo" viewBox="0 0 320 36" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="28" fontFamily="'Bebas Neue', sans-serif" fontSize="32" fontWeight="400" fill="#E62B1E" letterSpacing="2">TED</text>
            <text x="62" y="18" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="600" fill="#E62B1E">x</text>
            <text x="76" y="26" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="400" fill="#F5F0EA" letterSpacing="1.2">Integral University</text>
          </svg>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={handleLinkClick}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}