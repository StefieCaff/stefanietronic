import React from 'react';

import LinkWithSvg from '../Links/LinkWithSvg';
import SoundPlayer from '../SoundPlayer/SoundPlayer';
import { cricketSong } from "../../Config/audioSources";
import styles from './diamond.module.css';

const Diamond = () => {
  const iconSize = (size = '2.8em') => size;
  return (
    <div className={styles.diamondContainer}>
      <div className={styles.row}>
        <div className={styles.icon} style={{ width: iconSize(), height: iconSize() }}>
          <LinkWithSvg to="/" symbolId="snailshell" text="home"></LinkWithSvg>
        </div>
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


//<ul className={styles.navList}>
//          <li className={styles.navItem}>
 //           <Link to={"/contact"}>
 //             <Svg symbolId='paperplane' className={styles.linkSvg} height='2.5em' width='2.5em'></Svg>
//            </Link>
//          </li>
//         <li className={styles.navItem}>
 //           <Link to={"/experience"} >
 //             <Svg symbolId='tree' className={styles.linkSvg} height='2.5em' width='2.5em' />
 //           </Link>
 //         </li>
 //         <li className={styles.navItem}>
 //           <Link to={"/portfolio"} >
 //             <Svg symbolId='nippers' className={styles.linkSvg} height='2.5em' width='2.5em' />
 //           </Link>
        //   </li>
        //   <li className={styles.navItem}>
        //     <Link to={"/"} >
        //       <Svg symbolId='snailshell' className={styles.linkSvg} height='2.5em' width='2.5em' />
        //     </Link>
        //   </li>
        //   <li>
        //     {<SoundPlayer sources={cricketSong} ariaLabel="Push play for soothing nature sounds" />}
        //   </li>
        // </ul>