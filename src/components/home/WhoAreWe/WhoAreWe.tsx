import React from "react";
import { Button } from "../../ui/Button";
import teamArrow from "../../../assets/icons/team-arrow.svg";
import styles from "./styles.module.css";

export const WhoAreWe: React.FC = () => {
  return (
    <section className={styles.section}>
      <h6 className={styles.title}>• Who are we?</h6>
      <div className={styles.content}>
        <p className={styles.text}>
          <span className={styles.space}>_____</span> An independent web design
          and branding agency in Manchester set up in 2010 who care, build
          relationships, have industry experience, and win awards.
        </p>
        <div className={styles.buttons}>
          <Button>About Mojo</Button>
          <a href="/team">
            <button className={styles.teamButton}>
              Meet the team
              <div className={styles.arrowWrapper}>
                <img
                  src={teamArrow.src}
                  alt="arrow"
                  className={`${styles.arrow} ${styles.first}`}
                />
                <img
                  src={teamArrow.src}
                  alt="arrow"
                  className={`${styles.arrow} ${styles.second}`}
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
