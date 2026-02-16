import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaBullhorn, FaChartLine } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <FaCalendarAlt />, text: t('products.badgi.features.management') },
    { icon: <FaUsers />, text: t('products.badgi.features.community') },
    { icon: <FaBullhorn />, text: t('products.badgi.features.promotion') },
    { icon: <FaChartLine />, text: t('products.badgi.features.analytics') }
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('products.title')}</h2>
          <p>{t('products.subtitle')}</p>
        </motion.div>

        <div className="product-showcase">
          <motion.div
            className="product-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="product-badge">Featured Product</div>
            <h3>{t('products.badgi.title')}</h3>
            <p className="product-description">{t('products.badgi.description')}</p>

            <div className="product-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://badgi.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('products.badgi.cta')}
              <FaExternalLinkAlt />
            </a>
          </motion.div>

          <motion.div
            className="product-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url">
                  <span>badgi.net</span>
                </div>
              </div>
              <div className="product-screenshot">
                <img 
                  src="/badgi-screenshot.png" 
                  alt="Badgi.net Platform Screenshot" 
                  className="screenshot-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
