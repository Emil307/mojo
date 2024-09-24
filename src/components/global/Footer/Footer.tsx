import React from "react";
import styles from "./styles.module.css";
import { Button } from "../../ui/Button";

export const Footer: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.social}>
        <div className={styles.socialLinks}>
          <a className={styles.socialLink}></a>
          <a className={styles.socialLink}></a>
          <a className={styles.socialLink}></a>
          <a className={styles.socialLink}></a>
          <a className={styles.socialLink}></a>
        </div>
        <div className={styles.socialBg}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.offer}>
          <h3 className={styles.title}>Do you like what you see?</h3>
          <a href="/newproject">
            <Button>Start a project</Button>
          </a>
        </div>
        <div className={styles.linksGroup}>
          <h6 className={styles.linksTitle}>Learn</h6>
          <div className={styles.links}>
            <a className={styles.link}>About</a>
            <a className={styles.link}>Culture</a>
            <a className={styles.link}>Testimonials</a>
            <a className={styles.link}>Processes</a>
            <a className={styles.link}>FAQs</a>
          </div>
        </div>
        <div className={styles.linksGroup}>
          <h6 className={styles.linksTitle}>Explore</h6>
          <div className={styles.links}>
            <a className={styles.link}>Home</a>
            <a className={styles.link}>Work</a>
            <a className={styles.link}>Services</a>
            <a className={styles.link}>Careers</a>
            <a className={styles.link}>Sectors</a>
            <a className={styles.link}>Hex Test</a>
            <a className={styles.link}>Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.linksGroup}>
          <h6 className={styles.linksTitle}>Explore</h6>
          <div className={styles.links}>
            <a className={styles.link}>01942 894 596</a>
            <a className={styles.link}>hello@madebyshape.co.uk</a>
          </div>
        </div>
      </div>
    </div>
  );
};
