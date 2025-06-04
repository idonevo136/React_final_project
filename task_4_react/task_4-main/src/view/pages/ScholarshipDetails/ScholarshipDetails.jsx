import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ScholarshipDetails.module.css';

export default function ScholarshipDetails() {
  const navigate = useNavigate();

  return (
    <div className={styles.details}>
      <h2>Scholarship Details</h2>
      <p>Detailed information about the selected scholarship.</p>
      <button className={styles.primaryBtn}>Apply</button>
      <button className={styles.secondaryBtn} onClick={() => navigate('/results')}>
        Back to Results
      </button>
    </div>
  );
}
