import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardPokemon from "../../components/display/pokemon/CardPokemon";
import styles from "./Pokemon.module.scss";
import IconsChevronDown from "../../components/icon/IconsChevronDown";
import PokemonService from "../../service/pokemon";
import Button from "../../components/common/button/Button";
import Loader from "../../components/general/loader/Loader";
import InputSearch from "../../components/form/inputSearch/InputSearch";

interface ListDataType {
  name: string;
  url: string;
  sprites: any;
  isCatched: boolean;
  id: number;
}
export default function Pokemon() {
  const [listData, setListData] = useState<ListDataType[]>([]);
  const [pageCount, setPageCount] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isLoadingSelect, setIsLoadingSelect] = useState<boolean>(false);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const params = useSearchParams();

  const getData = async () => {
    setIsLoading(true);
    const res = await PokemonService.getList();
    setListData(res.data.data.results);
    setIsLoading(false);
    setIsLoadingSelect(false);
  };

  const getSelectData = async (id: number | string) => {
    const res = await PokemonService.getListPerPage(id);
    setListData(res.data.results);
    setIsLoading(false);
    setIsLoadingSelect(false);
  };

  const getCatchData = async () => {
    const res = await PokemonService.catcheList();
    setListData(res.data.data);
    setIsLoading(false);
    setIsLoadingSelect(false);
  };

  const handleSelectPage = async (e: Event) => {
    const target = e.target as HTMLSelectElement;
    navigate(`/pokemon?page=${target.value}`);
    setIsLoadingSelect(true);

    try {
      getSelectData(target.value);
      setCurrentPage(target.value);
    } catch (e) {
      throw e;
    }
  };

  const handleCatch = async (id: number) => {
    setIsLoadingSelect(true);
    const res = await PokemonService.catch(id);
    getCatchData();
  };
  const handleRelease = async (id: number) => {
    setIsLoadingSelect(true);
    const res = await PokemonService.release(id);
    getCatchData();
  };

  const handleGetCatchList = async () => {
    setIsLoadingSelect(true);
    navigate("/pokemon?type=catch");

    try {
      getCatchData();
    } catch (e) {
      setIsLoading(false);
      setIsLoadingSelect(false);
      throw e;
    }
  };
  const handleGetReleaseList = async () => {
    setIsLoadingSelect(true);
    navigate("/pokemon?type=release");

    try {
      getData();
      setIsLoadingSelect(false);
    } catch (e) {
      setIsLoadingSelect(false);
      throw e;
    }
  };

  const getSearchData = async (value: string) => {
    const res = await PokemonService.search(value);
    setListData([res.data]);
    setIsLoading(false);
    setIsLoadingSelect(false);
  };
  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoadingSelect(true);
    try {
      getSearchData(inputSearchValue);
      navigate(`/pokemon?search=${inputSearchValue}`);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setIsLoadingSelect(false);

      throw e;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setIsLoadingSelect(true);

    const paramsType = params[0].get("type");
    const paramsSearch = params[0].get("search");

    const lengthPage = 1302 / 20;

    for (let i = 1; i < lengthPage; i++) {
      setPageCount((prevState: any) => [...prevState, i]);
    }

    if (paramsType === "catch") {
      getCatchData();
    } else if (paramsSearch) {
      setIsLoadingSelect(true);
      getSearchData(paramsSearch);
    } else {
      setIsLoading(true);
      setIsLoadingSelect(true);
      getSelectData(params[0].get("page")!);
      setCurrentPage(params[0].get("page")!);
      getData();
    }
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
            <InputSearch
              setInputValue={setInputSearchValue}
              onSubmit={handleSearch}
            />
            <div className={styles.pokemon__filter}>
              <Button
                label="Catch"
                variant={"primary"}
                onClick={handleGetCatchList}
              />
              <Button
                label="Release"
                variant={"danger"}
                onClick={handleGetReleaseList}
              />
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
          </div>
          {isLoadingSelect ? (
            <div className={styles.pokemon__loader_select}>
              <Loader size={60} />
            </div>
          ) : (
            <div className={styles.pokemon__list}>
              {listData.map((item, id) => (
                <CardPokemon
                  key={id}
                  name={item.name}
                  catche={item.isCatched}
                  release={!item.isCatched}
                  onCatch={() => handleCatch(item.id)}
                  onRelease={() => handleRelease(item.id)}
                  src={item.sprites.other.dream_world.front_default}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
