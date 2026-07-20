import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Vatvruksh Tours and Travels</h3>
          <p>{t('footer.about')}</p>
        </div>

        <div className="footer-links">
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/cars">{t('nav.fleet')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t('footer.contactUs')}</h4>
          <a href="https://maps.google.com/?q=Kolhapur" className="footer-contact-item">
            <span className="footer-icon">
              <svg {...svgProps}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Kolhapur, Maharashtra
          </a>
          <a href="tel:+919881037257" className="footer-contact-item">
            <span className="footer-icon">
              <svg {...svgProps}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            +91 98810 37257
          </a>
          <a href="mailto:info@vatvruksh.com" className="footer-contact-item">
            <span className="footer-icon">
              <svg {...svgProps}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            info@vatvruksh.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vatvruksh Tours and Travels. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
