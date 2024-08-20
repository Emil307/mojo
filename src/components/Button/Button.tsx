import React from "react";
import styles from "./styles.module.css";
import arrow from "../../assets/icons/arrow.svg";

interface IButtonProps extends React.PropsWithChildren {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.rectangle}>
        <p className={styles.text}>{children}</p>
      </div>
      <div className={styles.circle}>
        <img className={styles.arrow} src={arrow.src} alt="arrow" />
      </div>
    </button>
  );
};
