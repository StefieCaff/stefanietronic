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
    <div id={styles['plane-js']} className={styles['plane-css']}>
      <div className={styles.frame}>
        <div className={styles['plane-container']}>
          <Link to="/sticky-note" onClick={handleClick}>
            <Svg symbolId="homePaperplane" className={styles.plane}/>
          </Link>
        </div>
      </div>
        </div>
    </>
  );
}

export default Airplane;
