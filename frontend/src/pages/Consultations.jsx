import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import api from '../services/api';

function Consultations({ user }) {
  const [consultations, setConsultations] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const response = await api.get('/consultations');
      setConsultations(response.data);
    } catch (err) {
      console.error('Error fetching consultations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await api.post('/consultations', formData);
      setConsultations([response.data, ...consultations]);
      setFormData({ date: '', time: '', notes: '' });
      alert('Consultation booked successfully! 🎉');
    } catch (err) {
      alert('Error booking consultation. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Book a Consultation 📅</h1>
        <p style={styles.subtitle}>Schedule a personalized nutrition consultation with our expert dieticians</p>
      </div>

      <div style={styles.content}>
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Schedule Your Session ✨</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <Calendar size={18} /> Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <Clock size={18} /> Preferred Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                style={styles.input}
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM ☀️</option>
                <option value="10:00">10:00 AM ☀️</option>
                <option value="11:00">11:00 AM ☀️</option>
                <option value="14:00">2:00 PM 🌤️</option>
                <option value="15:00">3:00 PM 🌤️</option>
                <option value="16:00">4:00 PM 🌤️</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Additional Notes (Optional) 📝</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your wellness goals or any specific concerns..."
                style={{...styles.input, resize: 'vertical'}}
              />
            </div>

            <button type="submit" style={styles.submitButton} disabled={submitting}>
              {submitting ? 'Booking... ⏳' : 'Book Consultation 🚀'}
            </button>
          </form>
        </div>

        <div style={styles.listSection}>
          <h2 style={styles.sectionTitle}>Your Consultations 📋</h2>
          {loading ? (
            <p style={styles.loadingText}>Loading... ⏳</p>
          ) : consultations.length === 0 ? (
            <p style={styles.emptyState}>No consultations booked yet. Book your first one! 🌟</p>
          ) : (
            <div style={styles.consultationsList}>
              {consultations.map(consultation => (
                <div key={consultation._id} style={styles.consultationCard}>
                  <div style={styles.consultationHeader}>
                    <span style={{
                      ...styles.status,
                      background: consultation.status === 'pending' ? 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                    }}>
                      {consultation.status === 'pending' ? '⏳ Pending' : '✅ Confirmed'}
                    </span>
                    <span style={styles.date}>
                      📅 {new Date(consultation.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p style={styles.time}>
                    <Clock size={16} /> {consultation.time}
                  </p>
                  {consultation.notes && (
                    <p style={styles.notes}>💬 {consultation.notes}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1.1rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  formSection: {
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  listSection: {
    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(240, 147, 251, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    color: '#1f2937',
    fontSize: '1.5rem',
  },
  form: {},
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  input: {
    width: '100%',
    padding: '0.9rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '1rem',
    background: '#fff',
  },
  submitButton: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s',
  },
  consultationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  consultationCard: {
    padding: '1.5rem',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
  },
  consultationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.8rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  status: {
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  date: {
    color: '#6b7280',
    fontWeight: '500',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  notes: {
    color: '#6b7280',
    fontSize: '0.95rem',
    marginTop: '0.8rem',
    padding: '0.8rem',
    background: 'rgba(102, 126, 234, 0.05)',
    borderRadius: '8px',
    borderLeft: '3px solid #667eea',
  },
  emptyState: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '3rem',
    fontSize: '1.1rem',
    background: '#fff',
    borderRadius: '12px',
  },
  loadingText: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '2rem',
  }
};

export default Consultations;