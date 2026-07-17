import { useEffect, useRef } from 'react';
import './Services.css';

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const services = [
  {
    title: 'Local Sightseeing',
    description: 'Explore Mahalaxmi Temple, Panhala Fort, Rankala Lake and more with our local experts.',
    icon: (
      <svg {...svgProps}>
        <line x1="3" y1="22" x2="21" y2="22" />
        <polygon points="12 2 20 7 4 7" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Outstation Trips',
    description: 'Comfortable long-distance travel to Pune, Mumbai, Goa, or Konkan with expert drivers.',
    icon: (
      <svg {...svgProps}>
        <path d="M5 17H3.5A1.5 1.5 0 0 1 2 15.5V13c0-.7.4-1.3 1-1.6l2-4A2 2 0 0 1 6.8 6h10.4a2 2 0 0 1 1.8 1.4l2 4c.6.3 1 .9 1 1.6v2.5a1.5 1.5 0 0 1-1.5 1.5H19" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 17h6" />
        <path d="M4 11h16" />
      </svg>
    ),
  },
  {
    title: 'Airport Transfers',
    description: 'Punctual pick-up and drop services to nearby airports with luggage assistance.',
    icon: (
      <svg {...svgProps}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.4L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.7.5 1.2.4l.5-.2c.5-.3.7-.8.6-1.4Z" />
      </svg>
    ),
  },
  {
    title: 'Corporate Travel',
    description: 'Professional car rental solutions for business meetings and corporate events.',
    icon: (
      <svg {...svgProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <path d="M2 13h20" />
      </svg>
    ),
  },
];

const Services = () => {
  const stepperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = stepperRef.current?.querySelectorAll('.step') ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="stepper" ref={stepperRef}>
        {services.map((service, index) => (
          <div className="step" key={index} style={{ transitionDelay: `${index * 0.12}s` }}>
            <div className="step-marker">
              <div className="step-icon" style={{ animationDelay: `${index * 0.4}s` }}>
                {service.icon}
              </div>
            </div>
            <div className="step-content">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
