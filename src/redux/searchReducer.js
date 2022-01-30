import { IS_ERROR, IS_NOT_ERROR, SEARCH_POKEMON } from "./types";

const initialState = {
   isError: false,
   data: {
      name: '',
      image: null,
      stats: null
   }
}

export const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_POKEMON:
         return {
            ...state,
            data: {
               ...state.data,
               name: action.data.name,
               image: action.data.sprites.front_default,
               stats: {
                  hp: action.data.stats[0].base_stat,
                  attack: action.data.stats[1].base_stat,
                  defense: action.data.stats[2].base_stat,
               }
            }
         }
      case IS_ERROR:
         return { ...state, isError: true }
      case IS_NOT_ERROR:
         return { ...state, isError: false }
      default:
         return state
   }
}