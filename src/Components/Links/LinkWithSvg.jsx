import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Svg from '../Svg/Svg';
import styles from './linkWithSvg.module.css';

const LinkWithSvg = ({ to, symbolId, text}) => {
  return (
    <Link to={to} className={styles.linkContainer} activeClassName={styles.active}>
      <div className={styles.contentContainer}>
        <div className={styles.iconContainer}>
          <Svg symbolId={symbolId} className={styles.svg} />
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

LinkWithSvg.propTypes = {
  to: PropTypes.string.isRequired,
  symbolId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkWithSvg;




