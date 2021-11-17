import { createReducer } from "typesafe-actions"
import { authInitType } from "../../types"
import { INPUT, authActions, ON_LOGIN, ON_LOGIN_SUCCESS, ON_LOGIN_FAILURE } from "../action/auth"


const initState:authInitType ={
  loginInfo:{
    id:"",
    password:"",
    passwordCheck:""
  },
  lodding:false
}

const authReducer = createReducer<authInitType,authActions>(initState,{
  [INPUT]: (state,paylode)=>({...state,loginInfo:{...state.loginInfo,[paylode.payload.type]:paylode.payload.value}}),
  [ON_LOGIN]:(state)=>({...state,lodding:true}),
  [ON_LOGIN_SUCCESS]:(state)=>({...state,lodding:false}),
  [ON_LOGIN_FAILURE]:(state)=>({...state,lodding:false})
})

export default authReducer;