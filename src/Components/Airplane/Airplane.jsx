import React from 'react';
import styles from './Airplane.module.css';
import Svg from '../Svg/Svg';
import { Link, useNavigate} from 'react-router-dom';

function Airplane() {

   const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the sticky note page with the desired state console.log("Link clicked0");
   navigate('/sticky-note', { state: { accessedByLink: true } });
  };
    return (
      <>
    <section id={styles['plane-js']} className={styles['plane-css']}>
      <div className={styles.frame}>
        <div className={styles['plane-container']}>
          <Link to="/sticky-note" onClick={handleClick}>
            <Svg symbolId="airplane" className={styles.plane}/>
          </Link>
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
