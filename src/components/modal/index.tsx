import { useSelector } from "react-redux";
import { reducerType } from "../../module/reducer";
import useModal from "../../utils/hooks/modal";
import SignUpModal from "./SignUp";

const Modal =()=>{
  const state = useModal().state;
  return (<>
    {state.isSignupOpen && <SignUpModal/>}
    </>
  )
}

export default Modal;