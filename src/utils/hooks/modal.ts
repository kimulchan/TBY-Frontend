import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignupModal } from "../../module/action/modal";
import { reducerType } from "../../module/reducer";


const useModal = ()=>{
  const state= useSelector((state:reducerType)=>state.modal);
  const dispatch = useDispatch();
  const setState={
    setSignup: useCallback(()=>dispatch(setSignupModal()),[dispatch])
  }
  return {state,setState};
}

export default useModal;