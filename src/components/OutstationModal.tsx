import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './OutstationModal.css';

interface OutstationModalProps {
  onClose: () => void;
}

const routeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <path d="M8.2 17.8 C 9 14, 6 13, 6 10 C 6 7.5, 8 6.5, 10 7.5 C 13 9, 12 12, 15.8 12.2" strokeDasharray="3 3" />
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

const CALL_HREF = 'tel:+919881037257';

const destinations = [
  {
    name: 'Pune',
    slug: 'pune',
    distance: '~230 km',
    duration: '4.5 - 5 hrs',
    blurb: 'A big city known for IT jobs and culture, easy to reach for work or fun.',
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    distance: '~390 km',
    duration: '7 - 8 hrs',
    blurb: 'India\'s money hub, great for airport trips and work travel.',
  },
  {
    name: 'Goa',
    slug: 'goa',
    distance: '~200 km',
    duration: '4 - 4.5 hrs',
    blurb: 'Sun, sand, and coastline — a favourite weekend getaway from Kolhapur.',
  },
  {
    name: 'Konkan Coast',
    slug: 'konkan-coast',
    distance: '~150 km',
    duration: '3 - 3.5 hrs',
    blurb: 'Ratnagiri, Ganpatipule, and Sindhudurg — scenic coastal routes and beaches.',
  },
  {
    name: 'Mahabaleshwar',
    slug: 'mahabaleshwar',
    distance: '~130 km',
    duration: '3 - 3.5 hrs',
    blurb: 'A cool hill town known for strawberry farms and misty views.',
  },
  {
    name: 'Shirdi',
    slug: 'shirdi',
    distance: '~280 km',
    duration: '5.5 - 6 hrs',
    blurb: 'Comfortable temple trips to Sai Baba, with early darshan slots.',
  },
  {
    name: 'Nashik',
    slug: 'nashik',
    distance: '~350 km',
    duration: '6.5 - 7 hrs',
    blurb: 'Wine country and temple town, a popular route for family and group trips.',
  },
  {
    name: 'Ajanta-Ellora (Aurangabad)',
    slug: 'ajanta-ellora',
    distance: '~330 km',
    duration: '6 - 6.5 hrs',
    blurb: 'Famous old cave temples, great for a multi-day trip.',
  },
  {
    name: 'Gokarna',
    slug: 'gokarna',
    distance: '~330 km',
    duration: '6 - 6.5 hrs',
    blurb: 'A calm beach town south of Goa, known for quiet shores and temples.',
  },
  {
    name: 'Belgaum',
    slug: 'belgaum',
    distance: '~90 km',
    duration: '2 - 2.5 hrs',
    blurb: 'A quick cross-border trip, handy for business visits and short getaways.',
  },
  {
    name: 'Bangalore',
    slug: 'bangalore',
    distance: '~600 km',
    duration: '10 - 11 hrs',
    blurb: 'Overnight comfort rides to the garden city, popular for business travel.',
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    distance: '~500 km',
    duration: '9 - 10 hrs',
    blurb: 'Long trips with skilled drivers, for a relaxed journey.',
  },
  {
    name: 'Tirupati',
    slug: 'tirupati',
    distance: '~700 km',
    duration: '12 - 13 hrs',
    blurb: 'Temple trips with flexible stops and safe overnight travel.',
  },
];

const MAX_PHOTOS_PER_DEST = 5;
const SLIDE_INTERVAL_MS = 3500;

const useDestinationPhotos = (slug: string) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const candidates = Array.from(
      { length: MAX_PHOTOS_PER_DEST },
      (_, i) => `/outstation/${slug}/${i + 1}.jpg`
    );

    Promise.all(
      candidates.map(
        (src) =>
          new Promise<string | null>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((results) => {
      if (!cancelled) setPhotos(results.filter((src): src is string => src !== null));
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return photos;
};

interface DestinationSliderProps {
  slug: string;
  name: string;
}

const DestinationSlider = ({ slug, name }: DestinationSliderProps) => {
  const photos = useDestinationPhotos(slug);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [photos.length]);

  useEffect(() => {
    if (photos.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [photos.length, paused]);

  if (photos.length === 0) {
    return <div className="outstation-icon-fallback">{routeIcon}</div>;
  }

  return (
    <div
      className="outstation-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} ${i + 1}`}
          loading="lazy"
          className={`outstation-slide${i === index ? ' active' : ''}`}
        />
      ))}
      {photos.length > 1 && (
        <div className="outstation-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`outstation-dot-btn${i === index ? ' active' : ''}`}
              aria-label={`Show ${name} photo ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OutstationModal = ({ onClose }: OutstationModalProps) => {
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
    <div className="outstation-overlay" onClick={onClose}>
      <div className="outstation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="outstation-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <span className="outstation-kicker">{t('outstation.kicker')}</span>
        <h3>{t('outstation.title')}</h3>
        <p className="outstation-subtitle">{t('outstation.subtitle')}</p>
        <div className="outstation-grid">
          {destinations.map((dest) => (
            <div className="outstation-card" key={dest.name}>
              <div className="outstation-photo">
                <DestinationSlider slug={dest.slug} name={dest.name} />
                <div className="outstation-scrim" />
                <span className="outstation-badge">
                  <ClockIcon /> {dest.duration}
                </span>
              </div>
              <div className="outstation-card-body">
                <h4>{dest.name}</h4>
                <span className="outstation-distance">{dest.distance} {t('outstation.fromKolhapur')}</span>
                <p>{dest.blurb}</p>
                <div className="outstation-card-footer">
                  <span className="outstation-tag">{t('common.oneWayRoundTrip')}</span>
                  <a className="outstation-book-btn" href={CALL_HREF}>
                    <PhoneIcon /> {t('common.book')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="outstation-note">{t('outstation.note')}</p>
      </div>
    </div>
  );
};

export default OutstationModal;
