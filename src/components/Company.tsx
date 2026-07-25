import { useLanguage } from '../i18n/LanguageContext';
import './Company.css';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v-3.5L6 7h12l2 5.5V16" />
    <path d="M3 16h18v3a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const UniformIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4 4 7l2 3 3-1.5V20h6V8.5L18 10l2-3-5-3-2 2h-2Z" />
  </svg>
);

const WaterDropIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3s6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 6-11 6-11Z" />
  </svg>
);

const SteeringWheelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
  </svg>
);

const stats = [
  { icon: <CalendarIcon />, value: '25+', labelKey: 'company.stat.years' },
  { icon: <CarIcon />, value: '6', labelKey: 'company.stat.cars' },
  { icon: <MapPinIcon />, value: '15+', labelKey: 'company.stat.cities' },
];

const highlights = [
  { icon: <ShieldCheckIcon />, labelKey: 'company.highlight.zeroComplaints' },
  { icon: <UniformIcon />, labelKey: 'company.highlight.uniform' },
  { icon: <WaterDropIcon />, labelKey: 'company.highlight.water' },
  { icon: <SteeringWheelIcon />, labelKey: 'company.highlight.experienced' },
];

const Company = () => {
  const { t } = useLanguage();

  return (
    <section className="company-section">
      <div className="company-card">
        <div className="company-badge-col">
          <div className="company-logo-ring">
            <img src="/vatvruksh_logo_circle.png" alt="Vatvruksh Tours and Travels logo" className="company-logo" />
          </div>
          <span className="company-established">{t('company.established')}</span>
        </div>

        <div className="company-info-col">
          <span className="company-kicker">{t('company.kicker')}</span>
          <h2>{t('company.title')}</h2>
          <p className="company-description">{t('company.description')}</p>

          <div className="company-stats">
            {stats.map((s) => (
              <div className="company-stat" key={s.labelKey}>
                <span className="company-stat-icon">{s.icon}</span>
                <div>
                  <strong>{s.value}</strong>
                  <span>{t(s.labelKey)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="company-highlights">
            {highlights.map((h) => (
              <div className="company-highlight" key={h.labelKey}>
                <span className="company-highlight-icon">{h.icon}</span>
                <span>{t(h.labelKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
