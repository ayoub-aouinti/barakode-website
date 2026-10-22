import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Process.css';

interface Step { title: string; description: string; deliverable: string }

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) as Step[];

  return (
    <section id="process" className="section section-dark process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t('nav.process')}</span>
          <h2>{t('process.title')}</h2>
          <p>{t('process.subtitle')}</p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="process-number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="process-deliverable">
                <b>{t('process.deliverable')} :</b> {step.deliverable}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
