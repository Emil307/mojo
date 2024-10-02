import React from "react";
import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        {...props}
      />
    </>
  );
};
