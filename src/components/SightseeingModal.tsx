import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './SightseeingModal.css';

interface SightseeingModalProps {
  onClose: () => void;
}

const spots = [
  {
    name: 'Jyotiba Temple (Wadi Ratnagiri)',
    slug: 'jyotiba-temple',
    blurb: 'Old hilltop temple, famous for its big yearly fair.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyJyoti" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff59d" />
            <stop offset="100%" stopColor="#ffe082" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyJyoti)" />
        <polygon points="0,240 200,140 400,240 400,300 0,300" fill="#a1887f" />
        <g fill="#ef6c00">
          <rect x="160" y="160" width="80" height="80" />
          <polygon points="200,110 240,160 160,160" />
        </g>
        <g fill="#fff3e0">
          <rect x="185" y="190" width="30" height="50" />
        </g>
        <circle cx="200" cy="100" r="8" fill="#fdd835" />
        <line x1="200" y1="108" x2="200" y2="120" stroke="#fdd835" strokeWidth="3" />
        <g stroke="#ef6c00" strokeWidth="3">
          <line x1="140" y1="240" x2="140" y2="200" />
          <line x1="260" y1="240" x2="260" y2="200" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Panhala Fort',
    slug: 'panhala-fort',
    blurb: 'One of the largest hill forts in India, full of Maratha history.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyFort" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bbdefb" />
            <stop offset="100%" stopColor="#e3f2fd" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyFort)" />
        <polygon points="0,220 120,120 220,210 300,110 400,200 400,300 0,300" fill="#81c784" />
        <polygon points="0,240 150,160 260,230 400,220 400,300 0,300" fill="#66bb6a" />
        <g fill="#78909c">
          <rect x="150" y="90" width="18" height="60" />
          <rect x="185" y="70" width="18" height="80" />
          <rect x="220" y="90" width="18" height="60" />
          <rect x="255" y="60" width="18" height="90" />
          <rect x="140" y="150" width="150" height="20" />
        </g>
        <g fill="#607d8b">
          <polygon points="159,90 168,78 177,90" />
          <polygon points="194,70 203,58 212,70" />
          <polygon points="229,90 238,78 247,90" />
          <polygon points="264,60 273,48 282,60" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Mahalakshmi Temple (Ambabai Temple)',
    slug: 'mahalakshmi-temple',
    blurb: 'Famous old temple, the heart of Kolhapur since the 8th century.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyTemple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe0b2" />
            <stop offset="100%" stopColor="#fff3e0" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyTemple)" />
        <circle cx="330" cy="60" r="34" fill="#f9a825" opacity="0.85" />
        <rect x="0" y="230" width="400" height="70" fill="#c8a27a" />
        <g fill="#8d6e63">
          <rect x="120" y="150" width="160" height="90" rx="4" />
          <rect x="150" y="100" width="100" height="60" />
          <polygon points="200,40 235,100 165,100" />
          <rect x="185" y="60" width="30" height="40" fill="#6d4c41" />
        </g>
        <g fill="#f9a825">
          <polygon points="200,20 208,40 192,40" />
          <rect x="196" y="18" width="8" height="10" />
        </g>
        <g stroke="#6d4c41" strokeWidth="3">
          <line x1="140" y1="160" x2="140" y2="230" />
          <line x1="170" y1="160" x2="170" y2="230" />
          <line x1="230" y1="160" x2="230" y2="230" />
          <line x1="260" y1="160" x2="260" y2="230" />
        </g>
        <rect x="180" y="200" width="40" height="40" fill="#5d4037" />
      </svg>
    ),
  },
  {
    name: 'Balumama Temple (Adamapur)',
    slug: 'balumama-temple',
    blurb: 'A loved temple in open farmland, for the folk saint Balumama.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyBalu" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8e6c9" />
            <stop offset="100%" stopColor="#f1f8e9" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyBalu)" />
        <rect x="0" y="210" width="400" height="90" fill="#aed581" />
        <g fill="#fdd835">
          <circle cx="60" cy="70" r="30" />
        </g>
        <g fill="#e0e0e0" stroke="#bdbdbd" strokeWidth="2">
          <circle cx="120" cy="225" r="16" />
          <circle cx="150" cy="230" r="14" />
          <circle cx="90" cy="232" r="13" />
        </g>
        <g fill="#f57f17">
          <rect x="180" y="150" width="70" height="70" />
          <polygon points="215,110 250,150 180,150" />
        </g>
        <rect x="205" y="175" width="20" height="45" fill="#fff3e0" />
        <circle cx="215" cy="100" r="6" fill="#fdd835" />
        <line x1="215" y1="106" x2="215" y2="118" stroke="#fdd835" strokeWidth="2" />
        <g stroke="#8d6e63" strokeWidth="3">
          <line x1="290" y1="220" x2="290" y2="170" />
          <line x1="320" y1="220" x2="320" y2="180" />
        </g>
        <ellipse cx="290" cy="165" rx="18" ry="10" fill="#66bb6a" />
        <ellipse cx="320" cy="175" rx="14" ry="8" fill="#66bb6a" />
      </svg>
    ),
  },
  {
    name: 'Narsobawadi (Narsobachi Wadi)',
    slug: 'narsobawadi',
    blurb: 'Holy riverside town where two rivers meet, always full of pilgrims.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyWadi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe0b2" />
            <stop offset="100%" stopColor="#fff8e1" />
          </linearGradient>
          <linearGradient id="waterWadi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4dd0e1" />
            <stop offset="100%" stopColor="#00838f" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyWadi)" />
        <circle cx="330" cy="55" r="30" fill="#ffb300" />
        <rect x="0" y="190" width="400" height="110" fill="url(#waterWadi)" />
        <path d="M0 190 Q 100 175 200 190 T 400 190 V300 H0 Z" fill="#00acc1" opacity="0.5" />
        <g fill="#8d6e63">
          <rect x="130" y="130" width="140" height="60" />
          <polygon points="200,90 240,130 160,130" />
          <rect x="175" y="150" width="24" height="40" fill="#5d4037" />
          <rect x="201" y="150" width="24" height="40" fill="#5d4037" />
        </g>
        <circle cx="200" cy="78" r="6" fill="#ffb300" />
        <line x1="200" y1="84" x2="200" y2="94" stroke="#ffb300" strokeWidth="2" />
        <path d="M40 210 q20 -8 40 0 t40 0" stroke="#e0f7fa" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M280 225 q20 -8 40 0 t40 0" stroke="#e0f7fa" strokeWidth="3" fill="none" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'Khidrapur (Kopeshwar Temple)',
    slug: 'khidrapur-kopeshwar',
    blurb: 'A beautifully carved old stone temple by the Krishna river.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyKhid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cfd8dc" />
            <stop offset="100%" stopColor="#eceff1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyKhid)" />
        <rect x="0" y="240" width="400" height="60" fill="#b0bec5" />
        <g fill="#78909c">
          <rect x="110" y="160" width="180" height="80" />
          <polygon points="200,100 250,160 150,160" />
          <rect x="185" y="70" width="30" height="40" />
          <polygon points="200,55 218,70 182,70" />
        </g>
        <g fill="#607d8b">
          <rect x="130" y="180" width="16" height="60" />
          <rect x="160" y="180" width="16" height="60" />
          <rect x="224" y="180" width="16" height="60" />
          <rect x="254" y="180" width="16" height="60" />
          <circle cx="200" cy="130" r="10" />
        </g>
        <g fill="#90a4ae">
          <polygon points="139,180 148,168 157,180" />
          <polygon points="233,180 242,168 251,180" />
        </g>
      </svg>
    ),
  },
  {
    name: 'New Palace (Chhatrapati Shahu Museum)',
    slug: 'new-palace',
    blurb: 'Royal palace with old artefacts and weapons on display.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyPalace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d1c4e9" />
            <stop offset="100%" stopColor="#ede7f6" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyPalace)" />
        <rect x="0" y="230" width="400" height="70" fill="#b39ddb" opacity="0.5" />
        <g fill="#7e57c2">
          <rect x="90" y="150" width="220" height="90" />
          <rect x="120" y="110" width="50" height="40" />
          <rect x="230" y="110" width="50" height="40" />
          <rect x="175" y="90" width="50" height="60" />
        </g>
        <g fill="#5e35b1">
          <circle cx="145" cy="105" r="10" />
          <circle cx="255" cy="105" r="10" />
          <circle cx="200" cy="85" r="12" />
        </g>
        <g fill="#ede7f6">
          <rect x="105" y="180" width="24" height="34" />
          <rect x="150" y="180" width="24" height="34" />
          <rect x="226" y="180" width="24" height="34" />
          <rect x="271" y="180" width="24" height="34" />
          <rect x="188" y="190" width="24" height="50" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Rankala Lake',
    slug: 'rankala-lake',
    blurb: 'Pretty lakeside path, great for an evening walk.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyLake" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffccbc" />
            <stop offset="100%" stopColor="#fff8e1" />
          </linearGradient>
          <linearGradient id="waterLake" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4fc3f7" />
            <stop offset="100%" stopColor="#0288d1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyLake)" />
        <circle cx="200" cy="110" r="36" fill="#ffca28" />
        <rect x="0" y="170" width="400" height="130" fill="url(#waterLake)" />
        <path d="M0 170 Q 100 155 200 170 T 400 170 V300 H0 Z" fill="#0288d1" opacity="0.6" />
        <path d="M60 220 q20 -10 40 0 t40 0" stroke="#e1f5fe" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M220 245 q20 -10 40 0 t40 0" stroke="#e1f5fe" strokeWidth="3" fill="none" opacity="0.7" />
        <g fill="#2e7d32">
          <ellipse cx="60" cy="165" rx="26" ry="14" />
          <ellipse cx="340" cy="160" rx="30" ry="16" />
        </g>
        <path d="M170 180 L 200 130 L 230 180 Z" fill="#795548" />
        <rect x="196" y="180" width="8" height="18" fill="#5d4037" />
      </svg>
    ),
  },
  {
    name: 'Kaneri Math (Siddhagiri Gramjivan Museum)',
    slug: 'kaneri-math',
    blurb: 'Old monastery with a big open-air museum showing village life.',
    illustration: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyKaneri" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dcedc8" />
            <stop offset="100%" stopColor="#f9fbe7" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#skyKaneri)" />
        <polygon points="0,200 400,200 400,300 0,300" fill="#9ccc65" />
        <g fill="#a1887f">
          <polygon points="90,180 140,140 190,180" />
          <rect x="100" y="180" width="80" height="50" />
        </g>
        <g fill="#8d6e63">
          <polygon points="210,190 250,155 290,190" />
          <rect x="216" y="190" width="68" height="40" />
        </g>
        <g fill="#795548">
          <rect x="130" y="200" width="20" height="30" />
          <rect x="240" y="205" width="18" height="25" />
        </g>
        <circle cx="330" cy="60" r="26" fill="#ffca28" />
        <g fill="#558b2f">
          <ellipse cx="60" cy="195" rx="24" ry="30" />
          <ellipse cx="330" cy="185" rx="20" ry="26" />
        </g>
      </svg>
    ),
  },
];

interface SpotMediaProps {
  slug: string;
  name: string;
  illustration: JSX.Element;
}

const SpotMedia = ({ slug, name, illustration }: SpotMediaProps) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) return illustration;

  return (
    <img
      src={`/sightseeing/${slug}.jpg`}
      alt={name}
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
};

const SightseeingModal = ({ onClose }: SightseeingModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="sightseeing-overlay" onClick={onClose}>
      <div className="sightseeing-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sightseeing-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h3>{t('sightseeing.title')}</h3>
        <p className="sightseeing-subtitle">{t('sightseeing.subtitle')}</p>
        <div className="sightseeing-grid">
          {spots.map((spot) => (
            <div className="sightseeing-card" key={spot.name}>
              <div className="sightseeing-photo">
                <SpotMedia slug={spot.slug} name={spot.name} illustration={spot.illustration} />
              </div>
              <h4>{spot.name}</h4>
              <p>{spot.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SightseeingModal;
