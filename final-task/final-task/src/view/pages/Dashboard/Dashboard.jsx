import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import styles from './Dashboard.module.css';
import { useUser } from '../Auth/UserContext';
import { db } from '../../../firebase';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const Dashboard = () => {
  const { user } = useUser();
  const [favorites, setFavorites] = useState([]);
  const [pending, setPending] = useState([]);

  const financialData = [
    { level: 'Low', count: 23 },
    { level: 'Medium', count: 16 },
    { level: 'High', count: 11 },
  ];

  const fieldData = [
  { field: 'Engineering', value: 6 },
  { field: 'Computer Science', value: 6 },
  { field: 'Education', value: 6 },
  { field: 'Social Sciences', value: 6 },
  { field: 'Arts', value: 5 },
  { field: 'Medicine', value: 5 },
  { field: 'Law', value: 5 },
  { field: 'Humanities', value: 5 },
  { field: 'Science', value: 5 },
  { field: 'Any', value: 5 },
];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA46BE', '#C2185B', '#1976D2', '#4CAF50', '#00ACC1', '#8D6E63'];

  const popularScholarships = [
    { amount: '$3,000', field: 'Engineering', name: 'STEM Excellence' },
    { amount: '$2,500', field: 'Arts', name: 'Artistic Talent' },
    { amount: '$4,000', field: 'Medicine', name: 'Med Scholars' },
  ];

  useEffect(() => {
    if (!user) return;

    const favoritesRef = collection(db, `users/${user.uid}/favorites`);
    const pendingRef = collection(db, `users/${user.uid}/pending`);

    const unsubscribeFavorites = onSnapshot(favoritesRef, (snapshot) => {
      const favoritesData = snapshot.docs.map(doc => doc.data());
      setFavorites(favoritesData);
    }, (err) => console.error('Error getting real-time favorites:', err));

    const unsubscribePending = onSnapshot(pendingRef, (snapshot) => {
      const pendingData = snapshot.docs.map(doc => doc.data());
      setPending(pendingData);
    }, (err) => console.error('Error receiving Pending in real time:', err));

    return () => {
      unsubscribeFavorites();
      unsubscribePending();
    };
  }, [user]);

  const removeFromList = async (type, scholarshipId) => {
    try {
      await deleteDoc(doc(db, `users/${user.uid}/${type}/${scholarshipId}`));
    } catch (err) {
      console.error("Error deleting scholarship:", err);
    }
  };

  if (!user) {
    return <p style={{ padding: '2rem' }}>You must log in to view your personal dashboard.</p>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.topLeft}>
        <h3 className={styles.cardTitle}>Static bar graph by financial need</h3>
        <BarChart width={400} height={300} data={financialData}>
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#90cd94" />
        </BarChart>
      </div>

      <div className={styles.topRight}>
        <h3 className={styles.cardTitle}>Static pie chart by field of study</h3>
        <PieChart width={400} height={300}>
          <Pie data={fieldData} dataKey="value" nameKey="field" cx="50%" cy="50%" outerRadius={90}>
            {fieldData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="middle" align="right" layout="vertical" />
          <Tooltip />
        </PieChart>
      </div>

      <div className={styles.bottomLeft}>
        <h3 className={styles.cardTitle}>Personal Scholarship Lists</h3>
        <div className={styles.listSection}>
          <h4>💙 Favorites</h4>
          <ul className={styles.placeholderList}>
            {favorites.length > 0 ? (
              favorites.map((s, i) => (
                <li key={i}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeFromList('favorites', s.id)}
                  >
                    ❌
                  </button>
                  {s.title}
                </li>
              ))
            ) : (
              <li>— No favorites yet —</li>
            )}
          </ul>

          <h4>🕒 Awaiting approval</h4>
          <ul className={styles.placeholderList}>
            {pending.length > 0 ? (
              pending.map((s, i) => (
                <li key={i}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeFromList('pending', s.id)}
                  >
                    ❌
                  </button>
                  {s.title}
                </li>
              ))
            ) : (
              <li>— No scholarships pending —</li>
            )}
          </ul>

          <h4>✅ Approved</h4>
          <ul className={styles.placeholderList}>
            <li>— To be added later —</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRight}>
        <h3 className={styles.tableTitle}>Most Popular Scholarships <span>📌</span></h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Field</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {popularScholarships.map((s, i) => (
              <tr key={i}>
                <td>{s.amount}</td>
                <td>{s.field}</td>
                <td>{s.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;