import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';

const pieData = [
  { name: 'Engineering', value: 400 },
  { name: 'Arts', value: 300 },
  { name: 'Medicine', value: 300 },
  { name: 'Law', value: 200 },
];

const barData = [
  { day: 'Sun', count: 40 },
  { day: 'Mon', count: 120 },
  { day: 'Tue', count: 90 },
  { day: 'Wed', count: 150 },
  { day: 'Thu', count: 200 },
  { day: 'Fri', count: 80 },
  { day: 'Sat', count: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        📊 Dashboard
      </h2>

      <div className={styles.grid}>
        <div className={styles.chartBox}>
          <h4>Breakdown by Field of Study</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartBox}>
          <h4>Daily Search Volume</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h3>📌 Most Popular Scholarships</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Field</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STEM Excellence</td>
            <td>Engineering</td>
            <td>$3,000</td>
          </tr>
          <tr>
            <td>Artistic Talent</td>
            <td>Arts</td>
            <td>$2,500</td>
          </tr>
          <tr>
            <td>Med Scholars</td>
            <td>Medicine</td>
            <td>$4,000</td>
          </tr>
        </tbody>
      </table>

      <button className={styles.backBtn} onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}