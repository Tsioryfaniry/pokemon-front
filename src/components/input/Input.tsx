import { InputProps } from "../../interface/interface";
import style from "./input.module.scss";
export default function Input({ placeholder, label, type }: InputProps) {
  return (
    <>
      <div className="mb-5 flex flex-col">
        <label className={style.input}>{label}</label>
        <input
          type={type}
          className={style.label}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
