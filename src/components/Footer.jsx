import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topRow}>
          <div style={styles.brandCol}>
            <div style={styles.brandGroup}>
              <img src="/UBT_Logo.png" alt="UBT Logo" style={styles.logo} />
              <div style={styles.brandText}>
                <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.05rem', letterSpacing: '0.05em' }}>
                  UNIVERSE
                </span>
                <span style={{ color: '#ff9933', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  BEGINTECH
                </span>
              </div>
            </div>
            <p style={styles.description}>
              Igniting the Future of Tech through GenAI, Robotics labs, live industry masterclasses, and hands-on engineering solutions.
            </p>
            <div style={styles.msmeBadge}>
              <span style={styles.msmeDot}></span>
              <span>Govt. MSME Reg: <strong>UDYAM-INDIA</strong></span>
            </div>
          </div>

          <div style={styles.linksCol}>
            <h4 style={styles.colTitle}>Quick Links</h4>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/services" style={styles.link}>Services & Pillars</Link>
            <Link to="/about" style={styles.link}>About Us</Link>
            <Link to="/contact" style={styles.link}>Partner / Contact</Link>
          </div>

          <div style={styles.linksCol}>
            <h4 style={styles.colTitle}>Core Pillars</h4>
            <Link to="/services#genai" style={styles.link}>GenAI & Tech Bootcamps</Link>
            <Link to="/services#webinars" style={styles.link}>Educating Webinars</Link>
            <Link to="/services#robotics" style={styles.link}>AI Robotics</Link>
          </div>

          <div style={styles.linksCol}>
            <h4 style={styles.colTitle}>Connect</h4>
            <a href="https://instagram.com/universe_begin_tech" target="_blank" rel="noreferrer" style={{ ...styles.link, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaInstagram size={16} color="#E4405F" /> @universe_begin_tech
            </a>
            <a href="mailto:contact@universebegintech.com" style={{ ...styles.link, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaEnvelope size={15} color="#38bdf8" /> contact@universebegintech.com
            </a>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Bengaluru, Karnataka, India
            </span>
          </div>
        </div>

        <div style={styles.bottomRow}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} UNIVERSEBEGINTECH. All rights reserved.
          </p>
          <div style={styles.tagline}>
            Igniting Young Minds &bull; Empowering Engineering Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#070d1e',
    borderTop: '1px solid rgba(56, 189, 248, 0.15)',
    padding: '4rem 1.5rem 2rem 1.5rem',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
  },
  topRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    gridColumn: 'span 1',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    width: '38px',
    height: '38px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  },
  description: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  msmeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    backgroundColor: 'rgba(255, 153, 51, 0.1)',
    border: '1px solid rgba(255, 153, 51, 0.3)',
    borderRadius: '6px',
    padding: '0.35rem 0.65rem',
    color: '#ff9933',
    width: 'fit-content',
  },
  msmeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#ff9933',
    marginRight: '6px',
    boxShadow: '0 0 6px #ff9933',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  colTitle: {
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '700',
    marginBottom: '0.25rem',
  },
  link: {
    color: '#94a3b8',
    fontSize: '0.88rem',
    transition: 'color 0.2s',
  },
  bottomRow: {
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '1.75rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  copyright: {
    color: '#64748b',
    fontSize: '0.85rem',
  },
  tagline: {
    color: '#94a3b8',
    fontSize: '0.85rem',
  },
};

export default Footer;
