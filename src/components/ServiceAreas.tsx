import { Link } from 'react-router-dom';
import { locations } from '../data/locations';
import './ServiceAreas.css';

const ServiceAreas = () => (
  <section className="service-areas-section">
    <span className="service-areas-kicker">Where We Operate</span>
    <h2>Car Rental Across Kolhapur & Nearby Towns</h2>
    <p>
      Besides our Kolhapur head office and Kagal branch, Vatvruksh Tours and Travels regularly serves
      local and outstation car rental bookings in Sangli, Miraj, Ichalkaranji, Jaysingpur and Nippani —
      with professional drivers and transparent pricing on every route.
    </p>
    <div className="service-areas-links">
      <Link to="/" className="service-area-chip">Kolhapur</Link>
      {locations.map((loc) => (
        <Link key={loc.slug} to={`/car-rental-${loc.slug}`} className="service-area-chip">
          {loc.city}
        </Link>
      ))}
    </div>
  </section>
);

export default ServiceAreas;
