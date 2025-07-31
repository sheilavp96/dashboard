import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
};
const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemon <small className="text-blue-500">Favoritos</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default PokemonsPage;
