// Grass.jsx
import React from 'react';
import styles from './Grass.module.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Grass = () => {
  return (
    <div className={styles.grassContainer}>
      {/* Front Row */}
      <div className={`${styles.row} ${styles.frontRow}`}>
        {Array.from({ length: 45 }, (_, index) => (
          <div
            key={`front-${index}`}
            className={styles.blade}
            style={{
              height: getRandomInt(40, 35), // Random height between 30px and 70px
              marginRight: getRandomInt(1, 2), // Random margin between 1px and 2px
            }}
          />
        ))}
      </div>
      {/* Back Row */}
      <div className={`${styles.row} ${styles.backRow}`}>
        {Array.from({ length: 200 }, (_, index) => (
          <div
            key={`back-${index}`}
            className={`${styles.blade} ${styles.backBlade}`} // Add back-blade class
            style={{
              height: getRandomInt(25, 35), // Random height between 25px and 35px
              marginRight: getRandomInt(2, 3), // Random margin between 2px and 3px
              animationDuration: '10s', // Adjust animation duration for back row
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grass;
