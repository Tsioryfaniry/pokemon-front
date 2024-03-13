import style from "./pokemon.module.scss";
interface PokeProps {
  name?: string;
  indice?: string;
  langage?: string;
}
export default function CardPokemon(props: PokeProps) {
  const { name, indice, langage } = props;
  return (
    <>
      <div className={style.wrap}>
        <img src="../../../public/downloa.jpeg" alt="poke" />
        <div className={style.info}>
          <p>{name}</p>
          <p>{indice}</p>
          <p>{langage}</p>
        </div>
      </div>
    </>
  );
}
