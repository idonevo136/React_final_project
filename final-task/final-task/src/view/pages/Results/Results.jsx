import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Results.module.css';
import { useUser } from '../Auth/UserContext';
import { db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import UploadDocumentsModal from '../../component/UploadDocumentsModal/UploadDocumentsModal';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const { user } = useUser();

  const selectedField = queryParams.get('field');
  const selectedInstitution = queryParams.get('institution');
  const selectedFinancial = queryParams.get('financial');

  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/scholarships.json')
      .then((res) => res.json())
      .then((data) => setScholarships(data))
      .catch((error) => console.error('Failed to load scholarships:', error));
  }, []);

  const filteredScholarships = scholarships.filter((s) => {
    const matchField = selectedField === 'Any' || s.field === selectedField;
    const matchInstitution = selectedInstitution === 'Any' || s.institution === selectedInstitution;
    const matchFinancial = selectedFinancial === 'Any' || s.financial === selectedFinancial;
    return matchField && matchInstitution && matchFinancial;
  });

  const handleBack = () => {
    navigate(-1);
  };

  const addToFirestoreList = async (type, scholarship) => {
    if (!user) return;

    const docRef = doc(db, `users/${user.uid}/${type}/${scholarship.id}`);
    await setDoc(docRef, scholarship);
  };

  const handleAddToFavorites = async (scholarship) => {
    if (!user) {
      alert('You must be logged in to add to favorites.');
      return;
    }

    try {
      await addToFirestoreList('favorites', scholarship);
      alert(`the scholarship "${scholarship.title}" Added to favorites!`);
    } catch (error) {
      console.error("Error saving to favorites:", error);
      alert("An error occurred, please try again.");
    }
  };

  const handleApply = (scholarship) => {
    if (!user) {
      alert('You must be logged in to apply.');
      return;
    }

    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  return (
    <div className={styles.resultsContainer}>
      <button className={styles.backButton} onClick={handleBack}>
        → Go back
      </button>
      <h2>Search results</h2>
      {filteredScholarships.length === 0 ? (
        <p>No scholarships were found that match the criteria you selected.</p>
      ) : (
        <div className={styles.cardsGrid}>
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className={styles.card}>
              <h3>{scholarship.title}</h3>
              <p>{scholarship.description}</p>
              <p><strong>institution:</strong> {scholarship.institution}</p>
              <p><strong>field of study:</strong> {scholarship.field}</p>
              <p><strong>financial need :</strong> {scholarship.financial}</p>
              <p><strong>amount:</strong> {scholarship.amount}</p>

              <div className={styles.actions}>
                <button onClick={() => handleAddToFavorites(scholarship)}>💙 Add to favorites</button>
                <button onClick={() => handleApply(scholarship)}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && selectedScholarship && (
        <UploadDocumentsModal
          user={user}
          scholarship={selectedScholarship}
          onClose={() => {
            setShowModal(false);
            setSelectedScholarship(null);
          }}
        />
      )}
    </div>
  );
};

export default Results;
