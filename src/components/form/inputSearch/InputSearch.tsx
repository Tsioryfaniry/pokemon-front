import { ChangeEventHandler } from "react";
import styles from "./InputSearch.module.scss";

interface InputSearchProps {
  onSubmit?: any;
  setInputValue: (value: string) => void;
}

export default function InputSearch(props: InputSearchProps) {
  const { onSubmit, setInputValue } = props;
  const handleChange = (e: any) => {
    const target = e.target.value;
    setInputValue(target);
  };
  return (
    <div className={styles.search}>
      <form className={styles.search__input} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search pokemon..."
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
