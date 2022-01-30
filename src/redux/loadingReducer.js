import { LOADING_ON, LOADING_OFF } from "./types";

const initialState = {
   isLoading: false
}

export const loadingReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOADING_ON:
         return { ...state, isLoading: true }
      case LOADING_OFF:
         return { ...state, isLoading: false }

      default:
         return state
   }
}