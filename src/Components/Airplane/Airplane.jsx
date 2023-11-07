import React from 'react';
import styles from './Airplane.module.css';

function Airplane() {
    return (
      <>
    <section id={styles['plane-js']} className={styles['plane-css']}>
      <div className={styles.frame}>
        <div className={styles['plane-container']}>
          <a href="http://customer.io/" target="_blank" rel="noopener noreferrer">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1131.53px"
              height="379.304px"
              viewBox="0 0 1131.53 379.304"
              enableBackground="new 0 0 1131.53 379.304"
              xmlSpace="preserve"
              className={styles.plane}
            >
              <polygon fill="#D8D8D8" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223 " />
              <polygon fill="#C4C4C3" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102 " />
            </svg>
          </a>
        </div>
      </div>
    </section>
    <div id={styles['clouds-js']} className={styles.clouds}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="762px"
        height="331px"
        viewBox="0 0 762 331"
        enableBackground="new 0 0 762 331"
        xmlSpace="preserve"
        className={`${styles.cloud} ${styles.big} ${styles.front} ${styles.slowest}`}
      >
        <path
          fill="#FFFFFF"
          d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
        ></path>
      </svg>
      {/* Add the rest of your cloud SVG elements */}
      <figure>
        <figcaption className={styles.sound}>Optional auditory stimulation</figcaption>
        <audio
          controls
          loop
          aria-label="push play for soothing summer cricket sounds"
          className={styles['sound-controls']}
        >
          <source src="./audio/background-song.aac" type="audio/acc" />
          <source src="./audio/background-sounds.mp3" type="audio/mp3" />
          <source src="./audio/alt-background.ogg" type="audio/ogg" codecs="vorbis" />
          Sorry! Your browser does not support the audio element.
        </audio>
      </figure>
      </div>
    </>
  );
}

export default Airplane;
