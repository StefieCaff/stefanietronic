import React from 'react';
import { node } from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: node,
};

export default Footer;
