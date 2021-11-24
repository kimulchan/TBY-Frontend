import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { onAdminLogin, onJoin, onLogin, resetInput, setInput } from "../../module/action/auth";
import { reducerType } from "../../module/reducer"
import { authInputActionType } from "../../types";


const useAuth = ()=>{
  const state=useSelector((state:reducerType)=>state.auth);
  const dispatch = useDispatch();
  const setState= {
    setInput: useCallback((paylod:authInputActionType)=>dispatch(setInput({type:paylod.type,value:paylod.value})),[dispatch]),
    resetInput : useCallback(()=>dispatch(resetInput()),[dispatch]),
    onJoin: useCallback(()=>{
      if(state.loginInfo.password===state.loginInfo.passwordCheck){
        dispatch(onJoin.request({id:state.loginInfo.id,password:state.loginInfo.password,name:state.loginInfo.name}))
      }
      else{
        alert("비밀번호를 다시 확인해 주세요!")
      } 
    },[dispatch,state]),
    onLogin:useCallback(()=>dispatch(onLogin.request({id:state.loginInfo.id,password:state.loginInfo.password})),[dispatch, state.loginInfo.id, state.loginInfo.password]),
    onAdminLogin:useCallback(()=>dispatch(onAdminLogin.request({id:state.loginInfo.id,password:state.loginInfo.password})),[dispatch, state.loginInfo])
  }
  return {state,setState};
}

export default useAuth;