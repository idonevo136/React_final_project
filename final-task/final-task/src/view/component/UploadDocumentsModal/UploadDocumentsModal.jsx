import React, { useState } from 'react';
import styles from './UploadDocumentsModal.module.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const REQUIRED_DOCS = [
  { key: 'studentCertificate', label: 'Student ID card' },
  { key: 'incomeProof', label: 'Income certificate' },
  { key: 'idOrPassport', label: 'ID card or passport' }
];

export default function UploadDocumentsModal({ user, scholarship, onClose }) {
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState([]);

  const handleFileDrop = (e, key) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setFiles(prev => ({ ...prev, [key]: file }));
      setErrors(prev => prev.filter(err => err !== key));
    } else {
      alert("Only PDF files can be uploaded.");
    }
  };

  const handleSubmit = async () => {
    console.log("📤 Start sending for the scholarship:", scholarship?.title);
    console.log("👤 User UID:", user?.uid);
    console.log("📁 Selected files:", files);

    const missing = REQUIRED_DOCS.filter(doc => !files[doc.key]).map(doc => doc.key);
    if (missing.length > 0) {
      setErrors(missing);
      alert("All required documents must be uploaded before submission.");
      return;
    }

    try {
      const storage = getStorage();
      const uploadPromises = REQUIRED_DOCS.map(async ({ key }) => {
        const file = files[key];
        const fileRef = ref(storage, `applications/${user.uid}/${scholarship.id}/${key}.pdf`);
        console.log("📦 Upload file:", key, "For the path:", fileRef.fullPath);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        console.log("✅ The file has been uploaded. URL:", url);
        return { [key]: url };
      });

      const uploaded = Object.assign({}, ...(await Promise.all(uploadPromises)));

      const docRef = doc(db, `users/${user.uid}/pending/${scholarship.id}`);
     await setDoc(docRef, {
  ...scholarship,              
  uploadedAt: new Date(),      
  files: uploaded              
});

      alert(`Scholarship Application"${scholarship.title}" sent successfully!`);
      onClose();
    } catch (err) {
      console.error("❌ Error uploading or saving:", err);
      alert("An error occurred while uploading the files. Please try again.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Uploading required documents</h2>

        {REQUIRED_DOCS.map(({ key, label }) => (
          <div
            key={key}
            className={`${styles.dropZone} ${errors.includes(key) ? styles.error : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleFileDrop(e, key)}
          >
            <p>{label} 📄</p>
            {files[key] && <span>{files[key].name}</span>}
          </div>
        ))}

        <button className={styles.submitBtn} onClick={handleSubmit}>Submit application</button>
        <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}