import { createReducer } from "typesafe-actions"
import { loginInfo } from "../../types"
import { INPUT, authActions } from "../action/auth"


const initState:loginInfo ={
  id:"",
  password:"",
  passwordCheck:"",
}

const authReducer = createReducer<loginInfo,authActions>(initState,{
  [INPUT]: (state,paylode)=>({...state,[paylode.payload.type]:paylode.payload.value})
})

export default authReducer;