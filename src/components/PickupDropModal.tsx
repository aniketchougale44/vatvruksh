import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './PickupDropModal.css';

interface PickupDropModalProps {
  onClose: () => void;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02Z" />
  </svg>
);

const CALL_HREF = 'tel:+919881037257';

const destinations = [
  'Belgaum',
  'Pune',
  'Mumbai',
  'Ahilyanagar',
  'Goa',
  'Sambhajinagar',
  'Hubli',
  'Nashik',
];

const PickupDropModal = ({ onClose }: PickupDropModalProps) => {
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
    <div className="pickupdrop-overlay" onClick={onClose}>
      <div className="pickupdrop-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pickupdrop-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <span className="pickupdrop-kicker">{t('pickupdrop.kicker')}</span>
        <h3>{t('pickupdrop.title')}</h3>
        <p className="pickupdrop-subtitle">{t('pickupdrop.subtitle')}</p>
        <div className="pickupdrop-grid">
          {destinations.map((destination) => (
            <div className="pd-card" key={destination}>
              <div className="pd-route">
                <div className="pd-city">
                  <span className="pd-pin origin">
                    <PinIcon />
                  </span>
                  <span>Kolhapur</span>
                </div>
                <span className="pd-route-line">
                  <ArrowIcon />
                </span>
                <div className="pd-city">
                  <span className="pd-pin dest">
                    <PinIcon />
                  </span>
                  <span>{destination}</span>
                </div>
              </div>
              <div className="pd-card-footer">
                <span className="pd-tag">{t('common.oneWayRoundTrip')}</span>
                <a className="pd-book-btn" href={CALL_HREF}>
                  <PhoneIcon /> {t('common.book')}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="pickupdrop-note">{t('pickupdrop.note')}</p>
      </div>
    </div>
  );
};

export default PickupDropModal;
