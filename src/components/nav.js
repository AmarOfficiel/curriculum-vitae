import React, { useRef } from "react";
import styles from "@/styles/nav.module.scss";

export default function Nav({ introRef, timelineRef, contactRef, visible }) {
  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav
      className={`${styles.container} ${
        visible === 1
          ? styles.colorFirstAccent
          : visible === 2
          ? styles.colorSecondAccent
          : visible === 3
          ? styles.colorTertiaryAccent
          : styles.colorInactif
      }`}
    >
      <p
        className={` ${styles.links} ${visible === 1 && styles.active}`}
        onClick={() => handleClick(introRef)}
      >
        Home
      </p>
      <p
        className={` ${styles.links} ${visible === 2 && styles.active}`}
        onClick={() => handleClick(timelineRef)}
      >
        History
      </p>
      <p
        className={` ${styles.links} ${visible === 3 && styles.active}`}
        onClick={() => handleClick(contactRef)}
      >
        Contact
      </p>
    </nav>
  );
}
// text-paragraph-medium
