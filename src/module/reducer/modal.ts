import { createReducer } from "typesafe-actions"
import { modalType } from "../../types";
import { modalActions, SIGNUP_SETMODAL } from "../action/modal"


const initState:modalType= {
  isSignupOpen:false
}


const modalReducer = createReducer<modalType,modalActions>(initState,{
  [SIGNUP_SETMODAL]:(state) =>({...state,isSignupOpen:!state.isSignupOpen})
})

export default modalReducer;