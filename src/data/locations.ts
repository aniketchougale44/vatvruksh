export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  distanceFromKolhapur: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  about: string;
  highlights: string[];
  faqs: FAQ[];
}

export const locations: LocationData[] = [
  {
    slug: 'kagal',
    city: 'Kagal',
    state: 'Maharashtra',
    distanceFromKolhapur: '18 km',
    metaTitle: 'Car Rental in Kagal | Vatvruksh Tours and Travels',
    metaDescription:
      'Book reliable car rental in Kagal with professional drivers. Sedans, SUVs and tempo travellers for MIDC/Five Star industrial estate visits, local trips and outstation travel. Local office in Kagal.',
    tagline: 'Car rental in Kagal with drivers who know the MIDC and Five Star industrial estate routes.',
    about:
      "Vatvruksh Tours and Travels runs a dedicated office in Kagal, about 18 km from our Kolhapur headquarters, so we can offer quick pickup for the Kagal Five Star MIDC industrial estate, local factory visits, and outstation trips without the wait times of a Kolhapur-only operator.",
    highlights: [
      'Same-day pickup for Kagal MIDC / Five Star industrial estate visits',
      'Corporate and business travel bookings for companies based in Kagal',
      'Outstation cabs from Kagal to Kolhapur, Pune, Mumbai, Goa and Belgaum',
      'Local Kagal office — no need to wait for a car to arrive from Kolhapur city',
    ],
    faqs: [
      {
        question: 'Do you have a car rental office in Kagal itself?',
        answer:
          'Yes, we have a dedicated Vatvruksh office in Kagal (beside Atish Bakery, Jaysingrao Park Garden, Main Road), in addition to our Kolhapur head office, so pickups in Kagal do not depend on a car travelling in from Kolhapur.',
      },
      {
        question: 'Can you arrange a car for a factory visit at Kagal MIDC?',
        answer:
          'Yes. We regularly handle corporate bookings for companies in the Kagal Five Star MIDC industrial estate, including recurring pickup-drop for staff and visiting teams.',
      },
      {
        question: 'How far is Kagal from your Kolhapur office and does that add to the fare?',
        answer:
          "Kagal is about 18 km from our Kolhapur head office. Since we also operate directly out of Kagal, most local Kagal bookings don't carry an extra fetch charge — ask us when you book.",
      },
    ],
  },
  {
    slug: 'nippani',
    city: 'Nippani',
    state: 'Karnataka',
    distanceFromKolhapur: '40 km',
    metaTitle: 'Car Rental in Nippani | Vatvruksh Tours and Travels',
    metaDescription:
      'Car rental service in Nippani with professional drivers for local travel and outstation trips to Kolhapur, Belgaum, Sangli and beyond. Sedans, SUVs and tempo travellers available.',
    tagline: 'Car rental in Nippani for cross-border trips between Karnataka and Maharashtra.',
    about:
      'Nippani sits right on the Maharashtra-Karnataka border along NH48, about 40 km from our Kolhapur base. We serve Nippani frequently for trips that cross between the two states — to Kolhapur, Belgaum, Sangli, and onward outstation routes — with drivers familiar with both the NH48 corridor and local Nippani roads.',
    highlights: [
      'Cross-border trips between Nippani (Karnataka) and Kolhapur/Sangli (Maharashtra)',
      'One-way and round-trip outstation cabs on the NH48 corridor via Belgaum',
      'Sedans, SUVs and larger MUVs for family and group travel',
      'Advance booking by phone or WhatsApp — no need to visit an office',
    ],
    faqs: [
      {
        question: 'Do you serve pickups in Nippani even though it is in a different state from your office?',
        answer:
          'Yes, Nippani is only about 40 km from our Kolhapur office and sits directly on NH48, so we regularly send cars there for both local Nippani trips and outstation journeys.',
      },
      {
        question: 'Can I book a one-way trip from Nippani to Kolhapur or Belgaum?',
        answer:
          'Yes, one-way drop trips from Nippani to Kolhapur, Belgaum, Sangli and other nearby cities are one of our most common bookings on this route.',
      },
      {
        question: 'What vehicles are available for a Nippani pickup?',
        answer:
          'Sedans, MUVs and SUVs from our fleet can be arranged for Nippani, depending on group size — including the Innova Crysta, Innova Hycross and Force Urbania for larger groups.',
      },
    ],
  },
  {
    slug: 'sangli',
    city: 'Sangli',
    state: 'Maharashtra',
    distanceFromKolhapur: '55 km',
    metaTitle: 'Car Rental in Sangli | Vatvruksh Tours and Travels',
    metaDescription:
      'Reliable car rental in Sangli with professional drivers. Local and outstation cabs for business, sightseeing and family trips to Kolhapur, Miraj, Pune and Mumbai.',
    tagline: 'Car rental in Sangli for business trips to the turmeric market and beyond.',
    about:
      "Sangli, on the banks of the Krishna river and known nationally for its turmeric trade, is about 55 km from our Kolhapur office. We handle regular bookings here for traders and businesses visiting the Sangli APMC market as well as families travelling onward to Kolhapur, Miraj, Pune and Mumbai.",
    highlights: [
      'Pickup-drop for Sangli APMC turmeric market visits and business trips',
      'Outstation cabs from Sangli to Kolhapur, Miraj, Pune and Mumbai',
      'Family sedans and 7-seater SUVs for sightseeing and functions',
      'Professional, uniformed drivers with local route knowledge',
    ],
    faqs: [
      {
        question: 'Do you provide cars for business trips to the Sangli market?',
        answer:
          'Yes, we regularly arrange pickup-drop and full-day car rental for traders and businesses visiting the Sangli APMC turmeric market and other commercial areas in the city.',
      },
      {
        question: 'How far is Sangli from Kolhapur and can I book a one-way trip?',
        answer:
          'Sangli is roughly 55 km from our Kolhapur office. One-way trips between Sangli and Kolhapur, as well as onward to Pune or Mumbai, can be booked directly by phone or WhatsApp.',
      },
      {
        question: 'What car options do you have for a family trip from Sangli?',
        answer:
          'We offer sedans like the Maruti Suzuki Dzire and Hyundai Aura for smaller groups, and 7-seater SUVs like the Innova Crysta, Innova Hycross and Kia Carens for larger families.',
      },
    ],
  },
  {
    slug: 'miraj',
    city: 'Miraj',
    state: 'Maharashtra',
    distanceFromKolhapur: '60 km',
    metaTitle: 'Car Rental in Miraj | Vatvruksh Tours and Travels',
    metaDescription:
      'Car rental in Miraj with professional drivers, including trips to Miraj Medical College and Civil Hospital, plus outstation cabs to Kolhapur, Sangli and Pune.',
    tagline: 'Car rental in Miraj for hospital visits, family trips and outstation travel.',
    about:
      'Miraj, twinned with Sangli and well known for Miraj Medical College and Civil Hospital as well as its railway junction, is about 60 km from our Kolhapur office. We frequently serve patients and families travelling for medical visits here, along with outstation and sightseeing trips.',
    highlights: [
      'Pickup-drop for Miraj Medical College and Civil Hospital visits',
      'Railway station transfers at Miraj Junction',
      'Outstation cabs from Miraj to Kolhapur, Sangli and Pune',
      'Comfortable, sanitized cars with courteous drivers for patients and families',
    ],
    faqs: [
      {
        question: 'Can you arrange a car for a hospital visit in Miraj?',
        answer:
          'Yes, pickup and drop for Miraj Medical College and Civil Hospital is one of our regular bookings, and we can accommodate patient comfort needs on request.',
      },
      {
        question: 'Do you offer railway station transfers at Miraj Junction?',
        answer:
          'Yes, we provide pickup and drop service at Miraj Junction for onward travel to Kolhapur, Sangli, and other nearby towns.',
      },
      {
        question: 'How do I book a one-way cab from Miraj to Kolhapur?',
        answer:
          'You can call or WhatsApp us directly with your travel date and time, and we will confirm a one-way or round-trip cab from Miraj to Kolhapur or onward destinations.',
      },
    ],
  },
  {
    slug: 'jaysingpur',
    city: 'Jaysingpur',
    state: 'Maharashtra',
    distanceFromKolhapur: '45 km',
    metaTitle: 'Car Rental in Jaysingpur | Vatvruksh Tours and Travels',
    metaDescription:
      'Car rental service in Jaysingpur with professional drivers for local travel, business trips and outstation cabs to Kolhapur, Sangli, Ichalkaranji and beyond.',
    tagline: 'Car rental in Jaysingpur for business, powerloom trade trips and family travel.',
    about:
      'Jaysingpur, a busy powerloom and market town in Shirol taluka near the Krishna river, is about 45 km from our Kolhapur office. We serve local businesses here along with families needing outstation cabs to Kolhapur, Sangli, Ichalkaranji and further afield.',
    highlights: [
      'Pickup-drop for business and powerloom trade visits in Jaysingpur',
      'Outstation cabs from Jaysingpur to Kolhapur, Sangli and Ichalkaranji',
      'Sedans and SUVs for family functions and sightseeing trips',
      'Flexible local and full-day rental packages',
    ],
    faqs: [
      {
        question: 'Do you cover local trips within Jaysingpur as well as outstation travel?',
        answer:
          'Yes, we handle both — short local trips around Jaysingpur and Shirol taluka, as well as longer outstation journeys to Kolhapur, Sangli, Ichalkaranji and beyond.',
      },
      {
        question: 'Can I book a car in Jaysingpur for a family function?',
        answer:
          'Yes, we regularly provide sedans and SUVs for weddings, family functions and group travel in and around Jaysingpur.',
      },
      {
        question: 'How do I get pricing for a Jaysingpur booking?',
        answer:
          'Call or WhatsApp us with your pickup point, destination and date, and we will share transparent pricing with no hidden charges.',
      },
    ],
  },
  {
    slug: 'ichalkaranji',
    city: 'Ichalkaranji',
    state: 'Maharashtra',
    distanceFromKolhapur: '25 km',
    metaTitle: 'Car Rental in Ichalkaranji | Vatvruksh Tours and Travels',
    metaDescription:
      'Book car rental in Ichalkaranji with professional drivers for local travel, textile business trips and outstation cabs to Kolhapur, Sangli, Pune and Mumbai.',
    tagline: 'Car rental in Ichalkaranji, the textile hub, for business and family travel.',
    about:
      'Ichalkaranji, often called the "Manchester of Maharashtra" for its powerloom and textile industry, is about 25 km from our Kolhapur office — close enough for quick pickup while still needing a dedicated, reliable operator for daily business travel.',
    highlights: [
      'Pickup-drop for textile mill and powerloom business visits in Ichalkaranji',
      'Quick response times given the short 25 km distance from Kolhapur',
      'Outstation cabs from Ichalkaranji to Kolhapur, Sangli, Pune and Mumbai',
      'Airport and railway transfers with professional, uniformed drivers',
    ],
    faqs: [
      {
        question: 'How quickly can you send a car to Ichalkaranji?',
        answer:
          "Since Ichalkaranji is only about 25 km from our Kolhapur office, we can usually arrange a car quickly for both scheduled and same-day bookings.",
      },
      {
        question: 'Do you handle business travel for textile mills in Ichalkaranji?',
        answer:
          'Yes, we regularly work with businesses in the Ichalkaranji textile and powerloom sector for both local visits and outstation client travel.',
      },
      {
        question: 'What is the fare for an outstation trip from Ichalkaranji to Pune or Mumbai?',
        answer:
          'Fares depend on the vehicle and trip type (one-way or round trip). Call or WhatsApp us with your dates and we will share a transparent quote.',
      },
    ],
  },
];

export const getLocationBySlug = (slug: string) => locations.find((loc) => loc.slug === slug);
