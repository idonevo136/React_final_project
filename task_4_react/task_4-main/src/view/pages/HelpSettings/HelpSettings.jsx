import React from 'react';
import styles from './HelpSettings.module.css';

export default function HelpSettings() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Help & Settings</h2>

      <div className={styles.section}>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>How do I apply for a scholarship?</li>
          <li>Can I apply for multiple scholarships?</li>
          <li>When will I get a response?</li>
          <li>What documents do I need to submit?</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>User Settings</h3>
        <ul>
          <li><a href="#">Update Personal Information</a></li>
          <li><a href="#">Change Email or Password</a></li>
          <li><a href="#">Notification Preferences</a></li>
          <li><a href="#">Privacy Settings</a></li>
        </ul>
      </div>
    </div>
  );
}
