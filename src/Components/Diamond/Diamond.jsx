import React from 'react';

import LinkWithSvg from '../Links/LinkWithSvg';
import SoundPlayer from '../SoundPlayer/SoundPlayer';
import { cricketSong } from "../../Config/audioSources";
import styles from './diamond.module.css';

const Diamond = () => {
  const iconSize = (size = '3em') => size;
  return (
    <div className={styles.diamondContainer}>
      <div className={styles.row}>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <LinkWithSvg to="/" symbolId="snailshell" text="home" /></div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <LinkWithSvg to="/portfolio" symbolId="nippers" text="portfolio" />
        </div>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <LinkWithSvg to="/experience" symbolId="tree" text="experience" />
        </div>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <LinkWithSvg to="/contact" symbolId="paperplane" text="contact" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <SoundPlayer sources={cricketSong} ariaLabel="Push play for soothing nature sounds" />
        </div>
      </div>
    </div>
  );
};

export default Diamond;

// const Diamond = () => {
//   return (
//     <div className={styles.triangleContainer}>
//       <div className={styles.row}>
//         <div className={styles.icon}></div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.icon}></div>
//         <div className={styles.icon}></div>
//         <div className={styles.icon}></div>
//       </div>
//       <div className={styles.row}>
//         <div className={styles.icon}></div>
//       </div>
//     </div>
//   );
// };