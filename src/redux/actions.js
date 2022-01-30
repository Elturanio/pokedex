import axios from "axios"

import {

   CHANGE_INPUT_VALUE,
   CHANGE_LIMIT,
   FETCH_POKEMONS,
   LOADING_ON, MAX_OFFSET,
   MINUS_OFFSET,
   MIN_OFFSET,
   PLUS_OFFSET,
   LOADING_OFF,
   SEARCH_POKEMON,
   IS_ERROR, IS_NOT_ERROR

} from "./types"



export const handleInput = (value) => {
   return { type: CHANGE_INPUT_VALUE, value: value }
}

export const changeLimit = (newLimit) => {
   return { type: CHANGE_LIMIT, count: newLimit }
}

export const plusOffset = (num) => {
   return { type: PLUS_OFFSET, num }
}

export const minusOffset = (num) => {
   return { type: MINUS_OFFSET, num }
}

export const maxOffset = () => {
   return { type: MAX_OFFSET }
}

export const minOffset = () => {
   return { type: MIN_OFFSET }
}

export const loadingOn = () => {
   return { type: LOADING_ON }
}

export const loadingOff = () => {
   return { type: LOADING_OFF }
}

export const showPokemon = (name) => {
   return async dispatch => {
      try {
         dispatch({ type: IS_NOT_ERROR })
         dispatch(loadingOn())
         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
         dispatch({ type: SEARCH_POKEMON, data: res.data })
         dispatch(loadingOff())
      }
      catch (err) {
         dispatch({ type: IS_ERROR })
      }

   }
}





export const fetchPokemons = ({ limit, offset, page }) => {

   return async dispatch => {
      dispatch(loadingOn())
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      const res = data.results
      const urls = res.map((i) => i.url)
      const promises = urls.map((url) => axios.get(url))
      const pokemonsRes = await Promise.all(promises)
      const pokemons = pokemonsRes.map((i) => i.data)
      dispatch({ type: FETCH_POKEMONS, data: pokemons })
      dispatch(loadingOff())

   }
}

