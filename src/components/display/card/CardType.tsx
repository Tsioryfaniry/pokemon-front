import React from "react";
import styles from "./CardType.module.scss";

interface CardTypeProps {
  src: string;
  name: string;
  count: string | number;
}

export default function Card(props: CardTypeProps) {
  const { src, name, count } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={src} alt="" />
      </div>
      <div className={styles.card__body}>
        <h3>{name}</h3>
        <p>{count} items</p>
      </div>
    </div>
  );
}
