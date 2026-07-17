import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Vatvruksh</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fleet">Our Fleet</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-cta">
        <a href="tel:+910000000000" className="btn-call"><span className="btn-call-icon">📞</span> Call Now</a>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`navbar-mobile-panel${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fleet">Our Fleet</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <a href="tel:+910000000000" className="btn-call">
          <span className="btn-call-icon">📞</span> Call Now
        </a>
      </div>

      {menuOpen && <div className="navbar-scrim" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
