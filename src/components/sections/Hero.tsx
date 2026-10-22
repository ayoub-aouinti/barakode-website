import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaArrowRight, FaPlay, FaMobileAlt } from 'react-icons/fa';
import './Hero.css';

const PHARMASYNC_DEMO_URL = 'https://pharmasync.barakode.org/';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const Hero = () => {
  const { t } = useTranslation();
  const pills = t('hero.pills', { returnObjects: true }) as string[];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-layout">
        <div className="hero-content">
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge-dot"></span>
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t('hero.title')}
            <br />
            <span className="gradient-text">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero-pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {pills.map((pill) => (
              <span key={pill} className="hero-pill">{pill}</span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              <FaRocket />
              {t('hero.cta')}
            </button>
            <button className="btn btn-ghost" onClick={() => scrollToSection('products')}>
              {t('hero.ctaSecondary')}
              <FaArrowRight className="arrow-dir" />
            </button>
            <a
              className="btn btn-ghost"
              href={PHARMASYNC_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              {t('hero.demo')}
            </a>
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
              <h3><CountUp to={4} suffix="+" /></h3>
              <p>{t('about.stats.expertise')}</p>
            </div>
            <div className="stat">
              <h3><CountUp to={100} suffix="%" /></h3>
              <p>{t('about.stats.commitment')}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="hero-visual-label">{t('hero.platforms')}</p>
          <div className="hero-stack">
            <div className="hero-shot shot-main">
              <div className="shot-bar"><i></i><i></i><i></i><span>pharmasync.barakode.org</span></div>
              <img src="/projects/pharmasync-kpi.png" alt="PharmaSync" loading="eager" />
            </div>
            <div className="hero-shot shot-secondary">
              <div className="shot-bar"><i></i><i></i><i></i><span>badgi.net</span></div>
              <img src="/projects/badgi-net-home.png" alt="Badgi.net" />
            </div>
            <div className="hero-phone">
              <img src="/projects/pharmasync-mobile.png" alt="PharmaSync mobile" />
            </div>
            <span className="hero-chip chip-mobile"><FaMobileAlt /> iOS · Android</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll" aria-hidden="true"><span></span></div>
    </section>
  );
};

export default Hero;
