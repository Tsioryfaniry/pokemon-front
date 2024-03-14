import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardPokemon from "../../components/display/pokemon/CardPokemon";
import styles from "./Pokemon.module.scss";
import IconsChevronDown from "../../components/icon/IconsChevronDown";
import PokemonService from "../../service/pokemon";
import Button from "../../components/common/button/Button";
import Loader from "../../components/general/loader/Loader";

interface ListDataType {
  name: string;
  url: string;
  sprites: any;
}
export default function Pokemon() {
  const [listData, setListData] = useState<ListDataType[]>([]);
  const [pageCount, setPageCount] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = useSearchParams();

  const getData = async () => {
    const res = await PokemonService.getList();
    setListData(res.data.data.results);
    setIsLoading(false);
    const lengthPage = res.data.data.count / 20;
    for (let i = 1; i < lengthPage; i++) {
      setPageCount((prevState: any) => [...prevState, i]);
    }
  };

  const getSelectData = async (id: number | string) => {
    const res = await PokemonService.getListPerPage(id);
    setListData(res.data.results);
    setIsLoading(false);
  };

  const handleSelectPage = async (e: Event) => {
    const target = e.target as HTMLSelectElement;
    navigate(`/pokemon?page=${target.value}`);
    setIsLoading(true);

    try {
      getSelectData(target.value);
      setCurrentPage(target.value);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getSelectData(params[0].get("page")!);
    setCurrentPage(params[0].get("page")!);
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.pokemon__loader}>
          <Loader size={60} />
        </div>
      ) : (
        <div className={styles.pokemon__list__wrap}>
          <div className={styles.pokemon__heading}>
            <Button label="Catch" variant={"primary"} />
            <Button label="Release" variant={"danger"} />
            <p>page : </p>
            <div className={styles.select__wrap}>
              <select
                name=""
                id=""
                value={currentPage}
                className={styles.select}
                onChange={handleSelectPage}
              >
                {pageCount.map((item, id) => (
                  <option value={item} key={`id-${id}`}>
                    {item}
                  </option>
                ))}
              </select>
              <IconsChevronDown />
            </div>
          </div>
          <div className={styles.pokemon__list}>
            {listData.map((item) => (
              <CardPokemon
                key={item.name}
                name={item.name}
                catche={true}
                release={false}
                src={item.sprites.other.dream_world.front_default}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
