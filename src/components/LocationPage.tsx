import { Link, useParams } from 'react-router-dom';
import { PHONE_PRIMARY_TEL, PHONE_PRIMARY_DISPLAY, whatsappLink } from '../constants';
import { getLocationBySlug, locations } from '../data/locations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useCanonical } from '../hooks/useCanonical';
import { useJsonLd } from '../hooks/useJsonLd';
import NotFound from './NotFound';
import './LocationPage.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  useDocumentMeta(
    location?.metaTitle ?? 'Vatvruksh Tours and Travels',
    location?.metaDescription ?? ''
  );

  useCanonical(slug ? `/car-rental-${slug}` : '/');

  useJsonLd(
    `faq-jsonld-${slug ?? 'none'}`,
    location
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: location.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null
  );

  useJsonLd(
    `breadcrumb-jsonld-${slug ?? 'none'}`,
    location
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://vatvrukshcarrental.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: `Car Rental in ${location.city}`,
              item: `https://vatvrukshcarrental.com/car-rental-${location.slug}`,
            },
          ],
        }
      : null
  );

  if (!location) return <NotFound />;

  const { city, state, distanceFromKolhapur, tagline, about, highlights, faqs } = location;
  const otherLocations = locations.filter((loc) => loc.slug !== location.slug);

  return (
    <div className="location-page">
      <section className="location-hero">
        <span className="location-hero-kicker">Serving {city}{state !== 'Maharashtra' ? `, ${state}` : ''}</span>
        <h1>Car Rental in {city}</h1>
        <p className="location-hero-tagline">{tagline}</p>
        <div className="location-hero-actions">
          <a href={PHONE_PRIMARY_TEL} className="btn-primary">Call {PHONE_PRIMARY_DISPLAY}</a>
          <a
            href={whatsappLink(`Hi, I'd like to enquire about car rental in ${city}.`)}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="location-about">
        <p>{about}</p>
        <p className="location-distance">Approx. {distanceFromKolhapur} from our Kolhapur head office.</p>
      </section>

      <section className="location-highlights">
        <h2>What we offer in {city}</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>
              <span className="location-highlight-icon"><CheckIcon /></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="location-fleet-teaser">
        <h2>Our Fleet</h2>
        <p>
          From compact sedans to 7-seater SUVs and the 17-seater Force Urbania, we have a vehicle for every
          group size travelling to or from {city}.
        </p>
        <Link to="/cars" className="btn-primary">View Our Fleet</Link>
      </section>

      <section className="location-faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <details key={faq.question} className="location-faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="location-nearby">
        <h2>Also Serving</h2>
        <div className="location-nearby-links">
          <Link to="/">Kolhapur</Link>
          {otherLocations.map((loc) => (
            <Link key={loc.slug} to={`/car-rental-${loc.slug}`}>
              {loc.city}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
