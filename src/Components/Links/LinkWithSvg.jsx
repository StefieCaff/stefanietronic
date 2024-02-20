import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Svg from '../Svg/Svg';
import styles from './linkWithSvg.module.css';

const LinkWithSvg = ({ to, symbolId, text}) => {
  return (
    <NavLink to={to}
      className={styles.linkContainer}
    ><div className={styles.contentContainer}>
      <div className={styles.iconContainer}>
        <Svg symbolId={symbolId} className={styles.svg} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{text}</p>
      </div></div>
    </NavLink>
  );
};
LinkWithSvg.propTypes = {
  to: PropTypes.string.isRequired,
  symbolId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default LinkWithSvg;

