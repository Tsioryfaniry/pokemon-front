import Loader from "../../general/loader/Loader";
import styles from "./Button.module.scss";
import "./style.scss";
interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  loader?: boolean;
  variant?: "primary" | "danger" | "disable";
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  const {
    label,
    type = "button",
    loader,
    variant = "primary",
    onClick,
  } = props;

  return (
    <div className={`${styles.btn__wrap}`}>
      <button
        type={type}
        className={`${styles.btn} btn--${variant}`}
        onClick={onClick}
      >
        {!loader ? <span>{label}</span> : <Loader />}
      </button>
    </div>
  );
}
