import React, { FormEvent, ReactNode } from "react";
import styles from "./Register.module.scss";
import Button from "../button/Button";

interface RegisterProps {
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLInputElement>) => void;
  title: string;
}

export default function Register(props: RegisterProps) {
  const { children, onSubmit, title } = props;
  return (
    <div className={styles.register}>
      <h2>{title}</h2>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        {children}
        <Button txt={title} type="submit" />
      </form>
    </div>
  );
}
