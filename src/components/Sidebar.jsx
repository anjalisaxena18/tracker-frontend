import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Tracker Dashboard</h2>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/screenshots" style={styles.link}>Screenshots</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    position: 'relative',
  },
  title: {
    fontSize: '20px',
    margin: '20px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '10px 0',
  },
};

export default Sidebar;
