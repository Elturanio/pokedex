import { FETCH_POKEMONS } from "./types";

const initialState = { pokemons: null }

export const fetchReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_POKEMONS:
         return { ...state, pokemons: action.data }

      default:
         return state
   }
}