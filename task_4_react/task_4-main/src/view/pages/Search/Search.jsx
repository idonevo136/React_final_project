import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

export default function Search() {
  const [field, setField] = useState("");
  const [financial, setFinancial] = useState("");
  const [institution, setInstitution] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Scholarships</h2>
      <div className={styles.form}>
        <input placeholder="Field of Study" value={field} onChange={(e) => setField(e.target.value)} />
        <input placeholder="Financial Status" value={financial} onChange={(e) => setFinancial(e.target.value)} />
        <input placeholder="Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn} onClick={() => navigate("/results")}>Search</button>
          <button className={styles.secondaryBtn} onClick={() => navigate("/")}>Back Home</button>
        </div>
      </div>
    </div>
  );
}