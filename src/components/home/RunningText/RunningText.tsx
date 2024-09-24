import React from "react";
import styles from "./styles.module.css";

export const RunningText: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.enableAnimationLeft}>
        <div className={styles.marquee}>
          <ul className={styles.marqueeContent}>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
          </ul>

          <ul aria-hidden="true" className={styles.marqueeContent}>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
          </ul>
        </div>
      </section>

      <></>

      <section className={styles.enableAnimationRight}>
        <div className={styles.marquee}>
          <ul className={styles.marqueeContent}>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
          </ul>

          <ul aria-hidden="true" className={styles.marqueeContent}>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
            <div className={styles.marqueeItem}>
              <h2 className={styles.text}>Let's work together.</h2>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};
