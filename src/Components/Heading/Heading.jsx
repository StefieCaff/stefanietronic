import React from 'react';

import styles from './Heading.module.css'

const Heading = ({ heading, subHeading }) => {

    return (
        <div className={styles.headingWrapper}>
            <h1 className={styles.typewriter}>{heading}</h1>
            <h3 className={styles.subHeadingStyle}>{subHeading}</h3>
        </div>
    );
};

export default Heading;
