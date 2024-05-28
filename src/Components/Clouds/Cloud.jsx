import React from 'react';
import Svg from "../Svg/Svg";
import styles from './Clouds.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const Cloud = () => {
    
    return (
        <>
            <div className={styles.footerCloudBackground}></div>
            <div className={styles.footerCloudLayer}>
                <Svg symbolId='cloud2' className={styles.footerCloud1} />
                <Svg symbolId='cloud2' className={styles.footerCloud2} />
                <Svg symbolId='cloud2' className={styles.footerCloud3} />
                <Svg symbolId='cloud2' className={styles.footerCloud4} />
                <Svg symbolId='cloud2' className={styles.footerCloud5} />
                <Svg symbolId='cloud2' className={styles.footerCloud6} /></div>
         <div className={styles.footerCloudSocials}>
            <Svg symbolId='cloud2'/>
            <SocialMedia/>
            </div>
        </>
    );
};

export default Cloud;

