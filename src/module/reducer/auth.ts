import { createReducer } from "typesafe-actions"
import { authInitType } from "../../types"
import { INPUT, authActions, ON_LOGIN, ON_LOGIN_SUCCESS, ON_LOGIN_FAILURE, RESET_INPUT, ON_JOIN, ON_JOIN_SUCCESS, ON_ADMIN_LOGIN, ON_ADMIN_LOGIN_SUCCESS, ON_ADMIN_LOGIN_FAILURE } from "../action/auth"


const initState:authInitType ={
  loginInfo:{
    id:"",
    password:"",
    passwordCheck:"",
    name:""
  },
  lodding:false,
  isSuccess:false
}

const authReducer = createReducer<authInitType,authActions>(initState,{
  [INPUT]: (state,paylode)=>({...state,loginInfo:{...state.loginInfo,[paylode.payload.type]:paylode.payload.value}}),
  [RESET_INPUT]: (state) =>({...state,loginInfo:{...state.loginInfo,id:"",password:"",passwordCheck:"",name:""}}),
  
  [ON_LOGIN]:(state)=>({...state,lodding:true}),
  [ON_LOGIN_SUCCESS]:(state)=>({...state,lodding:false,isSuccess:true}),
  [ON_LOGIN_FAILURE]:(state)=>({...state,lodding:false,isSuccess:false}),
  
  [ON_JOIN]:(state)=>({...state,lodding:true}),
  [ON_JOIN_SUCCESS]:(state)=>({...state,lodding:false,isSuccess:true}),
  [ON_LOGIN_FAILURE]:(state)=>({...state,lodding:false,isSuccess:false}),

  [ON_ADMIN_LOGIN]:(state)=>({...state,lodding:true}),
  [ON_ADMIN_LOGIN_SUCCESS]:(state)=>({...state,lodding:false,isSuccess:true}),
  [ON_ADMIN_LOGIN_FAILURE]:(state)=>({...state,lodding:false,isSuccess:false})
})

export default authReducer;