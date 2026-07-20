import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Language, languageNames } from '../i18n/translations';
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

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.7-4-9s1.5-6.4 4-9Z" />
  </svg>
);

const languageOrder: Language[] = ['en', 'hi', 'mr', 'kn'];

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`language-switcher${className ? ` ${className}` : ''}`} ref={ref}>
      <button
        type="button"
        className="language-switcher-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <GlobeIcon />
        {languageNames[language]}
      </button>
      {open && (
        <ul className="language-switcher-menu" role="listbox">
          {languageOrder.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                className={lang === language ? 'active' : ''}
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                role="option"
                aria-selected={lang === language}
              >
                {languageNames[lang]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

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
        <li><Link to="/">{t('nav.home')}</Link></li>
        <li><Link to="/cars">{t('nav.fleet')}</Link></li>
        <li><Link to="/contact">{t('nav.contact')}</Link></li>
      </ul>

      <div className="navbar-cta">
        <LanguageSwitcher />
        <a href="tel:+919881037257" className="btn-call"><span className="btn-call-icon">📞</span> {t('nav.callNow')}</a>
        <a href="tel:+919881037257" className="navbar-call-number">+91 98810 37257</a>
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
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/cars">{t('nav.fleet')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
        </ul>
        <LanguageSwitcher className="mobile" />
        <a href="tel:+919881037257" className="btn-call">
          <span className="btn-call-icon">📞</span> {t('nav.callNow')}
        </a>
        <a href="tel:+919881037257" className="navbar-call-number">+91 98810 37257</a>
      </div>

      {menuOpen && <div className="navbar-scrim" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
