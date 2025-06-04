import React, { useState } from 'react';
import styles from './Auth.module.css';

export default function Auth({ setPage }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button className={styles.backBtn} onClick={() => setPage('home')}>←</button>
        <h2 className={styles.underline}>{isSignup ? 'Sign-Up' : 'Login'}</h2>

        {!isSignup ? (
          <>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Connect</button>
            <button className={styles.altBtn}>Forgot Password?</button>
            <button className={styles.altBtn}>Google / Facebook / Microsoft</button>
            <button className={styles.altBtn} onClick={() => setIsSignup(true)}>Sign-Up</button>
          </>
        ) : (
          <>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign up</button>
            <div className={styles.terms}>
              <label>
                <input type="checkbox" /> I accept the Terms of Use
              </label>
            </div>
            <button className={styles.altBtn} onClick={() => setIsSignup(false)}>Back to Login</button>
          </>
        )}
      </div>
    </div>
  );
}