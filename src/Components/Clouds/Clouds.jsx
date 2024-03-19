import React from 'react';
import Svg from "../Svg/Svg";
import styles from './Clouds.module.css';

const Clouds = ({ speed }) => {
    let cloudClass, slowClass, slowerClass, slowestClass, superSlowClass;

    switch (speed) {
        case 'Speed2':
            cloudClass = styles.cloudSpeed2;
            slowClass = styles.slowSpeed2;
            slowerClass = styles.slowerSpeed2;
            slowestClass = styles.slowestSpeed2;
            superSlowClass = styles.superSlowSpeed2;
            break;
        default:
            cloudClass = styles.cloudSpeed1;
            slowClass = styles.slowSpeed1;
            slowerClass = styles.slowerSpeed1;
            slowestClass = styles.slowestSpeed1;
            superSlowClass = styles.superSlowSpeed1;
            break;
    }

    return (
         <div id={styles['clouds-js']} className={styles.clouds}>
            <Svg symbolId="cloud1" className={`${cloudClass} ${styles.cloud} ${styles.big} ${styles.front} ${slowestClass}`}/>
            <Svg symbolId="cloud2" className={`${cloudClass} ${styles.cloud} ${styles.distant} ${styles.smaller} ${slowestClass}`} />
            <Svg symbolId="cloud3" className={`${cloudClass} ${styles.cloud} ${styles.small} ${slowClass}`} />
            <Svg symbolId="cloud4" className={`${cloudClass} ${styles.cloud} ${styles.distant} ${styles.massive} ${superSlowClass}`} />
            <Svg symbolId="cloud5" className={`${cloudClass} ${styles.cloud} ${slowerClass}`} />
        </div>
    );
};

export default Clouds;

