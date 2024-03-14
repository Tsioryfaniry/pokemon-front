import style from "./Button.module.scss";
interface ButtonProps {
  txt: string;
}
export default function Button(props: ButtonProps) {
  const { txt } = props;
  return (
    <div>
      <button type="submit" className={style.button}>
        {txt}
      </button>
    </div>
  );
}
