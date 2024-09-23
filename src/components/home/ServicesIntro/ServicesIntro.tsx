import React from "react";
import styles from "./styles.module.css";
import brand from "../../../assets/images/brand-small.webp";

const servicesList = [
  {
    id: 1,
    title: "Brand",
    image: <img src={brand.src} className={styles.image}></img>,
  },
  {
    id: 2,
    title: "Brand",
    image: <img src={brand.src} className={styles.image}></img>,
  },
  {
    id: 3,
    title: "Brand",
    image: <img src={brand.src} className={styles.image}></img>,
  },
  {
    id: 4,
    title: "Brand",
    image: <img src={brand.src} className={styles.image}></img>,
  },
];

export const ServicesIntro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}></div>
      <div className={styles.services}>
        {servicesList.map((service) => (
          <a className={styles.service} key={service.id}>
            {service.image}
            <h2 className={styles.title}>{service.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};
