import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaAward, FaCheck } from 'react-icons/fa';
import './About.css';

interface Item { title: string; text: string }
interface TechGroup { label: string; items: string[] }

const About = () => {
  const { t } = useTranslation();
  const values = t('about.values', { returnObjects: true }) as Item[];
  const why = t('about.why', { returnObjects: true }) as Item[];
  const techGroups = t('tech.groups', { returnObjects: true }) as TechGroup[];

  const stats = [
    { icon: <FaCalendarAlt />, value: '2025', label: t('about.stats.founded') },
    { icon: <FaMapMarkerAlt />, value: 'Sousse', label: t('about.stats.location') },
    { icon: <FaBriefcase />, value: '4+', label: t('about.stats.expertise') },
    { icon: <FaAward />, value: '100%', label: t('about.stats.commitment') }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t('nav.about')}</span>
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </motion.div>

        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('about.description')}
        </motion.p>

        <div className="about-values">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="value-check"><FaCheck /></span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="tech-block">
          <div className="tech-intro">
            <h3>{t('tech.title')}</h3>
            <p>{t('tech.subtitle')}</p>
          </div>
          <div className="tech-rows">
            {techGroups.map((group) => (
              <div key={group.label} className="tech-row">
                <span className="tech-label">{group.label}</span>
                <div className="tech-chips">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="why-title">{t('about.whyTitle')}</h3>
        <div className="why-grid">
          {why.map((item, i) => (
            <motion.div
              key={item.title}
              className="why-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="why-icon"><FaCheck /></span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
