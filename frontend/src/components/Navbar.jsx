import { Link } from 'react-router-dom';
import { User, LogOut, Home, BookOpen, Calendar } from 'lucide-react';

function Navbar({ user, onLogout }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          🥗 WellnessPath
        </Link>
        
        <div style={styles.menu}>
          <Link to="/" style={styles.link}>
            <Home size={18} /> Home
          </Link>
          <Link to="/nutrition" style={styles.link}>
            <BookOpen size={18} /> Nutrition
          </Link>
          
          {user ? (
            <>
              <Link to="/consultations" style={styles.link}>
                <Calendar size={18} /> Consultations
              </Link>
              <Link to="/dashboard" style={styles.link}>
                <User size={18} /> Dashboard
              </Link>
              <button onClick={onLogout} style={{...styles.link, ...styles.logoutBtn}}>
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.linkBtn}>Login</Link>
              <Link to="/signup" style={styles.button}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  menu: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
  },
  linkBtn: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    transition: 'all 0.3s',
    background: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid #fff',
    fontSize: '1rem',
    fontWeight: '600',
  },
  button: {
    background: '#fff',
    color: '#667eea',
    padding: '0.6rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'all 0.3s',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  logoutBtn: {
    background: 'rgba(239, 68, 68, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
  }
};

export default Navbar;