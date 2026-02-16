import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              {t('hero.title')}
              <br />
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              <FaRocket />
              {t('hero.cta')}
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('services')}
            >
              {t('hero.ctaSecondary')}
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="stat">
              <h3>2025</h3>
              <p>{t('about.stats.founded')}</p>
            </div>
            <div className="stat">
              <h3>4+</h3>
              <p>{t('about.stats.expertise')}</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>{t('about.stats.commitment')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
