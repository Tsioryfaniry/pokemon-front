import Loader from "../../general/loader/Loader";
import styles from "./Button.module.scss";
interface ButtonProps {
  txt: string;
  type?: "button" | "submit";
  loader?: boolean;
}
export default function Button(props: ButtonProps) {
  const { txt, type = "button", loader } = props;

  return (
    <div className={styles.button__wrap}>
      <button type={type} className={styles.button}>
        {!loader ? <span>{txt}</span> : <Loader />}
      </button>
    </div>
  );
}
