import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>{t('contact.info.address')}</h4>
                <p>{t('about.address')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>{t('contact.info.email')}</h4>
                <p>contact@barakode.tn</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>{t('contact.info.phone')}</h4>
                <p>+216 XX XXX XXX</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone')}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.form.subject')}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                rows={6}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>{t('contact.form.sending')}</>
              ) : (
                <>
                  <FaPaperPlane />
                  {t('contact.form.send')}
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-message success">{t('contact.form.success')}</div>
            )}
            {status === 'error' && (
              <div className="form-message error">{t('contact.form.error')}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
