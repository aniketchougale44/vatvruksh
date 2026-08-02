import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingContact from './components/FloatingContact';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Company from './components/Company';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import LocationPage from './components/LocationPage';
import { LanguageProvider } from './i18n/LanguageContext';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { useCanonical } from './hooks/useCanonical';
import './App.css';

function Home() {
  useDocumentMeta(
    'Car Rental in Kolhapur & Nearby Areas | Vatvruksh Tours and Travels',
    'Premium car rental service in Kolhapur, Kagal, Sangli, Miraj, Ichalkaranji, Jaysingpur and Nippani with professional drivers. Best rates for local and outstation trips.'
  );
  useCanonical('/');
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <Company />
      <ServiceAreas />
      <Contact />
    </>
  );
}

function CarsPage() {
  useDocumentMeta(
    'Our Fleet - Cars for Rent in Kolhapur | Vatvruksh Tours and Travels',
    'Browse our fleet of well-maintained cars available for rent in Kolhapur, including sedans and SUVs for local and outstation trips with professional drivers.'
  );
  useCanonical('/cars');
  return (
    <>
      <h1 className="sr-only">Car Rental Fleet in Kolhapur — Sedans, SUVs &amp; Tempo Travellers</h1>
      <Fleet />
    </>
  );
}

function ContactPage() {
  useDocumentMeta(
    'Contact Us | Vatvruksh Tours and Travels, Kolhapur',
    'Get in touch with Vatvruksh Tours and Travels for car rental bookings in Kolhapur and Kagal. Call, WhatsApp, or visit us for the best rates on local and outstation trips.'
  );
  useCanonical('/contact');
  return (
    <>
      <h1 className="sr-only">Contact Vatvruksh Tours and Travels — Car Rental in Kolhapur</h1>
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/car-rental-:slug" element={<LocationPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
