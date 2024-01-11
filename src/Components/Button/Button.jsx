import React from 'react';
import styles from './Button.module.css'
function Button() {
    return (
        
            <div className={styles.buttonContainer}>
            <div>
                <button className={styles.btn} type="button" aria-label="next-page">questions</button>
            </div>
        </div>
    )
}

export default Button;