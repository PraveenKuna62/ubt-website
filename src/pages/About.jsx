import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.headerSection}>
        <div style={styles.container}>
          <span style={styles.headerTag}>OUR MISSION & CREDENTIALS</span>
          <h1 style={styles.headerTitle}>About UniverseBeginTech</h1>
          <p style={styles.headerSubtitle}>
            A Government of India Registered Micro Enterprise committed to empowering the next generation of engineers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.contentSection}>
        <div style={styles.container}>
          {/* MSME Official Card */}
          <div style={styles.msmeCertificateCard}>
            <div style={styles.msmeHeader}>
              <div style={styles.msmeBadgeIcon}>🏛️</div>
              <div>
                <span style={styles.msmeTagline}>GOVERNMENT OF INDIA REGISTRATION</span>
                <h2 style={styles.msmeTitle}>Ministry of Micro, Small & Medium Enterprises (MSME)</h2>
              </div>
            </div>

            <div style={styles.msmeDetailsGrid}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Enterprise Name</span>
                <span style={styles.detailValue}>UNIVERSEBEGINTECH</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Registration</span>
                <span style={styles.detailHighlight}>UDYAM-INDIA</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Enterprise Type</span>
                <span style={styles.detailValue}>Micro Enterprise</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Major Activity</span>
                <span style={styles.detailValue}>Services & Technical Education</span>
              </div>
            </div>

            <p style={styles.msmeDescription}>
              This formal recognition validates UniverseBeginTech's compliance, operational integrity, and commitment to delivering standardized technological training and educational hardware across the nation.
            </p>
          </div>

          {/* Story & Vision */}
          <div style={styles.storyGrid}>
            <div style={styles.storyCard}>
              <span style={styles.storyIcon}>💡</span>
              <h3 style={styles.storyHeading}>Why We Started</h3>
              <p style={styles.storyText}>
                Across engineering institutions, a wide divide exists between textbook curriculum and what high-growth technology companies actually require. Graduates frequently lack experience with live system integration, version-controlled software architecture, and real physical hardware.
              </p>
              <p style={styles.storyText}>
                UniverseBeginTech was founded to solve this dilemma by introducing immersive, industry-calibrated bootcamps and DIY robotics labs.
              </p>
            </div>

            <div style={styles.storyCard}>
              <span style={styles.storyIcon}>🎯</span>
              <h3 style={styles.storyHeading}>Our Core Philosophy</h3>
              <p style={styles.storyText}>
                <strong>Build, Break, and Deploy:</strong> We replace slides and passive lectures with interactive code repositories, logic analyzers, and breadboards.
              </p>
              <p style={styles.storyText}>
                Whether a student is tuning a Generative AI prompt pipeline or programming an autonomous rover's ultrasonic telemetry, they leave our programs with tangible, functional artifacts.
              </p>
            </div>
          </div>

          {/* Leadership & Values */}
          <div style={styles.leadershipSection}>
            <span style={styles.leadershipTag}>ENTERPRISE LEADERSHIP</span>
            <h2 style={styles.leadershipHeading}>Leadership & Vision</h2>
            <div style={styles.leadershipCard}>
              <div style={styles.leaderInfo}>
                <h3 style={styles.leaderName}>Kuna Praveen</h3>
                <p style={styles.leaderRole}>Founder & Chief Executive Officer (CEO)</p>
                <p style={styles.leaderBio}>
                  Driving UniverseBeginTech&apos;s mission to pioneer experiential technical education, scalable robotics systems, and career-accelerating technology bootcamps. With a deep passion for practical engineering rigor, he spearheads the enterprise&apos;s curriculum design, academic collaborations, and cutting-edge program initiatives across India.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.valuesSection}>
            <h2 style={styles.valuesTitle}>Our Guiding Principles</h2>
            <div style={styles.valuesGrid}>
              <div style={styles.valueItem}>
                <div style={styles.valueDot}></div>
                <div>
                  <h4 style={styles.valueHeader}>Zero Fluff Curriculum</h4>
                  <p style={styles.valueText}>
                    Every lecture is paired with live code or physical hardware testing.
                  </p>
                </div>
              </div>

              <div style={styles.valueItem}>
                <div style={styles.valueDot}></div>
                <div>
                  <h4 style={styles.valueHeader}>Institutional Transparency</h4>
                  <p style={styles.valueText}>
                    Daily Attendance tracking, progress reports, and certified outcomes.
                  </p>
                </div>
              </div>

              <div style={styles.valueItem}>
                <div style={styles.valueDot}></div>
                <div>
                  <h4 style={styles.valueHeader}>Accessible Innovation</h4>
                  <p style={styles.valueText}>
scalable hardware modules making practical
  technology accessible across diverse learning environments                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={styles.aboutCta}>
            <h3>Ready to collaborate with UniverseBeginTech?</h3>
            <p>Connect with our academic partnerships team today.</p>
            <Link to="/contact" style={styles.contactBtn}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    paddingBottom: '4rem',
  },
  headerSection: {
    padding: '4rem 1.5rem',
    textAlign: 'center',
    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 153, 51, 0.12) 0%, rgba(11, 19, 41, 0) 70%)',
    borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  headerTag: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: '#38bdf8',
    letterSpacing: '0.12em',
  },
  headerTitle: {
    fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
    fontWeight: '900',
    color: '#ffffff',
    marginTop: '0.5rem',
    marginBottom: '0.75rem',
  },
  headerSubtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    maxWidth: '700px',
    margin: '0 auto',
  },
  contentSection: {
    padding: '4rem 0',
  },
  msmeCertificateCard: {
    backgroundColor: '#111e3e',
    borderRadius: '20px',
    padding: '2.5rem',
    border: '2px solid rgba(255, 153, 51, 0.4)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 35px rgba(255, 153, 51, 0.15)',
    marginBottom: '3.5rem',
  },
  msmeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '1.5rem',
  },
  msmeBadgeIcon: {
    fontSize: '2.5rem',
  },
  msmeTagline: {
    fontSize: '0.8rem',
    fontWeight: '800',
    color: '#38bdf8',
    letterSpacing: '0.1em',
  },
  msmeTitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#ffffff',
    marginTop: '0.25rem',
  },
  msmeDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.75rem',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  detailLabel: {
    color: '#94a3b8',
    fontSize: '0.82rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  detailValue: {
    color: '#f8fafc',
    fontSize: '1.05rem',
    fontWeight: '700',
  },
  detailHighlight: {
    color: '#ff9933',
    fontSize: '1.15rem',
    fontWeight: '800',
    letterSpacing: '0.05em',
  },
  msmeDescription: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '1.25rem',
  },
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3.5rem',
  },
  storyCard: {
    backgroundColor: '#070d1e',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid rgba(56, 189, 248, 0.15)',
  },
  storyIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
    display: 'inline-block',
  },
  storyHeading: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  storyText: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    marginBottom: '0.75rem',
  },
  leadershipSection: {
    marginBottom: '3.5rem',
  },
  leadershipTag: {
    fontSize: '0.82rem',
    fontWeight: '800',
    color: '#ff9933',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  leadershipHeading: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#ffffff',
    marginTop: '0.35rem',
    marginBottom: '1.5rem',
  },
  leadershipCard: {
    backgroundColor: '#111e3e',
    borderRadius: '20px',
    padding: '2.5rem',
    border: '1.5px solid rgba(255, 153, 51, 0.35)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 153, 51, 0.08)',
    textAlign: 'left',
  },
  leaderInfo: {
    maxWidth: '850px',
  },
  leaderName: {
    fontSize: '1.65rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.35rem',
    textAlign: 'left',
  },
  leaderRole: {
    fontSize: '0.98rem',
    fontWeight: '700',
    color: '#ff9933',
    letterSpacing: '0.04em',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  leaderBio: {
    fontSize: '0.98rem',
    color: '#cbd5e1',
    lineHeight: '1.75',
    textAlign: 'left',
  },
  valuesSection: {
    backgroundColor: '#111e3e',
    borderRadius: '16px',
    padding: '2.5rem',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    marginBottom: '3.5rem',
  },
  valuesTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1.75rem',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.75rem',
  },
  valueItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  valueDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#ff9933',
    boxShadow: '0 0 8px #ff9933',
    marginTop: '0.45rem',
    flexShrink: 0,
  },
  valueHeader: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.35rem',
  },
  valueText: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  aboutCta: {
    textAlign: 'center',
    padding: '2.5rem',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 153, 51, 0.08)',
    border: '1px solid rgba(255, 153, 51, 0.3)',
  },
  contactBtn: {
    display: 'inline-block',
    marginTop: '1.25rem',
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '700',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
  },
};

export default About;
