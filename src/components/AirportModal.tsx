import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useSyncedSlideIndex } from '../hooks/useSyncedSlideIndex';
import { usePhotoSlots } from '../hooks/usePhotoSlots';
import './AirportModal.css';

interface AirportModalProps {
  onClose: () => void;
}

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2.5 2v1.5L11 20.5l3.5 1V19.5L12 17.5V13.5Z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02Z" />
  </svg>
);

const RadarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12 18 8" />
    <path d="M12 3a9 9 0 0 1 9 9" strokeDasharray="2 3" />
  </svg>
);

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6Z" />
    <path d="m9.5 12 1.8 1.8L15 10" />
  </svg>
);

const LuggageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="8" width="14" height="12" rx="2" />
    <path d="M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8" />
    <line x1="9" y1="12" x2="9" y2="16" />
    <line x1="15" y1="12" x2="15" y2="16" />
  </svg>
);

const CALL_HREF = 'tel:+919881037257';

const features = [
  { icon: <RadarIcon />, labelKey: 'airport.feature.tracking.label', blurbKey: 'airport.feature.tracking.blurb' },
  { icon: <BadgeIcon />, labelKey: 'airport.feature.meetgreet.label', blurbKey: 'airport.feature.meetgreet.blurb' },
  { icon: <LuggageIcon />, labelKey: 'airport.feature.luggage.label', blurbKey: 'airport.feature.luggage.blurb' },
];

const airports = [
  {
    name: 'Kolhapur Airport',
    slug: 'kolhapur',
    code: 'KLH',
    distance: '~8 km',
    duration: '15 - 20 min',
    blurb: 'The closest airport — quick rides for flights from Kolhapur.',
  },
  {
    name: 'Belgaum Airport',
    slug: 'belgaum',
    code: 'IXG',
    distance: '~90 km',
    duration: '2 - 2.5 hrs',
    blurb: 'A short ride across the state border, for flights from Belgaum.',
  },
  {
    name: 'Hubli Airport',
    slug: 'hubli',
    code: 'HBX',
    distance: '~150 km',
    duration: '3 - 3.5 hrs',
    blurb: 'Comfortable rides to Hubli, with more flight choices.',
  },
  {
    name: 'Goa Airport (Dabolim / Manohar)',
    slug: 'goa',
    code: 'GOI / GOX',
    distance: '~185 km',
    duration: '4 - 4.5 hrs',
    blurb: 'Popular for flights within India and abroad, from Goa.',
  },
  {
    name: 'Pune Airport',
    slug: 'pune',
    code: 'PNQ',
    distance: '~230 km',
    duration: '4.5 - 5 hrs',
    blurb: 'Many flight choices, within India and abroad, from Pune.',
  },
  {
    name: 'Mumbai Airport',
    slug: 'mumbai',
    code: 'BOM',
    distance: '~390 km',
    duration: '7 - 8 hrs',
    blurb: 'Best for international departures, with early or overnight pickups available.',
  },
];

interface AirportPhotoSliderProps {
  slug: string;
  name: string;
}

const AirportPhotoSlider = ({ slug, name }: AirportPhotoSliderProps) => {
  const photos = usePhotoSlots('/airport', slug);
  const [paused, setPaused] = useState(false);
  const [manualIndex, setManualIndex] = useState<number | null>(null);
  const syncedIndex = useSyncedSlideIndex(photos.length, paused);
  const index = manualIndex ?? syncedIndex;

  useEffect(() => {
    if (!paused) setManualIndex(null);
  }, [paused]);

  if (photos.length === 0) {
    return (
      <div className="airport-photo-fallback">
        <PlaneIcon />
      </div>
    );
  }

  return (
    <div
      className="airport-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} ${i + 1}`}
          loading="lazy"
          className={`airport-slide${i === index ? ' active' : ''}`}
        />
      ))}
      {photos.length > 1 && (
        <div className="airport-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`airport-dot-btn${i === index ? ' active' : ''}`}
              aria-label={`Show ${name} photo ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setManualIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AirportModal = ({ onClose }: AirportModalProps) => {
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
    <div className="airport-overlay" onClick={onClose}>
      <div className="airport-modal" onClick={(e) => e.stopPropagation()}>
        <button className="airport-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <span className="airport-kicker">{t('airport.kicker')}</span>
        <h3>{t('airport.title')}</h3>
        <p className="airport-subtitle">{t('airport.subtitle')}</p>

        <div className="airport-features">
          {features.map((f) => (
            <div className="airport-feature" key={f.labelKey}>
              <span className="airport-feature-icon">{f.icon}</span>
              <div>
                <h5>{t(f.labelKey)}</h5>
                <p>{t(f.blurbKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="airport-grid">
          {airports.map((ap) => (
            <div className="airport-card" key={ap.name}>
              <div className="airport-photo">
                <AirportPhotoSlider slug={ap.slug} name={ap.name} />
                <div className="airport-scrim" />
                <span className="airport-code">{ap.code}</span>
                <span className="airport-duration-badge">
                  <ClockIcon /> {ap.duration}
                </span>
              </div>
              <div className="airport-card-body">
                <h4>{ap.name}</h4>
                <span className="airport-distance">{ap.distance} {t('airport.fromKolhapur')}</span>
                <p>{ap.blurb}</p>
                <div className="airport-card-footer">
                  <span className="airport-tag">{t('common.oneWayRoundTrip')}</span>
                  <a className="airport-book-btn" href={CALL_HREF}>
                    <PhoneIcon /> {t('common.book')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="airport-note">{t('airport.note')}</p>
      </div>
    </div>
  );
};

export default AirportModal;
