import React from 'react';
import PropTypes from 'prop-types';
import styles from './SoundPlayer.module.css';

const SoundPlayer = ({ sources, ariaLabel, className }) => {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.sound}>
        {ariaLabel}
      </figcaption>
      {sources && sources.length > 0 && (
        <audio controls loop aria-label={ariaLabel} className={className}>
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          Sorry! Your browser does not support the audio element.
        </audio>
      )}
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

