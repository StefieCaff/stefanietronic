// Snail.jsx
import React from 'react';
import styles from './Snail.module.css';
import Svg from '../Svg/Svg';

const Snail = () => {
    return (
        <div className={styles.tabContainer} tabIndex="0">
            <div className={styles.coverContainer}>
                <Svg symbolId="universe" className={styles.cover} />
            </div>
            <div className={styles.snailContainer}>
                <Svg symbolId="slug" className={styles.snail} />
            </div>
        </div>
    );
};

export default Snail;
