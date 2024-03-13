import CardPokemon from "../components/pokemon/CardPokemon";
import style from "./pokemon.module.scss";
export default function Pokemon() {
  const items = [
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
    { name: "Aspicot", indice: "Platinium", langage: "en" },
  ];

  return (
    <>
      <p></p>
      {items.map((item) => {
        <CardPokemon
          key={item.name}
          name={item.name}
          indice={item.indice}
          langage={item.langage}
        />;
      })}
    </>
  );
}
