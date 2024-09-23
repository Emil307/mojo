import React from "react";
import styles from "./style.module.css";
import emil from "../../../assets/images/emil.jpg";
import maksim from "../../../assets/images/maksim.jpg";
import border from "../../../assets/icons/border.svg";

const employees = [
  {
    id: 1,
    name: "Maksim",
    role: "Founder",
    avatar: maksim.src,
  },
  {
    id: 2,
    name: "Emil",
    role: "Tech Lead",
    avatar: emil.src,
  },
  {
    id: 3,
    name: "Maksim",
    role: "Founder",
    avatar: maksim.src,
  },
  {
    id: 4,
    name: "Emil",
    role: "Tech Lead",
    avatar: emil.src,
  },
  {
    id: 1,
    name: "Maksim",
    role: "Founder",
    avatar: maksim.src,
  },
  {
    id: 2,
    name: "Emil",
    role: "Tech Lead",
    avatar: emil.src,
  },
  {
    id: 3,
    name: "Maksim",
    role: "Founder",
    avatar: maksim.src,
  },
  {
    id: 4,
    name: "Emil",
    role: "Tech Lead",
    avatar: emil.src,
  },
];

export const Employees: React.FC = () => {
  return (
    <div className={styles.employees}>
      {employees.map((employee) => (
        <div className={styles.employee} key={employee.id}>
          <img
            className={styles.image}
            src={employee.avatar}
            alt={employee.name}
          />

          <div className={styles.infoWrapper}>
            <div>
              <img src={border.src} className={styles.radius} />
              <div className={styles.info}>
                <h5 className={styles.name}>{employee.name}</h5>
                <p className={styles.role}>{employee.role}</p>
              </div>
            </div>
            <img src={border.src} className={styles.radius} />
          </div>
        </div>
      ))}
    </div>
  );
};
