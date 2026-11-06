import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.brandLink}>
          <img src={`${import.meta.env.BASE_URL}UBT_Logo.png`} alt="UBT Logo" style={styles.logo} />
          <div style={styles.brandText}>
            <span style={styles.brandPrimary}>UNIVERSE</span>
            <span style={styles.brandSecondary}>BEGINTECH</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.navLink,
                  color: isActive ? '#ff9933' : '#f8fafc',
                  borderBottom: isActive ? '2px solid #ff9933' : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/contact" style={styles.partnerBtn}>
            Partner With Us
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.mobileMenuToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {menuOpen && (
        <div style={styles.mobileDropdown}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...styles.mobileNavLink,
                  color: isActive ? '#ff9933' : '#f8fafc',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={styles.mobilePartnerBtn}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(11, 19, 41, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0.85rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    width: '42px',
    height: '42px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  },
  brandPrimary: {
    fontSize: '1.05rem',
    fontWeight: '800',
    letterSpacing: '0.06em',
    color: '#ffffff',
  },
  brandSecondary: {
    fontSize: '0.9rem',
    fontWeight: '800',
    letterSpacing: '0.06em',
    color: '#ff9933',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.75rem',
  },
  navLink: {
    fontSize: '0.95rem',
    fontWeight: '600',
    padding: '0.4rem 0',
    transition: 'color 0.2s',
  },
  partnerBtn: {
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '700',
    fontSize: '0.9rem',
    padding: '0.55rem 1.25rem',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(255, 153, 51, 0.3)',
    marginLeft: '0.5rem',
  },
  mobileMenuToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '1.75rem',
    cursor: 'pointer',
  },
  mobileDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.25rem 1.5rem',
    backgroundColor: '#0b1329',
    borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
  },
  mobileNavLink: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  mobilePartnerBtn: {
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '700',
    textAlign: 'center',
    padding: '0.65rem',
    borderRadius: '8px',
  },
};

export default Navbar;
