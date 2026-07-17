import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Vatvruksh Tours and Travels</h3>
          <p>Your reliable travel partner in Kolhapur. We specialize in providing premium car rental services with professional drivers.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#fleet">Our Fleet</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Kolhapur, Maharashtra</p>
          <p>📞 +91 00000 00000</p>
          <p>📧 info@vatvruksh.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vatvruksh Tours and Travels. All rights reserved.</p>
        <p>SEO by Gemini CLI</p>
      </div>
    </footer>
  );
};

export default Footer;
