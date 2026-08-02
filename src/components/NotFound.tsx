import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './NotFound.css';

const NotFound = () => {
  const { t } = useLanguage();
  useDocumentMeta(
    'Page Not Found | Vatvruksh Tours and Travels',
    'The page you are looking for could not be found. Return to Vatvruksh Tours and Travels for car rental services in Kolhapur.'
  );

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
