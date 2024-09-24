import React from "react";
import styles from "./styles.module.css";

export const Intro: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className="">
        <p className={styles.servicesText}>• Services</p>
        <h1 className={styles.title}>
          We’re a digital marketing agency with expertise
        </h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            We bring our passion for good design to brave brands and deliver
            something you can shout about.
          </p>
        </div>
      </div>
    </div>
  );
};
