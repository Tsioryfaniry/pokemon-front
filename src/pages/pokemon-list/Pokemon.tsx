import { useEffect, useState } from "react";
import CardPokemon from "../../components/display/pokemon/CardPokemon";
import styles from "./Pokemon.module.scss";

interface ListDataType {
  name: string;
  url: string;
}

import PokemonService from "../../service/pokemon";
export default function Pokemon() {
  const [listData, setListData] = useState<ListDataType[]>([]);

  const getData = async () => {
    const res = await PokemonService.getList();
    setListData(res.data.data.results);
  };
  console.log(listData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.pokemon__list}>
        {listData.map((item) => (
          <CardPokemon
            key={item.name}
            name={item.name}
            catche={true}
            release={false}
          />
        ))}
      </div>
    </>
  );
}
