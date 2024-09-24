import React from "react";
import styles from "./styles.module.css";
import andy from "../../../assets/images/andy.webp";

export const Island: React.FC = () => {
  return (
    <button className={styles.island}>
      <img className={styles.avatar} src={andy.src} alt="andy" />
      <div className={styles.info}>
        <h5 className={styles.title}>Hear from Andy</h5>
        <p className={styles.role}>Co-founder of Mojo</p>
      </div>
    </button>
  );
};
