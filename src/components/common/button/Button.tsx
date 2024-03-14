import styles from "./Button.module.scss";
interface ButtonProps {
  txt: string;
  type?: "button" | "submit";
}
export default function Button(props: ButtonProps) {
  const { txt, type = "button" } = props;
  return (
    <div className={styles.button__wrap}>
      <button type={type} className={styles.button}>
        {txt}
      </button>
    </div>
  );
}
