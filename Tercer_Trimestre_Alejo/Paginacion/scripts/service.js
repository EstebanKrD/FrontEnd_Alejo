import { getState, setState } from "./state.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function loadUsers() {
  try {
    const limit = getState("limit");
    const page = getState("page");
    const offset = limit * page;

    const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error("Error al conectar con la API");

    const data = await res.json();
    setState("total", data.count);

    // Fetch detalle de cada pokémon en paralelo
    const details = await Promise.all(
      data.results.map((p) => fetch(p.url).then((r) => r.json())),
    );

    // Mapear al formato que usa getUserCard en ui.js
    const users = details.map((p) => ({
      image:
        p.sprites.other["official-artwork"].front_default ||
        p.sprites.front_default,
      name: p.name,
      hp: p.stats.find((s) => s.stat.name === "hp")?.base_stat ?? "-",
      attack: p.stats.find((s) => s.stat.name === "attack")?.base_stat ?? "-",
      types: p.types.map((t) => t.type.name).join(", "),
      abilities: p.abilities.map((a) => a.ability.name).join(", "),
    }));

    setState("users", users);
  } catch (err) {
    console.error("Error al cargar pokémon:", err);
  }
}
