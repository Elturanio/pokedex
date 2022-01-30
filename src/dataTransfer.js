import axios from "axios";

export async function dataTransfer() {
   const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118")
   const count = data.count
   const res = data.results
   const urls = res.map((i) => i.url)
   const promises = urls.map((url) => axios.get(url))
   const pokemonsRes = await Promise.all(promises)
   const pokemons = pokemonsRes.map((i) => i.data)
   return { pokemons, count }
}