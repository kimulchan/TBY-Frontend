import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSigninModal, setSignupModal } from "../../module/action/modal";
import { reducerType } from "../../module/reducer";


const useModal = ()=>{
  const state= useSelector((state:reducerType)=>state.modal);
  const dispatch = useDispatch();
  const setState={
    setSignin: useCallback(()=>dispatch(setSigninModal()),[dispatch]),
    setSignup: useCallback(()=>dispatch(setSignupModal()),[dispatch])
  }
  return {state,setState};
}

export default useModal;