import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { whatsappLink } from '../constants';
import { useMediaSlots } from '../hooks/useMediaSlots';
import './Fleet.css';

const BANNER_PHOTO_INTERVAL_MS = 3500;

const cars = [
  {
    name: 'Force Urbania',
    type: 'MUV',
    seats: 17,
    ac: true,
    images: ['/cars/Force Urbania/1.jpeg', '/cars/Force Urbania/2.jpeg', '/cars/Force Urbania/3.jpeg', '/cars/Force Urbania/4.jpeg', '/cars/Force Urbania/5.jpeg']
  },
  {
    name: 'Hyundai Aura',
    type: 'Sedan',
    seats: 5,
    ac: true,
    images: ['/cars/Hyundai Aura/1.jpeg', '/cars/Hyundai Aura/2.jpeg', '/cars/Hyundai Aura/3.jpeg', '/cars/Hyundai Aura/4.jpeg', '/cars/Hyundai Aura/5.jpeg']
  },
  {
    name: 'Innova Crysta',
    type: 'Premium MUV',
    seats: 7,
    ac: true,
    images: ['/cars/Innova Crysta/1.jpeg', '/cars/Innova Crysta/2.jpeg', '/cars/Innova Crysta/3.jpeg', '/cars/Innova Crysta/4.jpeg', '/cars/Innova Crysta/5.jpeg']
  },
  {
    name: 'Innova Hycross',
    type: 'Premium MUV',
    seats: 7,
    ac: true,
    images: ['/cars/Innova Hycross/1.jpeg', '/cars/Innova Hycross/2.jpeg', '/cars/Innova Hycross/3.jpeg', '/cars/Innova Hycross/4.jpeg']
  },
  {
    name: 'Kia Carens',
    type: 'MUV',
    seats: 7,
    ac: true,
    images: ['/cars/Kia Carens/1.jpeg', '/cars/Kia Carens/2.jpeg', '/cars/Kia Carens/3.jpeg', '/cars/Kia Carens/4.jpeg', '/cars/Kia Carens/5.jpeg']
  },
  {
    name: 'Maruti Suzuki Dzire',
    type: 'Sedan',
    seats: 5,
    ac: true,
    images: ['/cars/Maruti Suzuki Dzire/1.jpeg', '/cars/Maruti Suzuki Dzire/2.jpeg', '/cars/Maruti Suzuki Dzire/3.jpeg', '/cars/Maruti Suzuki Dzire/4.jpeg', '/cars/Maruti Suzuki Dzire/5.jpeg']
  }
];

const SeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
    <path d="M5 11h11a2 2 0 0 1 2 2v3H7a2 2 0 0 1-2-2Z" />
    <path d="M5 16v3M18 16v3" />
  </svg>
);

const SnowflakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />
    <path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
  </svg>
);

const DriverIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
  </svg>
);

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const FleetBanner = () => {
  const media = useMediaSlots('/gallery', '');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const next = useCallback(() => setIndex((i) => (i + 1) % media.length), [media.length]);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  useEffect(() => {
    setIndex(0);
  }, [media.length]);

  // Play the active video from the start; pause every other video.
  useEffect(() => {
    media.forEach((item, i) => {
      const el = videoRefs.current[i];
      if (!el) return;
      if (i === index && item.type === 'video' && !paused) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [index, media, paused]);

  // Photos advance on a timer; the video advances itself via onEnded once it
  // has played in full, so it isn't cut short by a fixed interval.
  useEffect(() => {
    if (paused || media.length === 0 || media[index]?.type === 'video') return;
    const id = setTimeout(next, BANNER_PHOTO_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, media, paused, next]);

  if (media.length === 0) return null;

  return (
    <div
      className="fleet-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {media.length > 1 && (
        <button className="fleet-banner-nav prev" onClick={prev} aria-label="Previous photo">
          <ChevronIcon direction="left" />
        </button>
      )}

      {media.map((item, i) =>
        item.type === 'video' ? (
          <video
            key={item.src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={item.src}
            muted
            playsInline
            onEnded={next}
            className={`fleet-banner-slide${i === index ? ' active' : ''}`}
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt="Our full fleet of cars"
            loading="lazy"
            className={`fleet-banner-slide${i === index ? ' active' : ''}`}
          />
        )
      )}

      {media.length > 1 && (
        <button className="fleet-banner-nav next" onClick={next} aria-label="Next photo">
          <ChevronIcon direction="right" />
        </button>
      )}

      {media.length > 1 && (
        <div className="fleet-banner-dots">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`fleet-banner-dot-btn${i === index ? ' active' : ''}`}
              aria-label={`Show fleet photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Fleet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const { t } = useLanguage();

  const goTo = (index: number) => {
    setActiveIndex(index);
    setImgIndex(0);
  };
  const next = () => goTo((activeIndex + 1) % cars.length);
  const prev = () => goTo((activeIndex - 1 + cars.length) % cars.length);

  useEffect(() => {
    const activeCarImages = cars[activeIndex].images;
    const id = setInterval(() => {
      setImgIndex((prev) => {
        if (prev + 1 < activeCarImages.length) {
          return prev + 1;
        }
        setActiveIndex((p) => (p + 1) % cars.length);
        return 0;
      });
    }, 2400);
    return () => clearInterval(id);
  }, [activeIndex]);

  return (
    <section className="fleet-section" id="fleet">
      <h2>{t('fleet.heading')}</h2>
      <p>{t('fleet.subtitle')}</p>

      <FleetBanner />

      <div className="fleet-stage">
        <button className="fleet-nav prev" onClick={prev} aria-label="Previous vehicle">
          <ChevronIcon direction="left" />
        </button>

        {cars.map((car, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={car.name} className={`fleet-slide${isActive ? ' active' : ''}`}>
              <img
                src={isActive ? car.images[imgIndex] : car.images[0]}
                alt={car.name}
                className="fleet-slide-bg"
              />
              <div className="fleet-slide-scrim" />
              <span className="fleet-slide-tag">{car.type}</span>
              <div className="fleet-slide-content">
                <span className="fleet-slide-index">
                  {String(index + 1).padStart(2, '0')} / {String(cars.length).padStart(2, '0')}
                </span>
                <h3>{car.name}</h3>
                <div className="fleet-slide-specs">
                  <span><SeatIcon />{car.seats} {t('fleet.seats')}</span>
                  {car.ac && <span><SnowflakeIcon />{t('fleet.ac')}</span>}
                  <span><DriverIcon />{t('fleet.driver')}</span>
                </div>
                <a
                  href={whatsappLink(`Hi, I'd like to enquire about booking the ${car.name}. Could you share availability and pricing?`)}
                  className="btn-book-premium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('fleet.bookNow')}
                </a>
              </div>
            </div>
          );
        })}

        <button className="fleet-nav next" onClick={next} aria-label="Next vehicle">
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="fleet-thumbs">
        {cars.map((car, index) => (
          <button
            key={car.name}
            className={`fleet-thumb${index === activeIndex ? ' active' : ''}`}
            onClick={() => goTo(index)}
          >
            <img src={car.images[0]} alt={car.name} />
            <span>{car.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Fleet;