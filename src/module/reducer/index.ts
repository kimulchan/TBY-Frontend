import { combineReducers } from "redux";
import modalReducer from "./modal";
import authReducer from "./auth";
import titleReducer from "./title";
import videoReducer from "./video";
import addTitleReducer from "./addTitle";
import  addVideoReducer  from "./addVideo";


const rootReducer = combineReducers({
  modal:modalReducer,
  auth:authReducer,
  title:titleReducer,
  video:videoReducer,
  addTitle:addTitleReducer,
  addVideo:addVideoReducer
})

export type reducerType =ReturnType<typeof rootReducer>
export default rootReducer;