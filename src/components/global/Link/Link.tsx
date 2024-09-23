import React from "react";
import styles from "./styles.module.css";

interface ILinkProps extends React.PropsWithChildren {
  href: string;
}

export const Link: React.FC<ILinkProps> = ({ children, href }) => {
  return (
    <a href={href} className={styles.underlineLink}>
      {children}
    </a>
  );
};
