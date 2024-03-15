import { useEffect, useState } from "react";
import CardType from "../../components/display/card/CardType";
import "./styles.scss";
import PokemonService from "../../service/pokemon";
import Loader from "../../components/general/loader/Loader";

interface TypeListData {
  name: string;
  url: string | number;
  src: string;
  itemCount: number;
}

interface TypeListPokemon {
  name: string;
  pokemon: any;
  url: string;
}

export default function Type() {
  const [lisData, setListData] = useState<TypeListData[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [listPokemon, setListPokemon] = useState<TypeListPokemon[]>([]);
  const [type, setType] = useState<string>("");
  const [isLoadingType, setIsLoadingType] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getData = async () => {
    const res = await PokemonService.getListType();
    setListData(res.data.results);
    setIsLoading(false);
  };
  const handleClick = async (id: number, name: string) => {
    setIsActive(true);
    setIsLoadingType(true);
    const res = await PokemonService.getItemType(id);
    setListPokemon(res.data.pokemon);
    setIsLoadingType(false);
    setType(name);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="loader__type">
          <Loader size={70} />
        </div>
      ) : (
        <div className="card__list">
          {lisData.map((item, id) => (
            <CardType
              name={item.name}
              onClicke={() => handleClick(id, item.name)}
              key={`id-${id}`}
            />
          ))}
        </div>
      )}
      <div
        className={`card__menu ${isActive ? "active" : ""}`}
        onClick={handleClose}
      >
        {isLoadingType ? (
          <div className="loader__type">
            <Loader size={60} />
          </div>
        ) : (
          <>
            <h2>{type}</h2>
            <ul>
              {listPokemon.map((item, id) => (
                <li key={id}>
                  <span>{item.pokemon.name}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
