import React from "react";
//import { Link } from "react-router-dom";

// import SoundPlayer from "../SoundPlayer/SoundPlayer";
// import { cricketSong } from "../../Config/audioSources";
// import Svg from "../Svg/Svg";

import styles from "./NavPad.module.css";
import Stars from "../Stars/Stars.jsx";
import Diamond from "../Diamond/Diamond.jsx"
const NavPad  = () => {
  return (
    <div className={styles.navWrapper}>
      <Stars />
     
      <div className={styles.navContainer}>
        <Diamond />
       {/* <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to={"/contact"}>
              <Svg symbolId='paperplane' className={styles.linkSvg} height='2.5em' width='2.5em'></Svg>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={"/experience"} >
              <Svg symbolId='tree' className={styles.linkSvg} height='2.5em' width='2.5em' />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={"/portfolio"} >
              <Svg symbolId='nippers' className={styles.linkSvg} height='2.5em' width='2.5em' />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={"/"} >
              <Svg symbolId='snailshell' className={styles.linkSvg} height='2.5em' width='2.5em' />
            </Link>
          </li>
          <li>
            {<SoundPlayer sources={cricketSong} ariaLabel="Push play for soothing nature sounds" />}
          </li>
        </ul>*/}
      </div> 
    </div>
  )
};

export default NavPad;
