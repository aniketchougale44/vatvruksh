import { useState, useEffect, useRef } from 'react';
import './Fleet.css';

const cars = [
  {
    name: 'Force Urbania',
    type: 'MUV',
    seats: 12,
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

const Fleet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const pausedRef = useRef(false);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setImgIndex(0);
  };
  const next = () => goTo((activeIndex + 1) % cars.length);
  const prev = () => goTo((activeIndex - 1 + cars.length) % cars.length);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((p) => (p + 1) % cars.length);
        setImgIndex(0);
      }
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const activeCarImages = cars[activeIndex].images;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setImgIndex((p) => (p + 1) % activeCarImages.length);
      }
    }, 2400);
    return () => clearInterval(id);
  }, [activeIndex]);

  return (
    <section className="fleet-section" id="fleet">
      <h2>Our Premium Fleet</h2>
      <p>Choose from our wide range of well-maintained vehicles</p>

      <div
        className="fleet-stage"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
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
                  <span><SeatIcon />{car.seats} Seats</span>
                  {car.ac && <span><SnowflakeIcon />AC</span>}
                  <span><DriverIcon />Driver</span>
                </div>
                <a
                  href={`https://wa.me/910000000000?text=I'm interested in booking ${car.name}`}
                  className="btn-book-premium"
                >
                  Book Now
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
