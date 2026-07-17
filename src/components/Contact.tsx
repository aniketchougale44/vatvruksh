import './Contact.css';

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const LocationIcon = () => (
  <svg {...svgProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg {...svgProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z" />
  </svg>
);

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-lead">Book your ride today or ask for a quote.</p>

          <div className="info-list">
            <a href="https://maps.google.com/?q=Kolhapur" className="info-item">
              <span className="icon-badge"><LocationIcon /></span>
              <span>Vatvruksh Tours and Travels, Kolhapur, Maharashtra</span>
            </a>
            <a href="tel:+910000000000" className="info-item">
              <span className="icon-badge"><PhoneIcon /></span>
              <span>+91 00000 00000</span>
            </a>
            <a href="mailto:info@vatvruksh.com" className="info-item">
              <span className="icon-badge"><MailIcon /></span>
              <span>info@vatvruksh.com</span>
            </a>
          </div>

          <div className="whatsapp-card">
            <h3>Quick Booking</h3>
            <p>Chat with us on WhatsApp for instant booking.</p>
            <a href="https://wa.me/910000000000" className="btn-whatsapp-large">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label>Trip Details</label>
              <textarea placeholder="e.g. Kolhapur to Pune, 15th July"></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
