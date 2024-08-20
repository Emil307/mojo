import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { Link } from "../Link";

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
          <Link href="#">Services</Link>
          <Link href="#">Work</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className={styles.button}>
          <Button>Start a project</Button>
        </div>
      </div>
    </header>
  );
};
