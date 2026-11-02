import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheck, FaMobileAlt, FaPlay, FaStar, FaVideo } from 'react-icons/fa';
import './Products.css';

const PHARMASYNC_DEMO_URL = 'https://pharmasync.barakode.org/';

const DEMO_CLIP_SECONDS = 4;

interface Group { title: string; items: string[] }
interface Role { title: string; text: string }

const Products = () => {
  const { t } = useTranslation();
  const groups = t('products.pharmasync.groups', { returnObjects: true }) as Group[];
  const roles = t('products.pharmasync.roles', { returnObjects: true }) as Role[];
  const badgiPoints = t('products.badgi.points', { returnObjects: true }) as string[];
  const medvideoPoints = t('products.medvideo.points', { returnObjects: true }) as string[];
  const workflowPoints = t('products.workflow.points', { returnObjects: true }) as string[];

  const fadeIn = (x: number) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8 },
  });

  return (
    <section id="products" className="section section-dark products">
      <div className="products-glow"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t('nav.products')}</span>
          <h2>{t('products.title')}</h2>
          <p>{t('products.subtitle')}</p>
        </motion.div>

        {/* PharmaSync — flagship */}
        <article className="product product-flagship">
          <motion.div className="product-content" {...fadeIn(-50)}>
            <div className="product-badges">
              <span className="product-badge"><FaStar /> {t('products.flagship')}</span>
              <span className="product-badge product-badge-alt"><FaMobileAlt /> {t('products.mobileBadge')}</span>
            </div>
            <h3>PharmaSync</h3>
            <p className="product-tagline">{t('products.pharmasync.tagline')}</p>
            <p className="product-description">{t('products.pharmasync.description')}</p>

            <div className="product-groups">
              {groups.map((group) => (
                <div key={group.title} className="product-group">
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}><FaCheck />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="product-actions">
              <a href={PHARMASYNC_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaPlay />
                {t('products.demo')}
              </a>
              <span className="product-url">pharmasync.barakode.org</span>
            </div>
          </motion.div>

          <motion.div className="product-visual" {...fadeIn(50)}>
            <a
              href={PHARMASYNC_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="browser-frame"
              aria-label="PharmaSync demo"
            >
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url"><span>pharmasync.barakode.org</span></div>
              </div>
              <img src="/projects/pharmasync-kpi.png" alt="PharmaSync — Objectifs & KPI" loading="lazy" />
            </a>

            <div className="phone-card">
              <div className="phone-frame">
                <img src="/projects/pharmasync-mobile.png" alt="PharmaSync mobile" loading="lazy" />
              </div>
              <div className="phone-text">
                <FaMobileAlt />
                <h4>{t('products.pharmasync.mobileTitle')}</h4>
                <p>{t('products.pharmasync.mobileText')}</p>
              </div>
            </div>
          </motion.div>
        </article>

        <div className="product-roles">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="role-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4>{role.title}</h4>
              <p>{role.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Badgi.net */}
        <article className="product product-reverse">
          <motion.div className="product-content" {...fadeIn(50)}>
            <div className="product-badges">
              <span className="product-badge product-badge-alt">BN</span>
            </div>
            <h3>Badgi.net</h3>
            <p className="product-tagline">{t('products.badgi.tagline')}</p>
            <p className="product-description">{t('products.badgi.description')}</p>
            <ul className="product-list">
              {badgiPoints.map((point) => (
                <li key={point}><FaCheck />{point}</li>
              ))}
            </ul>
            <a href="https://badgi.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t('products.visit')}
              <FaExternalLinkAlt />
            </a>
          </motion.div>
          <motion.div className="product-visual" {...fadeIn(-50)}>
            <a href="https://badgi.net" target="_blank" rel="noopener noreferrer" className="browser-frame" aria-label="Badgi.net">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url"><span>badgi.net</span></div>
              </div>
              <img src="/projects/badgi-net-home.png" alt="Badgi.net" loading="lazy" />
            </a>
          </motion.div>
        </article>

        {/* Badgi-WorkFlow */}
        <article className="product">
          <motion.div className="product-content" {...fadeIn(-50)}>
            <div className="product-badges">
              <span className="product-badge product-badge-alt">BW</span>
            </div>
            <h3>Badgi-WorkFlow</h3>
            <p className="product-tagline">{t('products.workflow.tagline')}</p>
            <p className="product-description">{t('products.workflow.description')}</p>
            <ul className="product-list">
              {workflowPoints.map((point) => (
                <li key={point}><FaCheck />{point}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="product-visual" {...fadeIn(50)}>
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url"><span>Badgi-WorkFlow</span></div>
              </div>
              <img src="/projects/badgi-workflow-dash.png" alt="Badgi-WorkFlow" loading="lazy" />
            </div>
          </motion.div>
        </article>
        {/* Vidéos médicales */}
        <article className="product product-reverse">
          <motion.div className="product-content" {...fadeIn(50)}>
            <div className="product-badges">
              <span className="product-badge"><FaVideo /> {t('products.medvideo.badge')}</span>
            </div>
            <h3>BARAKODE Medical Video</h3>
            <p className="product-tagline">{t('products.medvideo.tagline')}</p>
            <p className="product-description">{t('products.medvideo.description')}</p>
            <ul className="product-list">
              {medvideoPoints.map((point) => (
                <li key={point}><FaCheck />{point}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="product-visual" {...fadeIn(-50)}>
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url"><span>{t('products.medvideo.demoLabel')}</span></div>
              </div>
              <video
                className="product-video"
                autoPlay
                muted
                loop
                playsInline
                aria-label={t('products.medvideo.watch')}
                onTimeUpdate={(e) => {
                  if (e.currentTarget.currentTime >= DEMO_CLIP_SECONDS) e.currentTarget.currentTime = 0;
                }}
              >
                <source src="/videos/medical-demo.mp4#t=0,4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default Products;
