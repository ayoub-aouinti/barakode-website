import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { t } = useTranslation();

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
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-description">{t('about.description')}</p>

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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
