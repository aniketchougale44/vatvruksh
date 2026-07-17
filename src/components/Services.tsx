import './Services.css';

const services = [
  {
    title: 'Local Sightseeing',
    description: 'Explore Mahalaxmi Temple, Panhala Fort, Rankala Lake and more with our local experts.',
    icon: '🏛️'
  },
  {
    title: 'Outstation Trips',
    description: 'Comfortable long-distance travel to Pune, Mumbai, Goa, or Konkan with expert drivers.',
    icon: '🛣️'
  },
  {
    title: 'Airport Transfers',
    description: 'Punctual pick-up and drop services to nearby airports with luggage assistance.',
    icon: '✈️'
  },
  {
    title: 'Corporate Travel',
    description: 'Professional car rental solutions for business meetings and corporate events.',
    icon: '💼'
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
