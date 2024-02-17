import React from "react";

import styles from "./NavPad.module.css";
import Stars from "../Stars/Stars.jsx";
import Diamond from "../Diamond/Diamond.jsx"
const NavPad  = () => {
  return (
    <div className={styles.navWrapper}>
      <Diamond />
      <Stars />
    </div>
  )
};

export default NavPad;
