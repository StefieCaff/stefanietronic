import React from 'react';
import styles from './Stars.module.css';

const Stars = () => {
  const renderStarCircles = () => {
    const starCircles = [];
    for (let i = 0; i < 200; ++i) {
      const cx = `${Math.round(Math.random() * 10000) / 100}%`;
      const cy = `${Math.round(Math.random() * 10000) / 100}%`;
      const r = Math.round((Math.random() + 0.5) * 10) / 10;
      starCircles.push(<circle key={i} className={styles.star} cx={cx} cy={cy} r={r} />);
    }
    return starCircles;
  };

  return (
    <>
      {/* Stars */}
      {[1, 2, 3].map((index) => (
        <svg key={index} className={styles.stars}>
          {renderStarCircles()}
        </svg>
      ))}

      {/* Shooting Comets */}
      <svg className={styles.extras}>
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse className={`${styles.comet} ${styles.cometA}`} fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(20)">
          <ellipse className={`${styles.comet} ${styles.cometB}`} fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(300)">
          <ellipse className={`${styles.comet} ${styles.cometC}`} fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2" />
        </g>
      </svg>
    </>
  );
};

export default Stars;
