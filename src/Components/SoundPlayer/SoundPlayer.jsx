import React from 'react';
import PropTypes from 'prop-types';
import styles from './SoundPlayer.module.css';
import Svg from '../Svg/Svg';

const SoundPlayer = ({ sources, ariaLabel, className }) => {
  return (
    <figure className={styles.figure}>
      <Svg symbolId='record-player'className={`${styles.recordPlayer} `}/>
      <figcaption className={styles.sound}>
        {ariaLabel}
      
      {sources && sources.length > 0 && (
        <audio controls loop aria-label={ariaLabel} className={className}>
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          Sorry! Your browser does not support the audio element.
          </audio>
        )}
      </figcaption>
    </figure>
  );
};

SoundPlayer.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SoundPlayer;

