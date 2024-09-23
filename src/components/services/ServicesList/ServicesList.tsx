import React from "react";
import styles from "./styles.module.css";

const services = [
  {
    id: 1,
    title: "Design",
    description:
      "Brand designers and web designers in-house crafting visuals to match your brand values.",
    parts: [
      {
        id: 1,
        title: "Web Development",
      },
      {
        id: 2,
        title: "Craft CMS",
      },
      {
        id: 3,
        title: "Shopify",
      },
      {
        id: 4,
        title: "Craft Commerce",
      },
      {
        id: 5,
        title: "eCommerce",
      },
      {
        id: 6,
        title: "Technical SEO",
      },
    ],
  },
  {
    id: 2,
    title: "Develop",
    description:
      "Web development to the highest standards, and matching the latest industry requirements.",
    parts: [
      {
        id: 1,
        title: "Web Development",
      },
      {
        id: 2,
        title: "Craft CMS",
      },
      {
        id: 3,
        title: "Shopify",
      },
      {
        id: 4,
        title: "Craft Commerce",
      },
      {
        id: 5,
        title: "eCommerce",
      },
      {
        id: 6,
        title: "Technical SEO",
      },
    ],
  },
  {
    id: 3,
    title: "Support",
    description:
      "Web development to the highest standards, and matching the latest industry requirements.",
    parts: [
      {
        id: 1,
        title: "Web Development",
      },
      {
        id: 2,
        title: "Craft CMS",
      },
      {
        id: 3,
        title: "Shopify",
      },
      {
        id: 4,
        title: "Craft Commerce",
      },
      {
        id: 5,
        title: "eCommerce",
      },
      {
        id: 6,
        title: "Technical SEO",
      },
    ],
  },
];

export const ServicesList: React.FC = () => {
  return (
    <div className={styles.services}>
      {services.map((service) => (
        <div className={styles.service} key={service.id}>
          <h2 className={styles.title}>{service.title}</h2>
          <div className={styles.content}>
            <p className={styles.text}>{service.description}</p>
            <div className={styles.parts}>
              {service.parts.map((part) => (
                <div className={styles.part} key={part.id}>
                  <p className={styles.number}>0{part.id}</p>
                  <p>{part.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
