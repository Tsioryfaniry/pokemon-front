import React from "react";
import styles from "./CardType.module.scss";

interface CardTypeProps {
  name: string;
  onClicke: any;
}

export default function Card(props: CardTypeProps) {
  const { name, onClicke } = props;
  return (
    <div className={styles.card} onClick={onClicke}>
      <div className={styles.card__img}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
