import { CHANGE_INPUT_VALUE } from "./types";

const initialState = ""

export const inputHandlerReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_INPUT_VALUE:
         return state = action.value

      default:
         return state
   }
}