import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Results.module.css";

export default function Results() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Results</h2>
      <div className={styles.result}>
        <h3>Scholarship A</h3>
        <button onClick={() => navigate("/details")} className={styles.primaryBtn}>View Details</button>
      </div>
      <div className={styles.result}>
        <h3>Scholarship B</h3>
        <button onClick={() => navigate("/details")} className={styles.primaryBtn}>View Details</button>
      </div>
      <button className={styles.secondaryBtn} onClick={() => navigate("/search")}>Back to Search</button>
    </div>
  );
}