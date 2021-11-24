import { createReducer } from "typesafe-actions";
import { titleInitType } from "../../types";
import { GET_ALL_TITLE, GET_ALL_TITLE_FAILURE, GET_ALL_TITLE_SUCCESS, GET_TITLE_WITH_CATEGORY, GET_TITLE_WITH_CATEGORY_FAILURE, GET_TITLE_WITH_CATEGORY_SUCCESS, GET_TITLE_WITH_SUBJECT, GET_TITLE_WITH_SUBJECT_FAILURE, GET_TITLE_WITH_SUBJECT_SUCCESS, titleActions } from "../action/title";


const initState:titleInitType={
  titles:[],
  lodding:false
}
const titleReducer = createReducer<titleInitType,titleActions>(initState,{
  [GET_TITLE_WITH_SUBJECT]:(state)=>({...state,lodding:true}),
  [GET_TITLE_WITH_SUBJECT_SUCCESS]:(state,action)=>({...state,titles:action.payload,lodding:false}),
  [GET_TITLE_WITH_SUBJECT_FAILURE]:(state)=>({...state,lodding:false,titles:[]}),
  
  [GET_TITLE_WITH_CATEGORY]:(state)=>({...state,lodding:true}),
  [GET_TITLE_WITH_CATEGORY_SUCCESS]:(state,action)=>({...state,titles:action.payload,lodding:false}),
  [GET_TITLE_WITH_SUBJECT_FAILURE]:(state)=>({...state,lodding:false,titles:[]}),

  [GET_ALL_TITLE]:(state)=>({...state,lodding:true}),
  [GET_ALL_TITLE_SUCCESS]:(state,action)=>({...state,titles:action.payload,lodding:false}),
  [GET_ALL_TITLE_FAILURE]:(state)=>({...state,lodding:false})
})

export default titleReducer;