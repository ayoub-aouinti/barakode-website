import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaBrain } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaCode />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      color: '#00D4FF'
    },
    {
      icon: <FaMobileAlt />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      color: '#00FF88'
    },
    {
      icon: <FaPalette />,
      title: t('services.design.title'),
      description: t('services.design.description'),
      color: '#FF6B9D'
    },
    {
      icon: <FaBrain />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      color: '#FFB800'
    }
  ];

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
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
