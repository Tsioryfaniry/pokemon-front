import style from "./Input.module.scss";

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const { type = "text", placeholder, label, onChange, value } = props;
  return (
    <>
      <div className="mb-5 flex flex-col">
        <label className={style.label}>{label}</label>
        <input
          type={type}
          className={style.input}
          placeholder={placeholder}
          onChange={onChange}
          required
          value={value}
        />
      </div>
    </>
  );
}
