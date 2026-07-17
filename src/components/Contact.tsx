import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Book your ride today or ask for a quote.</p>
          <div className="info-item">
            <span className="icon">📍</span>
            <p>Vatvruksh Tours and Travels, Kolhapur, Maharashtra</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>+91 00000 00000</p>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <p>info@vatvruksh.com</p>
          </div>
          <div className="whatsapp-card">
            <h3>Quick Booking</h3>
            <p>Chat with us on WhatsApp for instant booking.</p>
            <a href="https://wa.me/910000000000" className="btn-whatsapp-large">Chat on WhatsApp</a>
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
