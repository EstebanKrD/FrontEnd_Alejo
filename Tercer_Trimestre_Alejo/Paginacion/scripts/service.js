import { getState, setState } from "./state.js";

const URL = "https://pokeapi.co/api/v2/pokemon";

export async function loadUsers() {
  const limit = getState("limit");
  const page = getState("page");

  const offset = limit * page;

  try {
    const response = await fetch(`${URL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const pokemonList = data.results;

    const users = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();

        return {
          id: details.id,
          name: details.name,
          image: details.sprites.front_default,
          types: details.types.map((t) => t.type.name).join(", "),
          abilities: details.abilities.map((a) => a.ability.name).join(", "),
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
        };
      }),
    );

    setState("users", users);
    setState("total", data.count);
  } catch (error) {
    console.error("Error API", error);
  }
}
