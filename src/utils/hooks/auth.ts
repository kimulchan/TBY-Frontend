import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setInput } from "../../module/action/auth";
import { reducerType } from "../../module/reducer"
import { authInputActionType } from "../../types";


const useAuth = ()=>{
  const state=useSelector((state:reducerType)=>state.auth);
  const dispatch = useDispatch();
  const setState= {
    setInput: useCallback((paylod:authInputActionType)=>dispatch(setInput({type:paylod.type,value:paylod.value})),[dispatch]),
    onLogin:useCallback(()=>console.log(state.id,state.password,state.passwordCheck),[state])
  }
  return {state,setState};
}

export default useAuth;