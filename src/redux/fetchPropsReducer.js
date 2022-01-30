import { CHANGE_LIMIT, MINUS_OFFSET, PLUS_OFFSET, MAX_OFFSET, MIN_OFFSET } from "./types";

const initialState = {
   limit: 10,
   offset: 0,
   page: 1,
}

export const fetchPropsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_LIMIT:
         return { ...state, limit: action.count }
      case PLUS_OFFSET:
         return { ...state, offset: state.offset + action.num, page: state.page + 1 }
      case MINUS_OFFSET:
         return { ...state, offset: state.offset - action.num, page: state.page - 1 }
      case MAX_OFFSET:
         return { ...state, offset: 1118 - state.limit }
      case MIN_OFFSET:
         return { ...state, offset: 0 }

      default:
         return state
   }
}