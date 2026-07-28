import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './NotFound.css';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="not-found-section">
      <span className="not-found-code">404</span>
      <h1>{t('notfound.heading')}</h1>
      <p>{t('notfound.subtitle')}</p>
      <Link to="/" className="not-found-back">{t('notfound.backHome')}</Link>
    </section>
  );
};

export default NotFound;
