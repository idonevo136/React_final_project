import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Scholarship Finder</h1>
      <button className={styles.primaryBtn} onClick={() => navigate('/search')}>
        Search Scholarships
      </button>
    </div>
  );
}

