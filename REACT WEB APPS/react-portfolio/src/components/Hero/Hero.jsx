import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Emmanuel</h1>
        <p className={styles.description}>
          I'm a front-end developer with over 6 years of experience using HTML, CSS and JavaScript; as well as React and
          NodeJS. <p>Reach out if you'd like to learn more!</p>
        </p>
        <a href="https://wa.me/2348067207668?text=Hello%20Emmanuel!%2CI%20am%20interested%20in%20your%20service%20as%20a%20Website%20Developer." className={styles.contactBtn} target="_blank">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/emmanuel-pics.JPG")}
        alt="Developer Picture"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

