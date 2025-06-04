import React, { useState } from 'react';
import styles from './HelpSettings.module.css';

const faqs = [
  {
    question: 'How do I apply for a scholarship?',
    answer: 'To apply for a scholarship, go to the Results page and click the Apply button. Follow the instructions and submit any required documents.'
  },
  {
    question: 'Can I apply for multiple scholarships?',
    answer: 'Yes, you can apply to as many scholarships as you are eligible for. Make sure to meet the requirements of each one.'
  },
  {
    question: 'When will I get a response?',
    answer: 'Response times vary. You will usually receive a reply within 2-4 weeks after applying.'
  },
  {
    question: 'What documents do I need to submit?',
    answer: 'All scholarships require three mandatory documents: a valid student certificate, proof of income, and a copy of your ID or passport. You must upload all three to submit your application.'
  },
];

export default function HelpSettings() {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Help & Settings</h2>

      <div className={styles.section}>
        <h3>Frequently Asked Questions</h3>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} onClick={() => setSelectedFAQ(faq)} className={styles.clickable}>
              {faq.question}
            </li>
          ))}
        </ul>
      </div>

      {selectedFAQ && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>{selectedFAQ.question}</h4>
            <p>{selectedFAQ.answer}</p>
            <button className={styles.closeButton} onClick={() => setSelectedFAQ(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}