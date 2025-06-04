import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';

const fields = [
  'Any', 'Engineering', 'Arts', 'Medicine', 'Computer Science',
  'Education', 'Law', 'Humanities', 'Science', 'Social Sciences'
];

const institutions = [
  'Any', 'Technion', 'Bezalel', 'Tel Aviv University', 'Hebrew University',
  'Ben-Gurion University', 'Reichman University', 'Haifa University',
  'Ariel University', 'Kibbutzim College', 'Open University', 'Sapir College',
  'Weizmann Institute', 'Bar-Ilan University', 'IDC Herzliya'
];

const financialLevels = ['Any', 'low', 'medium', 'high'];

const Search = () => {
  const [field, setField] = useState('Any');
  const [institution, setInstitution] = useState('Any');
  const [financial, setFinancial] = useState('Any');
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      field,
      institution,
      financial
    }).toString();
    navigate(`/results?${queryParams}`);
  };

  return (
    <div className={styles.searchContainer}>
      <h2>  Search for scholarships by criteria </h2>

      <div className={styles.formGroup}>
        <label> field of study:</label>
        <select value={field} onChange={(e) => setField(e.target.value)}>
          {fields.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label> educational institution:</label>
        <select value={institution} onChange={(e) => setInstitution(e.target.value)}>
          {institutions.map((inst) => <option key={inst} value={inst}>{inst}</option>)}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label> financial need:</label>
        <select value={financial} onChange={(e) => setFinancial(e.target.value)}>
          {financialLevels.map((level) => <option key={level} value={level}>{level}</option>)}
        </select>
      </div>

      <button className={styles.searchButton} onClick={handleSearch}>
        Search for scholarships
      </button>
    </div>
  );
};

export default Search;