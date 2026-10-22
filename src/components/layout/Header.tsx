import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Header.css';

const SECTIONS = ['hero', 'services', 'products', 'references', 'about', 'contact'];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const current = SECTIONS.filter((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 120;
      }).pop();
      if (current) setActive(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
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
      <div className="scroll-progress" style={{ width: `${progress}%` }}></div>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="BARAKODE" />
            <span>BARAKODE</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {SECTIONS.map((id) => (
              <a
                key={id}
                className={active === id ? 'active' : ''}
                onClick={() => scrollToSection(id)}
              >
                {t(id === 'hero' ? 'nav.home' : `nav.${id}`)}
              </a>
            ))}
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
