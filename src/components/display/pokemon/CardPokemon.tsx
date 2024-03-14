import Button from "../../common/button/Button";
import style from "./CardPorkemon.module.scss";
interface PokeProps {
  name?: string;
  catche?: boolean;
  release?: boolean;
  onCatch?: () => void;
  onRelease?: () => void;
}
export default function CardPokemon(props: PokeProps) {
  const { name, release, catche, onRelease, onCatch } = props;
  return (
    <>
      <div className={style.card}>
        <img src="../../../public/downloa.jpeg" alt="poke" />
        <div className={style.card__body}>
          <div className={style.card__info}>
            <p>{name}</p>
            {/* <p>{indice}</p>
          <p>{langage}</p> */}
          </div>
          <div className={style.card__btn}>
            <Button
              label="Catch"
              variant={catche ? "primary" : "disable"}
              onClick={onRelease}
            />
            <Button
              label="Release"
              variant={release ? "danger" : "disable"}
              onClick={onCatch}
            />
          </div>
        </div>
      </div>
    </>
  );
}
