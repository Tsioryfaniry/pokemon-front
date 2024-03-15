import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  size?: number;
}

export default function Loader(props: LoaderProps) {
  const { size = 20 } = props;
  return (
    <div>
      <div
        className={styles.loader}
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
    </div>
  );
}
