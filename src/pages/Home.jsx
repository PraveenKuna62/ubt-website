import React from 'react';
import { Link } from 'react-router-dom';
import GalaxyCanvas from '../components/GalaxyCanvas';

const stats = [
  { value: 'Core', label: 'Technical Pillars' },
  { value: '100%', label: 'Hands-on Hardware Labs' },
  { value: 'MSME', label: 'Govt. Recognized Enterprise' },
  { value: 'Industry-Ready', label: 'Curriculum' },
];

const pillars = [
  {
    icon: '⚡',
    title: 'GenAI & Tech Bootcamps',
    description:
      'Immersive training driving career readiness, applied technical confidence, and guided project mentorship.',
    link: '/services#genai',
  },
  {
    icon: '🎓',
    title: 'Educating Webinars',
    description:
      'Interactive masterclasses offering career navigation, industry insights, and continuous learner mentorship.',
    link: '/services#webinars',
  },
  {
    icon: '🤖',
    title: 'AI Robotics',
    description:
      'Scalable robotics solutions fostering hands-on problem solving, systems intelligence, and real-world project mentorship.',
    link: '/services#robotics',
  },
];

const Home = () => {
  return (
    <div className="galaxy-home-wrapper">
      {/* Interactive & Visible High-Contrast Robotic Galaxy Space Canvas */}
      <GalaxyCanvas />

      {/* Cybernetic Geometric Grid & Nebula Layers */}
      <div className="galaxy-bg-grid" aria-hidden="true" />
      <div className="galaxy-nebula-cyan" aria-hidden="true" />
      <div className="galaxy-nebula-gold" aria-hidden="true" />
      <div className="galaxy-nebula-purple" aria-hidden="true" />

      {/* Main Foreground Content */}
      <div className="galaxy-content-layer">
        {/* Hero Section */}
        <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.badgeRow}>
            <span style={styles.badgeGov}>
              <span style={styles.glowDot}></span> Govt. MSME Reg: UDYAM-INDIA
            </span>
            <span style={styles.badgeLive}>🚀 WE ARE LIVE</span>
          </div>

          <h1 style={styles.heroTitle}>
            UNIVERSE<span style={styles.goldText}>BEGINTECH</span>
          </h1>

          <p style={styles.heroSubtitle}>IGNITING THE FUTURE OF TECH</p>

          <p style={styles.heroDescription}>
            Bridging academia and the cutting-edge tech industry through experiential robotics,
            applied Generative AI bootcamps, and real-world hardware prototyping labs.
          </p>

          <div style={styles.ctaGroup}>
            <Link to="/services" style={styles.primaryBtn}>
              Explore Services & Pillars →
            </Link>
            <Link to="/contact" style={styles.secondaryBtn}>
              Partner With Us
            </Link>
          </div>

          {/* Key Statistics Bar */}
          <div style={styles.statsBar}>
            {stats.map((s, index) => (
              <React.Fragment key={index}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{s.value}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </div>
                {index < stats.length - 1 && <div style={styles.statDivider}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Poster Showcase */}
      <section style={styles.posterSection}>
        <div style={styles.container}>
          <div style={styles.posterGrid}>
            <div style={styles.posterInfoCol}>
              <span style={styles.sectionTag}>OFFICIAL LAUNCH</span>
              <h2 style={styles.sectionHeading}>The Vision Behind UniverseBeginTech</h2>
              <p style={styles.paragraph}>
                We believe engineering cannot be learned from textbooks alone. Our programs take students from theoretical fundamentals to building live autonomous robots, IoT telemetry systems, and full-stack generative AI solutions.
              </p>
              <p style={styles.paragraph}>
                Officially recognized as a registered Micro Enterprise under the Government of India, we are on a mission to democratize hands-on technical excellence.
              </p>
              <div style={styles.bulletList}>
                <div style={styles.bulletItem}>✔ Industry standard curriculum aligned with real world engineering</div>
                <div style={styles.bulletItem}>✔ Mentorship from experienced product engineers and tech leaders</div>
              </div>
              <Link to="/about" style={styles.learnMoreLink}>
                Learn More About Our Story →
              </Link>
            </div>

            <div style={styles.posterImageCol}>
              <div style={styles.posterFrame}>
                <img
                  src="/UBT_Poster.png"
                  alt="UniverseBeginTech Official Launch Poster"
                  style={styles.posterImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={styles.posterFallback}>
                  <span>🖼️</span>
                  <p>Official Launch Poster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Cards Section */}
      <section style={styles.pillarsSection}>
        <div style={styles.container}>
          <div style={styles.sectionCenterHeader}>
            <span style={styles.sectionTag}>OUR CORE PILLARS</span>
            <h2 style={styles.sectionHeading}>Engineered for Practical Excellence</h2>
            <p style={styles.sectionDesc}>
              Explore our specialized domains transforming engineering education.
            </p>
          </div>

          <div style={styles.pillarsGrid}>
            {pillars.map((pillar, idx) => (
              <div key={idx} style={styles.pillarCard}>
                <div style={styles.pillarIconBox}>{pillar.icon}</div>
                <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                <p style={styles.pillarDesc}>{pillar.description}</p>
                <Link to={pillar.link} style={styles.pillarAction}>
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Campus CTA Section */}
        <section style={styles.ctaBannerSection}>
          <div style={styles.container}>
            <div style={styles.ctaBanner}>
              <h2 style={styles.bannerTitle}>Partner with Universe BeginTech</h2>
              <p style={styles.bannerText}>
                Host professional tech bootcamps, establish experiential innovation labs, or schedule executive sessions with our team.
              </p>
              <Link to="/contact" style={styles.bannerBtn}>
                Submit partnership inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    padding: '5rem 1.5rem 4rem 1.5rem',
    textAlign: 'center',
    background: 'transparent',
    borderBottom: '1px solid rgba(56, 189, 248, 0.12)',
  },
  heroContainer: {
    maxWidth: '920px',
    margin: '0 auto',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.75rem',
  },
  badgeGov: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    border: '1px solid rgba(56, 189, 248, 0.3)',
    borderRadius: '9999px',
    padding: '0.35rem 0.85rem',
    fontSize: '0.8rem',
    color: '#38bdf8',
    fontWeight: '600',
  },
  glowDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#38bdf8',
    boxShadow: '0 0 8px #38bdf8',
    marginRight: '6px',
  },
  badgeLive: {
    backgroundColor: 'rgba(255, 153, 51, 0.12)',
    border: '1px solid rgba(255, 153, 51, 0.4)',
    borderRadius: '9999px',
    padding: '0.35rem 0.85rem',
    fontSize: '0.8rem',
    color: '#ff9933',
    fontWeight: '700',
  },
  heroTitle: {
    fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)',
    fontWeight: '900',
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: '1.1',
    marginBottom: '0.5rem',
  },
  goldText: {
    background: 'linear-gradient(90deg, #ff9933, #ffa84d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
    fontWeight: '800',
    letterSpacing: '0.12em',
    color: '#38bdf8',
    marginBottom: '1.25rem',
  },
  heroDescription: {
    fontSize: '1.15rem',
    color: '#94a3b8',
    maxWidth: '750px',
    margin: '0 auto 2.5rem auto',
    lineHeight: '1.7',
  },
  ctaGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '3.5rem',
  },
  primaryBtn: {
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '700',
    fontSize: '1rem',
    padding: '0.85rem 2rem',
    borderRadius: '8px',
    boxShadow: '0 0 25px rgba(255, 153, 51, 0.35)',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    color: '#38bdf8',
    border: '1.5px solid rgba(56, 189, 248, 0.35)',
    fontWeight: '700',
    fontSize: '1rem',
    padding: '0.85rem 2rem',
    borderRadius: '8px',
  },
  statsBar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: '#111e3e',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    borderRadius: '16px',
    padding: '1.5rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statValue: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#ff9933',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  posterSection: {
    padding: '5rem 1.5rem',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
  },
  posterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '3.5rem',
    alignItems: 'center',
  },
  posterInfoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: '#ff9933',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  sectionHeading: {
    fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  paragraph: {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  bulletList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    margin: '0.5rem 0',
  },
  bulletItem: {
    color: '#e2e8f0',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  learnMoreLink: {
    color: '#ff9933',
    fontWeight: '700',
    fontSize: '0.95rem',
    marginTop: '0.5rem',
  },
  posterImageCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  posterFrame: {
    maxWidth: '440px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '2px solid rgba(255, 153, 51, 0.35)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 153, 51, 0.2)',
    backgroundColor: '#111e3e',
  },
  posterImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
  },
  posterFallback: {
    display: 'none',
    padding: '3rem',
    textAlign: 'center',
  },
  pillarsSection: {
    padding: '5rem 1.5rem',
    backgroundColor: 'rgba(7, 13, 30, 0.65)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(56, 189, 248, 0.1)',
  },
  sectionCenterHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 3.5rem auto',
  },
  sectionDesc: {
    color: '#94a3b8',
    fontSize: '1.05rem',
    marginTop: '0.5rem',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
  pillarCard: {
    backgroundColor: '#111e3e',
    borderRadius: '16px',
    padding: '2rem 1.5rem',
    border: '1px solid rgba(56, 189, 248, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
  },
  pillarIconBox: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 153, 51, 0.12)',
    border: '1px solid rgba(255, 153, 51, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: '1.25rem',
  },
  pillarTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.75rem',
  },
  pillarDesc: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    flex: 1,
    marginBottom: '1.5rem',
  },
  pillarAction: {
    color: '#ff9933',
    fontWeight: '700',
    fontSize: '0.9rem',
  },
  ctaBannerSection: {
    padding: '4rem 1.5rem',
  },
  ctaBanner: {
    backgroundColor: '#111e3e',
    borderRadius: '20px',
    padding: '3rem 2rem',
    textAlign: 'center',
    border: '1.5px solid rgba(255, 153, 51, 0.4)',
    boxShadow: '0 0 40px rgba(255, 153, 51, 0.15)',
  },
  bannerTitle: {
    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.75rem',
  },
  bannerText: {
    color: '#94a3b8',
    maxWidth: '650px',
    margin: '0 auto 2rem auto',
    fontSize: '1.05rem',
  },
  bannerBtn: {
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '800',
    padding: '0.85rem 2.25rem',
    borderRadius: '8px',
    fontSize: '1rem',
    boxShadow: '0 0 20px rgba(255, 153, 51, 0.3)',
  },
};

export default Home;
