import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="BARAKODE" />
            <span>BARAKODE</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection('hero')}>{t('nav.home')}</a>
            <a onClick={() => scrollToSection('services')}>{t('nav.services')}</a>
            <a onClick={() => scrollToSection('products')}>{t('nav.products')}</a>
            <a onClick={() => scrollToSection('about')}>{t('nav.about')}</a>
            <a onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a>
          </nav>

          <div className="header-actions">
            <div className="language-selector">
              <FaGlobe />
              <select 
                value={i18n.language} 
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="ar">عر</option>
              </select>
            </div>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
