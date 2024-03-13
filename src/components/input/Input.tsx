import style from "./input.module.scss";

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
}

export default function Input(props: InputProps) {
  const { type, placeholder, label } = props;
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
