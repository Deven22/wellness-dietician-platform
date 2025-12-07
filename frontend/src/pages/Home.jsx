import { Link } from 'react-router-dom';
import { Target, Heart, TrendingUp, Calendar } from 'lucide-react';

function Home() {
  return (
    <div style={styles.home}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Transform Your Health in 2025 ✨</h1>
          <p style={styles.heroText}>Start your wellness journey with personalized nutrition guidance and expert support</p>
          <div style={styles.heroButtons}>
            <Link to="/signup" style={styles.btnPrimary}>Get Started 🚀</Link>
            <Link to="/nutrition" style={styles.btnSecondary}>Explore Nutrition 🥗</Link>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>Why Choose WellnessPath?</h2>
        <div style={styles.featuresGrid}>
          <div style={{...styles.featureCard, ...styles.card1}}>
            <Target size={40} color="#fff" />
            <h3 style={styles.cardTitle}>Personalized Goals</h3>
            <p style={styles.cardText}>Set and track your unique wellness objectives with our intuitive goal tracking system</p>
          </div>
          <div style={{...styles.featureCard, ...styles.card2}}>
            <Heart size={40} color="#fff" />
            <h3 style={styles.cardTitle}>Expert Guidance</h3>
            <p style={styles.cardText}>Connect with certified dieticians for personalized nutrition consultations</p>
          </div>
          <div style={{...styles.featureCard, ...styles.card3}}>
            <TrendingUp size={40} color="#fff" />
            <h3 style={styles.cardTitle}>Track Progress</h3>
            <p style={styles.cardText}>Monitor your journey with comprehensive progress tracking and insights</p>
          </div>
          <div style={{...styles.featureCard, ...styles.card4}}>
            <Calendar size={40} color="#fff" />
            <h3 style={styles.cardTitle}>Easy Scheduling</h3>
            <p style={styles.cardText}>Book consultations at your convenience with our flexible scheduling system</p>
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Journey? 🌟</h2>
        <p style={styles.ctaText}>Join thousands who have transformed their lives this New Year</p>
        <Link to="/signup" style={styles.btnCta}>Sign Up Now</Link>
      </section>
    </div>
  );
}

const styles = {
  home: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    color: 'white',
    marginBottom: '4rem',
    boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
  },
  heroContent: {},
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  heroText: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.95,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '1rem 2rem',
    borderRadius: '50px',
    background: '#fff',
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.1rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s',
  },
  btnSecondary: {
    padding: '1rem 2rem',
    borderRadius: '50px',
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.1rem',
    border: '3px solid #fff',
    transition: 'all 0.3s',
  },
  features: {
    marginBottom: '4rem',
  },
  featuresTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#1f2937',
    fontWeight: '700',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    padding: '2.5rem',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  card1: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  card2: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  card3: {
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  card4: {
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  cardTitle: {
    color: '#fff',
    fontSize: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  cardText: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  cta: {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    borderRadius: '20px',
    color: '#fff',
    boxShadow: '0 20px 60px rgba(240, 147, 251, 0.3)',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.95,
  },
  btnCta: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    background: '#fff',
    color: '#f5576c',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s',
  }
};

export default Home;