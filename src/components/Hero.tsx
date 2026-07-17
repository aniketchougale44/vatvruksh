import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Premium Car Rent in Kolhapur</h1>
        <p>Safe, Reliable & Affordable Travel with Professional Drivers</p>
        <div className="hero-badges">
          <span className="badge">With Driver Only</span>
          <span className="badge">Sanitized Cars</span>
          <span className="badge">24/7 Support</span>
        </div>
        <div className="hero-actions">
          <a href="#booking" className="btn-primary">Book Your Ride</a>
          <a href="https://wa.me/910000000000" className="btn-whatsapp">WhatsApp Inquiry</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
