import React, { FormEvent, ReactNode } from "react";
import styles from "./Register.module.scss";
import Button from "../button/Button";

interface RegisterProps {
  children: ReactNode;
  onSubmit?: (e: any) => void;
  title: string;
  loader?: boolean;
}

export default function Register(props: RegisterProps) {
  const { children, onSubmit, title, loader } = props;
  return (
    <div className={styles.register}>
      <h2>{title}</h2>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        {children}
        <Button label={title} type="submit" loader={loader} />
      </form>
    </div>
  );
}
