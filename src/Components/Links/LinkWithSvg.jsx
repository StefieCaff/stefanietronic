import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';
import styles from './linkWithSvg.module.css';

const LinkWithSvg = ({ to, symbolId, text}) => {
  return (
    <Link to={to} className={styles.linkContainer}>
      <div className={styles.contentContainer}>
        <Svg symbolId={symbolId} className={styles.svg} />
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  );
};

LinkWithSvg.propTypes = {
  to: PropTypes.string.isRequired,
  symbolId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkWithSvg;




