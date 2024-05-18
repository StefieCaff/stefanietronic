import React from 'react';
import Svg from "../Svg/Svg";
import styles from './Clouds.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const Cloud = () => {
    
    return (
         <div className={styles.footerCloudContainer}>
            <Svg symbolId='cloud' className={styles.footerCloudBackground} />
            <SocialMedia/>
        </div>
    );
};

export default Cloud;

