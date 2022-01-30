import { combineReducers } from "redux";
import { fetchPropsReducer } from "./fetchPropsReducer";
import { fetchReducer } from "./fetchReducer";
import { inputHandlerReducer } from "./inputHandlerReducer";
import { loadingReducer } from "./loadingReducer"
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
   input: inputHandlerReducer,
   fetchProps: fetchPropsReducer,
   pokemons: fetchReducer,
   loading: loadingReducer,
   searchData: searchReducer

})