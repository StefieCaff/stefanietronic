// Grass.jsx
import React, { useEffect, useState } from 'react';
import styles from './Grass.module.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Grass = () => {
  const [bladesPerRow, setBladesPerRow] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const bladeWidth = 35; // Adjust this value as needed
      const newBladesPerRow = Math.floor(containerWidth / bladeWidth);
      setBladesPerRow(newBladesPerRow);
    };

    // Initial calculation
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Conditional rendering to prevent rendering when bladesPerRow is 0
  if (bladesPerRow === 0) {
    return null;
  }

  return (
    <div className={styles.grassContainer}>
      {/* Front Row */}
      <div className={`${styles.row}`}>
        {Array.from({ length: bladesPerRow }, (_, index) => (
          <div
            key={`front-${index}`}
            className={styles.blade}
            style={{
              borderBottomWidth: `${getRandomInt(25, 70)}px`,
              marginRight: `${getRandomInt(0, 2)}px`,
            }}
          />
        ))}
      </div>
      {/* Back Row */}
      <div className={`${styles.row} ${styles.backRow}`}>
        {Array.from({ length: bladesPerRow }, (_, index) => (
          <div
            key={`back-${index}`}
            className={`${styles.blade} ${styles.backBlade}`}
            style={{
              borderBottomWidth: `${getRandomInt(25, 75)}px`,
              marginRight: `${getRandomInt(0, 5)}px`,
              animationDuration: '10s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grass;
