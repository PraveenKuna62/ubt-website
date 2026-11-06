import React from 'react';
import { Link } from 'react-router-dom';

const pillarsData = [
  {
    id: 'genai',
    number: '01',
    title: 'GenAI & Tech Bootcamps',
    subtitle: 'Career readiness, modern technology fundamentals & guided project execution',
    badge: 'PROFESSIONAL TECH BOOT CAMPS',
    description:
      'Immersive bootcamps designed to bridge academic knowledge with career-ready capabilities through structured engineering workflows and hands-on guidance.',
    curriculum: [
      <>Industry-oriented <strong>software development</strong> workflows and best practices</>,
      'Applied software architecture patterns and collaborative workflows',
      'End-to-end project building and professional engineering discipline',
      'Resume-worthy project execution and technical interview readiness',
    ],
    outcomes: 'Learners build verifiable project portfolios with strong career readiness and industry confidence.',
  },
  {
    id: 'webinars',
    number: '02',
    title: 'Educating Webinars',
    subtitle: 'Career navigation, industry perspectives & continuous mentorship',
    badge: 'KNOWLEDGE STREAM',
    description:
      'Interactive sessions connecting students and faculty with experienced practitioners to cultivate career vision and real-world domain perspectives.',
    curriculum: [
      'Career navigation, domain roadmaps, and industry trends',
      'Demystifying emerging technology landscapes and practical adoption',
      'Professional engineering mindset, collaboration, and learning frameworks',
      'Technical portfolio building and mentorship access',
      'Interactive Q&A forums and guidance from active industry practitioners',
    ],
    outcomes: 'Clear career roadmap clarity, actionable guidance, and ongoing mentorship direction.',
  },
  {
    id: 'robotics',
    number: '03',
    title: 'AI Robotics',
    subtitle: 'Scalable robotics solutions & intelligent automation systems',
    badge: 'AI & ROBOTICS LABS',
    description:
      'Scalable robotics solutions combining intelligent hardware systems, autonomous design, and project-based mentorship for modern institutions and learners.',
    curriculum: [
      'Foundational hardware thinking, circuit logic, and intelligent embedded systems',
      'Applied sensor, motor, and actuator integration principles',
      'Algorithmic problem-solving for autonomous navigation and control',
      'Team-based engineering challenges, innovation labs, and competition readiness',
      'End-to-end prototyping and technical presentation skills',
    ],
    outcomes: 'Institutions build scalable robotics solutions backed by student-led engineering prototypes.',
  },
];

const Services = () => {
  return (
    <div style={styles.page}>
      {/* Services Hero Header */}
      <section style={styles.headerSection}>
        <div style={styles.container}>
          <span style={styles.headerTag}>OFFICIAL LAUNCH ROADMAP</span>
          <h1 style={styles.headerTitle}>Our Operational Pillars</h1>
          <p style={styles.headerSubtitle}>
            Engineered to bridge the gap between academic theory and real-world technology demands.
          </p>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section style={styles.contentSection}>
        <div style={styles.container}>
          <div style={styles.pillarStack}>
            {pillarsData.map((pillar) => (
              <div key={pillar.id} id={pillar.id} style={styles.pillarBlock}>
                <div style={styles.pillarHeaderRow}>
                  <div style={styles.pillarNumberWrap}>
                    <span style={styles.pillarNumber}>{pillar.number}</span>
                  </div>
                  <div style={styles.pillarTitleBlock}>
                    <span style={styles.pillarBadge}>{pillar.badge}</span>
                    <h2 style={styles.pillarTitle}>{pillar.title}</h2>
                    <p style={styles.pillarSubtitle}>{pillar.subtitle}</p>
                  </div>
                </div>

                <p style={styles.pillarDescription}>{pillar.description}</p>

                <div style={styles.curriculumBox}>
                  <h4 style={styles.curriculumTitle}>Core Competencies:</h4>
                  <ul style={styles.curriculumList}>
                    {pillar.curriculum.map((item, i) => (
                      <li key={i} style={styles.curriculumItem}>
                        <span style={styles.checkIcon}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={styles.outcomesBox}>
                  <strong>Measurable Outcome: </strong>
                  <span>{pillar.outcomes}</span>
                </div>

                <div style={styles.actionRow}>
                  {pillar.id === 'webinars' || pillar.id === 'robotics' ? (
                    <span style={styles.comingSoonBadge}>
                      🚀 Coming Soon
                    </span>
                  ) : (
                    <Link to="/contact" style={styles.bookPillarBtn}>
                      Request {pillar.title} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
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
    background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.12) 0%, rgba(11, 19, 41, 0) 70%)',
    borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  headerTag: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: '#ff9933',
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
  pillarStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  pillarBlock: {
    backgroundColor: '#111e3e',
    borderRadius: '20px',
    padding: '2.5rem',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
  },
  pillarHeaderRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  pillarNumberWrap: {
    width: '60px',
    height: '60px',
    borderRadius: '14px',
    backgroundColor: 'rgba(255, 153, 51, 0.12)',
    border: '1.5px solid rgba(255, 153, 51, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  pillarNumber: {
    color: '#ff9933',
    fontSize: '1.5rem',
    fontWeight: '900',
  },
  pillarTitleBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  pillarBadge: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: '#38bdf8',
    letterSpacing: '0.08em',
  },
  pillarTitle: {
    fontSize: '1.65rem',
    fontWeight: '800',
    color: '#ffffff',
  },
  pillarSubtitle: {
    color: '#94a3b8',
    fontSize: '0.95rem',
  },
  pillarDescription: {
    color: '#cbd5e1',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    marginBottom: '1.75rem',
  },
  curriculumBox: {
    backgroundColor: '#070d1e',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    marginBottom: '1.5rem',
  },
  curriculumTitle: {
    color: '#ff9933',
    fontSize: '0.95rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  curriculumList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  curriculumItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.6rem',
    color: '#e2e8f0',
    fontSize: '0.92rem',
  },
  checkIcon: {
    color: '#38bdf8',
    fontWeight: '700',
  },
  outcomesBox: {
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    borderLeft: '4px solid #38bdf8',
    padding: '0.85rem 1.25rem',
    borderRadius: '4px',
    color: '#e2e8f0',
    fontSize: '0.92rem',
    marginBottom: '1.75rem',
  },
  actionRow: {
    display: 'flex',
  },
  bookPillarBtn: {
    backgroundColor: 'transparent',
    color: '#ff9933',
    border: '1.5px solid #ff9933',
    fontWeight: '700',
    padding: '0.65rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.92rem',
    transition: 'background-color 0.2s',
  },
  comingSoonBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(255, 153, 51, 0.12)',
    border: '1.5px dashed #ff9933',
    color: '#ff9933',
    fontWeight: '700',
    padding: '0.65rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.92rem',
    letterSpacing: '0.04em',
  },
};

export default Services;
