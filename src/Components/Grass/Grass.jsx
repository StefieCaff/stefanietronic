import React, { useEffect, useState } from 'react';

import { debounce } from '../../Utils/utils';
import styles from './Grass.module.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Grass = () => {
  const [bladesPerRow, setBladesPerRow] = useState(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      const containerWidth = window.innerWidth;
      const bladeWidth = 18; // Adjust this value as needed
      const newBladesPerRow = Math.floor(containerWidth / bladeWidth);
      setBladesPerRow(newBladesPerRow);
    }, 200);

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
              borderBottomWidth: `${getRandomInt(50, 100)}px`,
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
              borderBottomWidth: `${getRandomInt(45, 85)}px`,
              marginRight: `${getRandomInt(0, 5)}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grass;
