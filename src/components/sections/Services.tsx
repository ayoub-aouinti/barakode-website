import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaBrain, FaCheck } from 'react-icons/fa';
import './Services.css';

const SERVICES = [
  { key: 'web', icon: <FaCode /> },
  { key: 'mobile', icon: <FaMobileAlt /> },
  { key: 'design', icon: <FaPalette /> },
  { key: 'ai', icon: <FaBrain /> },
];

const Services = () => {
  const { t } = useTranslation();

  const spotlight = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t('nav.services')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.key}
              className="service-card"
              onMouseMove={spotlight}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{t(`services.${service.key}.title`)}</h3>
              <p>{t(`services.${service.key}.description`)}</p>
              <ul className="service-points">
                {(t(`services.${service.key}.points`, { returnObjects: true }) as string[]).map((point) => (
                  <li key={point}>
                    <FaCheck />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
