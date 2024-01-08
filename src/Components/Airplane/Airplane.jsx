import React from 'react';
import styles from './Airplane.module.css';
import Svg from '../Svg/Svg';

function Airplane() {
    return (
      <>
    <section id={styles['plane-js']} className={styles['plane-css']}>
      <div className={styles.frame}>
        <div className={styles['plane-container']}>
          <a href="http://customer.io/" target="_blank" rel="noopener noreferrer">
            <Svg symbolId="airplane" className={styles.plane}/>
          </a>
        </div>
      </div>
    </section>
    <div id={styles['clouds-js']} className={styles.clouds}>
      <Svg
        symbolId="cloud1"
        className={`${styles.cloud} ${styles.big} ${styles.front} ${styles.slowest}`}
          />
      <Svg symbolId="cloud2"  className={`${styles.cloud} ${styles.distant} ${styles.smaller}`}/>
      <Svg symbolId="cloud3" className={`${styles.cloud} ${styles.small} ${styles.slow}`}/>
      <Svg symbolId="cloud4" className={`${styles.cloud} ${styles.distant} ${styles.superSlow} ${styles.massive}`}/>
      <Svg symbolId="cloud5" className={`${styles.cloud} ${styles.slower}`}/>
    </div>
    </>
  );
}

export default Airplane;
