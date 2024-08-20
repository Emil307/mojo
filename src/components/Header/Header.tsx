import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Header = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isIsland, setIsIsland] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    const callback = () => {
      if (window.pageYOffset > 0) {
        setIsIsland(true);
        return;
      }
      setIsIsland(false);
      return;
    };

    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  }, [isMounted]);

  return (
    <header className={styles.section}>
      <div className={`${styles.content} ${isIsland && styles.island}`}>
        <h2>Mojo.</h2>
        <div className={styles.links}>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.button}>
          <button className={styles.start}>Start a project</button>
        </div>
      </div>
    </header>
  );
};
