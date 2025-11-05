import React from "react";
import styles from "./Card.module.scss";

const Card = ({ icon, title, description }) => {
  return (
    <article className={styles.card} role="listitem">
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
