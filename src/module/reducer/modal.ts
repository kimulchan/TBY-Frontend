import { createReducer } from "typesafe-actions"
import { modalType } from "../../types";
import { modalActions, SIGNIN_SETMODAL, SIGNUP_SETMODAL } from "../action/modal"


const initState:modalType= {
  isSigninOpen:false,
  isSignupOpen:false
}


const modalReducer = createReducer<modalType,modalActions>(initState,{
  [SIGNIN_SETMODAL]:(state) =>({...state,isSigninOpen:!state.isSigninOpen}),
  [SIGNUP_SETMODAL]:(state) =>({...state,isSignupOpen:!state.isSignupOpen})
})

export default modalReducer;