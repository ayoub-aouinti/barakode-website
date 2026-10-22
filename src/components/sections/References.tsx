import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFlask, FaCalendarCheck, FaStore, FaIndustry } from 'react-icons/fa';
import './References.css';

interface Stat { value: string; label: string }

const SECTOR_ICONS = [<FaFlask />, <FaCalendarCheck />, <FaStore />, <FaIndustry />];

const References = () => {
  const { t } = useTranslation();
  const stats = t('references.stats', { returnObjects: true }) as Stat[];
  const sectors = t('references.sectors', { returnObjects: true }) as string[];
  const specialties = t('references.specialties', { returnObjects: true }) as string[];
  // The specialties list is doubled so the marquee loops seamlessly.
  const marquee = [...specialties, ...specialties];

  return (
    <section id="references" className="section references">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">BARAKODE</span>
          <h2>{t('references.title')}</h2>
          <p>{t('references.subtitle')}</p>
        </motion.div>

        <div className="ref-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="ref-stat"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <h3 className="ref-subtitle">{t('references.sectorsTitle')}</h3>
        <div className="ref-sectors">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector}
              className="ref-sector"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="ref-sector-icon">{SECTOR_ICONS[i]}</span>
              <p>{sector}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="ref-subtitle">{t('references.specialtiesTitle')}</h3>
        <div className="ref-marquee" aria-label={t('references.specialtiesTitle')}>
          <div className="ref-marquee-track">
            {marquee.map((item, i) => (
              <span key={i} className="ref-tag">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
