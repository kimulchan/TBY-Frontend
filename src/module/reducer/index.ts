import { combineReducers } from "redux";
import modalReducer from "./modal";


const rootReducer = combineReducers({
  modal:modalReducer
})

export type reducerType =ReturnType<typeof rootReducer>
export default rootReducer;