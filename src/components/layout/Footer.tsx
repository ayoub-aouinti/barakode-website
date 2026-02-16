import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="BARAKODE" />
              <span>BARAKODE</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a onClick={() => scrollToSection('hero')}>{t('nav.home')}</a></li>
              <li><a onClick={() => scrollToSection('services')}>{t('nav.services')}</a></li>
              <li><a onClick={() => scrollToSection('products')}>{t('nav.products')}</a></li>
              <li><a onClick={() => scrollToSection('about')}>{t('nav.about')}</a></li>
              <li><a onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><a>{t('services.web.title')}</a></li>
              <li><a>{t('services.mobile.title')}</a></li>
              <li><a>{t('services.design.title')}</a></li>
              <li><a>{t('services.ai.title')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('contact.info.address')}</h4>
            <p>{t('about.address')}</p>
            <p>Sousse, Tunisia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {t('footer.copyright')}
          </p>
          <p>
            {t('footer.madeWith')} <FaHeart className="heart" /> {t('footer.in')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
