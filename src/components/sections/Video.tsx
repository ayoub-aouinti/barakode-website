import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Video.css';

const Video = () => {
  const { t } = useTranslation();

  return (
    <section id="video" className="section section-dark company-video">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t('video.eyebrow')}</span>
          <h2>{t('video.title')}</h2>
          <p>{t('video.subtitle')}</p>
        </motion.div>

        <motion.div
          className="company-video-player"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <video controls playsInline preload="metadata" aria-label={t('video.title')}>
            <source src="/videos/barakode-presentation.mp4#t=0.5" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
