import { Apple, Droplet, Zap, Heart } from 'lucide-react';

function NutritionContent() {
  const articles = [
    {
      id: 1,
      title: "Understanding Macronutrients",
      icon: <Apple size={40} color="#fff" />,
      content: "Learn about proteins, carbohydrates, and fats - the building blocks of nutrition that fuel your body.",
      tips: [
        "Proteins help build and repair tissues",
        "Carbohydrates provide energy for daily activities",
        "Healthy fats support brain function and hormone production"
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: "Hydration & Wellness",
      icon: <Droplet size={40} color="#fff" />,
      content: "Discover why proper hydration is essential for your health and how to maintain optimal fluid balance.",
      tips: [
        "Aim for 8-10 glasses of water daily",
        "Increase intake during exercise",
        "Monitor urine color as a hydration indicator"
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 3,
      title: "Boost Your Metabolism",
      icon: <Zap size={40} color="#fff" />,
      content: "Explore science-backed strategies to enhance your metabolic rate and energy levels naturally.",
      tips: [
        "Eat protein with every meal",
        "Stay active throughout the day",
        "Get adequate sleep (7-9 hours)"
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 4,
      title: "Heart-Healthy Eating",
      icon: <Heart size={40} color="#fff" />,
      content: "Learn how to nourish your cardiovascular system with the right food choices and eating patterns.",
      tips: [
        "Include omega-3 fatty acids",
        "Limit saturated fats and sodium",
        "Eat plenty of fruits and vegetables"
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Nutrition Resources 🥗</h1>
        <p style={styles.subtitle}>Expert-backed information to support your wellness journey</p>
      </div>

      <div style={styles.articlesGrid}>
        {articles.map(article => (
          <div key={article.id} style={{...styles.articleCard, background: article.gradient}}>
            <div style={styles.iconWrapper}>{article.icon}</div>
            <h2 style={styles.articleTitle}>{article.title}</h2>
            <p style={styles.articleContent}>{article.content}</p>
            <div style={styles.tipsSection}>
              <h4 style={styles.tipsTitle}>Key Takeaways:</h4>
              <ul style={styles.tipsList}>
                {article.tips.map((tip, index) => (
                  <li key={index} style={styles.tipItem}>✓ {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.cta}>
        <h2 style={styles.ctaTitle}>Want Personalized Advice? 🎯</h2>
        <p style={styles.ctaText}>Book a consultation with our expert dieticians for customized nutrition plans</p>
        <a href="/consultations" style={styles.ctaButton}>Book Now 🚀</a>
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
    fontWeight: '700',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1.1rem',
  },
  articlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  articleCard: {
    color: '#fff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  iconWrapper: {
    marginBottom: '1.5rem',
  },
  articleTitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  articleContent: {
    marginBottom: '1.5rem',
    opacity: 0.95,
    lineHeight: '1.6',
  },
  tipsSection: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '1.2rem',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
  },
  tipsTitle: {
    marginBottom: '0.8rem',
    fontSize: '1.1rem',
    fontWeight: '700',
  },
  tipsList: {
    listStyle: 'none',
    padding: 0,
  },
  tipItem: {
    marginBottom: '0.6rem',
    opacity: 0.95,
    lineHeight: '1.5',
  },
  cta: {
    textAlign: 'center',
    padding: '4rem 3rem',
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    borderRadius: '20px',
    color: '#fff',
    boxShadow: '0 20px 60px rgba(67, 233, 123, 0.3)',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  ctaText: {
    marginBottom: '2rem',
    opacity: 0.95,
    fontSize: '1.1rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: '#fff',
    color: '#38f9d7',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
  }
};

export default NutritionContent;