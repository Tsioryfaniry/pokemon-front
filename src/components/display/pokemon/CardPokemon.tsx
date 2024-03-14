import Button from "../../common/button/Button";
import style from "./CardPorkemon.module.scss";
interface PokeProps {
  name?: string;
  catche?: boolean;
  release?: boolean;
  src: string;
  onCatch?: () => void;
  onRelease?: () => void;
}
export default function CardPokemon(props: PokeProps) {
  const { name, release, catche, src, onRelease, onCatch } = props;
  return (
    <>
      <div className={style.card}>
        <div className={style.card__img}>
          <img src={src} className={style.card__frame} />
        </div>
        <div className={style.card__body}>
          <div className={style.card__info}>
            <p>{name}</p>
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
