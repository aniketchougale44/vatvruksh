import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './BusinessTravelModal.css';

interface BusinessTravelModalProps {
  onClose: () => void;
}

const InvoiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3h10a1 1 0 0 1 1 1v16l-3-2-2 2-2-2-2 2-3-2V4a1 1 0 0 1 1-1Z" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path d="M19.5 19v.5a3 3 0 0 1-3 3H12" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M2 13h20" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    <circle cx="17.5" cy="9" r="2.6" />
    <path d="M15.5 13.2c2.8.4 5 2.8 5 6.8" />
  </svg>
);

const PlaneSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2.5 2v1.5L11 20.5l3.5 1V19.5L12 17.5V13.5Z" />
  </svg>
);

const MapPinsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5Z" />
    <circle cx="12" cy="7" r="1.8" />
    <path d="M4 20c1.2-1.6 3-2.2 4.5-1.4M20 20c-1.2-1.6-3-2.2-4.5-1.4" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02Z" />
  </svg>
);

const CALL_HREF = 'tel:+919881037257';

const features = [
  { icon: <InvoiceIcon />, labelKey: 'business.feature.invoice.label', blurbKey: 'business.feature.invoice.blurb' },
  { icon: <CalendarIcon />, labelKey: 'business.feature.billing.label', blurbKey: 'business.feature.billing.blurb' },
  { icon: <HeadsetIcon />, labelKey: 'business.feature.support.label', blurbKey: 'business.feature.support.blurb' },
];

const useCases = [
  { icon: <BriefcaseIcon />, titleKey: 'business.usecase.meetings.title', blurbKey: 'business.usecase.meetings.blurb' },
  { icon: <UsersIcon />, titleKey: 'business.usecase.events.title', blurbKey: 'business.usecase.events.blurb' },
  { icon: <PlaneSmallIcon />, titleKey: 'business.usecase.guests.title', blurbKey: 'business.usecase.guests.blurb' },
  { icon: <MapPinsIcon />, titleKey: 'business.usecase.multicity.title', blurbKey: 'business.usecase.multicity.blurb' },
];

const BusinessTravelModal = ({ onClose }: BusinessTravelModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="business-overlay" onClick={onClose}>
      <div className="business-modal" onClick={(e) => e.stopPropagation()}>
        <button className="business-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <span className="business-kicker">{t('business.kicker')}</span>
        <h3>{t('business.title')}</h3>
        <p className="business-subtitle">{t('business.subtitle')}</p>

        <div className="business-features">
          {features.map((f) => (
            <div className="business-feature" key={f.labelKey}>
              <span className="business-feature-icon">{f.icon}</span>
              <div>
                <h5>{t(f.labelKey)}</h5>
                <p>{t(f.blurbKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="business-usecase-grid">
          {useCases.map((u) => (
            <div className="business-usecase-card" key={u.titleKey}>
              <span className="business-usecase-icon">{u.icon}</span>
              <h4>{t(u.titleKey)}</h4>
              <p>{t(u.blurbKey)}</p>
            </div>
          ))}
        </div>

        <div className="business-cta">
          <p>{t('business.ctaText')}</p>
          <a className="business-cta-btn" href={CALL_HREF}>
            <PhoneIcon /> {t('business.ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessTravelModal;
