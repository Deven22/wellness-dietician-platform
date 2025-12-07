import { useState, useEffect } from 'react';
import { Target, Plus, Check, X } from 'lucide-react';
import api from '../services/api';

function Dashboard({ user }) {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await api.get('/goals');
      setGoals(response.data);
    } catch (err) {
      console.error('Error fetching goals:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGoal = async (e) => {
    e.preventDefault();
    if (!newGoal.trim()) return;

    try {
      const response = await api.post('/goals', { description: newGoal });
      setGoals([...goals, response.data]);
      setNewGoal('');
    } catch (err) {
      console.error('Error adding goal:', err);
    }
  };

  const handleToggleGoal = async (goalId, completed) => {
    try {
      const response = await api.put(`/goals/${goalId}`, { completed: !completed });
      setGoals(goals.map(g => g._id === goalId ? response.data : g));
    } catch (err) {
      console.error('Error updating goal:', err);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      await api.delete(`/goals/${goalId}`);
      setGoals(goals.filter(g => g._id !== goalId));
    } catch (err) {
      console.error('Error deleting goal:', err);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading your wellness journey... 🌟</div>;
  }

  const completedGoals = goals.filter(g => g.completed).length;
  const totalGoals = goals.length;

  return (
    <div style={styles.dashboard}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome back, {user.name}! 👋</h1>
        <p style={styles.subtitle}>Track your wellness goals and monitor your progress</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, ...styles.stat1}}>
          <Target size={40} color="#fff" />
          <h3 style={styles.statNumber}>{totalGoals}</h3>
          <p style={styles.statLabel}>Total Goals</p>
        </div>
        <div style={{...styles.statCard, ...styles.stat2}}>
          <Check size={40} color="#fff" />
          <h3 style={styles.statNumber}>{completedGoals}</h3>
          <p style={styles.statLabel}>Completed</p>
        </div>
        <div style={{...styles.statCard, ...styles.stat3}}>
          <Target size={40} color="#fff" />
          <h3 style={styles.statNumber}>{totalGoals - completedGoals}</h3>
          <p style={styles.statLabel}>In Progress</p>
        </div>
      </div>

      <div style={styles.goalsSection}>
        <h2 style={styles.sectionTitle}>Your Wellness Goals 🎯</h2>
        
        <form onSubmit={handleAddGoal} style={styles.addGoalForm}>
          <input
            type="text"
            placeholder="Add a new goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            <Plus size={20} /> Add Goal
          </button>
        </form>

        <div style={styles.goalsList}>
          {goals.length === 0 ? (
            <p style={styles.emptyState}>No goals yet. Add your first wellness goal above! 🌱</p>
          ) : (
            goals.map(goal => (
              <div key={goal._id} style={{...styles.goalItem, ...(goal.completed ? styles.completedGoal : {})}}>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => handleToggleGoal(goal._id, goal.completed)}
                  style={styles.checkbox}
                />
                <span style={goal.completed ? styles.completedText : styles.goalText}>{goal.description}</span>
                <button onClick={() => handleDeleteGoal(goal._id)} style={styles.deleteBtn}>
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    maxWidth: '1000px',
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  statCard: {
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    color: '#fff',
  },
  stat1: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  stat2: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  stat3: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '1rem 0 0.5rem',
  },
  statLabel: {
    fontSize: '1rem',
    opacity: 0.95,
  },
  goalsSection: {
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    color: '#1f2937',
    fontSize: '1.8rem',
  },
  addGoalForm: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  input: {
    flex: 1,
    padding: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '1rem',
    background: '#fff',
  },
  addButton: {
    padding: '1rem 1.5rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s',
  },
  goalsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  goalItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.2rem',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s',
  },
  completedGoal: {
    opacity: 0.7,
    background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1))',
  },
  goalText: {
    flex: 1,
    fontSize: '1.05rem',
    color: '#1f2937',
  },
  completedText: {
    flex: 1,
    textDecoration: 'line-through',
    color: '#6b7280',
    fontSize: '1.05rem',
  },
  checkbox: {
    width: '22px',
    height: '22px',
    cursor: 'pointer',
    accentColor: '#667eea',
  },
  deleteBtn: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '0.6rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    boxShadow: '0 2px 8px rgba(245, 87, 108, 0.3)',
  },
  emptyState: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '3rem',
    fontSize: '1.1rem',
    background: '#fff',
    borderRadius: '12px',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#667eea',
  }
};

export default Dashboard;