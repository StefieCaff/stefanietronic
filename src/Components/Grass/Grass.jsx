// Grass.jsx
import React from 'react';
import styles from './Grass.module.css';

const Grass = () => {
  return (
    <div className={styles.grassContainer}>
      {/* Front Row */}
      {Array.from({ length: 45 }, (_, index) => (
        <div key={`front-${index}`} className={`${styles.blade} ${styles['blade' + (index + 1)]}`} />
      ))}
      {/* Back Row */}
      {Array.from({ length: 45 }, (_, index) => (
        <div key={`back-${index}`} className={`${styles.blade} ${styles['blade' + (index + 1) + 'b']}`} />
      ))}
    </div>
  );
};

export default Grass;
