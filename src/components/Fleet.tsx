import { useState, useEffect } from 'react';
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

const CarCard = ({ car, isActive }: { car: typeof cars[0], isActive: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0); // Reset to first image when inactive
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % car.images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, car.images.length]);

  return (
    <div className="car-card">
      <img src={car.images[currentIndex]} alt={car.name} />
      <div className="car-info">
        <h3>{car.name}</h3>
        <p>{car.type} • {car.seats} Seats • AC</p>
        <div className="car-badge">Includes Driver</div>
        <a href={`https://wa.me/910000000000?text=I'm interested in booking ${car.name}`} className="btn-book">Book Now</a>
      </div>
    </div>
  );
};

const Fleet = () => {
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  const nextCar = () => {
    setActiveCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setActiveCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextCar();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fleet-section" id="fleet">
      <h2>Our Premium Fleet</h2>
      <p>Choose from our wide range of well-maintained vehicles</p>
      <div className="fleet-carousel-container">
        <button className="carousel-btn prev" onClick={prevCar}>&lt;</button>
        
        <div className="carousel-wrapper">
          {cars.map((car, index) => {
            let position = 'next';
            if (index === activeCarIndex) position = 'active';
            if (index === (activeCarIndex - 1 + cars.length) % cars.length) position = 'prev';
            
            return (
              <div key={index} className={`carousel-item ${position}`}>
                <CarCard car={car} isActive={index === activeCarIndex} />
              </div>
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={nextCar}>&gt;</button>
      </div>
    </section>
  );
};

export default Fleet;
