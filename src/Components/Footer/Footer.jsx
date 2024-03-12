import React from 'react';
import Grass from '../Grass/Grass'; // Import the Grass component
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Grass /> {/* Include the Grass component */}
    </footer>
  );
};

export default Footer;