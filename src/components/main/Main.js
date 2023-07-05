import React from "react";
import styles from "./Main.module.css";
import costOptimization from "../../images/costOptimization.png";
import timeToMarker from "../../images/timeToMarker.png";
import enhanceBusinessAgility from "../../images/enhanceBusinessAgility.png";
import facilitatingTaskManagement from "../../images/facilitatingTaskManagement.png";

const cardsDate = [
  { id: 10, image: costOptimization, title: "cost" },
  { id: 20, image: timeToMarker, title: "time" },
  { id: 30, image: enhanceBusinessAgility, title: "enhance" },
  { id: 40, image: facilitatingTaskManagement, title: "facilitating" },
];
export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.headingTitle}>Value Proposition</h1>
      <p className={styles.messageContent}>
        Stract gathers and trains professionals working in the technological
        industry with respect to the different aspects required to manage a
        project.
      </p>
      <div className={styles.cardsGrid}>
        {cardsDate.map((singleCard) => (
          <div className={styles.cardItem}>
            <img
              key={singleCard.id}
              src={singleCard.image}
              alt={singleCard.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
