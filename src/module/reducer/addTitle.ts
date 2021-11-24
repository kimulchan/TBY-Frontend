import {  createReducer } from "typesafe-actions";
import { titleAddInitType } from "../../types";
import { addTitleActions, INPUT, ON_ADD_TITLE, ON_ADD_TITLE_FAILURE, ON_ADD_TITLE_SUCCESS } from "../action/addTitle";


const initState:titleAddInitType = {
  titleAddInfo:{subjectId:undefined,
  category:"",
  addTitleName:""
  },
  lodding:false
}

const addTitleReducer = createReducer<titleAddInitType,addTitleActions>(initState,{
  [INPUT]:(state,action)=>({...state,titleAddInfo:{...state.titleAddInfo,[action.payload.name]:action.payload.value}}),
  [ON_ADD_TITLE]:(state)=>({...state,lodding:true}),
  [ON_ADD_TITLE_SUCCESS]:(state)=>({...state,lodding:false}),
  [ON_ADD_TITLE_FAILURE]:(state)=>({...state,lodding:false}),
})

export default addTitleReducer;
