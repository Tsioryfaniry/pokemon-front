import { useEffect, useState } from "react";
import CardType from "../../components/display/card/CardType";
import styles from "./Type.module.scss";

interface TypeListData {
  src: string;
  itemCount: string | number;
  name: string;
}

export default function Type() {
  const [lisData, setListData] = useState<TypeListData[]>([]);

  useEffect(() => {
    setListData([
      { src: "", itemCount: 20, name: "fire" },
      { src: "", itemCount: 20, name: "fire" },
      { src: "", itemCount: 20, name: "fire" },
    ]);
  }, []);
  return (
    <div className={styles.card__list}>
      {lisData.map((item, id) => (
        <CardType
          src={item.src}
          name={item.name}
          count={item.itemCount}
          key={`id-${id}`}
        />
      ))}
    </div>
  );
}
