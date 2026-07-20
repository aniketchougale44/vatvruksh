import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

const DriverIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3" />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.2 6.2l2.3 2.3M15.5 15.5l2.3 2.3M17.8 6.2l-2.3 2.3M8.5 15.5l-2.3 2.3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v5l3.2 1.8" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.03.64.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.18 1.53 1.92 1.05.94 1.94 1.24 2.21 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.25.09 1.56.74 1.83.87.27.14.45.2.51.32.07.12.07.65-.17 1.33Z" />
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="/innova_crysta.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-kicker">{t('hero.kicker')}</span>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <div className="hero-badges">
          <span className="badge"><DriverIcon />{t('hero.badge.driver')}</span>
          <span className="badge"><SparkleIcon />{t('hero.badge.sanitized')}</span>
          <span className="badge"><ClockIcon />{t('hero.badge.support')}</span>
        </div>
        <div className="hero-actions">
          <a href="tel:+919881037257" className="btn-primary">{t('hero.bookRide')}</a>
          <a href="https://wa.me/919881037257" className="btn-whatsapp">
            <WhatsAppIcon />
            {t('hero.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
