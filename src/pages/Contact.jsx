import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm('xoeebopr');

  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.headerSection}>
        <div style={styles.container}>
          <span style={styles.headerTag}>INQUIRIES</span>
          <h1 style={styles.headerTitle}>Partner With UniverseBeginTech</h1>
          <p style={styles.headerSubtitle}>
            Bring industry-grade bootcamps and GenAI & Tech Solutions.
          </p>
        </div>
      </section>

      {/* Form & Contact Details Section */}
      <section style={styles.contentSection}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            {/* Direct Info Col */}
            <div style={styles.infoCol}>
              <h2 style={styles.infoHeading}>Let's Build the Future Together</h2>
              <p style={styles.infoText}>
                Whether you represent an organization looking for intensive tech boot camps or an organization establishing an experiential innovation lab, our team is ready to design a tailored program.
              </p>

              <div style={styles.infoCard}>
                <span style={styles.infoIcon}>🏛️</span>
                <div>
                  <h4 style={styles.cardHeader}>Official MSME Entity</h4>
                  <p style={styles.cardSub}>UDYAM-INDIA</p>
                  <p style={styles.cardSub}>Bengaluru, Karnataka, India</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <span style={styles.infoIcon}><FaEnvelope size={24} color="#38bdf8" /></span>
                <div>
                  <h4 style={styles.cardHeader}>Direct Email</h4>
                  <p style={styles.cardSub}>contact@universebegintech.com</p>
                  <p style={styles.cardSub}>partnerships@universebegintech.com</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <span style={styles.infoIcon}><FaInstagram size={24} color="#E4405F" /></span>
                <div>
                  <h4 style={styles.cardHeader}>Official Handle</h4>
                  <p style={styles.cardSub}>@universe_begin_tech (Instagram)</p>
                </div>
              </div>
            </div>

            {/* Formspree Form Col */}
            <div style={styles.formCol}>
              <div style={styles.formCard}>
                <h3 style={styles.formHeading}>Inquiry Form</h3>
                <p style={styles.formSub}>
                  Fill out your details below to request a detailed syllabus and project proposal.
                </p>

                {state.succeeded && (
                  <div
                    style={{
                      ...styles.statusBox,
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      borderColor: '#22c55e',
                      color: '#4ade80',
                    }}
                  >
                    Thank you for reaching out! Our academic partnerships team will contact you shortly.
                  </div>
                )}

                {state.errors && state.errors.length > 0 && (
                  <div
                    style={{
                      ...styles.statusBox,
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      borderColor: '#ef4444',
                      color: '#f87171',
                    }}
                  >
                    There was a problem submitting your inquiry. Please check the fields and try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Full Name"
                        style={styles.input}
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} style={styles.errorText} />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Designation / Role</label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        placeholder="Role"
                        style={styles.input}
                      />
                      <ValidationError prefix="Role" field="role" errors={state.errors} style={styles.errorText} />
                    </div>
                  </div>

                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="abc@gmail.com"
                        style={styles.input}
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} style={styles.errorText} />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Contact Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="9876543210"
                        style={styles.input}
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} style={styles.errorText} />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Program of Interest</label>
                    <select
                      name="interest"
                      id="interest"
                      defaultValue="GenAI & Tech Bootcamps"
                      style={styles.select}
                    >
                      <option value="GenAI & Tech Bootcamps">GenAI & Tech Bootcamps</option>
                      <option value="Projects">Projects</option>
                    </select>
                    <ValidationError prefix="Interest" field="interest" errors={state.errors} style={styles.errorText} />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Comments / Additional Requirements</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      placeholder="Write your comments, questions, or specific requirements here..."
                      style={styles.textarea}
                    ></textarea>
                    <ValidationError prefix="Comments" field="comments" errors={state.errors} style={styles.errorText} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    style={styles.submitBtn}
                  >
                    {state.submitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  </button>

                  <p style={styles.formFooterNote}>
                    🔒 Direct submission securely handled via Formspree. Your information remains strictly confidential.
                  </p>
                </form>
              </div>
            </div>
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
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '3.5rem',
    alignItems: 'flex-start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoHeading: {
    fontSize: '1.85rem',
    fontWeight: '800',
    color: '#ffffff',
  },
  infoText: {
    color: '#94a3b8',
    lineHeight: '1.7',
    fontSize: '1rem',
    textAlign: 'left',
  },
  infoCard: {
    backgroundColor: '#111e3e',
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    border: '1px solid rgba(56, 189, 248, 0.15)',
  },
  infoIcon: {
    fontSize: '2rem',
  },
  cardHeader: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.2rem',
  },
  cardSub: {
    color: '#94a3b8',
    fontSize: '0.88rem',
  },
  formCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  formCard: {
    backgroundColor: '#111e3e',
    borderRadius: '20px',
    padding: '2.5rem',
    border: '1px solid rgba(255, 153, 51, 0.35)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 153, 51, 0.1)',
  },
  formHeading: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.35rem',
  },
  formSub: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '1.75rem',
  },
  statusBox: {
    padding: '0.85rem 1rem',
    borderRadius: '8px',
    border: '1px solid',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#cbd5e1',
  },
  input: {
    backgroundColor: '#070d1e',
    border: '1px solid rgba(56, 189, 248, 0.25)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
  },
  select: {
    backgroundColor: '#070d1e',
    border: '1px solid rgba(56, 189, 248, 0.25)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
  },
  textarea: {
    backgroundColor: '#070d1e',
    border: '1px solid rgba(56, 189, 248, 0.25)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    resize: 'vertical',
  },
  submitBtn: {
    backgroundColor: '#ff9933',
    color: '#0b1329',
    fontWeight: '800',
    fontSize: '1rem',
    padding: '0.9rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(255, 153, 51, 0.35)',
    marginTop: '0.5rem',
  },
  formFooterNote: {
    color: '#64748b',
    fontSize: '0.8rem',
    textAlign: 'center',
    marginTop: '0.5rem',
  },
  errorText: {
    color: '#f87171',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
  },
};

export default Contact;
