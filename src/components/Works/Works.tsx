import React from "react";
import emplyflow from "../../assets/images/emplyflow.jpg";
import border from "../../assets/icons/border.svg";
import styles from "./styles.module.css";

const works = [
  {
    id: 1,
    title: "AI web application for manage human resouces",
    year: "2023",
    client: "Emplyflow",
    image: (
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${emplyflow.src})` }}
      ></div>
    ),
    tags: [
      {
        id: 2,
        title: "UX/UI",
      },
      {
        id: 1,
        title: "Website",
      },
    ],
  },
  {
    id: 2,
    title: "AI web application for manage human resouces",
    year: "2023",
    client: "Emplyflow",
    image: (
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${emplyflow.src})` }}
      ></div>
    ),
    tags: [
      {
        id: 2,
        title: "UX/UI",
      },
      {
        id: 1,
        title: "Website",
      },
    ],
  },
];

export const Works: React.FC = () => {
  return (
    <div className={styles.works}>
      {works.map((work: any) => (
        <a className={styles.work} key={work.id}>
          <div className={styles.tagsWrapper}>
            <div className={styles.top}>
              <img src={border.src} />
              <div className={styles.tags}>
                {work.tags.map((tag: any) => (
                  <div className={styles.tag} key={tag.id}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bottom}>
              <img src={border.src} />
            </div>
          </div>
          {work.image}
          <p className={styles.info}>
            {work.year} • {work.client}
          </p>
          <h3 className={styles.title}>{work.title}</h3>
        </a>
      ))}
    </div>
  );
};
