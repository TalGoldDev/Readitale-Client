import React from "react";
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <footer>
        <ul className={styles.navbar}>
          <li>Explore</li>
          <li>Read</li>
          <li>Profile</li>
        </ul>
      </footer>
    </>
  );
};
